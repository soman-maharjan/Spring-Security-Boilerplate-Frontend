import axios from "axios";
import { useState } from "react";
import Dropdown from "./components/dropdown";
import { serviceProviderMap } from "../enums/enums";

export default function Home() {
  const [connection, setConnection] = useState("");

  const loginWith = async () => {
    axios
      .get(`/oauth2/authorization/auth0?connection=${connection}`)
      .then(function (response) {
        if (
          response.data?.redirectUrl &&
          response.data.redirectUrl != null &&
          response.data.redirectUrl != ""
        ) {
          location.assign(response.data.redirectUrl);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setServiceProvider = (value: string) => {
    setConnection(value);
  };

  return (
    <div className="flex flex-row justify-center w-screen">
      <div className="basis-70 mr-5">
        <Dropdown setServiceProvider={setServiceProvider} />
      </div>
      <button
        className="basis-80 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded disabled:bg-blue-300 disabled:cursor-not-allowed"
        disabled={!connection}
        onClick={loginWith}
      >
        Login with{" "}
        {
          serviceProviderMap[
            connection as unknown as keyof typeof serviceProviderMap
          ]
        }
      </button>
    </div>
  );
}

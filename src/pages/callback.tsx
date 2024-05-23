import { useState } from "react";
import axios from "axios";
import useQuery from "./hooks/useQuery";

export default function Callback() {
  const query = useQuery();

  const [err, setErr] = useState("");
  const [callbackURL, setCallbackURL] = useState(window.location.href);

  let error = query.get("error");
  let errorDescription = query.get("error_description");

  const [response, setResponse] = useState("");

  const callback = async () => {
    axios
      .get(`/oauth2/callback/${location.search}`)
      .then(function () {
        setResponse("Callback has been verified!");
      })
      .catch(function () {
        setErr("Unauthorized!");
      });
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col justify-center w-2/4 mr-5">
        <label className="block text-gray-700 text-md font-bold mb-2">
          Callback from service provider
        </label>
        <label className="block text-gray-600 text-sm mb-2">
          {callbackURL}
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={callback}
          name="callback"
        >
          Send callback from service provider to backend
        </button>

        <label
          className="mt-10 block text-gray-700 text-md font-bold mb-2"
          htmlFor="error"
        >
          Error
        </label>
        {err}
        {error != null ? (
          <>
            <div>{error}</div>
            <div>
              <label
                className="mt-2  block text-gray-700 text-sm font-bold mb-2"
                htmlFor="error"
              >
                Description:
              </label>
              {errorDescription}
            </div>
          </>
        ) : null}

        <label
          className="mt-10 block text-gray-700 text-md font-bold mb-2"
          htmlFor="error"
        >
          Success
        </label>
        {response && (
          <div className="bg-green-200 p-2 rounded font-bold text-sm">
            Callback has been verified! (Cookie received and stored)
          </div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={!response}
          onClick={() => location.assign("/protected-endpoints")}
        >
          Redirect to Protected Endpoints /protected-endpoints
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";

export default function ProtectedEndpoints() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const fetchUserList = async () => {
    axios
      .get("http://localhost:8080/user")
      .then(function (response) {
        setResponse(response.data);
      })
      .catch(function () {
        setError("Unauthorized!");
      });
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <label className="text-gray-700 text-lg font-bold mb-2">
        Protected Endpoints
      </label>
      <div className="flex flex-row w-2/4 mt-4">
        <div className="grow pl-2 pt-3 font-bold">
          <label className="text-gray-700 text-sm w-full">User List</label>
        </div>
        <div className="grow">
          <button
            onClick={() => fetchUserList()}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white"
          >
            /user
          </button>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-2/4" />
      <div className="flex flex-col w-2/4">
        <label className="text-gray-700 text-lg font-bold">Response</label>
        {response && (
          <code className="text-sm break-words whitespace-pre-wrap">
            {JSON.stringify(response, null, "\t")}
          </code>
        )}
        {error && (
          <div className="bg-red-200 p-2 rounded font-bold text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

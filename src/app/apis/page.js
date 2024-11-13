"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function APIs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const url = "https://alfa-leetcode-api.onrender.com/problems";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = proxyUrl + "https://leetcode.com/graphql";
  const body = {
    query: `query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n`,
    variables: {
      titleSlug: "largest-combination-with-bitwise-and-greater-than-zero",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, JSON.stringify(body), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        // const res = JSON.parse(response.);
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>APIs</h1>
      <span>{"data"}</span>
    </div>
  );
}

export default APIs;

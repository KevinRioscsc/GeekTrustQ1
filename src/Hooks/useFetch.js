import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setRes(json);
        setLoading(false);
      } catch (error) {
        console.log("error");
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useFetch;

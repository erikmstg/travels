import { useEffect, useState } from "react";
import axios from "axios";

// creating a custom hooks untuk membuat api request & fetch data
const useFetch = (url) => {
  // create three usestate hook
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([false]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // make request api
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]); // whenever our url changes, we're gonna fire this func

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  // if need to re-fetch data again
  return { data, loading, error, reFetch };
};

export default useFetch;

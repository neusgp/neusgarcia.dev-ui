import { useEffect, useState } from "react";
import { PostContent } from "../lib/types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<PostContent[] | PostContent | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

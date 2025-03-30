import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error instanceof Error ? error : new Error("An error occurred"));
        setLoading(false);
      }
    };
    fetchData();
  },[url]);

  return { data, loading, error };
};
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type UseGetResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const UseGet = <T,>(url: string): UseGetResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default UseGet;

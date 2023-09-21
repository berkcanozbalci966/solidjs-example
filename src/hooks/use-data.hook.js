import { createSignal } from "solid-js";

export const useData = (fetcher) => {
  const [data, setData] = createSignal();

  fetcher().then((res) => {
    setData(res);
  });

  return data;
};

import { useState, useEffect, useRef } from "react";

export const useWebWorker = <TData>(workerScript: URL) => {
  const [result, setResult] = useState<TData | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(workerScript);

    workerRef.current.onmessage = (event) => {
      setResult(event.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, [workerScript]);

  const runTask = (data: TData) => {
    workerRef.current?.postMessage(data);
  };

  return { result, runTask };
};

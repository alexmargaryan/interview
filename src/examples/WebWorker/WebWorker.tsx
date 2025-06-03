/**
 * WebWorker is a JavaScript process that runs in the background, of the web page.
 * The worker thread can perform tasks without interfering with the user interface.
 * Workers run in another global context that is different from the current `window`.
 * Thus, using the `window` shortcut to get the current global scope (instead of `self`) within a Worker will return an error.
 */

import { useEffect } from "react";
import { useWebWorker } from "./useWebWorker";

//Example 1 - Basic Web Worker usage
const worker = new Worker(new URL("./worker.js", import.meta.url));

worker.onmessage = (event) => {
  console.log("Message received from worker:", event.data);
};

const WebWorker = () => {
  // without worker the main thread would be blocked
  const handleCalculation = () => {
    let sum = 0;

    for (let i = 0; i < 1000_000_000; i++) {
      // Simulating a heavy computation
      sum += i;
      if (i % 10_000_000 === 0) {
        console.log("Worker is still processing...");
      }
    }

    console.log("Calculation completed:", sum);
  };

  //Example 2 - React style web worker abstraction

  const { result, runTask } = useWebWorker<number>(
    new URL("./worker.ts", import.meta.url)
  );

  useEffect(() => {
    runTask(40);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Web worker abstraction for react usage: Fibonacci number {result}</h1>
      <button
        onClick={() => {
          worker.postMessage("Hello from the main thread!");
        }}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Send Message to Worker
      </button>
      <button
        onClick={() => {
          if (document.body.style.backgroundColor === "lightblue") {
            document.body.style.backgroundColor = "red";
          } else {
            document.body.style.backgroundColor = "lightblue";
          }
        }}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Change Background Color
      </button>
      <br />
      <button
        onClick={handleCalculation}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Start Heavy Calculation
      </button>
    </div>
  );
};

export default WebWorker;

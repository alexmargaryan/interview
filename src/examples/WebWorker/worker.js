self.onmessage = (event) => {
  const { data } = event;

  console.log("Worker received message:", data);

  let sum = 0;

  for (let i = 0; i < 1000_000_000; i++) {
    // Simulating a heavy computation
    sum += i;
    if (i % 10_000_000 === 0) {
      console.log("Worker is still processing...");
    }
  }

  self.postMessage({
    message: "Computation complete",
    sum,
  });
};

import PreventDefault from "./examples/PreventDefault";
import StopPropagation from "./examples/StopPropagation";
import WebWorker from "./examples/WebWorker";

function App() {
  return (
    <>
      <div>Examples</div>
      <PreventDefault />
      <br />
      <br />
      <StopPropagation />
      <br />
      <br />
      <WebWorker />
      <br />
      <br />
    </>
  );
}

export default App;

/**
 * WebWorker is a JavaScript process that runs in the background, of the web page.
 * The worker thread can perform tasks without interfering with the user interface.
 * Workers run in another global context that is different from the current `window`.
 * Thus, using the `window` shortcut to get the current global scope (instead of `self`) within a Worker will return an error.
 */

const WebWorker = () => {
  return <div>WebWorker</div>;
};

export default WebWorker;

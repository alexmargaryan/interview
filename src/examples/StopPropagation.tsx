/**
 * The `stopPropagation()` method of the Event interface prevents further propagation of the current event
 * in the capturing and bubbling phases.
 * It does not, however, prevent any default behaviors from occurring;
 * for instance, clicks on links are still processed.
 * It also does not prevent propagation to other event-handlers of the current element.
 * If you want to stop those, see `stopImmediatePropagation()`.
 *
 * Useful examples about bubbling and capturing phases:
 * https://www.robinwieruch.de/react-event-bubbling-capturing/
 */

const StopPropagation = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.log("Child link clicked.", e.target, e.currentTarget);
    e.preventDefault(); // Prevents the default action of navigating to the link
    console.log("Link clicked, but default action prevented.");
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
  };

  const handleParentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("Parent div clicked.", e.target, e.currentTarget);
  };

  const handleParentClickCapture = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(
      "Parent div clicked in capture phase.",
      e.target,
      e.currentTarget
    );
  };

  return (
    <div
      onClick={handleParentClick}
      onClickCapture={handleParentClickCapture}
      style={{ padding: "20px", border: "1px solid black" }}
    >
      <a
        href="https://www.youtube.com/"
        onClick={handleLinkClick}
        style={{ border: "1px solid black", padding: "5px" }}
      >
        Youtube
      </a>
    </div>
  );
};

export default StopPropagation;

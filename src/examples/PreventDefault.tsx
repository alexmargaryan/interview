/**
 * The `preventDefault()` method of the Event interface tells the user agent(e.g., browser) that
 * if the event does not get explicitly handled, its default action should not be taken as it normally would be.
 * The event continues to propagate as usual, unless one of its event listeners calls
 * `stopPropagation()` or `stopImmediatePropagation()`, either of which terminates propagation at once.
 */

const PreventDefault = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevents the default action of navigating to the link
    console.log("Link clicked, but default action prevented.");
  };

  const handleCheckboxClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevents the checkbox from toggling its checked state
    console.log("Checkbox clicked, but default action prevented.");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default behavior of the browser to redirecting the page on form submission
    console.log("Form submitted, but default action prevented.");
  };

  return (
    <div>
      <a href="https://www.youtube.com/" onClick={handleLinkClick}>
        Youtube
      </a>

      <input type="checkbox" onClick={handleCheckboxClick} />

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input type="text" name="example" placeholder="Type something..." />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PreventDefault;

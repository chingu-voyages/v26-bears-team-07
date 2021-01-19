/** Dispatch event on click outside of node */
export function clickOutside(node) {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

/**capitalize first letter in a word */
export function firstLetterToCap(letter) {
  return letter.replace(letter[0], letter[0].toUpperCase());
}

/**check if val is odd */
export function isOdd(val) {
  return val & 1;
}

/** Returns a randomized human unreadable string.
 * TODO: Currently unused. Remove if still unused on finished product
 */
export function randID() {
  // You can customize and reduce the length of the random string by changing the second arg of substring
  // or removing the duplicate call. See createClass func's invite field.
  var random =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return random;
}

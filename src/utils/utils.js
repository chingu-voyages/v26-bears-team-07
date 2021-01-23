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

/**Wait for x milliseconds */
export function sleep(ms) {
  return new Promise((fulfil) => {
    setTimeout(fulfil, ms);
  });
}

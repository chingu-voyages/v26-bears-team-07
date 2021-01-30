import dayjs from "dayjs";

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

/** */
export function formatWeekDisplay(presentWeek) {
  let weeks =
    dayjs(presentWeek[0].join(" ")).format("MMMM D") +
    " - " +
    dayjs(presentWeek[6].join(" ")).format("MMMM,D YYYY");
  return weeks;
}

/**Calculate present week with dayjs */
export function generatePresentWeek(operation, format, thisWeek) {
  if (operation === "add") {
    return thisWeek.map(day =>
      dayjs(day.join(" ")).add(7, "days").format(format).split(" ")
    );
  }
  if (operation === "subtract") {
    return thisWeek.map(day =>
      dayjs(day.join(" "))
        .subtract(7, "days")
        .format(format)
        .split(" ")
    );
  }
}

import { cubicOut } from "svelte/easing";

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function unslugify(slug) {
  const result = slug.replace(/\-/g, " ");
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

export function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

/**
 * `axis` (`x` | `y`, default `y`) — the axis of motion along which the transition occurs
 */
export function horizontalSlide(
  node,
  { delay = 0, duration = 400, easing = cubicOut, direction = "block" } = {}
) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;

  const capitalized_logical_property = `${direction[0].toUpperCase()}${direction.slice(
    1
  )}`;

  const size_value = parseFloat(style[`${direction}Size`]);
  const padding_start_value = parseFloat(
    style[`padding${capitalized_logical_property}Start`]
  );
  const padding_end_value = parseFloat(
    style[`padding${capitalized_logical_property}End`]
  );
  const margin_start_value = parseFloat(
    style[`margin${capitalized_logical_property}Start`]
  );
  const margin_end_value = parseFloat(
    style[`margin${capitalized_logical_property}End`]
  );
  const border_width_start_value = parseFloat(
    style[`border${capitalized_logical_property}StartWidth`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_logical_property}EndWidth`]
  );

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      "overflow: hidden;" +
      `opacity: ${Math.min(t * 20, 1) * opacity};` +
      `${direction}-size: ${t * size_value}px;` +
      `padding-${direction}-start: ${t * padding_start_value}px;` +
      `padding-${direction}-end: ${t * padding_end_value}px;` +
      `margin-${direction}-start: ${t * margin_start_value}px;` +
      `margin-${direction}-end: ${t * margin_end_value}px;` +
      `border-${direction}-start-width: ${t * border_width_start_value}px;` +
      `border-${direction}-start-width: ${t * border_width_end_value}px;`,
  };
}

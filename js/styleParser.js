document.addEventListener("DOMContentLoaded", function () {
  applyDynamicStyles('[class*="["]');
});

function applyDynamicStyles(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const classList = Array.from(element.classList);
    classList.forEach((className) => {
      const match = className.match(/(\w+)-\[(.*?)\]/);
      if (match) {
        const property = convertToCSSProperty(match[1]);
        const value = match[2];
        element.style[property] = value;
      }
    });
  });
}

function convertToCSSProperty(jsProperty) {
  // Converts camelCase to kebab-case, e.g., 'marginTop' to 'margin-top'
  return jsProperty.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

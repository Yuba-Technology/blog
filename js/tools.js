window.addEventListener("DOMContentLoaded", () => {
  // Add copy button to each pre>code block
  const pre = document.querySelectorAll("pre:not(.gutter>pre)");
  pre.forEach(function (block) {
    const button = document.createElement("button");
    button.className = "copy-code";
    // label attribute is for accessibility
    button.setAttribute(
      "aria-label",
      "复制代码到剪贴板 Copy code to clipboard"
    );
    // button.textContent = "Copy";
    button.onclick = function () {
      const range = document.createRange();
      range.selectNode(block);
      window.getSelection().addRange(range);
      try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        console.log("Copy command was " + msg);
        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, 1000);
      } catch (err) {
        console.log("Oops, unable to copy");
        button.classList.add("failed");
        setTimeout(() => {
          button.classList.remove("failed");
        }, 1000);
      }
      window.getSelection().removeAllRanges();
    };
    block.appendChild(button);
  });
});

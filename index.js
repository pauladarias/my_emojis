const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const input = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmoji() {
  for (let i = 0; i < myEmojis.length; i++) {
    let span = document.createElement("span");
    span.textContent = myEmojis[i];
    emojiContainer.append(span);
  }
}

renderEmoji();

pushBtn.addEventListener("click", function () {
  if (input.value) {
    myEmojis.push(input.value);
    input.value = "";
    emojiContainer.innerHTML = "";
    renderEmoji();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (input.value) {
    myEmojis.unshift(input.value);
    input.value = "";
    emojiContainer.innerHTML = "";
    renderEmoji();
  }
});

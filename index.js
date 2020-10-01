const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const input = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");

for (let i = 0; i < myEmojis.length; i++) {
  let span = document.createElement("span");
  span.textContent = myEmojis[i];
  emojiContainer.append(span);
}

pushBtn.addEventListener("click", function () {
  console.log(input.value);
});

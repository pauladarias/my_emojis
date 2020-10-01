const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emojiContainer");
console.log(emojiContainer);

for (let i = 0; i < myEmojis.length; i++) {
  let span = document.createElement("span");
  emojiContainer.append(span);
}

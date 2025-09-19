const textCount = document.getElementById("count");
const clickButton = document.getElementById("clickBtn");

// Select the new button
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Array of colors
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];

// Array of emojis
const emojis = ["🎉", "😂", "🚀", "🔥", "🍕", "🌟"];

clickButton.addEventListener("click", () => {
  count++;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  // console.log(randomColor);

  textCount.textContent = `Clicks: ${count} ${randomEmoji}`;
  textCount.style.backgroundColor = randomColor;
});

// Add an event listener to it
resetBtn.addEventListener("click", () => {
  count = 0; // Reset the count variable
  textCount.textContent = "Clicks: 0"; // Update the display
  textCount.style.backgroundColor = "white"; // Reset the background color
});

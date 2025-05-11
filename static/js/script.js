const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const gif = document.getElementById("mood-gif");
const moodButtons = document.querySelectorAll("#mood-picker button");

const streams = {
  rainy: "https://stream.zeno.fm/6f0tq9up9xhvv",
  afternoon: "https://stream.zeno.fm/9z8qum6ybxhvv",
  evening: "https://stream.zeno.fm/6brr3nd3xrhvv",
  night: "https://stream.zeno.fm/s98d1zv0qchvv",
};
let currentMood = "afternoon";
let isPlaying = true;

function setMood(mood) {
  currentMood = mood;
  gif.src = `/gifs/${mood}.gif`;
  audio.src = streams[mood];
  audio.play();
  playPauseBtn.textContent = "⏸";
  isPlaying = true;
}

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMood(button.dataset.mood);
  });
});

// Initialize
setMood(currentMood);

const dynamicText = document.getElementById("dynamic-text");
const texts = ["Full Stack Developer", "Software Engineer"];
let currentTextIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;

function typeAndEraseText(element, text, callback) {
  let i = 0;
  let isErasing = false;

  function type() {
    if (isErasing) {
      element.textContent = text.slice(0, i);
      i--;
      if (i < 0) {
        isErasing = false;
        setTimeout(callback, 500);
      } else {
        setTimeout(type, erasingSpeed);
      }
    } else {
      element.textContent = text.slice(0, i + 1);
      i++;
      if (i < text.length) {
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          isErasing = true;
          type();
        }, 1000);
      }
    }
  }
  type();
}

function cycleText() {
  const newText = texts[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  typeAndEraseText(dynamicText, newText, () => {
    setTimeout(cycleText, 500);
  });
}

cycleText();

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // How far the user has scrolled
  const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
  const scrollPercentage = (scrollTop / docHeight) * 100; // Calculate the scroll percentage

  progressBar.style.height = `${scrollPercentage}vh`; // Set the progress bar height
});

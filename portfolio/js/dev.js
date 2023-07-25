const dynamicText1 = document.getElementById("dynamic-text1");
const phrases = ["Martin Baigorria"];
let currentIndex = 0;
let deleteMode = false;

const animateText = () => {
  if (!deleteMode) {
    let currentPhrase = phrases[currentIndex];
    let currentPhraseArray = currentPhrase.split("");
    let i = 0;

    const typeNextLetter = () => {
      if (i < currentPhraseArray.length) {
        dynamicText1.textContent += currentPhraseArray[i];
        i++;
        setTimeout(typeNextLetter, 100);
      } else {
        deleteMode = true;
        setTimeout(animateText, 2000);
      }
    };

    typeNextLetter();
  } else {
    let currentPhrase = phrases[currentIndex];
    let currentPhraseArray = currentPhrase.split("");
    let i = currentPhraseArray.length - 1;

    const deleteNextLetter = () => {
      if (i >= 0) {
        dynamicText1.textContent = dynamicText1.textContent.slice(0, -1);
        i--;
        setTimeout(deleteNextLetter, 100);
      } else {
        deleteMode = false;
        currentIndex = (currentIndex + 1) % phrases.length;
        setTimeout(animateText, 500);
      }
    };

    deleteNextLetter();
  }
};

animateText();

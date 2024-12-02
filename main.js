const containerEl = document.querySelector(".container");

const careers = [
  "Frontend Developer",
  "Designer",
  "Mentor",
  "Instagrammer",
  "Youtuber",
];

let careersIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careersIndex].slice(0,1) === "I" ? "an" : "a"} <span>${careers[careersIndex].slice(0,characterIndex)}</span></h1>
  `;

  if(characterIndex === careers[careersIndex].length){
    careersIndex++;
    characterIndex = 0;
    if(careers.length === careersIndex){
        careersIndex=0;
    }
  }
  
  setTimeout(updateText , 300);
}

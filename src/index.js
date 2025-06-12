function displayPoem(response) {
  new Typewriter("#poem", {
    //step 5; add code in html
    strings: response.data.answer, //add these variables
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  //step 3 display the generated poem
  event.preventDefault(); // step 4

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "61dfa07e8o8462teba3fadad30e70d77"; //step 6; build api url ad api key
  //step 7; make a call to the api url
  let context =
    "You are an AI assistant that specializes in music. You are a dj that specializes in matching peoples moods with music. Create a list of 5 songs for the users mood with a <br /> before each recommendation. Make sure to follow the user instructions. Do not include the url with your answer. ";
  let prompt = `User instructions: Generate a music playlist about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem"); //step 8
  poemElement.classList.remove("hidden"); // step 9
  poemElement.innerHTML = `<div class="generating">⏳ Generating a playlist about ${instructionsInput.value}</div>`; //step 10; added blinking animation

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form"); //step 1
poemFormElement.addEventListener("submit", generatePoem); //step 2

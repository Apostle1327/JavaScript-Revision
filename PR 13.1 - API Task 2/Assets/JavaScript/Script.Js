const button = document.querySelector("#image-fetch");
const imgContainer = document.querySelector("#img-container");
const breedSelector = document.querySelector(`#breed-selector`);

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    breeds.forEach((breed) => {
      const options = document.createElement(`option`);
      options.value = breed;
      options.textContent = breed;
      breedSelector.appendChild(options);
    });
  })
  .catch((error) => {
    console.error(`Error fetching the data!`, error);
  });

breedSelector.addEventListener(`change`, (event) => {
  const selectBreed = event.target.value;

  if (selectBreed !== `Select A breed`) {
    button.addEventListener(`click`, () => {
      fetch(`https://dog.ceo/api/breed/${selectBreed}/images/random`)
        .then((response) => response.json())
        .then((data) => {
          displayImage(data.message);
        })
        .catch((error) => {
          console.error(`Error Fetching the Data!`, error);
        });
    });
  }
});

function displayImage(imageUrl) {
  img = document.querySelector(`#dog-image`);
  img.src = imageUrl;
  imgContainer.innerHTML = ``;
  imgContainer.appendChild(img);
}

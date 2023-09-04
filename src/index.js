//consts
const dogPics = document.getElementById("dog-image-container")
const picList = document.createElement("div")
const listLocation = document.querySelector("#dog-breeds")



//functions
function render(img) {
    img.forEach(e)
        dogPics.innerHTML = e
    }


//image fetch (challenge one)
document.addEventListener("DOMContentLoaded", () => {
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data)=>{
        data.message.forEach(image => {
            const img = document.createElement("img")
            img.setAttribute('src', image)
            img.style.width = '300px'
            img.style.height = '200px'

            document.querySelector("#dog-image-container").appendChild(img)
        })})
    })


    //challenge two
    document.addEventListener('DOMContentLoaded', () => {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((resp) => resp.json())
        .then((data) => {
          const breeds = Object.keys(data.message);
          let breedList = breeds.forEach((breed) => {
            let breedElement = document.createElement("li");
            breedElement.textContent = breed;
            document.querySelector("#dog-breeds").appendChild(breedElement);
    
            breedElement.addEventListener("click", () => {
              breedElement.style.color = 'red';
              console.log(breedElement.textContent);
            });
          });
    
          const drop = document.querySelector("#breed-dropdown");
          drop.addEventListener("change", () => {
            const dogBreeds = document.querySelector("#dog-breeds");
            while (dogBreeds.firstChild) {
              dogBreeds.removeChild(dogBreeds.firstChild);
            }
    
            const newList = breeds.filter((breed) => breed[0] === drop.value);
            newList.forEach((breed) => {
              let breedElement = document.createElement("li");
              breedElement.textContent = breed;
              dogBreeds.appendChild(breedElement);
            });
          });
        });
    });
    



    




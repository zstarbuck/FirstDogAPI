const main = document.querySelector("main");

fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(data => {
        const img = data.message
            .map(`<img src="${data.message}" alt="Random dog image"`)
            .join("");
        main.insertAdjacentElement("beforeend", img);
    }) //

const  jsonObj = {
    name:"Luna",
    occupation: "developer",
    age: 35,
    isAwesome: true,
};

const jsonString = JSON.stringify(jsonObj);
console.log(jsonString)
const main = document.querySelector(".main");

fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(data => {
        const img = data.message
        .map(msg => `<img src="${msg}" alt="Random dog image.">`)
            .join("");
            console.log(typeof img)
        main.insertAdjacentHTML("beforeend", img);
    }) //

const  jsonObj = {
    name:"Luna",
    occupation: "developer",
    age: 35,
    isAwesome: true,
};

const jsonString = JSON.stringify(jsonObj);
console.log(jsonString)
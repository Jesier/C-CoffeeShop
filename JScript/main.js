const urlB = "https://localhost:5001/api/beanvariety/";
const urlC = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties;
        })
});

const coffeeButton = document.querySelector("#run-buttonC");
button.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(urlB).then(resp => resp.json());
}
function getAllCoffees() {
    return fetch(urlC).then(resp => resp.json());
}
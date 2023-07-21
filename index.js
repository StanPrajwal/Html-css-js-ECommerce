// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// const cancelSideBar = document.getElementById("cancel") 
// cancelSideBar.addEventListener('click',removeSideBar)
const carArray = []

let menuVisibility = "hidden"
let marginLeft = "10rem"
const sideBar = document.querySelector(".sideBar")
const menuIcon = document.getElementById("menuIcon")
const boxContainer = document.getElementById("boxContainer")

menuIcon.style.visibility = menuVisibility
boxContainer.style.marginLeft = marginLeft
console.log(location.hash)
// Fetching Data using Fake API

const Pages = {
    home: "",
    about: "No Record Found",
    myCart: "No Record Found"
}

const FetchApi = async () => {
    let data = await fetch("https://fakestoreapi.com/products/")
    data = await data.json()
    console.log(data)
    Pages.home = `<div class="boxs">
    ${data.map(product => {
        return `<div class="box">
            <div class="image-box">
                <img src=${product.image} alt=${product.image} mix-blend-mode="multiply" height="100%" width="100%" loading="lazy"/>
            </div>
            <p >
                <span class="price">
                    <span class="material-symbols-outlined rupeesIcon">currency_rupee</span>${product.price}
                </span>
                <span class="cartIcon">
                    <span class="material-symbols-outlined">shopping_cart_checkout</span>
                </span>
            </p>
        </div>`
    })}
    </div>`
    boxContainer.innerHTML = Pages.home

}
FetchApi()
window.addEventListener("hashchange", singlePageHandler)
function singlePageHandler() {
    // console.log(location.hash)
    boxContainer.innerHTML = `<div class="boxs">${Pages[location.hash.substring(1)]}</div>`
}

function removeSideBar() {
    menuVisibility = menuIcon.style.visibility
    marginLeft = boxContainer.style.marginLeft
    // console.log(menuIcon.style.visibility)
    sideBar.classList.toggle('removeSidebar')
    menuIcon.style.visibility = menuVisibility === "hidden" ? "visible" : "hidden"
    boxContainer.style.marginLeft = marginLeft === "10rem" ? "0px" : "10rem"

}

// const obj = {
//     name:"prajwal"
// }
// Object.freeze(obj)

// const objCopy = obj
// objCopy.email = "pr@gmail.com"
// console.log(obj)
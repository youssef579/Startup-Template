let sideBar = document.querySelector('.sidebar')
let logo = document.querySelector(".logo")

sideBar.style.display = "none";

document.querySelector(".list").addEventListener('click', function () {
    if (sideBar.style.display == "none") {
        sideBar.style.display = "block";
    } else {
        sideBar.style.display = "block";
    }
})

document.querySelector('.sidebar a:first-child').addEventListener('click', function () {
    sideBar.style.display = "none";
})
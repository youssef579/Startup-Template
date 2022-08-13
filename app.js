document.getElementsByClassName("sidebar")[0].style.display = "none";

document.getElementsByClassName('list')[0].addEventListener('click', function () {
    document.getElementsByClassName("sidebar")[0].style.display == "none" ?
    document.getElementsByClassName("sidebar")[0].style.display = "block" :
    document.getElementsByClassName("sidebar")[0].style.display = "none";
})

document.querySelector('.sidebar a:first-child').addEventListener('click', function () {
    document.getElementsByClassName("sidebar")[0].style.display = "none";
})
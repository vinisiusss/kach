// BURGER
document.querySelector(".burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__nav").classList.toggle("open");
})


// ANCHORS
const anchors = document.querySelectorAll(".exercices__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function (event) { //event ~ e
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        var widthWind = document.querySelector("body").offsetWidth;
        var bottom = document.getElementById("bottom"); //Ищу кнопку "НИЗ" по id bottom

        if (bottom.classList.contains("active")) { //Проверяю на наличие класса active кнопки "НИЗ", чтобы правильно работал скрлл на всех итемах
            if (widthWind <= 339){
            window.scroll({
                top: elem.offsetTop+260,
                behavior: 'smooth'
            });
            }
            else if (widthWind <= 386){
                window.scroll({
                    top: elem.offsetTop+240,
                    behavior: 'smooth'
                });
            }
            else if (widthWind <= 403) {
                window.scroll({
                    top: elem.offsetTop+220,
                    behavior: 'smooth'
                });
            }
            else if (widthWind <= 684){
                window.scroll({
                    top: elem.offsetTop+220,
                    behavior: 'smooth'
                });
            }
            else {
                window.scroll({
                    top: elem.offsetTop+200,
                    behavior: 'smooth'
                });
            }
        }
        else {
            if (widthWind <= 339){
            window.scroll({
                top: elem.offsetTop+220,
                behavior: 'smooth'
            });
            }
            else if (widthWind <= 386){
                window.scroll({
                    top: elem.offsetTop+195,
                    behavior: 'smooth'
                });
            }
            else if (widthWind <= 403) {
                window.scroll({
                    top: elem.offsetTop+180,
                    behavior: 'smooth'
                });
            }
            else if (widthWind <= 684){
                window.scroll({
                    top: elem.offsetTop+220,
                    behavior: 'smooth'
                });
            }
            else {
                window.scroll({
                    top: elem.offsetTop+200,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// TABS
const tabsBtns = document.querySelectorAll(".btn");
const tabsItems = document.querySelectorAll(".exercices__item");

// Скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("active"));
}

// Показывает переданный номер таба и делает кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");

}

hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
        if (entery.isIntersecting) {
            entery.target.classList.add('show');
            console.log(entery.target);
        } else {
            entery.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const btn = document.querySelector('.btn');

hiddenElements.forEach((el) => observer.observe(el));

let isDarkMode = true;
btn.addEventListener('click', () => {
    if(!isDarkMode){
        document.body.style.backgroundColor = "#131316";
        document.body.style.color = "#fff";
    }else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#131316";
    }
    isDarkMode = !isDarkMode;
})
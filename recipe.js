const tabs = document.querySelectorAll('.tabs');
const nextBtn = document.querySelector('.next');
let current = 0;

function show(currentTab){
    tabs[currentTab].style.display = 'block';
}

nextBtn.addEventListener('click', (e) => {
    tabs[current].style.display = 'none';
    current +=1;
    show(current);
    e.preventDefault();
});

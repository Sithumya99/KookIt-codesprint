const infoBtn = document.querySelector('.info-btn');
const infoSection = document.querySelector('.info');

infoBtn.addEventListener('click', () => {
    infoSection.style.transition = '1s ease-in-out';
    if (infoSection.style.transform === 'translateX(-100%)'){
        infoSection.style.transform = 'translateX(0)';
    } else {
        infoSection.style.transform = 'translateX(-100%)';
    }
});
const profile = document.querySelector('.circle');
const profileSection = document.querySelector('.profile');

profile.addEventListener('click', () => {
    profileSection.style.transition = '1s ease-in-out';
    if (profileSection.style.transform === 'translateX(-100%)'){
        profileSection.style.transform = 'translateX(0)';
    } else {
        profileSection.style.transform = 'translateX(-100%)';
    }
});
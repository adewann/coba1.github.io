import '../style/main.css';
import '../style/responsive.css';


const toggleBtn = document.getElementById('toggle-btn');
const navMenu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('aktif');
});
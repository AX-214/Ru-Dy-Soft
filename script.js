document.addEventListener('DOMContentLoaded', () => {
    const enterScreen = document.getElementById('enter-screen');
    const enterButton = document.getElementById('enter-button');
    const bgMusic = document.getElementById('bg-music');

    // Показываем экран-заставку
    if (enterScreen) {
        enterButton.addEventListener('click', () => {
            // Пытаемся запустить музыку
            bgMusic.play().catch(error => {
                console.log("Autoplay был заблокирован браузером. Музыка начнется после взаимодействия.");
            });
            // Скрываем заставку
            enterScreen.style.display = 'none';
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем переход по ссылке

            const targetPageId = link.getAttribute('data-page');

            // Убираем класс active у всех ссылок и страниц
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            // Добавляем класс active нужной ссылке и странице
            link.classList.add('active');
            document.getElementById(targetPageId).classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const enterScreen = document.getElementById('enter-screen');
    const enterButton = document.getElementById('enter-button');
    const bgMusic = document.getElementById('bg-music');

    // ���������� �����-��������
    if (enterScreen) {
        enterButton.addEventListener('click', () => {
            // �������� ��������� ������
            bgMusic.play().catch(error => {
                console.log("Autoplay ��� ������������ ���������. ������ �������� ����� ��������������.");
            });
            // �������� ��������
            enterScreen.style.display = 'none';
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // �������� ������� �� ������

            const targetPageId = link.getAttribute('data-page');

            // ������� ����� active � ���� ������ � �������
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            // ��������� ����� active ������ ������ � ��������
            link.classList.add('active');
            document.getElementById(targetPageId).classList.add('active');
        });
    });
});
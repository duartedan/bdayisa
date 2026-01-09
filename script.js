const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }

    if (e.target.classList.contains('prev')) {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }
});
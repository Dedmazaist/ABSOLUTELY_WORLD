// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    
    // Подгружаем первую страницу
    loadPage('lore');
    
    // Навешиваем обработчики на кнопки меню
    const buttons = document.querySelectorAll('[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            loadPage(page);
        });
    });
});

// Функция загрузки страницы
function loadPage(pageName) {
    const contentDiv = document.getElementById('content');
    
    // Показываем индикатор загрузки
    contentDiv.innerHTML = '<p>Загрузка...</p>';
    
    // Загружаем HTML файл из папки pages
    fetch(`pages/${pageName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Страница не найдена');
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Ошибка загрузки: ${error.message}</p>`;
        });
}
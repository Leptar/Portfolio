// Load language from localStorage or default to English
let currentLang = localStorage.getItem('lang') || 'en';

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            // Keep inner HTML tags if necessary (like <em> or <br>)
            // But for safety, textContent is used for simple elements
            // We use innerHTML to support <em> in the education section
            el.innerHTML = translations[currentLang][key];
        }
    });

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', currentLang);
    updateTexts();
    // Dispatch a custom event to re-render dynamic content (like projects array)
    window.dispatchEvent(new Event('languageChanged'));
}

document.addEventListener('DOMContentLoaded', () => {
    updateTexts();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});

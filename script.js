document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for saved user preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'false') {
        body.classList.remove('dark-mode');
    }

    // Add glitch effect on hover
    const name = document.querySelector('.glitch');
    name.addEventListener('mouseover', () => {
        name.style.animation = 'none';
        void name.offsetWidth; // Trigger reflow
        name.style.animation = 'glitch 500ms infinite';
    });

    name.addEventListener('mouseout', () => {
        name.style.animation = 'none';
    });
}); 
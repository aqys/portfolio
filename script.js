document.querySelectorAll('.project-border').forEach(border => {
    border.addEventListener('mousemove', (e) => {
        const effect = border.querySelector('.project-effect');
        const rect = border.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        effect.style.setProperty('--mouse-x', `${x}px`);
        effect.style.setProperty('--mouse-y', `${y}px`);
        effect.style.opacity = '1';
    });

    border.addEventListener('mouseleave', () => {
        const effect = border.querySelector('.project-effect');
        effect.style.opacity = '0';
    });
});
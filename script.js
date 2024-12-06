// Toggle the side navigation menu
document.getElementById('menuButton').addEventListener('click', () => {
    const sideNav = document.getElementById('sideNav');
    if (sideNav.classList.contains('open')) {
        sideNav.classList.remove('open');
    } else {
        sideNav.classList.add('open');
    }
});

// Smooth scroll to the code section
document.querySelector('a[href="#codeSection"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('codeSection').scrollIntoView({ behavior: 'smooth' });
});

// Copy code to clipboard
document.getElementById('copyButton').addEventListener('click', () => {
    const codeBox = document.getElementById('codeBox');
    navigator.clipboard.writeText(codeBox.value).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text:', err);
    });
});

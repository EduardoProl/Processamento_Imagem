// Toggle the navigation menu
document.getElementById('menuButton').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('hidden');
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

function voteAction(button) {
    let allButtons = document.querySelectorAll('.poll-btn');
    allButtons.forEach(btn => {
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
    });
    
    button.style.opacity = '1';
    button.style.background = 'var(--orange)';
    button.style.color = 'white';
    button.style.borderColor = 'var(--orange)';
    button.innerHTML = 'Taking you to Univer... ⏳';

    setTimeout(() => {
        window.location.href = "https://univer.me/uservote";
    }, 800);
}
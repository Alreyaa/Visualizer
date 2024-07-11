document.querySelectorAll('.robot-button').forEach(button => {
    button.addEventListener('click', function() {
        const selectedRobot = this.getAttribute('data-robot');
        localStorage.setItem('selectedRobot', selectedRobot);
        window.location.href = 'http://localhost:5000/';
    });
});

document.getElementById('skip-button').addEventListener('click', function() {
    window.location.href = 'http://localhost:5000/';
});

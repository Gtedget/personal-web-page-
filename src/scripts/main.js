document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const currentDate = new Date();
    const hours = currentDate.getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;

    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to start the counter
function startCounter() {
    const counters = document.querySelectorAll('.counter:not(.started)');
    counters.forEach((counter, index) => {
        if (isInViewport(counter)) {
            counter.classList.add('started');
            let limit = parseInt(counter.getAttribute('data-limit'));
            let speed = (index === counters.length - 1) ? 1 : 60;
            let count = 0;
            const interval = setInterval(() => {
                counter.querySelector('.counterNumber').textContent = count;
                if (count >= limit) clearInterval(interval);
                count += 5;
            }, speed);
            counter.style.opacity = 1;
        }
    });
}

// Start the counter when the page loads or when scrolling down
window.addEventListener('DOMContentLoaded', startCounter);
window.addEventListener('scroll', startCounter);

const parallaxBackground = document.querySelector('.parallax-background img');
const description = document.querySelector('.description');
const productContainer = document.querySelector('.product-container');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    parallaxBackground.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;

    // Update description position
    const rect = productContainer.getBoundingClientRect();
    description.style.top = `${e.pageY - rect.top + 10}px`;
    description.style.left = `${e.pageX - rect.left + 10}px`;
});

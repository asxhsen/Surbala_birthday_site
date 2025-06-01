
// Select all balloon elements
const balloons = document.querySelectorAll('.balloon');

// Animate each balloon
balloons.forEach((balloon, index) => {
  // Random float animation
  const float = () => {
    const x = Math.random() * 100 - 50; // left-right
    const y = Math.random() * -300 - 100; // upward
    const duration = Math.random() * 3 + 2; // 2 to 5 seconds

    balloon.animate([
      { transform: 'translate(0, 0)' },
      { transform: `translate(${x}px, ${y}px)` }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  };

  float();
});

function animateValue(element, start, end, duration) {
    let current = start;
    const increment = Math.floor((end - start) / duration);
    const obj = document.querySelector(element);
    const timer = setInterval(() => {
      current += increment;
      obj.innerHTML = current;
      if (current >= end) {
        clearInterval(timer);
        obj.innerHTML = end;
      }
    }, 10);
  }
  
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    animateValue(counter, 200, target, 4000);
  });
  
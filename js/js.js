document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    let animated = false;
  
    const updateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '');
  
      const increment = target / 200;
  
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}+`;
        setTimeout(() => updateCount(counter), 50);
      } else {
        counter.innerText = `${target}+`;
      }
    };
  
    const checkCounters = () => {
      const section = document.querySelector('.counter-section');
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight && !animated) {
        counters.forEach(counter => updateCount(counter));
        animated = true;
      }
    };
  
    window.addEventListener('scroll', checkCounters);
  });
  
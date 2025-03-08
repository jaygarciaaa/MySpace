function smoothScroll(target, offset) {
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: targetPosition, behavior: "smooth" });

  let checkScroll = setInterval(() => {
      if (Math.abs(window.scrollY - targetPosition) < 10) {
          clearInterval(checkScroll);
      }
  }, 100);
}

function triggerSectionAnimations(elements, hasAnimated, initialDelay = 300) {
  if (hasAnimated.value) return;

  setTimeout(() => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
      }, index * 200);
    });

    hasAnimated.value = true;
  }, initialDelay);
}

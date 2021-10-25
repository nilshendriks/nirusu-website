function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this; const
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const skillAreas = document.querySelectorAll('.nh-section--skills');


function checkSkillArea(e) {
  skillAreas.forEach(skillArea => {
     // half way through the block
     const animateAt = (window.scrollY + window.innerHeight) - skillArea.offsetHeight / 2;
    //console.log(animateAt);
    // bottom of the block
    const blockBottom = skillArea.offsetTop + skillArea.offsetHeight;
    //console.log(blockBottom);
    const isHalfShown = animateAt > skillArea.offsetTop;
    const isNotScrolledPast = window.scrollY < blockBottom;
    if (isHalfShown && isNotScrolledPast) {
      skillArea.classList.add('active');
    }
    // else {
    //   skillArea.classList.remove('active');
    // }
  });
}

window.addEventListener('scroll', debounce(checkSkillArea));

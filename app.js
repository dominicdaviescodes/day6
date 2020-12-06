const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // the trigger point = screen height / 5 * 4
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // when do we add the show class to a box?
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

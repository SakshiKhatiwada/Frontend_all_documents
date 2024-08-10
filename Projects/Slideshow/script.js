const slides = document.querySelectorAll(".slider");
const aTag = document.querySelectorAll(".aTag");

let counter =0;
//all elements are arranged horizontally now
slides.forEach(
    (element,index) => {
      element.style.left = `${index*100}%`;
    }
);

const next = () =>
  {
    if (counter < slides.length-1)
    counter++;
  else
  counter=0;
    slideImage();
  };
  const prev = () =>
  {
    if (counter != 0)
    counter--;
  else
  counter=slides.length-1;
    slideImage();

  };

const slideImage = () =>
  {
    slides.forEach(slide =>
      {
        slide.style.transform = `translateX(-${counter*100}%)`;
      }
    )
  };

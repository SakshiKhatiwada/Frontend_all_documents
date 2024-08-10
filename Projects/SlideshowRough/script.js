const slide= document.querySelectorAll(".slider");
var counter = 0;
// console.log(slide);
slide.forEach((element,index) => {
    element.style.left = `${index * 100}%`;  
    // element.style.bottom = `${index * 100}%`;  
});

const goNext = () =>
    {
        // if (counter < slide.length-1)
        counter++;
        slideImage();
    };
    const goPrev = () =>
    {
        // if (counter != 0)
        counter--;
        
        slideImage();
    };


const slideImage = () =>
    {
        slide.forEach(element => 
            {
                element.style.transform =  `translateX(-${counter*100}%)`;
                // element.style.transform =  `translateX(-${counter*100}%)`;
            }
        )
    }


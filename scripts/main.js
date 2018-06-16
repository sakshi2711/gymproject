let sliderImages=document.querySelectorAll('.slide'),
    arrowLeft=document.getElementById('left-arrow'),
    arrowRight=document.getElementById('right-arrow'),
    current=0;
var time=5000;

    //clear all images
    function reset(){
        for(let i=0;i<sliderImages.length;i++)
        {
            sliderImages[i].style.display='none';
        }
    }

    function startSlide(){
        reset();
        sliderImages[0].style.display='block';
    }

    function slideLeft(){
        reset();
        sliderImages[current-1].style.display='block';
        current--;
    }
    function slideRight(){
        reset();
        sliderImages[current+1].style.display='block';
        current++;
    }
    arrowLeft.addEventListener('click',function(){
        if(current==0)
        {
            current=sliderImages.length;
        }
        slideLeft();
    });
    arrowRight.addEventListener('click',rightCheck);

    function rightCheck(){
        if(current==sliderImages.length-1)
        {
            current=-1;
        }
        slideRight();
    }
    startSlide();
    setInterval(rightCheck,time);

    //submit
    document.getElementById('submit').addEventListener('click',preventSubmit);
    function preventSubmit(e)
    {
        e.preventDefault();
        document.getElementById('inputFName').value='';
        document.getElementById('inputLName').value='';
        document.getElementById('inputEmail').value='';
        document.getElementById('inputContact').value='';
        document.getElementById('check1').checked= false;
        document.getElementById('check2').checked= false;
    }


    // bmi
    document.getElementById('output').style.visibility='hidden';
    document.getElementById('bmi-btn').addEventListener('click',bmiCalc);
    document.getElementById('bmi-resetbtn').addEventListener('click',bmiReset);
    function bmiCalc(e)

    {
        e.preventDefault();
       let height=document.getElementById('height').value;
       let weight=document.getElementById('weight').value;
       height=height/100;
       
       document.getElementById('output').style.visibility='visible';
       document.getElementById('bmiOutput').innerHTML= weight/(height*height);
    }

    function bmiReset(e)
    {
        e.preventDefault();
        document.getElementById('output').style.visibility='hidden';
        document.getElementById('height').value='';
        document.getElementById('weight').value='';


    }

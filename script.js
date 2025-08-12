const image=document.querySelectorAll('.slider .slide active');
const prev=document.querySelector('.control-prev');
const next=document.querySelector('.control-next');

let n=0;

function slidericon(){
    for (let i = 0; i < image.length; i++) {
        image[i].style.display='none';
    }
    image[n].style.display='block';
}
slidericon();

prev.addEventListener('click', (f)=>{
    if(n >0){
        n--;
    }else{
        n=image.length-1;
    }
    slidericon();
})


next.addEventListener('click', (f)=>{
    if(n < image.length -1){
        n++;
    }else{
        n=0;
    }
    slidericon();
})


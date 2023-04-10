let div = document.querySelectorAll('.menu')

let observer = new IntersectionObserver((e) => {
  div.forEach(function(){
    e.forEach((item) => {
      if(item.isIntersecting){
        item.target.style.opacity = 1;
        //item.target.style.transform = 'rotate(0deg)'; //회전 에니메이션
      }else{
        item.target.style.opacity = 0;
//item.target.style.transform = 'rotate(-300deg)'; //회전 에니메이션
      }
    });
  });
});

for(let i=0; i<div.length; i++){
  observer.observe(div[i]);
}
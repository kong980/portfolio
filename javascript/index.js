const list = document.querySelectorAll('.list-item');

list.forEach(function(item){
  item.addEventListener("mouseenter",function(){
    list.forEach(function(e){
      e.classList.remove("clickMouse");
    });
    item.classList.add("clickMouse");
  });
})

list.forEach(function(item){
  item.addEventListener("mouseleave",function(){
    list.forEach(function(e){
      e.classList.remove("clickMouse");
    });
  });
})
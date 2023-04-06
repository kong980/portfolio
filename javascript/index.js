const list = document.querySelectorAll('.lists');

  list.forEach(function(item){
    item.addEventListener("click",function(){
      list.forEach(function(e){
        e.classList.remove("clicked");
      });
      item.classList.add("clicked");
    });
  })
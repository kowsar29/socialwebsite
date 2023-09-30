var con = document.querySelector(".ami")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform = " translate(-50%,-50%) scale(1)"
    love.style.opacity = 30
    
    setTimeout(function(){
        love.style.opacity = 0;
    },1000);
      
    setTimeout(function(){
        love.style.transform ='translate(-50%,-50%) scale(1)'
    },3000);
});

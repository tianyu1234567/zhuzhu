$(function(){
     var a=function(e){e.preventDefault();}
    $(".meau").click(function(){
  
      if($(".nav").css("left")!=="0px"){
            $('.nav').animate({'left':'0'},200);
            $(".meau").removeClass("db").addClass("dn");
           var box = document.querySelector("body");
          box.addEventListener("touchmove",a,function(e){
              e = window.event || e;
             e.preventDefault();
          })
        }
         
    });
    $(".nav_gb").click(function(){
          $('.nav').animate({'left':'-5.1rem'},200);
            $(".meau").removeClass("dn").addClass("db");
         var box = document.querySelector("body");
          box.removeEventListener("touchmove",a,function(e){
              e = window.event || e;
             e.preventDefault();
          })
    });
    
    /*touch事件*/
   /* var box = document.querySelector("body");
		   var startPos,endPos,startTime,endTime;
    
           box.addEventListener("touchstart",function(e){
           e = window.event || e;
               
			startPos = {
				x : e.touches[0].clientX,
				y : e.touches[0].clientY
			}
			startTime = new Date().getTime();
             
            
		})                

		box.addEventListener("touchmove",function(e){
             e = window.event || e;
             e.preventDefault();
			 endPos = {
				x : e.touches[0].clientX,
				y : e.touches[0].clientY
			}
          
		})

		box.addEventListener("touchend",function(e){
             e = window.event || e;
            
			endTime = new Date().getTime();
			judgeDirection()
             
		})
      
		

		function  judgeDirection(){
			var xSpan = endPos.x - startPos.x;
			var ySpan = endPos.y - startPos.y;
			var direction;
            var distance = Math.sqrt(xSpan*xSpan+ySpan*ySpan);
			if(xSpan<0&&Math.abs(ySpan/xSpan)<1&&endTime- startTime<300&&distance>100){
				
             
             $('.nav').animate({'left':'-5.1rem'},200);
             $(".meau").addClass("db").removeClass("dn")
               
                
			}
			if(xSpan>0&&Math.abs(ySpan/xSpan)<1&&endTime- startTime<300&&distance>100){
				
               
            $('.nav').animate({'left':'0'},200);
            $(".meau").addClass("dn").removeClass("db")
           
			}
		
		};
    
    */
 /*回到顶部*/
$(".index_hddb").click(function(){
    $("body").animate({"scrollTop":"0"},200)
});
/*meau菜单二级*/

$(".index_meauul").find("li").find("h2").click(function(){
   
    if($(this).siblings().hasClass("db")){
        $(this).siblings().removeClass("db").addClass("dn")
    }else{
        
    
     $(this).siblings().removeClass("dn").addClass("db").parent().siblings("li").find("div").removeClass("db").addClass("dn");
    }
    
})

})


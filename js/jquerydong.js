$(document).ready(function(){
	$(".bannerleft1").mouseover(function(){
		var index=$(this).index()
		$(".xxk").eq(index).css("display","block")
		$(".bannerjt").eq(index).css("display","none")
	})
	$(".bannerleft1").mouseout(function(){
		var index=$(this).index()
		$(".xxk").eq(index).css("display","none")
		$(".bannerjt").eq(index).css("display","block")
	})
 //选项卡
 


})
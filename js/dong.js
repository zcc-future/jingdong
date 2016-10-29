window.onload=function(){
   var lis=$(".bannerleft1");
   var xxk=$(".xxk");
   var jt=$(".bannerjt");	   
   for(var i=0;i<lis.length;i++){
		  lis[i].index=i;
			  lis[i].onmouseover=function(){
			  xxk[this.index].style.display="block";
			  jt[this.index].style.display="none";
    }  
			  lis[i].onmouseout=function(){
			  xxk[this.index].style.display="none";
			  jt[this.index].style.display="block";
   }
 }
  //选项卡
   function xxk2(wx,wxk,wxjt){
       var wx=wx;
       var wxk=wxk;  
       var wxjt=wxjt;   
        wx.onmouseover=function(){
        wxk.style.display="block";
        wx.style.background="white";
        wxjt.style.opacity=0;
    }  
        wx.onmouseout=function(){
        wxk.style.display="none";
        wx.style.background="none";
        wxjt.style.opacity=1;
   }
 }
   var sz=$(".head1left")[0]
   var szk=$(".hleft")[0]
   var wxjt=$("img",sz)[0]
   xxk2(sz,szk,wxjt)
  // 送至：北京
   xxk2(($(".rrt1")[0]),($(".rrt11")[0]),($("img",$(".rrt1")[0]))[0])
  //我的京东
   xxk2(($(".rrt2")[0]),($(".rrt22")[0]),($("img",$(".rrt2")[0]))[1])
  // 京东手机
   xxk2(($(".gz")[0]),($(".gz1")[0]),($("img",$(".gz")[0]))[0])
  // 关注京东 
   xxk2(($(".kh")[0]),($(".kh1")[0]),($("img",$(".kh")[0]))[0])
  // 客户服务
   xxk2(($(".dh")[0]),($(".dh1")[0]),($("img",$(".dh")[0]))[0])
  // 网站导航 
   xxk2(($(".head3r1")[0]),($(".gou1")[0]))
  // 购物车 
 
  var tu=$("img",$(".bannertu")[0])
	var yuan=$(".yuan1")
	var a=0;
	var middle=$(".bannertu")[0];
	var btnL=$(".jtl")[0]
	var btnR=$(".jtr")[0]
  var t=setInterval(move,2000);
	 function move(){
       a++;
         if(a>=tu.length){
          a=0;
         }
      for(i=0;i<tu.length;i++){
         for(i=0;i<tu.length;i++){
            animate(tu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            yuan[i].style.background="#666";
  } 
         yuan[a].style.background="red";
         animate(tu[a],{opacity:1},2000,Tween.Quad.easeInOut)
  }
    }


    function move1(){
    a--;
         if(a<0){
          a=tu.length-1;
         }
      for(i=0;i<tu.length;i++){
         for(i=0;i<tu.length;i++){
            animate(tu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            yuan[i].style.background="#666";
           


  } 
         yuan[a].style.background="red";
         animate(tu[a],{opacity:1},2000,Tween.Quad.easeInOut);
  }
    }
  middle.onmouseover=function(){
      btnL.style.opacity=0.5;
      btnR.style.opacity=0.5;
      clearInterval(t);
  }
  middle.onmouseout=function(){
    
    btnR.style.opacity=0;
    btnL.style.opacity=0;
    t=setInterval(move,2000);
  }
  btnR.onclick=function(){
    move();
  }
  btnL.onclick=function(){
    move1();
  }

  for(i=0;i<yuan.length;i++){
    yuan[i].index=i;
    yuan[i].onclick=function(){
      for(j=0;j<yuan.length;j++){
              yuan[j].style.background="#666";
         animate(tu[j],{opacity:0},2000,Tween.Quad.easeInOut);
  } 
          this.style.background="red";
         animate(tu[this.index],{opacity:1},2000,Tween.Quad.easeInOut);
          i=a;
    }
  }

//banner 轮播

function lunbo(imgbox,middle,img,jtL,jtR){
  var img=img
  var imgbox=imgbox
  var jtL=jtL
  var jtR=jtR;
  var middle=middle;
  var flag=true;
  var width=parseInt(getStyle(img[0],"width"))
  var t=setInterval(move,1500);
  function move(){
    animate(imgbox,{left:-width},600,function(){
      var first=firstChild(imgbox);
      // var two=getNext(first)
      imgbox.appendChild(first);
      // imgbox.appendChild(two);
      imgbox.style.left=0
      flag=true;
    })
  }
  function moveL(){
      imgbox.style.left=-width+"px";
      var first=firstChild(imgbox);
      var last=lastChild(imgbox);
      imgbox.insertBefore(last,first);     
     animate(imgbox,{left:0},600,function(){
      flag=true;
     })

  }
  jtR.onclick=function(){
    if(flag){
      move();
      flag=false;
    }
  }
  jtL.onclick=function(){
    if(flag){
      moveL();
      flag=false;
    }
  }
  middle.onmouseover=function(){
    clearInterval(t)
    jtL.style.opacity=0.5;
    jtR.style.opacity=0.5;
  }
  middle.onmouseout=function(){
   t=setInterval(move,1500);
   jtL.style.opacity=0;
    jtR.style.opacity=0;
  }
 
  }
  var imgbox=$(".zhong1right1")
  var img=$(".zhong1img",imgbox[0])  
    var middle=$(".zhong1right")[0]
    var jtL=$(".jtl1")[0]
    var jtR=$(".jtr1")[0]
    lunbo(imgbox[0],middle,img,jtL,jtR) 


 //节点轮播 
 var hyp=$(".hyp")[0]
 var hyp1=$(".zhongonexxk")
 var n1=0;
 var n2=0;
 hyp1[0].style.display="block"
 hyp.onclick=function(){
   n2=n1+1;
   if(n2>=hyp1.length){
    n2=0
   }
   for(var i=0;i<hyp1.length;i++){
    hyp1[i].style.display="none"
   }
   hyp1[n2].style.display="block";
   n1=n2;

 }

//换一批
  var lou1=$(".yilouhead")[0];
  var lou2=$(".erlouhead")[0];
  var lou3=$(".sanlouhead")[0];
  var lou4=$(".silouhead")[0];
  var lou5=$(".silouhead")[1];
  var lou6=$(".sanlouhead")[1];
  var lou7=$(".sanlouhead")[2];
  var lou8=$(".sanlouhead")[3];
  var lou9=$(".sanlouhead")[4];
  var lou10=$(".sanlouhead")[5];
  var lou11=$(".silouhead")[2];
  var lou12=$(".sanlouhead")[6];
  var lou=[lou1,lou2,lou3,lou4,lou5,lou6,lou7,lou8,lou9,lou10,lou11,lou12]
  var lou1=["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F"]
  var wz1=["服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","车品","服务"]
  var gd=$(".gd")[0];
  var gdlou=$(".gdlou");
  var now;
  var cWidth=document.documentElement.clientWidth;
  var cHeight=document.documentElement.clientHeight;
   for(i=0;i<lou.length;i++){
    lou[i].h=lou[i].offsetTop
   }
 
  window.onscroll=function(){
    obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop
    
    if(top>lou[0].h-300){
      gd.style.display="block";
      var gdHeight=gd.offsetHeight;
      gd.style.top=(cHeight-gdHeight)/2+"px";     
    }else{
      gd.style.display="none";
    } 
    
    for(i=0;i<lou.length;i++){
      if(top>lou[i].h-200){
        for(j=0;j<gdlou.length;j++){
            gdlou[j].innerHTML=lou1[j]
            gdlou[j].style.color="#666";
             }
       gdlou[i].style.color="red";
       gdlou[i].innerHTML=wz1[i]
       now=i;
      }    
    }

    for(i=0;i<gdlou.length;i++){
      gdlou[i].index=i;
      
      gdlou[i].onclick=function(){
        animate(document.body,{scrollTop:lou[this.index].h},500);
        animate(document.documentElement,{scrollTop:lou[this.index].h},500)
        for(j=0;j<gdlou.length;j++){
            gdlou[j].style.color="#666"
            gdlou[j].style.background="white";
             }
         this.style.color="red"
         now=this.index;
         
      }
      gdlou[i].onmouseover=function(){
         if(this.index==now){
          return;
        }
        for(j=0;j<gdlou.length;j++){
            gdlou[j].style.background="white";
            gdlou[j].innerHTML=lou1[j]
            gdlou[now].innerHTML=wz1[now]
             }
        this.style.background="red"
        this.style.color="white"
        this.innerHTML=wz1[this.index]

      }
      gdlou[i].onmouseout=function(){
        if(this.index==now){
          return;
        }
        for(j=0;j<gdlou.length;j++){
           gdlou[j].style.background="white";
            gdlou[j].innerHTML=lou1[j]
            gdlou[now].innerHTML=wz1[now]
          }
        this.style.background="white"
        this.style.color="#666"
        this.innerHTML=lou1[this.index]
      }

    }
  }

 //louceng


function lunbo1(ddtu,tutu,yy1){
     var ddtu=ddtu;
    var tutu=$(tutu,ddtu);
    var yy1=$(".cyy1",ddtu)
    var now=0;
    var next=0;
  var zjt=$(".cjtz",ddtu)[0]
  var yjt=$(".cjty",ddtu)[0]
  var flag=true;
  var width=parseInt(getStyle(ddtu,"width"))
   var t=setInterval(ress,2000);
     zjt.style.display="none";
     yjt.style.display="none";
     yy1[0].style.background="red";
     tutu[0].style.left=0;

     function ress(type){
      var type=type||"1";
      if(type=="1"){
        next=now+1;
      if(next>=tutu.length){
        next=0;
      }
      tutu[next].style.left=width+"px";
      animate(tutu[now],{left:-width});
     }else if(type=="2"){
      next=now-1;
      if(next<0){
        next=tutu.length-1;
      }
      tutu[next].style.left=-width+"px";
      animate(tutu[now],{left:width});
     }
      
      animate(tutu[next],{left:0},function(){
        flag=true;
      })
      for(i=0;i<yy1.length;i++){
       yy1[i].style.background="#666";
      }
      yy1[next].style.background="red";
      now=next;
     }
   
     ddtu.onmouseover=function(){
      zjt.style.display="block";
     yjt.style.display="block";
       clearInterval(t);
     }
     ddtu.onmouseout=function(){
        zjt.style.display="none";
       yjt.style.display="none";
       t=setInterval(ress,2000)
     }
      yjt.onclick=function(){
       if(flag){
          ress("1")
        }
        flag=false;
      }
      zjt.onclick=function(){
        if(flag){
          ress("2")
        }
        flag=false;
      }
      for(i=0;i<yy1.length;i++){
        yy1[i].index=i;
        yy1[i].onclick=function(){
             if(flag==false){
              return
             }
             flag=false;
          if(this.index>now){
            tutu[this.index].style.left=width+"px";
             animate(tutu[now],{left:-width});
            
          }else if(this.index<now){
            tutu[this.index].style.left=-width+"px";
               animate(tutu[now],{left:width});
            }
             animate(tutu[this.index],{left:0},function(){
        flag=true;
      })
          for(i=0;i<yy1.length;i++){
             yy1[i].style.background="#666";
          }
             this.style.background="red";
          now=this.index;
          next=this.index;
        }
      }
  }
  

 //轮播封装函数
 var erlou=$(".erlouright1")
  lunbo1(erlou[0],".erlouc")
  lunbo1(erlou[1],".erlouc")
  lunbo1(erlou[2],".erlouc")
  lunbo1(erlou[3],".erlouc")
  lunbo1(erlou[4],".erlouc")
 var sanlou=$(".sanlouright2")
  lunbo1(sanlou[0],"img")
  lunbo1(sanlou[1],"img")
  lunbo1(sanlou[2],"img")
  lunbo1(sanlou[3],"img")
   
lunbo1($(".yilou1c")[0],"img")
lunbo1($(".shilou3")[0],"img")
lunbo1($(".shierlou2")[0],"img")
lunbo1($(".shierlou2")[1],"img")


//楼层轮播
function xxk1(lc,lcka){
  var lc=lc;
  var lcka=lcka;
  lc[0].style.color="#b61d1d"
  lc[0].style.height=31+"px"
  lc[0].style.lineHeight=31+"px";
  lc[0].style.borderBottomWidth=2+"px"
  lc[0].style.borderBottomStyle="solid"
  lc[0].style.borderBottomColor="white"
  lc[0].style.borderTopWidth=3+"px"
  lc[0].style.borderTopStyle="solid"
  lc[0].style.borderTopColor="#c81623"
  lc[0].style.borderRightWidth=1+"px"
  lc[0].style.borderRightStyle="solid"
  lc[0].style.borderRightColor="#c81623"
  lc[0].style.borderLeftWidth=1+"px"
  lc[0].style.borderLeftStyle="solid"
  lc[0].style.borderLeftColor="#c81623"
  for(var i=0;i<lc.length;i++){    
      lc[i].index=i;
        lc[i].onmouseover=function(){
          for(var i=0;i<lc.length;i++){ 
            lcka[i].style.display="none";
            lc[i].style.color="#666"
            lc[i].style.height=35+"px"
            lc[i].style.lineHeight=35+"px";
            lc[i].style.border="none"
            lc[i].style.borderRightWidth=1+"px"
            lc[i].style.borderRightStyle="solid"
            lc[i].style.borderRightColor="#ededed"
            lc[lc.length-1].style.borderRightWidth=0+"px"
          }
        lcka[this.index].style.display="block";
        this.style.color="#b61d1d"
        this.style.height=31+"px"
        this.style.lineHeight=31+"px";
        this.style.borderBottomWidth=2+"px"
        this.style.borderBottomStyle="solid"
        this.style.borderBottomColor="white"
        this.style.borderTopWidth=3+"px"
        this.style.borderTopStyle="solid"
        this.style.borderTopColor="#c81623"
        this.style.borderRightWidth=1+"px"
        this.style.borderRightStyle="solid"
        this.style.borderRightColor="#c81623"
        this.style.borderLeftWidth=1+"px"
        this.style.borderLeftStyle="solid"
        this.style.borderLeftColor="#c81623"
        lc[lc.length-1].style.borderRightWidth=0+"px"
    }        
 }
  }

  var dabox=$(".yilouheadr")[0]
  var one=$("div",dabox);
  var onek=$(".yilouright",$(".yilou")[0])
 xxk1(one,onek)
 var  one1=$("div",$(".erlouheadr")[0])
 var onek1=$(".erlouright",$(".erlou")[0])
 xxk1(one1,onek1)
  var  one3=$("div",$(".sanlouheadr")[0])
  var onek3=$(".sanlouright",$(".sanlou")[0])
 xxk1(one3,onek3)
   var  one4=$("div",$(".silouheadr")[0])
   var onek4=$(".sanlouright",$(".sanlou")[1])
 xxk1(one4,onek4)
    var  one5=$("div",$(".silouheadr")[1])
    var onek5=$(".sanlouright",$(".sanlou")[2])
 xxk1(one5,onek5)
    var  one6=$("div",$(".liulouheadr")[0])
    var onek6=$(".erlouright",$(".erlou")[1])
 xxk1(one6,onek6)
    var  one7=$("div",$(".qilouheadr")[0])
    var onek7=$(".erlouright",$(".erlou")[2])
 xxk1(one7,onek7)
   var  one8=$("div",$(".balouheadr")[0])
   var onek8=$(".erlouright",$(".erlou")[3])
 xxk1(one8,onek8)
   var  one9=$("div",$(".balouheadr")[1])
   var  onek9=$(".erlouright",$(".erlou")[4])
 xxk1(one9,onek9)
   var  one10=$("div",$(".balouheadr")[2])
   var  onek10=$(".erlouright",$(".erlou")[5])
 xxk1(one10,onek10)
   var  one11=$("div",$(".silouheadr")[2])
   var  onek11=$(".sanlouright",$(".sanlou")[3])
 xxk1(one11,onek11)




//楼层选项卡

var gd1=$("a",$(".gd1")[0])
var gdzi=$(".gdzi")

for(var i=0;i<gd1.length;i++){ 
  gd1[i].index=i 
  gd1[i].onmouseover=function(){
    animate(gdzi[this.index],{right:30},600)
    gdzi[this.index].style.background="#C81623"
 }
 gd1[i].onmouseout=function(){
    animate(gdzi[this.index],{right:-30},600)
    gdzi[this.index].style.background="#666"
 }
}

var gd2=$("a",$(".gd2")[0])
var gdzi1=$(".gdzi1")
function yougd(i){
  gd2[i].onmouseover=function(){
    animate(gdzi1[i],{right:30},600)
    gdzi1[i].style.background="#C81623"
 }
 gd2[i].onmouseout=function(){
    animate(gdzi1[i],{right:-30},600)
    gdzi1[i].style.background="#666"
 }
}
yougd(0);
yougd(1)
  

//右固定
  var img12=$(".tt9")
  var imgbox12=$(".ttxxk1")[0]
  var middle12=$(".ttxxk")[0]
  var flag=true;
  var height12=parseInt(getStyle(img[0],"height"))
  var t12=setInterval(move12,1500);
  function move12(){
    animate(imgbox12,{top:-120},600,function(){
      var first=firstChild(imgbox12);
      imgbox12.appendChild(first);
      imgbox12.style.top=0
    })
  }
   middle12.onmouseover=function(){
    clearInterval(t12)
  }
  middle12.onmouseout=function(){
   t12=setInterval(move12,1500);

  }

  //12楼节点轮播
//红线开始
var midx=$(".zhongonexxk")[0]
var hx=$(".hongxian")[0]
var kaiguan=true
midx.onmouseover=function(){
  if (kaiguan==false) {
    return
  }
  kaiguan=false
  hx.style.display="block"
  animate(hx,{left:845},400,function(){
    kaiguan=true
  })
}
midx.onmouseout=function(){
  if (kaiguan==false) {
    return
  }
  kaiguan=false  
  animate(hx,{left:0},400,function(){
    hx.style.display="none"
    kaiguan=true
  })
}


}

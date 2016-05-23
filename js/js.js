$(function(){
		var iAbs = 10,
			iTop = 0,
			iCur = 0,
			iLen = 6,
			iHeight = $(document).height(),
			_iNow = -1,
			bigPicWrap = $('.content');
			
		
		//移动端事件
		function Touchstart(obj,callback){
			obj[0].addEventListener("touchstart",function() {callback();}, false); 		
		}
		
		function Touchmove(obj,callback){
			 obj[0].addEventListener("touchmove",function() {
					 callback();
				 }, false)
		}
		
		function Touchend(obj,callback){
			obj[0].addEventListener("touchend",function() {
					 callback();
				 }, false)
		} 
		
		//触摸
		Touchstart(bigPicWrap,function(){
				//event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
				iFrist = event.targetTouches[0].pageY;
				iTop = parseInt(bigPicWrap.css('top'));	
				
			});
		
		Touchmove(bigPicWrap,function(){
			var _n;
			event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
			iLast = event.targetTouches[0].pageY;
			//_n = iTop - (iFrist - iLast);
			//bigPicWrap.css('top',_n);	
			//setDegree(bigPicWrap,_n);
		});
		
		
		Touchend(bigPicWrap,function(){
			//event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
			if(iFrist != 0 && iLast != 0 ){
				//向下滑动
				if(iFrist-iLast>iAbs){
					iCur++;	
					if(iCur>iLen-1){

						iCur = iLen-1;
					}
				}else if(iFrist-iLast<(-1*iAbs)){
					iCur--;	
					if(iCur<0){
						iCur = 0;
					}
				}
				iHeight = $(document).height();
				//bigPicWrap.css('top',-1*iCur*iHeight);
				setDegree(bigPicWrap,-1*iCur*iHeight);	
				fnscrollTo(iCur);
				iFrist=iLast=0;
			}
		})	
	function setDegree(obj,y){  
				obj.css({  
					'transform': 'translate3d(0,'+y+'px,0)',  
					'-moz-transform':'translate3d(0,'+y+'px,0)',  
					'-o-transform':'translate3d(0,'+y+'px,0)',
					'-webkit-transform':'translate3d(0,'+y+'px,0)'  	
				});  
			} 
		function restCss(){
				$('#section_02').removeClass('transform');
				$('.down-btn').css('display','block')
			}
		function fnscrollTo(n){
				if(_iNow != n){					
					restCss();
					switch(n){
						case 0:
									break;
						case 1:$(".ptwo_1").addClass("ptwo_1_1");
		$(".ptwo_2").addClass("ptwo_2_2");
		$(".ptwo_3").addClass("ptwo_3_3");
								 break;
						case 2: $(".pthree_1").addClass("pthree_1_1");
		$(".pthree_2").addClass("pthree_2_2");
		$(".pthree_3").addClass("pthree_3_3");
								break;
						case 3: 
								break;
								
						case 4: 
								break;	
					case 5: $(".down-btn").hide();
								break;								
					}
				}
				_iNow = n;
	}	
		
		
		
		
			
})
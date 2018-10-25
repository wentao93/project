window.onload = function(){
	// 导航下拉
	navDropDown();
	function navDropDown() {
		var oNav = document.getElementById('nav'),
			oDown = oNav.getElementsByClassName('nav-list');
		
		for(var i = 0; i < oDown.length; i ++){

			// 鼠标移入显示下拉内容
			oDown[i].onmouseenter = function() {
				var subNav = this.getElementsByClassName('sub-nav')[0];
				if(this && subNav){
					subNav.style.display = 'block';
				}
			};
			// 鼠标移出隐藏下拉内容
			oDown[i].onmouseleave = function() {
				var subNav = this.getElementsByClassName('sub-nav')[0];
				if(this && subNav){
					subNav.style.display = 'none';
				}
			};
		} 
	}	
	
	// 第一屏轮播图
	sowingMapFn();
	function sowingMapFn() {
		var sowingMap = document.getElementById('sowing-map'),
			aUl = sowingMap.getElementsByTagName('ul')[0],
			aLi = aUl.getElementsByTagName('li'),
			aBtn = sowingMap.getElementsByClassName('bg'),
			aExtra = sowingMap.getElementsByClassName('extra')[0],
			aBtn1 = aExtra.getElementsByTagName('li'),
 			timer = null, // 存储定时器 
 			len = aBtn1.length,
 			current = 0;
 
 		aUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

		for(var i = 0; i < len; i ++){
			aBtn1[i].index = i;
			aBtn1[i].onclick = function(){
				current = this.index;
				showHide();
			}
		} 

		// 上一张 
		aBtn[0].onclick = function(){ 
			current --;

			if(current == -1){
				current = aLi.length -1;
				aUl.style.left = parseInt(aUl.style.left) - 610 + 'px';
			}
			
			showHide();
		};

		// 下一张
		aBtn[1].onclick = nextFn;  
		
		var speed = 3000;
		timer = setInterval(nextFn,speed);

		// 移入停止
		sowingMap.onmouseover = function(){
			clearInterval(timer);
		};
		// 移出开始
		sowingMap.onmouseout = function(){
			timer = setInterval(nextFn,speed);
		};

		function showHide(){
			for(var j = 0; j < len; j ++){
				aBtn1[j].className = '';
				aLi[j].style.display = 'none';
			}
			aBtn1[current].className = 'active';
			aLi[current].style.display = 'block';

			aUl.style.left =- aLi.offsetWidth + 'px';
		}
		function nextFn(){
			current ++;
			if(current == aLi.length){
				current = 0;
			}
			showHide();
		}
	} 
	// End 轮播图

	// 设计灵感 数据切换 
	leftrightSwitch(); 
	function leftrightSwitch(){
		var oFourth = document.getElementsByClassName('fourth')[0],
			aFourthEm = oFourth.getElementsByTagName('em'),
			aFourthBtn = oFourth.getElementsByClassName('btn'),
			aFourthUl = oFourth.getElementsByTagName('ul');
		
		for(var i = 0; i < aFourthBtn.length; i ++){
			aFourthBtn[i].index = i;
			aFourthBtn[i].onclick = function(){
				var len = aFourthBtn.length;
				for(var j = 0; j < len; j ++){
					aFourthEm[j].className = '';
					aFourthBtn[j].className = 'btn btn-prev';
					aFourthUl[j].style.display = 'none';
				}

				aFourthEm[this.index].className = 'active';
				this.className = 'btn btn-prev no';
				aFourthUl[this.index].style.display = 'block';
			};
		}
	} 
	//End 设计灵感 数据切换

	// Tab效果 - 中间 - 点击效果
	middleTab();
	function middleTab(){
		var oContent = document.getElementsByClassName('content')[0],
			aContentH2 = oContent.getElementsByClassName('recom-title')[0],
			aContentBtn = aContentH2.getElementsByClassName('btn'),
			aContentList = oContent.getElementsByClassName('lists');

		var btnlen = aContentBtn.length;
		for(var i = 0; i < btnlen; i ++){
			aContentBtn[i].index = i;
			aContentBtn[i].onclick = function(){
				for(var j = 0; j < btnlen; j ++){

					aContentBtn[j].className = 'btn';
					aContentList[j].style.display = 'none';
				}
				this.className = 'btn active';
				aContentList[this.index].style.display = 'block';
			};
		}
	} 
		
 
	// 搜索下面的Tab - 数据切换
	searchDownTab();
	function searchDownTab(){
		var oArticleTab = document.getElementsByClassName('article-tab')[0],
			aArticlelLine = oArticleTab.getElementsByClassName('tabs-line')[0],
			aArticleBtn = aArticlelLine.getElementsByTagName('span'),
			aArticleUl = oArticleTab.getElementsByTagName('ul');

		for(var i = 0; i < aArticleBtn.length; i ++){
			aArticleBtn[i].index = i;
			aArticleBtn[i].onmouseover = function(){
				for(var j = 0; j < aArticleBtn.length; j ++){
					aArticleBtn[j].className = '';
					aArticleUl[j].style.display = 'none';
				}
				this.className = 'active';
				aArticleUl[this.index].style.display = 'block';
			};
		}
	}
	
};
// jquery 
$(function () {
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

	// ajax数据
	(function () {
		var html = '',
			data = json.files;
		for(var i = 0; i < data.length; i ++){
			html += '<div class="item">'
			html += '	<h4>'
			html += '		<a href="details.html">'+data[i].name+'</a>'
			html += '		<span class="author">作者：'+data[i].author+'</span>'
			html += '	</h4>'
			html += '	<div class="text">'+data[i].text+'</div>'
			html += '</div>'
		}
		$('.middle').html(html);
	}());
});




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

	(function () {
		$.ajax({
			type: 'GET',
			url: 'https://www.apiopen.top/novelInfoApi?name=盗墓笔记',
			success: function(msg){
				var html = '',
					result = msg.data.data;

				for(var i = 0; i < result.length; i ++){
					html += '<div class="list">'
					html += '<h1>'+result[i].title+'</h1>'
					html += '<p class="cont">'+result[i].desc+'</p>'
					html += '</div>'
				}
				$('.middle').html(html);
			}

		});
	}());

});
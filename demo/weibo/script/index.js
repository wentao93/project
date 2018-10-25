// 事件操作

$(function () {


	/* 轮播图 */ 
	(function(){
		var parent = $('.js-lunbotu'),
			oUl = parent.find('ul'),
			oLi = oUl.find('li'),
			oDian = parent.find('.dot_box a'),
			num = 0;

		
		oUl.width(oLi.width()*oLi.length);

		oDian.click(function () {
			var _this = $(this),
				now = _this.index();

			_this.addClass('active').siblings().removeClass('active');

			oLi.hide().eq(now).show();
			num = now;
		});

		setInterval(function () {
			num ++;
			if (num == oLi.length) {
				num = 0;
			}
			oDian.removeClass('active').eq(num).addClass('active');

			oUl.animate({
				left : -oLi.width()*num
			});
		}, 2000);
	}());

	/* Tab 切换 */
	var parent = $('.login_innerwrap'),
		tabBtn = parent.find('.info_header .btn'),
		tabCont = parent.find('.W_login');

	tabBtn.click(function () {
		var _this = $(this),
			index = $(this).index();

		_this.addClass('cur').siblings().removeClass('cur');
		$('.tabcont .tablist').hide().eq(index).show();
	});

});

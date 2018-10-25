// 事件操作
$(function () {
	
	var parent = $('.js-lbtmethod'),
		oLi = parent.find('li'),
		oparv = parent.find('.lbtbtn .btn_prev'),
		oNext = parent.find('.lbtbtn .btn_next'),
		oSpan = parent.find('.num span'),
		now = 0;

	// 上一张
	oparv.click( function() {
		now --;
		if(now == -1){
			now = oLi.length -1;
		}
		oSpan.html(now + 1);
		oLi.hide().eq(now).show();
	});

	// 下一张
	oNext.click(nextFn);

	function nextFn() {
		now ++;
		if (now == oLi.length) {
			now = 0;
		}
		oSpan.html(now + 1);
		oLi.hide().eq(now).show();
	}

	// 定时器
	var speed = 3000;
		timer = setInterval(nextFn, speed);
	// 移入.js-lbtmethod停止
	parent.mouseenter(function () {
		clearInterval(timer);
	});

	// 移出.js-lbtmethod开始
	parent.mouseleave(function() {
		timer = setInterval(nextFn, speed);
	});
});
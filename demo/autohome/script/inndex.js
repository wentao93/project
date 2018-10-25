// 事件操作
$(function(){

	var _document = $(document),
		cur = 'active';

	//顶部导航
	dropdownFn()
	function dropdownFn(){
		// 移入显示
		_document.on('mouseenter', '#header .topNav li', function () {
			var dropdown = $(this).find('.nav-dropdown');
			dropdown.show();
		});
		// 移出隐藏
		_document.on('mouseleave', '#header .topNav li', function () {
			var dropdown = $(this).find('.nav-dropdown');
			dropdown.hide();
		});
	}

	/* Tab 切换 */

	/* 深圳热门商家  / 智能展厅推荐 */
	_document.on('click', '.js-tabmethod .tab-title li', tabMethods);	
	function tabMethods() {
		var _this = $(this),
			index = _this.index(),
			tabParent = _this.closest('.js-tabmethod'),
			contEl = tabParent.find('.tab-cont ul');

		// 由于资讯的布局不一样, 通过判断来获取对应的tab内容元素
		if( tabParent.attr('data-tabtype') ) {
			contEl = tabParent.find('.tab-cont .item');
		}
		_this.addClass(cur).siblings().removeClass(cur); 
		contEl.hide().eq(index).show(); 
	}

	/* 轮播图 */
	(function() {
		var num = 0;

		// 小按钮
		$('.lbtbtn a').click(function() {
			var _this = $(this);
			num = _this.index();
			lunbotu(_this.closest('.js-lbtmethod'));
		});

		// 上一张
		$('.js-lbtmethod .btn_prev').click(function () {
			var obig = $(this).closest('.js-lbtmethod').find('li');

			num --;
			if ( num == -1) {
				num = obig.length -1;
			}
			lunbotu($(this).closest('.js-lbtmethod'));
		});
		// 下一张
		$('.js-lbtmethod .btn_next').click(function () {
			var obig = $(this).closest('.js-lbtmethod').find('li');

			num ++;
			if ( num == obig.length ) {
				num = 0;
			}
			lunbotu($(this).closest('.js-lbtmethod'));
		});

		lunbotu();
		function lunbotu(obj){
			var oParent = $(obj),
				oUl = oParent.find('ul');
				obig = oParent.find('li'),
				oDian = oParent.find('.lbtbtn a');
				
			oUl.width(obig.width() * obig.length);	

			oDian.removeClass(cur).eq(num).addClass(cur);

			oUl.animate({
				left : -obig.width()*num
			});
		}

		// var lbtList = $('.js-lbtmethod');
		// for(var i = 0; i < lbtList.length; i ++){
		// 	lbtFn(lbtList[i]);
		// }

	}());

	

});




 

 



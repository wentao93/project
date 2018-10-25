// jquery

$(document).ready(function () {
	// 1.渲染标题
	(function () {
		var tabData = data.tabbtn,
			html = '<ul>';
		for(var i = 0; i < tabData.length; i ++){
			var curClass = i == 0 ? 'active' : '';
			html += '<li class="'+curClass+'" data-type="'+tabData[i].type+'">'+tabData[i].name+'</li>'
		}
		html += '</ul>';
		$('.classify_tab').html(html);

		// 初始化列表内容
		listCont()
	} ());

	// 2.渲染标题内容
	function listCont(curData){
		var tabList = curData || data.tablist,
			html = '<ul class="clearifx">';
		for(var i = 0; i < tabList.length; i ++){
			html += '<li>'
			html += '	<a href="'+tabList[i].href+'" target="_blank">'
			html += '		<p class="name">'+tabList[i].name+'</p>'
			html += '		<div class="pic">'
			html += '			<img src="'+tabList[i].url+'" alt="">'
			html += '		</div>'
			html += '	</a>'
			html += '	<div class="info">'
			html += '		<a class="btn" href="'+tabList[i].href+'" target="_blank">点击查看</a>'
			html += '	</div>'
			html += '</li>'
		}
		html += '</ul>';
		$('.tab_list').html(html);
	}

	// 3.点击按钮，切换数据
	$('body').on('click', '.classify_tab li', function() {
		var cur = 'active',
			_this = $(this),
			type = _this.attr('data-type');

		_this.addClass(cur).siblings().removeClass(cur);

		var curType = filterData(type),
			html = listCont(curType);
		$('.tab_list').html(html);
	});

	// 4.通过当前，筛选数据类型
	function filterData(type) {
		var result = [],
			listData = data.tablist;
		if(type){
			for(var i = 0; i < listData.length; i ++){
				if(listData[i].type == type){
					result.push(listData[i]);
				}
			}
			return result;
		}else{
			return listData;
		}
	} 
});


















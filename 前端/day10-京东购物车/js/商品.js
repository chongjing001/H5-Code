
$(function(){
	
	//1.请求商品数据
	$.get('http://rap2api.taobao.org/app/mock/121189/goods', function(result){
		var goodsArray = result['goods'];
		for(var x in goodsArray){
			var goods = goodsArray[x];
			//创建标签
			var trNode = $('<tr class="after"></tr>');
			//按钮
			trNode.append($('<td><input type="checkbox"/></td>'));
			//商品
			trNode.append($('<td class="td_goods"><img src="'+goods['img']+'"/><p>'+goods['desc']+'</p></td>'));
			//单价
			trNode.append($('<td>'+'￥'+goods['price']+'</td>'))
			//数量
			trNode.append($('<td class="num"><button class="sub_btn">-</button><input type="text" value="'+goods['num']+'"/><button class="add_btn">+</button></td>'));
			//总计
			var total = Number(goods['price']) * Number(goods['num']);
			trNode.append($('<td>'+'￥'+total+'</td>'))
			//操作
			trNode.append($('<td>删除</td>'))
		
			$('#goods').append(trNode)
			$('#goods').append($('<tr class="line"><td colspan="6"></td></tr>'))
		}
		//2.绑定事件
		$('#goods .num').on('click', '.sub_btn', function(){
			console.log('减！')
			//数量
			var inputNode = $(this).next();
			//总计
			var totalNode = $(this).parent().next();
			
			//原数量
			var oldNum = parseInt(inputNode.val());
			//单价
			var priceStr = $(this).parent().prev().text();
			var price = Number(priceStr.slice(1, priceStr.length));
			//数量
			oldNum--;
			oldNum = oldNum<=0?1:oldNum;
			//总计
			inputNode.val(oldNum)
			totalNode.text('￥'+ price*oldNum)
			
			
		});
		$('#goods .num').on('click', '.add_btn', function(){
			//数量
			var inputNode = $(this).prev();
			//总计
			var totalNode = $(this).parent().next();
			
			//原数量
			var oldNum = parseInt(inputNode.val());
			//单价
			var priceStr = $(this).parent().prev().text();
			var price = Number(priceStr.slice(1, priceStr.length));
			//数量
			oldNum++;
			oldNum = oldNum>=100?100:oldNum;
			//总计
			inputNode.val(oldNum)
			totalNode.text('￥'+ price*oldNum)
		});
		
		
		
		
	})
	
	
	
	
	
});
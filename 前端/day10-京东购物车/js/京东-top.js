
var cityArray = ['北京','上海','天津','重庆','河北','山西','河南',
'辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东',
'广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆',
'港澳','台湾','钓鱼岛'];

$(function(){
	//========城市
	var cityBoxNode = $('.menuBottom');
	
	for(var x in cityArray){
		var cityName = cityArray[x];
		var cityNode = $('<font class="city"></font>')
		cityNode.text(cityName);
		
		cityBoxNode.append(cityNode);
	}
	//保存当前选中的城市
	var carrentCityNode = $('.menuBottom font:first');
	carrentCityNode.css('background-color','red')
	carrentCityNode.css('color','white')
	
	
	
	
	//
	cityBoxNode.on('click','.city',function(){
		var cityName = $(this).text();
		$('.menuTop a').text(cityName);
		
		//修改样式
		carrentCityNode.css('background-color','white')
		carrentCityNode.css('color','#A0A0A0')
		carrentCityNode.css(this)
		carrentCityNode.css('background-color','red')
		carrentCityNode.css('color','white')
		
		cityBoxNode.fadeOut();
		
	})
	
	cityBoxNode.parent().on('mouseover',function(){
		cityBoxNode.css('display','block')
	})

//	cityBoxNode.parent().on('mouseleave',function(){
//		cityBoxNode.css('display','none')
//	})
	
	
	
	
	
	
	
	
	
	
})




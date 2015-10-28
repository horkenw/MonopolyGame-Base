var x=0, y=0, a=$('<a href="#" target="_blank"/>'), $div=$('<div class=map_grid/>'),table=$('.map_table'), bear =$('<div class="bear"/>'), bearp=0
	,map={"position":['top','left','bottom','right','top','right','bottom','right','top','right','bottom','left','bottom'],'spaces':[6,12,6,2,4,2,4,2,4,4,2,1,2]};

var Mapset=function(e){
	this.position=e;
}
Mapset.prototype={
	topLine:function(e){
		for(var i=0; i<e; i++){
			a.clone().append($div.clone().css({
				bottom: x,
				right: y
			})).appendTo(table);
			x+=70;
		}
	},
	rightLine:function(e){
		for(var i=0; i<e; i++){
			a.clone().append($div.clone().css({
				bottom: x,
				right: y
			})).appendTo(table);
			y-=70;
		}
	},
	bottomLine:function(e){
		for(var i=0; i<e; i++){
			a.clone().append($div.clone().css({
				bottom: x,
				right: y
			})).appendTo(table);
			x-=70;
		}
	},
	leftLine:function(e){
		for(var i=0; i<e; i++){
			a.clone().append($div.clone().css({
				bottom: x,
				right: y
			})).appendTo(table);
			y+=70;
		}
	}
}
Mapset.renderMap=function(position,space){
	var map=new Mapset();
	switch(position){
		case 'top':
			map.topLine(space);
			break;
		case 'right':
			map.rightLine(space);
			break;
		case 'bottom':
			map.bottomLine(space);
			break;
		case 'left':
			map.leftLine(space);
			break;
		default:
			alert('Data error');
	}
}
Mapset.walkStep=function(place, hobear){
	place+=1;
	hobear.appendTo('.map_grid:eq('+ place+')');
	return place;
}
Mapset.prototype.rulebox=function(action){
	var li=$('<li/>'), div=$('<div/>'), title=$('<div class="pop_title"/>'),close=$('<div class="pop_close"><a href="#"><img src="images/close.png" alt="關閉" width="40" height="40" title="關閉" border="0"/></a></div>'),
		rulelist={'rule':['需註冊成為「臺灣觀光年曆」網站會員；參加資格不限國籍，海內外人士均可參加。',
			'登入後，每日有一次免費擲骰子機會。','每<span class="font02">30點紅利</span>可兌換一次擲骰機會。',
			'<strong>現玩現中獎：</strong>獲得紅利或免費擲骰。',
			'<strong>旅遊知識家：</strong>回答旅遊相關問題，答對可獲得禮券抽獎機會。','<strong>玩樂分享家：</strong>出現全臺旅遊資訊，分享至FB塗鴉牆可獲得旅行箱抽獎機會。',
			'若有足夠紅利，玩家可持續兌換擲骰機會，並到達大富翁環島地圖終點站，即可獲得最<span class="font02">大獎LED液晶電視</span>抽獎機會。','每日最多可獲得1次此獎項之抽獎機會。'],
			"notices":['本活動之活動辦法及相關注意事項均載明於活動網頁中。參加者於參加本活動之同時，即視為已詳閱並同意接受本活動之活動辦法、隱私權聲明及相關注意事項之規範。',
				'為維護參加者得獎公平性，禁止網友從事外掛程式、登錄資料不實、多重身分帳號、違反本網站各項規範或任何影響活動公平性之行為，一經查證屬實，主辦單位有權取消其參加資格，或追回獎項（品）。',
				'活動中獎者應詳實填寫個人資料，若因資料填寫不完整或不正確導致無法通知中獎者，或未於期限內回覆中獎通知者，將視同自願放棄領獎資格，主辦單位不另行通知，獎項也不另行補發。',
				'本活動之獎品內容若因市場缺貨或其它不可抗力之因素而無法出貨時，活動主辦單位得以同質性的等值獎品取代之。','本活動之獎品不得轉換、轉讓或折換現金，獎品圖片僅供參考，以實際商品為主；本活動獎項寄送地區僅限臺、澎、金、馬，主辦單位不處理郵寄獎品至海外地區之事宜。',
				'本項活動競技競賽機會中獎獎金或給與，依中華民國所得稅法相關規定辦理，獎金金額超過新臺幣1,001元（含）以上，主辦單位將於次年1月底前開具扣繳憑單給中獎人，請中獎人依規定申報。非中華民國境內居住之外籍人士不論得獎者所得之金額，須就得獎所得扣繳20%機會中獎稅額。獎金所得將由承辦單位於年度結算另行寄發扣繳或免扣繳憑單。',
				'得獎名單公布後，將會以電子郵件寄出通知信函至得獎者信箱，若得獎者未收到電子郵件通知，請與維運小組連絡（維運小組：02-87734300轉626李先生，電子信箱：<a href="mailto:chris.lee@techmore.com.tw">chris.lee@techmore.com.tw</a>）。',
				'本活動因故無法進行時，主辦單位有權取消、終止、修改或暫停活動，本活動辦法如有未盡事宜，主辦單位得保留變更或停止本活動之權利。']};

	var h, t=0, w=$(window).outerWidth()/2-430;
	var rules=function(){
		title.text('遊戲說明');
		div.clone().addClass('font02').text('即日起至2015/11/30天天都可來環島大富翁!!').appendTo('.pop_main')
		div.clone().addClass('pop_info_main_bg').appendTo('.pop_main');
		for(var i=0; i<3; i++){
			var ul=$('<ul/>');
			for(var j=0; j<3; j++){
				li.clone().html(rulelist.rule[t]).appendTo(ul)
				t++;
			}
			ul.appendTo('.pop_info_main_bg');
		}
		div.clone().addClass('font02').text('★★★抽獎資格以累積方式計算，玩的次數越多，中獎機會越大★★★').appendTo('.pop_main')
	};
	var rewards=function(){
		title.text('環島有禮');
		$('<img/>', {
			src:'../images/pop_award.png',
			alt: '環島終點抽、好康幸運抽、現玩馬上送',
			title: '環島終點抽、好康幸運抽、現玩馬上送'
		}).appendTo('.pop_main')
	};
	var notices=function(){
		title.text('注意事項');
		var ul=$('<ul/>');
		for(var i=0; i<rulelist.notices.length; i++){
			li.clone().html(rulelist.notices[i]).appendTo(ul)
		}
		ul.appendTo('.pop_main2');
	};
	var announces=function(){
		title.text('得獎公佈');
		$('.pop_bg2').attr('id', 'winner');
		$('<p/>').addClass('font01').text('2015/12/10前公布').appendTo('.pop_main2')
	};
	h=$(window).outerHeight()/2-300;
	if(action == 'but1' || action == 'but2')
		div.clone().addClass('pop_bg1').css({'top': h, 'left': w}).append(title).append(close).append(div.clone().addClass('pop_main')).appendTo('body');
	else
		div.clone().addClass('pop_bg2').css({'top': h, 'left': w}).append(title).append(close).append(div.clone().addClass('pop_main2')).appendTo('body');

	switch(action){
		case 'but1':
			rules();
			break;
		case 'but2':
			rewards();
			break;
		case 'but4':
			notices();
			break;
		case 'but5':
			announces();
			break;
		default:
			alert('Data error');
	}
}
Mapset.lightbox=function(box, action){
	var div=$('<div/>'),backdrop=$('<div class="drop"/>');

	backdrop.fadeIn('slow').appendTo('body');
	if(box == 1){
		var boxs=new Mapset();
		boxs.eventbox(action);
	}else{
		var boxs=new Mapset();
		boxs.rulebox(action);
	}
	$('.pop_close').on('click', function(e){
		e.preventDefault();
		$('#event, .pop_bg1, .pop_bg2').fadeOut(1000);

		$(backdrop).fadeOut(1000).delay(1000)
			.queue(function(next){
				$(backdrop).remove();
				$('#event, .pop_bg1, .pop_bg2').remove();
				next();
			}).dequeue();
	})
};
Mapset.hobear=function(p){
	if (p > 0) {
		bear.appendTo('.map_grid:eq('+ p+')');
		bearp= parseInt(p);
	}else{
		bear.appendTo('.map_grid:first');
		bearp=0;
	};
};
function promptBox(title,info,okcell,nocell){
	var btn = $('<div></div>');
	var b1 = $("<div>确定</div>").addClass("btn btn-default").click(function(){
		box.del(okcell);
		
	});
	var b2 = $("<div>取消</div>").addClass("btn btn-default").click(function(){
		box.del(nocell);
	
	});
	btn.append(b1).append($("<div style='height:5px'></div>")).append(b2);
	var con = $("<div></div>").css("width","300px").addClass("fixed-center");
	$(document.body).append(con);
	var box = new Dialog({
		type:2,
		title:title,
		body:info,
		footer:btn
	});
	box.rander(con);
	box.show();
}



function seedMessage(mes,time){
	time = time || 5000;
	var box = new Message({
		body:mes
	});
	box.rander();
	box.show();
	setTimeout(function(){
		box.hide(true);
	},time);
}
function getRow(){
	return $("<div></div>").addClass("row");
}
function getCol(num,type){
	return $("<div></div>").addClass("col-"+type+"-"+num);
}
function getTitle(){
	return $("<div></div>").addClass("title");
}
function getBox(){
	return $("<div></div>").addClass("text-box");
}

function promptBox(title,info,okcell,nocell){
	var btn = $('<div></div>');
	var b1 = $("<div>ok</div>").addClass("btn btn-default").click(function(){
		box.del(okcell);
		
	});
	var b2 = $("<div>no</div>").addClass("btn btn-default").click(function(){
		box.del(nocell);
	
	});
	btn.append(b1).append($("<div style='height:5px'></div>")).append(b2);
	var box = new Dialog({
		type:2,
		title:title,
		body:info,
		footer:btn
	});
	box.rander();
	box.show();
}
function seedMessage(mes,time){
	var box = new Message({
		body:mes
	});
	box.rander();
	box.show();
	setTimeout(box.hide,time);
}

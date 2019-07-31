//消息框构造器
function Message(obj){
	obj = obj || {}; 
	//消息主体 JQ对象
	this.body = obj.body || null;
	this.box = $("<div></div>").addClass("alert");
}
//渲染，此时为隐藏状态
Message.prototype.rander = function(){
	this.box.html($(this.body)).css("right","-50%");
	
	$(document.body).append(this.box);
};
//显示
Message.prototype.show = function(callback){
callback = callback || function(){};
	this.box.animate({
		right:"5px"
	},500,"swing",callback);
};
//隐藏
Message.prototype.hide = function(bool){
	bool = bool || false;
	this.box.animate({
		right:"-50%"
	},500,"swing",function(){
		if(bool){
			$(this).remove();
		}
	});
};

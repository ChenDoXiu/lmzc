
try{
//对话框构造函数
function Dialog(obj){
	obj = obj || {};
	//type 弹窗类型
	this.type = obj.type || 0;
	//标题
	this.title = obj.title || "";
	//标题对齐方式（暂未添加）
	this.titleAligin = obj.titleAligin || "center";
	
	this.body = obj.body || null;
	this.footer = obj.footer || null;
	this.allObject.push(this);
	this.box = null;
}
//记录所有对话框对象
Dialog.prototype.allObject = [];
//将HTML渲染到页面，此时窗口属于隐藏状态
//node  储存窗口的容器 (类型：jq对象)
Dialog.prototype.rander = function(node){
	node = node || document.body;
	switch(this.type){
		case 0:
			this.type = "dialog";
		break;
		case 1:
			this.type = "dialog1";
		break;
		case 2:
			this.type = "dialog2";
		break;
		case 3:
			this.type = "dialog3";
		break;
		default:
			this.type = "dialog";
		break;
	}
	var box = $("<div></div>").addClass(this.type);
	box.append($("<div></div>").addClass("dialog-title").addClass(this.titleAligin).html(this.title));
	box.append($("<div></div>").addClass("dialog-body").html(this.body));
	box.append($("<div></div>").addClass("dialog-footer").html(this.footer));
	box.css("display","none").css("right","-=100%").css("opacity",0);
	this.box = box;
	$(node).append(this.box);
};
//显示窗口
//callback 回调函数，会在窗口完全进入页面触发
Dialog.prototype.show = function(callback){
	callback = callback || function(){};
	this.box.css("display","block");
	this.box.animate({
		right:"+=100%",
		opacity:"1"
	},300,"swing",callback);
};
//窗口退出页面并删除页面上的关于此窗口HTML代码
//callback同上
Dialog.prototype.del = function(callback){
	callback = callback || function(){};
	var that = this;
	this.box.animate({
		right:"+=100%",
		opacity:'0'
	},300,"swing",function(){
		$(this).remove();
		that.box.html("");
		callback();
		
	});
	//this.box.html("");
	
	//this.box.css("display","none");
};
//暂时隐藏窗口
Dialog.prototype.hide = function(callback){
	callback = callback || function(){};
	this.box.animate({
		left:"-=100%",
		opacity:"0"
	},300,function(){
		$(this).hide(0);
		callback();
	});
};
//修改窗口标题 node 字符串
Dialog.prototype.setTitle = function(node){
	this.title = node;
	this.box.find(".dialog-title").html(this.title);
};
//修改窗口主体 node JQ对象
Dialog.prototype.setBody = function(node){
	this.body = $(node);
	this.box.find(".dialog-body").html(this.body);
};
//修改窗口底部 node JQ对象
Dialog.prototype.setFooter = function(node){
	this.footer = $(node);
	this.box.find(".dialog-footer").html(this.footer);
};
//窗口主题追加元素 node jq对象
Dialog.prototype.appendBody = function(node){
	this.body.append($(node));
	this.box.find(".dialog-body").html(this.body);
};
}catch(e){
	alert(e);
}

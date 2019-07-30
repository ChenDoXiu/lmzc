
try{
function Dialog(obj){
	obj = obj || {};
	this.type = obj.type || 0;
	this.title = obj.title || "";
	this.titleAligin = obj.titleAligin || "center";
	this.body = obj.body || null;
	this.footer = obj.foot || null;
	this.allObject.push(this);
	this.box = null;
}
//
Dialog.prototype.allObject = [];
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
	box.css("display","none");
	this.box = box;
	$(node).append(this.box);
};
Dialog.prototype.show = function(){
	
	this.box.css("display","block");
	this.box.animate({
		right:"-=300",
		opacity:'0'
	},0).animate({
		right:"+=300",
		opacity:"1"
	},400);
};
Dialog.prototype.hide = function(){
	this.box.animate({
		right:"-=300",
		opacity:'1'
	},400).animate({
		right:"+=300",
		opacity:"0"
	},0,function(){
		$(this).hide(0);
	});
	//this.box.css("display","none");
};
Dialog.prototype.setTitle = function(node){
	this.title = node;
	this.box.find(".dialog-title").html(this.title);
};
Dialog.prototype.setBody = function(node){
	this.body = $(node);
	this.box.find(".dialog-body").html(this.body);
};
Dialog.prototype.setFooter = function(node){
	this.footer = $(node);
	this.box.find(".dialog-footer").html(this.footer);
};
Dialog.prototype.appendBody = function(node){
	this.body.append(node);
	
};
}catch(e){
	alert(e);
}

function Dialog(obj){
	obj = obj || {};
	this.type = obj.type || 0;
	this.title = obj.title || "";
	this.titleAligin = obj.titleAligin || "center";
	this.body = obj.body || null;
	this.footer = obj.foot || null;
}
//
Dialog.prototype.popup = function(){
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
	var box = $("<div></div>").addClass(this.type);;
	
};

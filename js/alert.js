function Alert(obj){
	obj = obj || {}; 
	this.body = obj.body || null;
	this.box = $("<div></div>").addClass("alert");
}
Alert.prototype.rander = function(){
	this.box.html($(this.body)).css("right","-50%");
	
	$(document.body).append(this.box);
};
Alert.prototype.show = function(){
	this.box.animate({
		right:"5px"
	},500,"swing");
};
Alert.prototype.hide = function(bool){
	bool = bool || false;
	this.box.animate({
		right:"-50%"
	},500,"swing",function(){
		if(bool){
			$(this).remove();
		}
	});
};

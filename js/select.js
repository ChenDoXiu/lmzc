window.onerror=function(msg,url,l){alert("错误类型"+msg +"\n 错误地址"+url+"\n行数"+l);};
"use strict";
//旧的面向过程的写法，弃用
/*$(".select").each(function(id,se){
	var that = $(this);
	var box = $("<div></div>").addClass("select-box");
	var btn = $("<div></div>").addClass("select").html($(this).find('option:selected').html());
	var opt = $("<div></div>");
	var si = se.selectedIndex;
	$(this).children().each(function(num){
		
		var div = $("<div></div>").addClass("select-item");
		var icon = $("<input value="+$(this).val()+" id="+$(this).val()+""+id+" type='radio' class='radio' name="+that.attr("name")+">");		if(num == si){
			icon.attr("checked","checked");
		}
		var body = $("<label></label>").html($(this).html()).attr("for",$(this).val()+""+id);
		div.append(icon).append(body);
		opt.append(div).addClass("select-sel").css("display","none");
		var val = $(this).html();
		div.click(function(){
			$(this).parent().parent().find(".select").html($(this).find("label").html());
	});
	});
	btn.click(function(){
		$(".select-sel").css("display","none");
		if(opt.css("display") == "none"){
			opt.css("display","block");
		}else{
			opt.css("display","none");
		}
		return false;
	});
	box.append(btn).append(opt);
	that.after(box);
});
$(document).click(function(){
		$(".select-sel").css("display","none");
		});*/
//下拉框构造器
function SelectBox(ojb){
	ojb = ojb||{};
	this.state = ojb.state || 2;
	this.body = $("<div></div>").addClass("select-box");
	this.btn = $("<div></div>").addClass("select");
	this.sel = $("<div></div>").addClass("select-sel");
	this.item = [];
	this.obj.push(this);
}
//存储所有下拉框
SelectBox.prototype.obj = [];
SelectBox.prototype.setState = function(state){
	state = state || this.state;
	if(state == 2){
		this.sel.css("display","block");
		this.state = 1;
	}else{
		this.sel.css("display","none");
		this.state = 2;
	}
};
//渲染
SelectBox.prototype.render = function(node){
	
	this.body.append(this.btn).append(this.sel);
	this.setState(1);
	var that = this;
	$(document).click(function(){
		that.setState(1);
	});
	this.item.forEach(function(item){
		var body = item.getItem();
		
		that.sel.append(body);
	
		$(body).click(function(){
			that.setBtn(item.title);
		});
	});
	
	this.btn.click(function(){
		
		that.obj.forEach(function(item){
			item.setState(1);
		});
		that.setState();
		return false;
	});
	$(node).after(this.body);
};
SelectBox.prototype.setBtn = function(text){
	this.btn.html(text);
};
SelectBox.prototype.appendItem = function(item){
	this.item.push(item);
};
function SelectItem(obj){
	obj = obj || {};
	this.state = obj.state || 2;
	this.name = obj.name || "";
	this.val = obj.val || "";
	this.check = $("<input type='radio'>").addClass("radio").prop("name",this.name).prop("value",this.val);
	this.title = obj.title || "";
	this.info = obj.info || "";
	this.body = $("<div></div>").addClass("select-item");
	var that = this;
	this.body.click(function(){
		//alert(that.state);
		that.checked(2);
	});
	var bol = this.check;
	var bor = $("<div></div>").append(this.title).append(this.info);
	this.body.append(bol).append(bor);
}
SelectItem.prototype.checked = function(state){
	state = state || this.state;
	//alert(state)
	if(state == 2){
	//错误的方法，弃用
		//this.check.attr("checked",true);
		this.check.prop("checked",true);
		this.state = 1;
	}else{
		//this.check.attr("checked",false);
		this.check.prop("checked",false);
		this.state = 2;
		
	}
};
SelectItem.prototype.getItem = function(){
	return this.body;
};
//将所有的系统select变成自定义的select
function setSelect(){
$(".form-select").each(function(){
	var sel = new SelectBox({});
	var name = $(this).attr("name");
	
	$(this).find("option").each(function(){
		var data = $(this);
		var val = data.val() || data.html();
		var title = data.html();
		var info = data.attr("info");
		var opt = new SelectItem({
			name : name,
			val : val,
			title : title,
			info : info
		});
		sel.appendItem(opt);
		if($(this).prop("selected")){
			opt.checked(2);
			sel.setBtn($(this).html());
		}
	});
	sel.render(this);
});

$("select").remove();
}




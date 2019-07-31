window.onload = function(){
function main(){
	setSelect();
	var test = new Message({
		body : "<div>测试弹窗</div>"
	});
	test.rander();
	var i = 0;

	var btn = document.getElementById("btn");
	btn.onclick = function(){
		if(i == 0 ){
			test.show();
			i=1;
		}else{
			test.hide();
			i=0;
		}
		
	};
	promptBox("test","info",function(){promptBox("test","info",function(){promptBox("test","info",function(){},function(){})},function(){})},function(){})
}
main();

};

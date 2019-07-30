window.onload = function(){
function main(){
	setSelect();
	var test = new Dialog({
		type:1,
		title:"ueuejeh"
	});
	test.rander();
	test.show();
	test.setTitle("23333");
	test.setBody($("<div class='text-box text-center'>123</div>"));
	//test.hide();
}
main();
};

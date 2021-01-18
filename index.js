var exper = "";
var last_num = "";
function check_p(){
	var objDiv = document.querySelector("#p");
		objDiv.scrollTop = objDiv.scrollHeight;
}
function exp(val){
	exper += last_num
	if (exper.length < 1) {
		exper += 0;
	}
	exper += " " + val + " ";
	document.querySelector('#p').value = exper;
	document.querySelector('#inp').value = "";
	check_p();
	last_num = "";

}
function int(vl){
	if (last_num.length <= 10) {
			last_num += vl;
	}
	document.querySelector('#inp').value = last_num;
}
function sub(){
	exper += last_num;
	var x = eval(exper);
	last_num = x;
	document.querySelector('#inp').value = x;
	document.querySelector('#p').value = exper + " =";
	check_p();
	exper = "";
}
function clr(){
	last_num = "";
	exper = "";
	document.querySelector('#p').value = exper;
	document.querySelector('#inp').value = "";
}
function change_sign(){
	last_num = eval("-1*"+last_num);
	document.querySelector('#inp').value = last_num;
}
function check(e, val){
	last_num = document.querySelector("#inp").value;
}
function check_len(e, val){
	var key = e.keyCode ? e.keyCode : e.which;
	if ( key != 8 && last_num.length > 10) {
		e.preventDefault();
	}
}

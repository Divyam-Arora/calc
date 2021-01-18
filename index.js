var exper = "";
var last_num = "";
function exp(val){
	if (exper.length < 1) {
		exper += 0;
	}
	exper += " " + val + " ";
	document.querySelector('#display p').innerHTML = exper;
	document.querySelector('#display input').value = "";
	last_num = "";

}
function int(vl){
	last_num += vl;
	exper += vl;
	document.querySelector('#display input').value = last_num;
}
function sub(){
	var x = eval(exper);
	last_num = x;
	document.querySelector('#display input').value = x;
	document.querySelector('#display p').innerHTML = exper + " =";
	exper = last_num;
}
function clr(){
	last_num = "";
	exper = "";
	document.querySelector('#display p').innerHTML = exper;
	document.querySelector('#display input').value = "";
}
function change_sign(){
	last_num = eval("-1*"+last_num);
	document.querySelector('#display input').value = last_num;
}
function check(e, val){
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 8 || key == 13 || (key >= 48 && key <= 57) || key == 37 || key == 43 || key == 45 || key == 47 || key== 61 || key == 42 || key == 46) {
		if (key == 13 || key == 61) {
			sub();
			return 0;
		}
		if (key == 37 || key == 37 || key == 43 || key == 45 || key == 47 || key == 42) {
			last_num = document.querySelector('#display input').value;
			exper += last_num;
			exp(String.fromCharCode(key));
			return 0;
		}
	}
	else{
		e.preventDefault();
	}
}
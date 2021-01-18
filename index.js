var exper = "";
var last_num = "";
function exp(val){
	exper += last_num
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
	document.querySelector('#display input').value = last_num;
}
function sub(){
	exper += last_num;
	var x = eval(exper);
	last_num = x;
	document.querySelector('#display input').value = x;
	document.querySelector('#display p').innerHTML = exper + " =";
	exper = "";
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

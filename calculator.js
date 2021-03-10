function expr(value){
	var exp=document.getElementById('expression').value;

	if(exp.length==1 && exp==0)
		exp=value;
	else if(exp.length==1 && exp=='-' && !isNaN(value))
		exp=exp+value;
	else if(exp.length==1 && (exp=='*'||exp=='/'||exp=='+'||exp=='-') && isNaN(value))
			exp=value;
		else if((exp=='*'||exp=='/'||exp=='+')&& !isNaN(value))
			exp=value;
	else{
		if(isNaN(exp.slice(exp.length-1,exp.length))&&isNaN(value))
			exp=exp.slice(0,exp.length-1)+value;
		else
			exp=exp+value;
	}
	document.getElementById('expression').value=exp;
}

function solve(){
	try{
		var val=document.getElementById("expression").value;
		if(!(eval(val)===undefined))
			document.getElementById('expression').value=eval(val)*10/10;
	}
	catch{
		alert('Write correct expression');
	}
}

function clr(){
	document.getElementById("expression").value="";
}

function del(){
	var val=document.getElementById("expression").value;
	if(val===undefined||val===Infinity)
		clr();
	else
		document.getElementById('expression').value=val.slice(0,val.length-1);
}
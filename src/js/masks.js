function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()",1)
}

function execmask(){
    v_obj.value=v_fun(v_obj.value)
}

function mcep(v){
    v=v.replace(/\D/g,"");             
    v=v.replace(/(\d)(\d{3})$/,"$1-$2");    
    return v;
}

function mtel(v){
    v=v.replace(/\D/g,"");             
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    
    return v;
}
function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
	id('telefone').onkeyup = function(){
		mask( this, mtel );
    }
    id('cep').onkeyup = function(){
		mask( this, mcep );
	}
}


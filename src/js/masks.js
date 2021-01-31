function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout(execMask(),1)
}

function execMask(){
    v_obj.value=v_fun(v_obj.value)
}

function maskCep(v){
    v=v.replace(/\D/g,"");             
    v=v.replace(/(\d)(\d{3})$/,"$1-$2");    
    return v;
}

function maskTel(v){
    v=v.replace(/\D/g,"");             
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    
    return v;
}
function id( element ){
	return document.getElementById( element );
}

window.onload = function(){
	id('telefone').onkeyup = function(){
		mask( this, maskTel );
    }
    id('cep').onkeyup = function(){
		mask( this, maskCep );
	}
}


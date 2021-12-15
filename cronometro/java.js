var tempoInicial=null
var tempoFinal=null
var tempoDecorrido = null
var tempo=null
var myInterval
function verificar(inicial,final,resultado) {
    if(window.document.querySelector('#botao').innerText=='Iniciar'){
        start(inicial,final,resultado)
    }else if(window.document.querySelector('#botao').innerText=='Pausar'){
        pausar(inicial,final,resultado)
    }
}

function start(inicial,final,resultado){
    if (tempoDecorrido==null){
        tempoInicial = Date.now()
    }else{
        tempoInicial = Date.now()-tempoDecorrido
    }
        contar(inicial,final,resultado)
        window.document.querySelector('#botao').innerText='Pausar'

}
function pausar(inicial,final,resultado){
    clearInterval(myInterval);
    window.document.querySelector('#botao').innerText='Iniciar'
    
}
function contar(inicial,final,resultado){
        myInterval= setInterval(function(){
            tempoFinal = Date.now()
            tempoDecorrido = tempoFinal-tempoInicial
            tempo = new Date(tempoDecorrido)
            resultado.innerHTML=tempo.getHours()-21+':'+tempo.getMinutes()+':'+tempo.getSeconds()+'.'+tempo.getMilliseconds()
        },100)
    }
function zerar(resultado){
    pausar()
    resultado.innerHTML = null
    tempoInicial=null
    tempoFinal=null
    tempoDecorrido = null
    tempo=null

}
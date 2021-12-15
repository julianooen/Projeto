var inteira =true
function seletor(lampada){
    if(window.document.getElementById('botao').innerText=='Liga'){
        ligar(lampada)
    } else if(window.document.getElementById('botao').innerText=='Desliga'){
        desligar(lampada)
    }
}
function ligar(lampada){
    if(inteira){
        lampada.setAttribute('src','img/lampada_acessa.jpg')
        window.document.getElementById('botao').innerText='Desliga'
    }
}
function desligar(lampada){
    if(inteira){
        lampada.setAttribute('src','img/lampada_apagada.jpg')
        window.document.getElementById('botao').innerText='Liga'
    }
}
function queimar(lampada){
    lampada.setAttribute('src','img/lampada_quebrada.jpg')
    inteira = false
}
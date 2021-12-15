var myInterval=null
var cor = null
function verde(semaforo){
    semaforo.src='./img/verde.png'
    cor = 'verde'
    clearInterval(myInterval)
    myInterval=null
}
function vermelho(semaforo){
    semaforo.src='./img/vermelho.png'
    cor = 'vermelho'
    clearInterval(myInterval)
    myInterval=null
}
function amarelo(semaforo){
    semaforo.src='./img/amarelo.png'
    cor = 'amarelo'
    clearInterval(myInterval)
    myInterval=null
}
function automatico(semaforo){
    if (myInterval==null){
        myInterval = setInterval(function(){
            if (cor=='amarelo'|cor==null){
                semaforo.src='./img/vermelho.png'
                cor = 'vermelho'
            }else if(cor=='vermelho'){
                semaforo.src='./img/verde.png'
                cor = 'verde'
            }else{
                semaforo.src='./img/amarelo.png'
                cor = 'amarelo'
            }
        },500)
    }
}
class Registro{
    constructor(){
        this.id=1;
        this.array=[];
    }
    cadastrar(historico,data,valor,tbody,valorBotao){
        
        if(this.verifica(historico,data,valor)){

            let registro = {};
            registro.id =this.id;
            registro.historico = historico.value;
            registro.data = data.value;
            registro.valor = valor.value;
            this.array.push(registro);
            this.id++;
            this.inserirDadosTabela(tbody);

            if(valorBotao.innerText=='Cadastrar entrada'){
                
                window.document.getElementById('totalEntradas').innerHTML= parseFloat(window.document.getElementById('totalEntradas').innerHTML)+ parseFloat(valor.value)
            }else{
                window.document.getElementById('totalSaidas').innerHTML= parseFloat(window.document.getElementById('totalSaidas').innerHTML)+ parseFloat(valor.value)
            }

            window.document.getElementById('totalFinal').innerHTML= parseFloat(window.document.getElementById('totalEntradas').innerHTML) - parseFloat(window.document.getElementById('totalSaidas').innerHTML)
            this.limpaCampos(historico,data,valor);
        }
    }
    inserirDadosTabela(tbody){
        let tabela = tbody;
        tabela.innerText='';
        for(let i =0;i<this.array.length;i++){
            
            let tr = tabela.insertRow()
            let tr_id=tr.insertCell()
            let tr_data=tr.insertCell()
            let tr_historico=tr.insertCell()
            let tr_valor=tr.insertCell()
            

            tr_id.innerText=this.array[i].id
            tr_data.innerText=this.array[i].data
            tr_historico.innerText=this.array[i].historico
            tr_valor.innerText=this.array[i].valor
            
        }

    }
    verifica(historico,data,valor){
        var msg=''
        if(historico.value==''){
            msg+='-Preencha o campo histórico \n'
        }
        if(data.value==''){
            msg+='-Preencha o campo data \n'
        }
        if(valor.value==''){
            msg+='-Preencha o campo valor \n'
        }
        if(msg==""){
            return true
        }else{
            alert(msg)
            return false;
        }
    }

    limpaCampos(historico,data,valor){
        historico.value="";
        data.value='';
        valor.value='';
    }

}

var entrada = new Registro()
var saida = new Registro()

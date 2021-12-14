class Aluno{
    constructor(){
        this.id=1;
        this.arrayAlunos=[];
        this.editid=null;
        this.dados=null;
    
    }
    salvar(){
        let aluno = this.lerDados();

        if(this.verificaDados(aluno)){
            if(this.editid==null){
                this.adicionar(aluno);
                    alert('Aluno cadastrado com sucesso!')
            }   else{
                if(confirm('Deseja realmente realizar esta alteração?')){
                    this.atualizar(this.editid, aluno);
                    alert('Aluno atualizado com sucesso!')
                }
            } 
        }
        console.log(this.arrayAlunos)

        this.listaTabela();
        if(this.dados==null){
            this.cancelar();
        }
        this.dados=null;
    }
    listaTabela(){
        let tbody = window.document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0 ; i<this.arrayAlunos.length ; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_fone = tr.insertCell();
            let td_dataNas = tr.insertCell();
            let td_dataCad = tr.insertCell();
            let td_dataAlt = tr.insertCell();
            let td_notaFim = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_id.classList.add('center');
            td_nome.innerText = this.arrayAlunos[i].nome;
            td_fone.innerText = this.arrayAlunos[i].fone;
            td_dataNas.innerText = this.arrayAlunos[i].dataNas;
            td_dataCad.innerText = this.arrayAlunos[i].dataCad;
            td_dataAlt.innerText = this.arrayAlunos[i].dataAlt;
            td_notaFim.innerText = this.arrayAlunos[i].notaFim;

            let imgEdit = window.document.createElement('img');
            imgEdit.src ='imagens/editar.png'
            imgEdit.setAttribute('onclick','aluno.editar('+ JSON.stringify(this.arrayAlunos[i]) +')')
            let imgExcluir =window.document.createElement('img');
            imgExcluir.src='imagens/deletar.png'
            imgExcluir.setAttribute('onclick','aluno.deletar('+ this.arrayAlunos[i].id +')')
            td_acao.appendChild(imgEdit);
            
            td_acao.appendChild(imgExcluir);
            td_acao.classList.add('center');
      

        }
    }
    adicionar(aluno){

        this.arrayAlunos.push(aluno);
        this.id++;
    }
    atualizar(id, aluno){
        for(let i =0; i<this.arrayAlunos.length;i++){
            if(this.arrayAlunos[i].id==id){
                this.arrayAlunos[i].nome=aluno.nome
                this.arrayAlunos[i].fone=aluno.fone
                this.arrayAlunos[i].dataNas=aluno.dataNas
                this.arrayAlunos[i].dataCad=aluno.dataCad
                this.arrayAlunos[i].dataAlt=dataAtual;
                this.arrayAlunos[i].notaFim=aluno.notaFim
            }
        }
    }
    editar(aluno){
        this.editid=aluno.id;
        window.document.getElementById('nome').value=aluno.nome
        window.document.getElementById('fone').value=aluno.fone
        window.document.getElementById('dataNas').value=aluno.dataNas
        window.document.getElementById('dataCad').value=aluno.dataCad
        window.document.getElementById('dataAlt').value=aluno.dataAlt
        window.document.getElementById('notaFim').value=aluno.notaFim
        window.document.getElementById('botao').innerText='Atualizar'
    }

    lerDados(){


        let aluno={}
        aluno.id = this.id
        aluno.nome = document.getElementById('nome').value;
        aluno.fone = document.getElementById('fone').value;
        aluno.dataNas = document.getElementById('dataNas').value;
        if(this.editid==null){
            aluno.dataCad = dataAtual;
        }else{
            aluno.dataCad = document.getElementById('dataCad').value;
        }
        aluno.dataAlt = dataAtual;
        aluno.notaFim = document.getElementById('notaFim').value;
        return aluno
    }
    verificaDados(aluno){
        let msg ='';
        if(aluno.nome==''){
            msg+='- informe o nome do aluno \n';
        }
        if(aluno.fone==''){
            msg+='- informe o número do telefone \n';
        }
        if(aluno.dataNas==''){
            msg+='- informe a data de nascimento \n';
        }
        if(aluno.notaFim==''){
            msg+='- informe a nota final \n';
        }
        if(msg!=''){
            alert(msg)
            this.dados=1;
            return false
        }
        return true
    }
    cancelar(){
        window.document.getElementById('nome').value = '';
        window.document.getElementById('fone').value = '';
        window.document.getElementById('dataNas').value = '';
        window.document.getElementById('dataCad').value = '';
        window.document.getElementById('dataAlt').value = '';
        window.document.getElementById('notaFim').value = '';

        document.getElementById('botao').innerText = 'Salvar';
        this.editid = null;
    }
    deletar(id){
        if(confirm('Deseja realmente deletar o aluno selecionado?')){
            let tbody = window.document.getElementById('tbody');
            for(let i = 0; i<this.arrayAlunos.length;i++){
                if(this.arrayAlunos[i].id==id){
                    this.arrayAlunos.splice(i,1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

}
var aluno = new Aluno();
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = ano + '-' + mes + '-' + dia;
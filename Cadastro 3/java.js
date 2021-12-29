class Aluno{
    constructor(){
        this.id = 0;
        this.verificaAcao = '';
        this.dadosAlunos =[];
        this.idDeleteAtt = '';        
    }

    adicionar(nome,fone,data,nota){
        this.verificaAcao = 'incluir';
        if (this.confirmaAcao()&&this.verificaCampos(nome,fone,data,nota)){
            this.adicionaDadosArray(nome,fone,data,nota);
            this.criaTabela(); 
            this.limpaCampos();
            console.log(this.dadosAlunos)  //excluir
        };
    };

    criaTabela(){
       
        let divPai = window.document.querySelector('.dados')
        divPai.innerHTML = ''

        let divFilho = divPai.appendChild(document.createElement('div'))
        divFilho.classList.add('dadosCab')
        divFilho.innerHTML = 'Nome'

        divFilho = divPai.appendChild(document.createElement('div'))
        divFilho.classList.add('dadosCab')
        divFilho.innerHTML = 'Telefone'

        divFilho = divPai.appendChild(document.createElement('div'))
        divFilho.classList.add('dadosCab')
        divFilho.innerHTML = 'Data de Nascimento'

        divFilho = divPai.appendChild(document.createElement('div'))
        divFilho.classList.add('dadosCab')
        divFilho.innerHTML = 'Nota'

        divFilho = divPai.appendChild(document.createElement('div'))
        divFilho.classList.add('dadosCab')
        divFilho.innerHTML = 'Status'

        for(let i in this.dadosAlunos){
            if(this.dadosAlunos[i].exibir){
                divFilho =  divPai.appendChild(document.createElement('div'))
                divFilho.innerHTML = this.dadosAlunos[i].nome;
                divFilho.setAttribute('id', this.dadosAlunos[i].id);
                divFilho.setAttribute('onclick', 'aluno.copiaDados(id)');

                divFilho =  divPai.appendChild(document.createElement('div'))
                divFilho.innerHTML = this.dadosAlunos[i].fone;
                divFilho.setAttribute('id', this.dadosAlunos[i].id);
                divFilho.setAttribute('onclick', 'aluno.copiaDados(id)');

                divFilho =  divPai.appendChild(document.createElement('div'))
                divFilho.innerHTML = this.dadosAlunos[i].data;
                divFilho.setAttribute('id', this.dadosAlunos[i].id);
                divFilho.setAttribute('onclick', 'aluno.copiaDados(id)');

                divFilho =  divPai.appendChild(document.createElement('div'))
                divFilho.innerHTML = this.dadosAlunos[i].nota;
                divFilho.setAttribute('id', this.dadosAlunos[i].id);
                divFilho.setAttribute('onclick', 'aluno.copiaDados(id)');
                
                divFilho =  divPai.appendChild(document.createElement('div'))
                divFilho.innerHTML = this.dadosAlunos[i].nota>=7?'Aprovado':'Reprovado';
                divFilho.setAttribute('id', this.dadosAlunos[i].id);
                divFilho.setAttribute('onclick', 'aluno.copiaDados(id)');
            }
        }
    }
    copiaDados(id){
        window.document.querySelector('#nome').value = this.dadosAlunos[id].nome;
        window.document.querySelector('#fone').value = this.dadosAlunos[id].fone;
        window.document.querySelector('#data').value = this.dadosAlunos[id].data;
        window.document.querySelector('#nota').value = this.dadosAlunos[id].nota;

        this.idDeleteAtt = id
        
        window.document.querySelector('#botaoAdd').disabled = true

    }

    adicionaDadosArray(nome,fone,data,nota){
        let objAluno = {
            id: this.id,
            nome: nome.value,
            fone: fone.value,
            data: data.value,
            nota: nota.value,
            exibir: true,
        };
        
        this.dadosAlunos.push(objAluno)
        
        this.id++
    }

    confirmaAcao(){
        return confirm(`Deseja realmente ${this.verificaAcao} o usuário?`);
    };

    verificaCampos(nome,fone,data,nota){
        let msg = 'Erro:\n';
        if(nome.value == ''){msg += '- Campo nome é obrigatório!\n'};
        if(fone.value == ''){msg += '- Campo telefone é obrigatório!\n'};
        if(data.value == ''){msg += '- Campo data de nascimento é obrigatório!\n'};
        if(nota.value == ''){msg += '- Campo nota é obrigatório!\n'};

        if (msg != 'Erro:\n'){
            alert(msg);
        };

        return msg == 'Erro:\n';
    };

    atualizar(nome,fone,data,nota){
        this.verificaAcao = 'atualizar';
        if (this.confirmaAcao() && this.idDeleteAtt != ''){
            this.dadosAlunos[this.idDeleteAtt].nome = nome.value;
            this.dadosAlunos[this.idDeleteAtt].fone = fone.value;
            this.dadosAlunos[this.idDeleteAtt].data = data.value;
            this.dadosAlunos[this.idDeleteAtt].nota = nota.value;

            this.criaTabela();
           
            this.cancelar();
        }else if(this.idDeleteAtt!=''){

        }else{
            alert('Selecione um campo da tabela válido!')
        }

    };

    excluir(){
        this.verificaAcao = 'excluir';
        if(this.confirmaAcao() && this.idDeleteAtt != ''){
            this.dadosAlunos[this.idDeleteAtt].exibir = false

            this.criaTabela(); 
            
            this.cancelar();
        }else if(this.idDeleteAtt != ''){
            
        }else{
            alert('Selecione um campo da tabela válido!')
        }

    };

    limpaCampos(){
        window.document.querySelector('#nome').value = '';
        window.document.querySelector('#fone').value = '';
        window.document.querySelector('#data').value = '';
        window.document.querySelector('#nota').value = '';
    }
    cancelar(){
        window.document.querySelector('#botaoAdd').disabled = false;

        this.idDeleteAtt = '';
        
        this.limpaCampos()
    }
};

var aluno = new Aluno();

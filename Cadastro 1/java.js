var pessoas;

function inserir(){
    
    let nome = window.document.getElementById('nome').value;
    let fone = window.document.getElementById('fone').value;
    let dNas = window.document.getElementById('dNas').value;
    let nota = window.document.getElementById('nota').value;
    if(nome==''|fone==''|dNas==''|nota==''){return alert('Campos nome, telefone, data e nota são de preencimento obrigatório!');}
    window.document.getElementById('titulo').innerHTML = 'Alunos cadastrados'
    window.document.getElementById('menu').style.display='inline';
    let tabela = window.document.getElementById('tabCad');
    let tabLinhas = tabela.rows.length;
    let tabColunas = tabela.rows[tabLinhas-1].cells.length;
    let linhaNova = tabela.insertRow(tabLinhas);
    linhaNova.id = 'tr'+tabLinhas;

    for (let j = 0; j < tabColunas; j++) {
        nova = linhaNova.insertCell(j);
       switch (j){
           case 0:
                nova.innerHTML = nome;
                break;
            case 1:
                nova.innerHTML = fone;
                break;
            case 2:
                nova.innerHTML = dNas;
                break;
            case 3:
                nova.innerHTML = nota;
                break;
            case 4:
                nova.innerHTML = "<a href='#' onclick='deletarLinha()'> ❌deletar<a>"
                //'❌deletar';
                break;    

       }
    }
    mostrarTabela();
}

function mostrarCadastro(){
    window.document.getElementById('bCancelar').style.display='inline';
    window.document.getElementById('cad').style.display='inline';
    window.document.getElementById('lista').style.display='none';
    window.document.getElementById('menu').style.display='none';
    window.document.getElementById('titulo').innerHTML = 'Cadastrar novo aluno'
    
}
function mostrarTabela(){
    window.document.getElementById('titulo').innerHTML = 'Alunos cadastrados'
    window.document.getElementById('menu').style.display='inline';
    window.document.getElementById('bCancelar').style.display='none';
    window.document.getElementById('cad').style.display='none';
    window.document.getElementById('lista').style.display='inline';
    
}
function deletarLinha(){
    var index;
    pessoas= window.document.getElementById('tabCad');
    if(confirm('Deseja realmente excluir este registro?')==true){    
        for(let i = 0; i<pessoas.rows.length;i++){
            pessoas.rows[i].onclick = function(){
                index = this.rowIndex;
                if(index==i&&index!=0){
                    pessoas.deleteRow(index);
                    return;
                }
            }
        }
    }return;
    
}

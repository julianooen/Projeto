var tabela, index;

function cadastrarNovo(nome, fone, nDas, nota){
    if(nome==''|fone==''|nDas==''|nota==''){return alert('Campos nome, telefone, data de nascimento e nota são obrigatórios!')}
    tabela = window.document.querySelector('#tCad');
    let numLinhas = tabela.rows.length;
    let novaLinha = tabela.insertRow(numLinhas);
    
    let cellNome = novaLinha.insertCell(0);
    let cellFone = novaLinha.insertCell(1);
    let cellData = novaLinha.insertCell(2);
    let cellNota = novaLinha.insertCell(3);

    cellNome.innerHTML = nome;
    cellFone.innerHTML = fone;
    cellData.innerHTML = nDas;
    cellNota.innerHTML = nota;
    alert('Aluno cadastrado com sucesso!');
    preencher();
    limpaCampos();
}

function atualizar(nome, fone, nDas, nota){

    if(nome==''|fone==''|nDas==''|nota==''|index==0){return alert('Você primeiro deve clicar sobre o registro que deseja atualizar')}
    tabela.rows[index].cells[0].innerHTML = nome;
    tabela.rows[index].cells[1].innerHTML = fone;
    tabela.rows[index].cells[2].innerHTML = nDas;
    tabela.rows[index].cells[3].innerHTML = nota;
    limpaCampos();
    
}
function preencher(){
    for(let i = 0;i<tabela.rows.length;i++){
        tabela.rows[i].onclick = function(){
            index = this.rowIndex;
            window.document.getElementById('nome').value = tabela.rows[index].cells[0].innerText;
            window.document.getElementById('fone').value = tabela.rows[index].cells[1].innerText;
            window.document.getElementById('nDas').value = tabela.rows[index].cells[2].innerText;
            window.document.getElementById('nota').value = tabela.rows[index].cells[3].innerText;
        }
    }
}

function deletar(nome, fone, nDas, nota){
    if(nome==''|fone==''|nDas==''|nota==''){return alert('Você primeiro deve clicar sobre o registro que deseja excluir')
    }else if(confirm('Deseja realmente excluir este registro?')==true){
        for(let i = 0;i<tabela.rows.length;i++){
            if(index == i &&index!=0){
                tabela.deleteRow(index);
                limpaCampos();
            }else if (index==0){return alert('escolha um campo válido!')}
        }
        index=0;
        
    }
}

function limpaCampos(){
    window.document.getElementById('nome').value = '';
    window.document.getElementById('fone').value = '';
    window.document.getElementById('nDas').value = '';
    window.document.getElementById('nota').value = '';
    index=0;
}

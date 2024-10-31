const form = document.getElementById('formulario-cadastro');
const contatos = [];
const numeros = [];
let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)){
        alert(`A lista ja possui um contato salvo como '${inputNomeContato.value}'. Por  favor, utilize um nome diferente.`)
    }
    else if (numeros.includes(inputNumeroContato.value)){
        alert(`Identificamos que o número '${inputNumeroContato.value}' já está cadastrado na lista. Por favor, informe um número ainda não cadastrado.`)
    }
    else { 
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNumeroContato.value}</td>`;
        linha += '</tr>'
    
        linhas += linha
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela= document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

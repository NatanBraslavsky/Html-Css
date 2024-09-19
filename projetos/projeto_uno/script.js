var pontuacao = document.getElementById('pontuacao')
let total = 0
var nome = document.getElementById('nome')
function pont(){
    var pontInput = Number(document.getElementById('inum').value)
    total+=pontInput
    pontuacao.innerHTML = `${total} pts`
    var inputField = document.getElementById('inum')
    inputField.value = ''
    inputField.focus();
}

nome.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do formulário
    }
})

document.getElementById('inum').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do formulário
        pont(); // Chama a função pont()
    }
});
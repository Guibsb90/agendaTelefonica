      
        const form = document.getElementById('form-agenda'); 
        const nomes = [];
        const numeros = [];
        let linhas = '';

        form.addEventListener('submit', function(e){
          e.preventDefault();

          adicionaLinha();

          atualizaTabela();
        });

        function adicionaLinha(){
        const inputNome = document.getElementById('nome');
        const inputNumero = document.getElementById('numero');

        if (nomes.includes(inputNome.value)){
        alert(`O contato : ${nomes} já foi salvo`);
        } else {
        nomes.push(inputNome.value)
        numeros.push(parseInt(inputNumero.value));
                
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td> ${inputNumero.value}</td>`;
        
        linha += '</tr>';
        
        linhas += linha;
        }

        inputNome.value = '';
        inputNumero.value = '';
        }


function atualizaTabela(){
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas;
}       

//função chama
function chama(){
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    document.getElementById('n1').value = num2;
    document.getElementById('n2').value = num1
    console.log(num1 + ' - ' + num2);
}

//função carrinho de compras
function alterarQtde(quantidade){
    let resultado = document.getElementById('qtd');
    if(quantidade < 0 && resultado.value == 0){
        alert('')
    }
    else
    resultado.value = parseInt(quantidade) + parseInt(resultado.value);
}
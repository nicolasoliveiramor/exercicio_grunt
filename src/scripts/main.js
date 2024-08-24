document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const primeiroNum = parseFloat(document.getElementById('num-1').value)
        const segundoNum = parseFloat(document.getElementById('num-2').value)

        document.getElementById('soma').addEventListener('click', function(){
            resultado = primeiroNum + segundoNum
        })
        document.getElementById('sub').addEventListener('click', function(){
            resultado = primeiroNum - segundoNum
        })
        document.getElementById('multi').addEventListener('click', function(){
            resultado = primeiroNum * segundoNum
        
        })
        document.getElementById('div').addEventListener('click', function(){
            resultado = primeiroNum / segundoNum
        })

        if(primeiroNum === 0 && segundoNum === 0) {
            alert('Impossível calcular 0!')
            document.getElementById('num-1').value = ''
            document.getElementById('num-2').value = ''
        } else {
            document.getElementById('valor-resultado').innerText = resultado
        }
    });
});

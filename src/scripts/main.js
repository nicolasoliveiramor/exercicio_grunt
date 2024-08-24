document.addEventListener('DOMContentLoaded', function() {
    const num1 = document.getElementById('num-1')
    const num2 = document.getElementById('num-2')
    const resultValor = document.getElementById('valor-resultado')

    document.getElementById('soma').addEventListener('click', function() {
        const soma = parseInt(num1.value) + parseInt(num2.value)
        resultValor.textContent = soma
    })

    document.getElementById('sub').addEventListener('click', function() {
        const sub = parseInt(num1.value) - parseInt(num2.value);
        resultValor.textContent = sub;
    });

    document.getElementById('multi').addEventListener('click', function() {
        const multi = parseInt(num1.value) * parseInt(num2.value);
        resultValor.textContent = multi;
    });

    document.getElementById('div').addEventListener('click', function() {
        if (parseFloat(num2.value) === 0) {
            resultValor.textContent = 'Erro: Divisão por zero'
        } else {
            const div = parseFloat(num1.value) / parseFloat(num2.value)
            resultValor.textContent = div.toFixed(2)
        }
    })
})
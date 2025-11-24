document.addEventListener('DOMContentLoaded', () => {

    const formIMC = document.getElementById('form-imc');
    const resultadoIMC = document.getElementById('resultado-imc');

    formIMC.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            exibirResultado('Por favor, insira valores válidos para peso e altura.', 'error');
            return;
        }

        const imc = peso / (altura * altura);
        const classificacao = classificarIMC(imc);

        exibirResultado(`Seu IMC é **${imc.toFixed(2)}** (${classificacao})`, classificacao);
    });

    function classificarIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade Grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidade Grau II (Severa)';
        } else {
            return 'Obesidade Grau III (Mórbida)';
        }
    }

    function exibirResultado(texto, tipo) {
        resultadoIMC.innerHTML = texto;
        resultadoIMC.style.display = 'block';
        
        resultadoIMC.style.backgroundColor = getCorResultado(tipo);
        resultadoIMC.style.color = (tipo === 'Peso Normal') ? '#005600' : '#856404'; 
        resultadoIMC.style.borderColor = (tipo === 'Peso Normal') ? '#c3e6cb' : '#ffeeba'; 
    }

    function getCorResultado(tipo) {
        if (tipo === 'Peso Normal') {
            return '#d4edda'; 
        } else if (tipo === 'Abaixo do Peso') {
            return '#cce5ff'; 
        } else if (tipo === 'Sobrepeso' || tipo.includes('Obesidade')) {
            return '#fff3cd'; 
        } else {
            return '#f8d7da'; 
        }
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.getElementById('menu-principal');

    menuToggle.addEventListener('click', () => {
        menuPrincipal.classList.toggle('open');
    });

    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const termos = document.getElementById('termos').checked;
        
        let validacao = true;

        if (nome.length < 3) {
            alert('O nome deve ter pelo menos 3 caracteres.');
            validacao = false;
        }

        if (!termos) {
            alert('Você deve aceitar os Termos de Serviço.');
            validacao = false;
        }
        
        if (validacao) {
            alert(`Obrigado, ${nome}! Seu cadastro foi enviado com sucesso!`);
            formContato.reset();
        }
    });

});


function pegarNotaAluno() {
    let nota1 = parseInt(document.querySelector('#nota1').value);
    let nota2 = parseInt(document.querySelector('#nota2').value);
    let nota3 = parseInt(document.querySelector('#nota3').value);
    let nota4 = parseInt(document.querySelector('#nota4').value);
    console.log(`nota 1 : ${nota1}`);
    console.log(`nota 2 : ${nota2}`);
    console.log(`nota 3 : ${nota3}`);
    console.log(`nota 4 : ${nota4}`);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(`a media é ${media}`);

    let mediatext = 55;
    let exibirMedia = document.querySelector('#media');
    exibirMedia.textContent = `sua media é ${media}`;

    if (media >= 5) {
        let msgResMeda = document.querySelector('.msg-resultado-media');
            msgResMeda.textContent = "Parabéns vc foi aprovado";
    }else{
          let msgResMeda = document.getElementById('msg-result')
        msgResMeda.innerHTML = "vc foi reprovado, tente novamente!!!";
    }




} 
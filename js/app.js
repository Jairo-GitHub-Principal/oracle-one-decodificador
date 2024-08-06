

function exibirValorCapturado(text) {

    // limpar area para exibição do texto criptografado




    let apresentarTexto = document.querySelector('#textRetornado');
    // let textoRetorno = text;
    apresentarTexto.innerHTML = text;
    console.log(`texto capturado e exibido função exibirValorCapturado é: ${text}`);



}

function criptografarTexto() { // pego o texto digitado pelo usuario e criptografo ele
    let textoDigitado = document.querySelector('#textoCodificar').value;
    console.log(`texto capturado pela função criptografarTexto é: ${textoDigitado}`);
    let textoParaMinusculo = textoDigitado.toLowerCase(); // se caso o user digirar alguma letra maiuscula tudo sera passado para minuscula nessa linha
    let outputText = textoParaMinusculo
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        /** obs.: no codigo acima '.replace(/e/g,'') e assim por diante: A letra g no código .replace(/e/g, 'enter') é uma flag usada na expressão regular para indicar que a substituição deve ser feita globalmente. */

        
        // seleciono o botão que esta oculto para aplicar a regra de css para faze-lo aparecer na tela
        let buttonCopiar = document.querySelector('.container__button_copiar');
        buttonCopiar.style.display = 'block' // antes display:none, agora display:block e o botão aparecera na tela

        // fazer desaparecer a imagen e a msg, que informa que nenhuma msg foi encontrada
        // assim dara espaço para a exibição do texto criptografado ou decriptografado

        let containerRemoverImgText = document.querySelector('.container_img_text');

        containerRemoverImgText.style.display = 'none';


        // aplicar estilos no container que exibe o resultado, para melhorar a visualização e a leitura
        let containerResultado = document.querySelector('.container__img__text_info');
        containerResultado.style.justifyContent ='space-between';

        let exibirTexto = document.querySelector('.exibir__texto');
        exibirTexto.style.paddingTop="50px";
        exibirTexto.style.paddingLeft="8px";
        exibirTexto.style.paddingRigth="8px";
        




        

    exibirValorCapturado(outputText); // chama a função qeu exibe o resultado do texto criptografado e decriptografado, e passa para ela o texto capturado criptografado ou descriptografado
    let linparInput = document.querySelector('#textoCodificar'); /*seleciona o input  */
    linparInput.value = '';   /* limpo o input*/


}

function deCriptografarTexto() { // pego o texto criptografado digitado ou colado pelo usuario e decriptografo ele
    let textoDigitadoCriptografado = document.querySelector('#textoCodificar').value;
    console.log(`texto capturado pela função deCriptografarTexto é: ${textoDigitadoCriptografado}`);

    let outputText = textoDigitadoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    exibirValorCapturado(outputText);

    let linparInput = document.querySelector('#textoCodificar'); /*seleciona o input  */
    linparInput.value = '';   /* limpo o input*/

}


function copiarCriptografadoDecriptografado() { // copiar o texto que foi criptografado ou  descriptografado
                                                // que esta sendo exibido no elemento de apresentação do resultado
    
                                                // seleciona o elemento que apresengo o texto criptografado ou descriptografado
    let textoCopiado = document.querySelector("#textRetornado").innerText; 

    // Cria um elemento de texto temporário
    let tempInput = document.createElement('input');
    tempInput.value = textoCopiado;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto do elemento temporário
    tempInput.select();
    document.execCommand('copy');

    // Remove o elemento temporário
    document.body.removeChild(tempInput);


}


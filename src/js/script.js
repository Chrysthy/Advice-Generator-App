/*
## Passos:

1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
2. Pegar o elemento de **id do conselho** 
3. Pegar o elemento de **descrição do conselho**
4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.
5. Importante que durante a chamada a api seja feito o tratamento dos erros usando o **try-catch,** caso não lembre pode assistir a aula novamente. 
6. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innertText**. A diferença entre innerText e innerHTML: 
    
    O innerHTML pode adicionar ou pegar elementos HTML , já com o innerText isso não é possivel, ele pode apenas atribuir um texto ou pegar o texto de determinado elemento.
    
    Nesse caso, queremos só atribuir um texto, por isso usamos o innerText
    
7. Por fim, basta chamar a função criada.
8. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.

*/

let btn = document.querySelector('.advice-update')
let adviceNumber = document.querySelector('.advice-id')
let adviceDescription = document.querySelector('.advice-description')

async function getAdvice() {

    try {

        const response = await fetch("https://api.adviceslip.com/advice")

        if (!response.ok) {

            throw new Error('Não foi possível obter as informações da API')

        }

        const adviceContent = await response.json();
        const adviceId = `Advice #${adviceContent.slip.id}`;
        const adviceText = `"${adviceContent.slip.advice}"`;

        adviceNumber.innerText = adviceId
        adviceDescription.innerText = adviceText

    } catch (error) {

        console.error("Erro ao carregar as informações da API", error);


    }

}

btn.addEventListener('click', getAdvice)

getAdvice()
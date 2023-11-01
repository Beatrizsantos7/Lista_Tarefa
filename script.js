let input = document.getElementById("input_tarefa");
let addBtn = document.getElementById("addBtn");
let listaCompleta = document.getElementById("addLista");

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    //pegar o valor que foi digitado no input
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ""

    mostrarTarefas()

}

function mostrarTarefas() {
    let novaDiv = ''


    //['comprar café', 'estuda programação']

    minhaListaDeItens.forEach((item, posicao) => {

        novaDiv = novaDiv + ` 


        <div class="item ${item.concluida && "done"}">
            <div class="item-icone">
                <i class="circle"><img width="50" height="50" src="https://img.icons8.com/ios/50/circled.png"
                        alt="circled"  onclick="concluirTarefa(${posicao})"></i>
            </div>

            <div class="item-nome">
                ${item.tarefa}
            </div>
            <div class="item-botao">
                <button class="delete"><img width="30" height="30"
                        src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" 
                        alt="filled-trash" onclick="deletarItem(${posicao})" ></button> 
            </div>

        </div>

        

       
   
   `

    })

    listaCompleta.innerHTML = novaDiv

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    
    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    let tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()
addBtn.addEventListener("click", adicionarNovaTarefa)


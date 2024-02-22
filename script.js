const div = document.querySelector("#lista");
const input = document.querySelector("#input");
let concluidas=[]
let tarefas=[]

function carregar() {
    if(JSON.parse(localStorage.getItem("tarefas"))){
        tarefas=JSON.parse(localStorage.getItem("tarefas"))
    }
    if(JSON.parse(localStorage.getItem("concluidas"))){
        concluidas=JSON.parse(localStorage.getItem("concluidas"))
    }
    
    console.log(tarefas)
    console.log(concluidas)
    atualizar()
}
document.addEventListener("keypress",function checar(e){
    if (e.key==="Enter")
    {
        adicionar()
    }
})


function adicionar(){
    if (tarefas.includes(input.value))(
        alert("ESTE ITEM JA ESTA NA LISTA ADD OUTRO")
    )
    else{tarefas.push(input.value)
    concluidas.push(false)
    atualizar()
    localStorage.setItem("concluidas",JSON.stringify(concluidas))
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
}
}

function atualizar() {
    let tipo
    let tags=``
    let conta=-1
    for (let item of tarefas){
        conta+=1
        if (concluidas[tarefas.indexOf(item)]){
            tipo=`style="opacity:0.2;"`
        }
        else {
            tipo=`style="opacity:1;"`
        }
        tags+=
        `<div ${tipo} id="item">
            <p onclick="mudar(${conta})">${item}</p>
            <img onclick="deletar(${conta})" id="lixeira" src="imagens/lixeira.png">
        </div>
        `
    }
    localStorage.setItem("concluidas",JSON.stringify(concluidas))
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
    div.innerHTML=tags;
};

function deletar(name){
    tarefas.splice(name,1)
    concluidas.splice(name,1)
    atualizar()
}
function mudar(name){
    concluidas.splice(name,1,!concluidas[name])
    atualizar()
}
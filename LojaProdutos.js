const botao = document.getElementsByClassName('botao')//pega cada botão em html
const divcontainer = document.getElementById('container')//onde contem todas as divs

const oculos = [//todas as divs e suas infos (preço, pedidos, avaliações) em um array
{
    div: document.getElementById('oculos1'),
    avaliacao: 4.8,
    preco: 499.99,
    pedidos: 1492
},
{
    div: document.getElementById('oculos2'),
    avaliacao: 3.8,
    preco: 349.99,
    pedidos: 482
},
{
    div: document.getElementById('oculos3'),
    avaliacao: 4.0,
    preco: 279.90,
    pedidos: 386
},
{
    div: document.getElementById('oculos4'),
    avaliacao: 4.9,
    preco: 639.90,
    pedidos: 1823
},
{
    div: document.getElementById('oculos5'),
    avaliacao: 4.8,
    preco: 299.99,
    pedidos: 2333
},
{
    div: document.getElementById('oculos6'),
    avaliacao: 3.7,
    preco: 320.00,
    pedidos: 423
},
{
    div: document.getElementById('oculos7'),
    avaliacao: 4.1,
    preco: 334.90,
    pedidos: 763
},
{
    div: document.getElementById('oculos8'),
    avaliacao: 4.3,
    preco: 494.90,
    pedidos: 693
},
{
    div: document.getElementById('oculos9'),
    avaliacao: 3.5,
    preco: 250.00,
    pedidos: 253
},
{
    div: document.getElementById('oculos10'),
    avaliacao: 4.2,
    preco: 342.90,
    pedidos: 932
},
{
    div: document.getElementById('oculos11'),
    avaliacao: 4.6,
    preco: 423.00,
    pedidos: 893
},
{
    div: document.getElementById('oculos12'),
    avaliacao: 3.9,
    preco: 239.99,
    pedidos: 129
},
{
    div: document.getElementById('oculos13'),
    avaliacao: 3.1,
    preco: 290.00,
    pedidos: 107
},
{
    div: document.getElementById('oculos14'),
    avaliacao: 2.9,
    preco: 190.00,
    pedidos: 92
},
{
    div: document.getElementById('oculos15'),
    avaliacao: 4.7,
    preco: 270.00,
    pedidos: 473
},
]


for(let i = 0; i < botao.length; i++){
    botao[i].addEventListener('click', function(selecionado){

        //menor preço
        if (selecionado.target === botao[0]){
            
            oculos.sort(function(oc1, oc2){//ele vai botar o array em ordem, do menor preço ao maior
                return oc1.preco - oc2.preco
            })

            oculos.forEach(function(obj, pos){//vai fazer a organização das div em html
                divcontainer.insertBefore(obj.div, divcontainer.children[pos])
            })
        }
        //maior preço
        if(selecionado.target === botao[1]){

            oculos.sort(function(oc1, oc2){
                return oc2.preco - oc1.preco
            })

            oculos.forEach((obj, pos) =>{
                divcontainer.insertBefore(obj.div, divcontainer.children[pos])
            })
        }
        //mais comprado
        if(selecionado.target === botao[2]){

            oculos.sort(function(oc1,oc2){
                return oc2.pedidos - oc1.pedidos
            })
            
            oculos.forEach((obj, pos) =>{
                divcontainer.insertBefore(obj.div, divcontainer.children[pos])
            })
        }
        //mais avaliado
        if(selecionado.target === botao[3]){
            
            oculos.sort(function(oc1,oc2){
                return oc2.avaliacao - oc1.avaliacao
            })

            oculos.forEach((obj, pos) =>{
                divcontainer.insertBefore(obj.div, divcontainer.children[pos])
            })
        }
    })
}
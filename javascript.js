// var elem = "<ul>"
// for (let i = 0; i==10; i++) {
    
//     //console.log(i+1)
//     //elem += "<li>" + i + "</li>"
// }
// elem += "</ul>"
// document.getElementById("lista").innerHTML = i

// const ul = document.createElement('ul')
// for (let i = 0; i==10; i++) {
//    ul.innerHTML  += `<li> + ${i+1} + </li>`
// }
// document.body.appendChild(ul)

// const lista = [4500, 3400, 12000, 6700]
// let suma = 0
// for(let i=0; i<lista.length; i++) {
// suma +=lista[i]
// }
// console.log(suma)

// const lista = [4500, 3400, 12000, 6700]
// let suma = 0
// lista.forEach( element => suma += element)
// console.log(suma/lista.length)

// let a = new Array(4500, 3400, 12000, 6700)
// //trzy kropki i wpisac nazwe listy, aby skorzystać z listy która istnieje

// var nowaLista = [...lista, a, 10000, 'numer'].flat()
// console.log(nowaLista)

// // const nowaLista2 = a.concat(lista)
// const nowaLista2 = a.concat(1010)
// console.log(nowaLista2)

// const imie = ["jan", "piotr", "aleksandra", "ala"]
// const newName = imie.map(elem => elem.length)
// console.log(newName)

// const d = imie.map(elem => elem.length)
// console.log(d)

// const nowaB = d.filter(elem => elem % 2 === 0)
// console.log(nowaB)

// const nowaC = imie.filter(elem => elem.length > 5)
// console.log(nowaC)

// const imionaDwa = imie.filter( (elem, i) => i%2===0)
// console.log(imionaDwa)

// const listaUczniow = [
//     {lastName: "kowalski", avg: 5.45},
//     {lastName: "piotrowski", avg: 4.75},
//     {lastName: "mil", avg: 0.99}
// ]

// const wzorowiUczniowie = listaUczniow.findIndex(uczen => uczen.avg >= 4.75)
// console.log(wzorowiUczniowie)
// if (wzorowiUczniowie != -1) {
//     console.log(listaUczniow[wzorowiUczniowie].lastName, listaUczniow[wzorowiUczniowie].avg)
// }

// const listaZdan = ['hello world!', 'bye world!']
// const listaNowaZdan = listaZdan.flatMap(elem => elem.split(" "))
// console.log(listaNowaZdan)
// listaNowaZdan.push('arrivederci')
// listaNowaZdan.push('pluton')
// console.log(listaNowaZdan)
// listaNowaZdan.pop()
// console.log(listaNowaZdan)

const listaUczniow = [
    {lastName: "kowalski", avg: 5.45},
    {lastName: "piotrowski", avg: 4.75},
    {lastName: "mil", avg: 0.99}
]

const section = document.createElement('section')

listaUczniow.forEach( (elem, i, arr) => {
    section.innerHTML += (
    `<h1>uczeń nr ${i+1}</h1>
    <p>nazwisko: ${listaUczniow[i].lastName}. srednia: ${listaUczniow[i].avg}</p>`
    )
    if (i === arr.length -1)
    document.body.appendChild(section)
});

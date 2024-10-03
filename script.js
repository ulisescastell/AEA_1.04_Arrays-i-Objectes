//------------------------------------exercici 1-------------------------------------//

const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => printStudent())



const printStudent = () => {
    const container = document.getElementById("ex1")
    const p = document.createElement("p")
    p.textContent = `${estudiant.nom} té ${estudiant.edat} anys i ha tret un 
    ${estudiant.notes.fisica} en física, un ${estudiant.notes.matematiques} en matemàtiques i un 
    ${estudiant.notes.programacio} en programacio.`
    container.appendChild(p)
    console.log("hola")
}

//--------------------------------------------exercici 2----------------------------------//

const coordenades = [12, 5, 8];

const [x, z, y] = coordenades

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => printCoordinates())

const printCoordinates = () => {
    const container = document.getElementById("ex2")
    const p = document.createElement("p")
    p.textContent = `Les coordenades són X=${x}, la Z=${z} i la Y=${y}`
    container.appendChild(p)
}
 
//--------------------------------------------exercici 3----------------------------------//

const preus = [100, 200, 300, 400];

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => printMap())

const printMap = () => {
    const map = preus.map((preu) => preu + (preu*0.1))
    const container = document.getElementById("ex3")
    const p = document.createElement("p")
    p.textContent = map.join(', ')
    container.appendChild(p)
}

//--------------------------------------------exercici 4----------------------------------//

const edats = [16, 21, 18, 24, 12, 30];

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => printNums())

let printNums = () => {
    const over18 = edats.filter((num) => num >= 18)
    const container = document.getElementById("ex4")
    const p = document.createElement("p")
    p.textContent = over18.join(', ')
    container.appendChild(p)
}

//--------------------------------------------exercici 5----------------------------------//

const notes = [7, 9, 5, 10, 8];

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => printAverage())

let printAverage = () => {
    const average = notes.reduce((amount, currentValue) => amount+currentValue, 0) / notes.length
    const container = document.getElementById("ex5")
    const p = document.createElement("p")
    p.textContent = average
    container.appendChild(p)
}

//--------------------------------------------exercici 6----------------------------------//

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => createProduct("ulises", 100, 4))

const createProduct = (nom, preu, quantitat) => {
    const product = {
        nom: nom,
        preu: preu*0.95,
        quantitat: quantitat,
    }
    console.log(product)

    const container = document.getElementById("ex6")
    const p = document.createElement("p")
    p.textContent = JSON.stringify(product)
    container.appendChild(p)
} 

//--------------------------------------------exercici 7----------------------------------//

const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => afegirAny())

const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};

const afegirAny = () => {
cotxe.any = 2023

const container = document.getElementById("ex7")
const p = document.createElement("p")
p.textContent = JSON.stringify(cotxe)
container.appendChild(p)

}

























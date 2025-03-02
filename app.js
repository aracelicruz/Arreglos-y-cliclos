let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "fresa",
        color: "rojo"
    },
    {
        nombre: "mora",
        color: "verde"
    },
    {
        nombre: "limón",
        color: "verde"
    }
]

let msj = ""

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    //console.log(`${i+1}. ${element.nombre}`)

    if( element.color === "verde" ){
        
        msj += element.nombre + "🐢 <br>"
    }
    
}

document.write("Las frutas verdes son: " + msj)
// import { Usuarios } from "./arrays.js";

function Buscar()
{
    return new Promise((resolve, reject) => {
        if(Usuarios == 0)
        {
            reject(new Error("¡Api no encontrada!"));
        }
        // --> Luego de 3s mostramos el arrays.
        setTimeout(() => {
            resolve(Usuarios);
        }, 3000);

    })
    
}

console.log("🔍 Buscando...");
Buscar()
.then((response) => {
    console.clear();
    console.log("✔ Arrays Encontrado: ", response);
})
.catch((Error)=> {
    console.log("Error en: ", Error);
})
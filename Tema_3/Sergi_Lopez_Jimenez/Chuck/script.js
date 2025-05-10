/**
 * Async y Await
 * 
 * Funciones precedidas por la palabra clave async. 
 * Esto quiere decir que la función siempre devolverá una promesa
 *  (Si no devuelve nada, devuelve undefined)
 * 
 * Await, que debe usarse con async, marca una llamada que devuelve una promesa como síncrona dentro de la invocación de la función asíncrona.
 *  El valor de retorno de await es la promesa, asignable a una variable.
 * 
 * Las siguientes líneas de código no se ejecutan hasta que las promesas se resuelven.
 */

const fetchJoke = async () =>{

    let url="https://api.chucknorris.io/jokes/random"
    let response = await fetch(url);
    let json = await response.json();
    let joke = json.value;

    document.getElementById("pChiste").innerHTML = joke;

    return joke;
}

(async () => {

    console.log("Ejecutando funcion fetchSincrono");
    let factSincrono = await fetchJoke();
    console.log(factSincrono);
    console.log("fetchSincrono ha terminado");

})();
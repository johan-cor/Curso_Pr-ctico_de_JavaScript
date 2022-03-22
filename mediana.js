//const lista = [100,200,300,400,500,600];




function esPar(numero){
    if(numero % 2===0){
        return true;
    }else {
        return false;
    }
}


function calcularMediana(lista){
    const mitarLista = lista.length/2;
    let mediana;

    if (esPar(lista.length)){
        const elemento1=lista[parseInt(mitarLista)];
        const elemento2 = lista[parseInt(mitarLista)] - 1;
    
        mediana = (elemento1 + elemento2)/2;
        console.log(mediana);
    }else{
    
        mediana = lista[parseInt(mitarLista)];
        console.log(mediana);
    
    }

    return mediana;
}



calcularMediana([100,200,300,400,500,600])







import { Colombia } from "./salarios";

const salarioCol = Colombia.map(
    function (persona){
        return persona.salario
    }
);


const salarioColSorted = salarioCol.sort(
    function(salarioA,salarioB){
        return salarioA - salarioA;
    }
)

function esPar(numero){
    return (numero % 2 ===0);
}




function medianaSalarios(lista){
    const mitad = parseInt(lista,length / 2);

    if(esPar(lista.length)){
        presoniramiad1 =lista[mitad -1 ];
        presoniramiad1 =lista[mitad ];

        return (presoniramiad1 + presoniramiad2) / 2

    }else {
        return lista[mitad];

    }
}


console.log(medianaSalarios(salarioColSorted));

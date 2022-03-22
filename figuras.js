//Código del cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("lados del cuadrado miden:" + ladoCuadrado+ "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log(`el perimetro del cuadrado es ${perimetroCuadrado}`);

function perimetroCuadrado (lado){
    
    return lado * 4;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log(`el area del cuadrado es ${areaCuadrado}cm^2`);


function areaCuadrado (areaCua){
    return areaCua * areaCua;
}

console.groupEnd("cuadrado");


// Código del triangulo

console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const alturaTriangulo = 5.5;
//const base = 4;

//console.log (`los lados del triangulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${base}cm`)

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
//console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`)
//console.log(`La altura del triangulo es: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

//const areaTriangulo= (base * alturaTriangulo) / 2; 
//console.log(`El area del triangulo es : ${areaTriangulo}cm^2`);

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd("Triangulo");


//Código del circulo

console.group("Circulo");

//const radioCirculo = 4;
//console.log(`El radio del circulo es: ${radioCirculo}cm`);
//const diametroCirculo = radioCirculo*2;
//console.log(`El diametro del circulo es: ${diametroCirculo}cm`);
//const PI = Math.PI;
//console.log(`PI es: ${PI}`);


//const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
}

//const areaCirculo = (radioCirculo*radioCirculo) * PI;

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

//console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);
//console.log(`El area del circulo es: ${areaCirculo}cm^2`);

console.groupEnd("Circulo");

// analisis para el cuadrado
function calcularPerimetrocuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetroCua = perimetroCuadrado(value);
    alert(perimetroCua);
}

function calcularArea(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//analisis para el triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1").value;
    const input2 = document.getElementById("inputLado2").value;
    const basee = document.getElementById("base").value;
    

    const perimetrotria = perimetroTriangulo(Number(input1),Number(input2),Number(basee));
    alert(perimetrotria);

}

function calcularAreatriangulo(){

    const altura = document.getElementById("altura").value;
    const basee = document.getElementById("base").value;
    

    const areatria = areaTriangulo(Number(basee),Number(altura));
    alert(areatria);

}
//analisis para el circulo
function calcularPerimetroCirculo(){
    const redioCir = document.getElementById("radio").value;

    const perimetroCir = perimetroCirculo(redioCir);
    alert(perimetroCir);

}

function calcularAreaCirculo(){
    const redioCir = document.getElementById("radio").value;

    const areaCir = areaCirculo(redioCir);
    alert(areaCir);

}

// analisis para el triangulo Isoscele

function perimetroIsosceles(lado1,lado2,base){
    if(lado1 != lado2){
        console.error("los lados tienen que se iguales");
    }else{

        return lado1 + lado2 + base;
    }


}

function calcularPerimetroIsos(){
    const input1 = document.getElementById("isos1").value;
    const input2 = document.getElementById("isos2").value;
    const basee = document.getElementById("isosbase").value;

    const perimetroIsos = perimetroIsosceles(Number(input1),Number(input2),Number(basee));
    alert(perimetroIsos)
}

function calcularAreaIsos(){

}


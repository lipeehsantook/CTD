// Funcao declarada

function helooWorld(){

    console.log("Heloo everbody")
}

helooWorld();
helooWorld();
helooWorld();

// Funcao expressa 

let somar = function (numA,numB){
 return numA + numB;
};

console.log(somar(1 , 9));


// Escopo Local

function ola(){
let s = "ooiiee";
return s;

}
console.log(ola());

// Escopo Global


let aMelhorLinguagem = "Javascript";
function estouAprendendo(){
return aMelhorLinguagem;

}
 console.log(estouAprendendo());
 console.log(aMelhorLinguagem);
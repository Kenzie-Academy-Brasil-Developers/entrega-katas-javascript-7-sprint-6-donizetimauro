
function newForEach(array, callback) {
    for(let i=1; i<array.length; i++){
        callback(array[i]);
    }
    return array;
}

function newMap(array, callback) {
    let resultado = [];
    for(let i=0; i<array.length; i++){
        resultado.push(callback(array[i]))
    }
    return resultado;
}


function newFilter(array, callback) {
    let resultado = [];
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            resultado.push(array[i], i)
        }
    }
    return resultado;
}

function newFind(array, callback) {
    let resultado = 0;
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            resultado = array[i];
            break;
        }
    }
    return resultado;
}

function newFindIndex(array, callback) {
    for(let i=0; i<array.length; i++){
        if(callback(array[i])==true){
            return i;
        }
    }
}

function newReduce(array, callback) {
    let resultado = 0;
    for(let i=0; i<array.length; i++){
        resultado = resultado + array[i];
    }
    return resultado;
}

function newSome(array, callback) {
    for(let i=0; i<array.length; i++){
        if(callback(array[i]) == true){
            return true;
        }
    }
    return false;
}

function newEvery(array, callback) {
    for(let i=0; i<array.length; i++){
        if(callback(array[i]) == false){
            return false;
        }
    }
    return true;
}

function newFill(array, callback, valor1, valor2) {
    if(valor1==undefined){
        valor1=0
    }
    if(valor2==undefined){
        valor2=array.length;
    }
    let resultado = []
    for(let i=valor1; i<valor2;i++){
        array[i]=callback;
    }
    return array;
    
}

function newIncludes(array, callback) {
    for(let i=0; i<array.length; i++){
        if(array[i]==callback){
            return true;
        }
    }
}

function newIndexOf(array, callback) {
    for(let i=0; i<array.length; i++){
        if((array[i]) ==callback){
            return i;
        }
    }
}

function newConcat(array, callback) {
    // conteúdo da função
}

function newJoin(array, callback) {
    let resultado = array[0]
    for(let i=1; i<array.length; i++){
        resultado += callback + array[i]
    }
    return resultado;
}


//extras
function newSlice(array, callback) {
    // conteúdo da função
}

function newFlat(array, callback) {
    // conteúdo da função
}

function newFlatMap(array, callback) {
    // conteúdo da função
}
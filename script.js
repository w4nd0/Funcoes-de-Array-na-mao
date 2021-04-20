function newForEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        callbackFunction(currentValue, i, array)
    }
 }
 
function newMap(array, callbackFunction){
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        resultArray.push(callbackFunction(currentValue, i, array));
    }
    return resultArray;
}

function newSome(array, callbackFunction){
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (callbackFunction(currentValue, i, array)){
            return true;
        }
    }
    return false;    
}

function newFind(array, callbackFunction){
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (callbackFunction(currentValue, i, array)){
            return currentValue;
        }
    }
    return undefined;    
}

function newFindIndex(array, callbackFunction){
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (callbackFunction(currentValue, i, array)){
            return i;
        }
    }
    return -1;    
}

function newEvery(array, callbackFunction){
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (!callbackFunction(currentValue, i, array)){
            return false;
        }
    }
    return true;    
}

function newFilter(array, callbackFunction){
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if(callbackFunction(currentValue, i, array)){
            resultArray.push(currentValue)
        }
    }
    return resultArray;
}

Array.prototype.newConcat = function(){
    let totArgs = arguments.length;
    let args = arguments;
    let resultArray = [...this];
    for (let i = 0; i < totArgs; i++) {
        if(typeof args[i] === 'object'){
            for (let j = 0; j < args[i].length; j++) {
                resultArray.push(args[i][j]);
            }
        } else resultArray.push(args[i])        
    }
    return resultArray;
}

Array.prototype.newIncludes = function(searchElement,fromIndex){
    let start = fromIndex || 0;
    for (let i = start; i < this.length; i++) {
        if(this[i] === searchElement){
            return true;
        }        
    }
    return false;
}

Array.prototype.newFindIndex = function(searchElement){
    let start = fromIndex || 0;
    for (let i = start; i < this.length; i++) {
        if(this[i] === searchElement){
            return i;
        }        
    }
    return -1;
}

Array.prototype.newJoin = function(separator){
    let espace = separator || ',';
    let resultstr = '';
    for (let i = 0; i < this.length; i++) {
        resultstr += this[i];
        if(i < this.length - 1 && separator !== ''){
            resultstr += espace;        
        }
    }
    return resultstr;
}
                                    
Array.prototype.newSlice = function(init, final){
    let resultArray = [];
    if(final === 0) return resultArray;
    let start = init > this.length ? this.length : init;
    let end = final > this.length ? this.length : final;
    
    if(end < 0){
       end = this.length + final;
    }

    if(start < 0){
        start =  this.length + init;
    }

    for (let i = start; i < end; i++) {
        resultArray.push(this[i]);
    } 

    return resultArray;
}
 
Array.prototype.newFlat = function(depth){
    let nivel = depth || 1;
    let resultArray = [];
    let storeArr = [...this];

    for (let depth = 0; depth < nivel; depth++) {
        resultArray = [];
        for (let i = 0; i < storeArr.length; i++) {
            if(typeof storeArr[i] !== 'object'){
                resultArray.push(storeArr[i]);
            }else{
                for (let j = 0; j < storeArr[i].length; j++) {
                    resultArray.push(storeArr[i][j]);
                }
            } 
        }
        storeArr = [...resultArray];
    }

    return resultArray;
}

Array.prototype.newFlatMap = function(callbackFunction){
    let resultArray = [];
    resultArray = newMap(this, callbackFunction);
    return resultArray.newFlat();
}

function newArrayOf(){
    let resultArray = [];
    listItens = arguments;
    totItens = arguments.length;
    for (let i = 0; i < totItens; i++) {
            resultArray.push(listItens[i])        
    }
    return resultArray;
}



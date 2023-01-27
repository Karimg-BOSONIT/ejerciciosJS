// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

//REPASAR CON FUNC JS
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

//REPASO
const intersection = arrNumber1.filter(element => {
    return (
        arrNumber2.indexOf(element) !== -1 &&
        arrNumber3.indexOf(element) !== -1
    );
});

//ORIGINAL

const getInter = (arr1, arr2, arr3) => {

    let len;
    arr1.length < arr2.length ? len = arr1 : 
    arr2.length < arr3.length ? len = arr2 : len = arr3;
 
     let result = []
 
    for(let i in len){
     if(arr2.includes(len[i]) && arr3.includes(len[i])){
         result.push(len[i])
     }
    }
    
 return result;

}

getInter(arrNumber1, arrNumber2, arrNumber3);
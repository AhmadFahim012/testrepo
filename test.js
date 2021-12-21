let myArray = ['ahmad','fahim',45,true,'thats it'];

for(const[ind,val] of Object.entries(myArray)){
    console.log(ind, '- ', val);
}

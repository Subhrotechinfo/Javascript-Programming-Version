/*
 *  Copyright Subhro Chatterjee
*/
// https://www.bennadel.com/blog/142-ask-ben-javascript-string-replace-method.htm
// Replace a part of the string
//Using library
((str)=> {
    console.log(str.replace("Subhro", "Deep"));
})('My name is Subhro Chatterjee');

//Using Replace All
((str)=>{
    let index = str.indexOf('Subhro');
    console.log(index);
    let nwStr='';
    while(index != -1){
        nwStr+=str.replace("Subhro","Deep")
    }
})('Subhro Chatterjee, i am a developer.')

















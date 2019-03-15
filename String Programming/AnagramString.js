//String Anagram

let anagramString = (str1, str2) => {

    let status = true;
    let lwrstr1 =  str1.toLowerCase().replace(/\s/g,'').split('');
    let lwrstr2 =  str2.toLowerCase().replace(/\s/g,'').split('');
    
    if(lwrstr1.length != lwrstr2.length){
        status = false;
    }else{
        status = JSON.stringify(lwrstr1.sort()) === JSON.stringify(lwrstr2.sort());
    }

    console.log(lwrstr1);
    console.log(lwrstr2);

    if(status){
        console.log('The strings are equal');
    } else {
        console.log('The strings are not equal');
    }
}

anagramString('Mother In Law', 'Hitler Woman');

// String Constant

let vowelCount  = (str) => {
    console.log(str.toString());
    let v = 0, c = 0;
    for(let index = 0; index <  str.length; index++){
        let char = str.charAt(index);
        // console.log(ch);
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            v++;
        }
        console.log(char)
        let x = parseInt(char, 10);
        console.log(x);
        // if(((parseInt(char)) > 65 &&  (parseInt(char)) < 90) || ((parseInt(char)) > 97 || (parseInt(char)) < 122)) {
        //     c++;
        // }
    }
    console.log('Vowel Count : ',v);
    // console.log('Constant Count : ', c)
}

vowelCount(new String('thisdhWWbhawbibsb'))







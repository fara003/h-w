// let str = "Hola". trim().toLocaleUpperCase().toLocaleLowerCase()
// console.log(str);
// let words= str.length
// let ask = prompt('enter your name')


// console.log(`${str} ${ask}  what's up?`);
// console.log(str[0]);
// console.log(str[str.length-1]);



// let f_leter= ask

// let question=prompt('Enter your name: ')

// question=question.slice(0).toLocaleUpperCase()

// console.log(helo+question);

let word="aaa@bbb@ccc"

word = word.replace(/a/gi, 'y' )
word=word.replace(/@/gi,"")
word=word.replace(/bb/, "xx")
word=word.replace(/c/,"u")
console.log(word);


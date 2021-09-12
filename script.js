const text = greeting.innerText
greeting.innerText = ''

let i = 0
let str = ''

for (const char of text) {

    setTimeout(() => {
        str += char
        greeting.innerText = str
    },  300 * i++);
}
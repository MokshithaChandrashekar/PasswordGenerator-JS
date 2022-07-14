const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passs1 = " "
let passs2 = " "
let firstKey = document.getElementById("first-Key")
let secondKey = document.getElementById("second-Key")

function genpass1() {
    let pass1 = characters[Math.floor(Math.random() * characters.length)]
    return pass1
}

function genpass2() {
    let pass2 = characters[Math.floor(Math.random() * characters.length)]
    return pass2
}

for (let i = 0; i<=15; i++) {
    passs1 += genpass1()
}
     
for (let i = 0; i<=15; i++) {
    passs2 += genpass2()
}

firstKey.textContent = passs1
secondKey.textContent = passs2



/* 
  9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/

let x = prompt(`Enter a number:`);
let y = parseInt(x)

let z = x % 2 == 0
if (z) {
  alert(`the number entered is even.`)
} else {
  alert(`The number entered is NOT even.`)
}
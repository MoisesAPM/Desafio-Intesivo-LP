/*  
  10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let x = prompt(`Enter a number:`);
let y = parseInt(x)

let z = x % 2 != 0
if (z) {
  alert(`the number entered is odd.`)
} else {
  alert(`The number entered is NOT odd.`)
}
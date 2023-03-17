// function factorial(x) {
//     if (x<0) throw new Error("x nie moze byc liczba ujemna");
//     let f;
//     for (f=1; x>1; f*=x, x--);
//     return f;
// }

// try {
//     let n = Number(prompt("Podaj dodatnia liczbe calkowita",""));
//     let f = factorial(n);
//     alert(n + "!=" + f);
// } catch (ex) {
//     alert(ex);
// }

let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")

var a = 2
var b = 3

try {
    div1.innerHTML = `suma a + b = ${a+b}`
    a+c
} catch(error) {
    // alert(error)
    div2.innerHTML = error
} finally {
    div3.innerHTML = "zmienna a ma wartosc: " + a
    div4.innerHTML = "zmienna b ma wartosc: " + b
}

// console.log(factorial(-5))
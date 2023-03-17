 a = 4
console.log(typeof(a))
console.log(typeof(3.45))
a = 3.45
console.log(typeof(a))
a = "abc"
console.log(typeof(a))

a = true
console.log(typeof(a))

console.log(typeof(c))
console.log(typeof(true))
console.log(typeof("napis"))
console.log(typeof(null))

function a() {}
console.log(typeof(a))

const b = new Array()
console.log(typeof(b))

console.log(typeof(Math.PI))
console.log(typeof(aadda))

var person = {
    name: "jan",
    lastName: "kowalski",
    age: 40
}

console.log(typeof(person))
console.log(person)
console.log(person.lastName)
console.log(person["name"])
console.log(person[0])
for (i in person) console.log(person[i])
for (z in person) console.log(z)

person.lastName = "nowak"
console.log(person.lastName)
person.wzrost = 180
for(i in person) console.log(person[i])

var person1 = {
    name: "jan",
    lastName: "kowalski",
    age: 40,
    alert: function() {
        return "nazywam sie " + this.name + " " + this.lastName
    }
}

console.log(person1.alert())

person1.plec = "mezczyzna"

delete person1.plec

console.log(person1.plec)

person1.ini = function () { return this.name[0] + " " + this.lastName[0] }

console.log(person1.ini())

var person3 = new Object()

console.log(person3)

person3.name = "adam"
person3.wiek = 30

console.log(person3)

console.log(Object.values(person3))

var arr = Object.values(person3)

console.log(arr[0])
console.log(arr[1])

function person4(imie, nazwisko, wiek, kolorOczu) {
    this.imie = imie
    this.nazwisko = nazwisko
    this.wiek = wiek
    this.kolorOczu = kolorOczu
    this.mieszkaniec = "sopot"
}

var uczen = new person4("ala", "nowak", 14, "piwne")

console.log(uczen)

uczen.mieszkaniec = "gdansk"

console.log(uczen)

function person5(imie, nazwisko, wiek, kolorOczu) {
    this.imie = imie
    this.nazwisko = nazwisko
    this.wiek = wiek
    this.kolorOczu = kolorOczu
}

var uczennica = new person5("ola", "gola", 12, "brazowe")
console.log(uczennica)

person5.prototype.mieszkaniec = "sopot"

console.log(uczennica.mieszkaniec)

// var uczennica2 = new person5("ola", "gola", 12, "brazowe", "gdansk")
// console.log(uczennica2)

function person6(imie, nazwisko, wiek, kolorOczu) {
    this.imie = imie
    this.nazwisko = nazwisko
    this.wiek = wiek
    this.kolorOczu = kolorOczu
    this.zmianaWieku = this.zmianaWieku
    function zmianaWieku(wiekNowy) {
        this.wiek = wiekNowy
    }
}

var uczen3 = new person6("ola", "gola", 12, "brazowe")

console.log(uczen3)

uczen3.zmianaWieku(30)

console.log(uczen3)
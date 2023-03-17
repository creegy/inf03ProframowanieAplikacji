// listaPytan = [
    //     {pytanie: 'stolica polski', odpA: 'krakow', odpB: 'warszawa', odpC: 'poznan', odpPrawda: 'warszawa'},
    //     {pytanie: 'stolica polski', odpA: 'krakow', odpB: 'warszawa', odpC: 'poznan', odpPrawda: 'warszawa'},
    //     {pytanie: 'stolica polski', odpA: 'krakow', odpB: 'warszawa', odpC: 'poznan', odpPrawda: 'warszawa'}
    // ]
    
    listaPytan = [
        ['jakie miasto jest stolica polski', 'praga', 'warszawa', 'wilno', 'warszawa'],
        ['jakie miasto jest stolica litwy', 'praga', 'warszawa', 'wilno', 'wilno'],
        ['jakie miasto jest stolica czech', 'praga', 'warszawa', 'wilno', 'praga']
    ]
    
    let los = Math.floor( Math.random() * listaPytan.length)

    var pytanie = document.getElementById('pytanie')
    var odpA = document.getElementById('odpA')
    var odpB = document.getElementById('odpB')
    var odpC = document.getElementById('odpC')
    var wynik = document.getElementById('odp')

    pytanie.innerHTML = listaPytan[los][0]
    odpA.innerHTML = listaPytan[los][1]
    odpB.innerHTML = listaPytan[los][2]
    odpC.innerHTML = listaPytan[los][3]

    function spr(arg) {
        console.log(document.getElementById('arg'))
        const odp = document.getElementById(arg).textContent
        if (odp=== listaPytan[los][4]) {
            console.log('odp prawdziwa')
            wynik.innerHTML = "odpowiedz prawidlowa"
        } else {
            console.log('odp zla')
            wynik.innerHTML = "odpowiedz zla"
        }
    }
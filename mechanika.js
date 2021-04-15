var kropka = /^[0-9]{0,}$/;
var wynik;
var liczby_pierwsze = new Array();
var between = new Array();
spr();
var j;
var d;


function spr() {
    var x = parseInt(prompt("Do której liczby wypisać liczby pierwsze"));
    //Wylicza liczby pierwsze do podanej liczby
    for (var g = 2; g <= x; g++) {
        wynik = new Array();
        for (let i = 1; i <= g; i++) {
            let z = g / i;
            z = z + "";
            if (kropka.test(z)) {
                wynik.push(g / i);
            }

        }
        if (wynik.length == 2) {
            liczby_pierwsze.push(g);
        }
    }
    //wypisuje wszystkie liczby oraz ustala porządek
    for (let i = 1; i <= liczby_pierwsze[liczby_pierwsze.length - 1]; i++) {
        let t = liczby_pierwsze.indexOf(i);
        if (t == (-1)) {
            var elem = document.createElement('div');
            elem.style.border = "1px solid black";
            elem.id = "l" + i;
            elem.style.maxWidth = "auto";
            elem.style.display = "inline-block";
            elem.className = "Liczby_Pierwsze";
            elem.innerHTML = i;
            elem.style.fontSize = "1em";
            document.body.appendChild(elem);
        }
        if (t != (-1)) {
            var elem = document.createElement('br');
            document.body.appendChild(elem);
            var elem = document.createElement('div');
            elem.style.border = "1px solid black";
            elem.id = "l" + i;
            elem.style.maxWidth = "auto";
            elem.style.display = "inline-block";
            elem.className = "Liczby_Pierwsze";
            elem.innerHTML = i;
            elem.style.fontSize = "1em";
            document.body.appendChild(elem);
            var elem = document.createElement('br');
            document.body.appendChild(elem);
        }
    }

    //zaznacza wszystkie liczby pierwsze
    for (let i = 1; i <= liczby_pierwsze.length; i++) {
        document.getElementById("l" + liczby_pierwsze[i - 1]).style.backgroundColor = "gray";
        document.getElementById("l" + liczby_pierwsze[i - 1]).style.color = "white";
    }
    //ustala równe szerokości dla każdego diva
    let vv = liczby_pierwsze[liczby_pierwsze.length - 1];
    j = window.getComputedStyle(document.getElementById("l" + vv), null).getPropertyValue("width");

    for (let i = 1; i <= vv; i++) {
        document.getElementById("l" + i).style.width = j;
    }
    //wpisuje jedynke do tablicy liczb
    between.push({
        fid: 1,
        przerwa: 1
    });
    //wpisuje zakresy między liczbami pierwszymi
    for (let y = 1; y < liczby_pierwsze.length; y++) {
        var h = liczby_pierwsze[y] - liczby_pierwsze[y - 1];
        h = h - 1;
        between.push({
            fid: liczby_pierwsze[y - 1],
            tid: liczby_pierwsze[y],
            przerwa: h
        });
    }
    //wyznacza maksymalny odstęp pomiędzy liczbami pierwszymi
    var min = between[0].przerwa,
        max = between[0].przerwa;
    for (let i = 1; i < between.length; i++) {
        if (min > between[i].przerwa) {
            min = between[i].przerwa;
        }
        if (max < between[i].przerwa) {
            max = between[i].przerwa;
        }
    }
    //wyświetla najliększą przerwę w liczbach pierwszych z zakresu
    alert("największą przerwę w liczbach pierwszych do: " + x + " to: " + max);
    //ustala gdzie znajduje się największa przerwa
    d = between.indexOf(between.filter(function (item) {
        return item.przerwa == max
    })[0]);
    //zaznacza największą przerwę pomiędzy liczbami pierwszymi na czerwono
    for (let i = between[d].fid + 1; i <= between[d].tid - 1; i++) {
        document.getElementById("l" + i).style.backgroundColor = "red";
        document.getElementById("l" + i).style.color = "black";
    }
}

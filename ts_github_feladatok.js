// console.log("Hello");
// Feladat 01: Hozzunk létre függvényt, amely egy bemenő szöveges paraméterről
// megállapítja hány mássalhangzó van benne (elegendő az angol ABC)!
// Függvény neve: massalHangzokSzamaMegallapit(szöveg):szám
// Paraméterek(ek): vizsgaltSzoveg:szöveg tipus
// Visszatérési értéke: szám
// regExes megoldás:
// vizsgaltSzoveg.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
// 
function massalHangzokSzamaMegallapit(vizsgaltSzoveg) {
    var db = 0;
    var maganHangzok = ["e", "u", "i", "o", "a"]; //ami nem mgh, azt vizsg.
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.indexOf(vizsgaltSzoveg.charAt(i).toLowerCase()) == -1) { // charAt helyett vizsgaltSzoveg[i] is jó
            db++;
        }
    }
    return db;
}
function massalHangzokSzamaKiir() {
    var vizsgaltSzoveg = prompt("Adjon meg egy szöveget: ");
    document.getElementById("massalhangzo").innerHTML = "Mássalhangzók darabszáma: " + massalHangzokSzamaMegallapit(vizsgaltSzoveg);
    // ? optional operátor - egy ilyen azonosítóval rendelk. elemet vagy talál, vagy nem
    // ne lehessen az, hogy nullal tér vissza (null.innerHTML)
    // non null assertion operátor: ! - ez nem lesz üres
    // hibát ír: innerHTML szöveget vár de a massalHangzokSzamaMegallapit number -> ezért kell elé szöveget tenni
    // hiba: hiába adtuk meg h a vizsgaltSzoveg string, ha nem írnak be semmit, lehet null
    // -> megadjuk h string és a promptnál is
}
// Feladat02: Hozzunk létre függvényt, amelynek egy bemenő paramétere lesz: egy egész szám,
// amiről állapítsuk meg, hogy prím szám -e!
// Függvény neve: primSzamVizsgal(szám):logikai
// Paraméterek(ek): szám
// Visszatérési értéke: logikai
function primSzamVizsgal(szam) {
    for (var i = 2; i < szam; i++) {
        if (szam % i == 0)
            return false; // === típust is megvizsgálja    
    }
    return szam > 1;
}
function primSzamVizsgalKiir() {
    var szam = Number(prompt("Prímvizsgálat - kérem adjon meg egy számot: "));
    var primE = false;
    var valasz;
    if (!isNaN(szam)) {
        primE = primSzamVizsgal(szam);
        if (primE) {
            valasz = "prímszám";
        }
        else {
            valasz = "nem prímszám";
        }
    }
    else {
        valasz = "Hibás a megadott formátum :(";
    }
    document.getElementById("primszam").innerHTML = "Prím szám-e: " + valasz;
}
// Feladat03: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz: egyik a számokat tartalmazó tömb, másik egy szám, hogy a párosak (1-es) vagy páratlanok(2-es) darabszámára vagyunk kiváncsiak!
// Függvény neve: tombParosParatlanVizsgal(tomb(szám), szám):szám
// Paraméterek(ek): tomb(szám), szám
// Visszatérési értéke: szám
function tombParosParatlanVizsgal(tomb, szam) {
    var db = 0;
    if (szam === 1) {
        tomb.forEach(function (elem) {
            if (elem % 2 == 0) {
                db++;
            }
        });
    }
    else if (szam === 2) {
        tomb.forEach(function (elem) {
            if (elem % 2 == 1) {
                db++;
            }
        });
    }
    return db;
}
// nem kérjük be tömbbel hanem bele hardcodeoljuk
function tombParosParatlanKiir() {
    var tomb = [44, 6, 7, 33, 8];
    var db = tombParosParatlanVizsgal(tomb, 1);
    // document.getElementById("parosparatlan")!.innerHTML = db; //TS-ben szintaktikai hiba
    document.getElementById("parosparatlan").innerHTML = "Darabszám (páros, páratlan): " + db;
}
// Feladat04: Hozzunk létre függvényt, amely egy bemenő paraméter alapján legenerál annyi pénzérmefeldobást, amilyen értéket paraméterként megkapott! Visszatérése szöveges tömb legyen, pld fej, fej, írás, fej
// Függvény neve: ermeFeldobasGeneral(szam):tomb(szöveg)
// Paraméterek(ek): dobasokSzama:szam tipus
// Visszatérési értéke: szöveges tömb
// részei: tömb - véletlen szám generátorral bele számok, 1-fej, 2-írás pl.
// ciklus a dobások számára
function ermeFeldobasGeneral(dobasokSzama) {
    var tomb = [];
    for (var i = 0; i < dobasokSzama; i++) {
        tomb.push(Math.floor(Math.random() * 2) + 1); // 1v 2-t rak a tömbbe
    }
    var tombStr = [];
    // console.log(tomb);
    tomb.forEach(function (elem) {
        if (elem == 1) {
            tombStr.push("fej");
        }
        else {
            tombStr.push("írás");
        }
    });
    return tombStr;
}
function ermeFeldobasKiir() {
    document.getElementById("erme").innerHTML = "Érmefeldobás eredménye: " + ermeFeldobasGeneral(4);
}
// Feladat05: Hozzunk létre függvényt, amely egy bemenő paraméter alapján eldönti egy emailcímről, hogy gmail-es -e!
// Függvény neve: emailCimGoogleEldont(szöveg):logikai
// Paraméterek(ek): email:szöveg tipus
// Visszatérési értéke: logikai
function emailCimGoogleEldont(email) {
    var pattern = /^[a-zA-Z0-9._]+\@gmail\.com$/; //^a kifejezés vége, regEx
    return pattern.test(email);
}
function emailCimGoogleEldontKiir() {
    var email = prompt("Kérem adjon meg egy email címet:");
    var valasz = "Nem gmailes (lehet, hogy nem is email)...";
    if (emailCimGoogleEldont(email)) {
        valasz = "A megadott cím gmail-es";
    }
    document.getElementById("gmail").innerHTML = valasz;
}
// /^[a-zA-Z0-9._]+\@gmail\.com$/    -így biztos h email
// Feladat06: Hozzunk létre eljárást, amely kiirja milyen nap van (hétfő.. vasárnap)!
// Függvény neve: hetnapjaKiir()
// Paraméterek(ek): -
// Visszatérési értéke: -
function hetnapjaKiir() {
    var maiNap = new Date().toLocaleString('hu-HU', { weekday: 'long' });
    // toLocaleString hu-HU - nyelv és ország
    document.getElementById("hetnapja").innerHTML = maiNap;
}
// le lehet kérni a nap számát new Date().getDay() -jel és lekezelni switchel vagy enummal is

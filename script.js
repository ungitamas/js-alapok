"use strict";

// console.log("Sikeres összekötés ✅");

// // Alapvető operátorok

// const now = 2026;
// const eletkorDavid = now - 2009;
// const eletkorTalaber = now - 2009;

// console.log(eletkorDavid);
// console.log(eletkorTalaber);
// console.log(eletkorDavid * 2, eletkorTalaber / 10, 2 ** 3)

// const vezetekNev = "Bellai";
// const keresztNev = "Talabér";
// console.log(vezetekNev + keresztNev);
// console.log(vezetekNev + " " + keresztNev);

// // Értékadás lépései
// let x = 10 + 5;

// // x = x + 10;

// x += 10;
// x *= 4;

// x++;
// x--;
// console.log(x)

// // Összehasonlító operátorok 

// console.log(eletkorDavid >= eletkorTalaber)

// const keresztNev = "Balázs";
// const foglalkozasSzeretne = "kezdő programozó";
// const foglalkozasMarad = "kezdő kábeldugdosó";
// const szuletesiEv = 2009;
// const ev = 2026;

// const balazs = keresztNev + " vagyok, " + (ev - szuletesiEv) + " éves " + foglalkozasSzeretne + " szeretnék lenni!";
// console.log(balazs)

// const balazsUj = `${keresztNev} vagyok, ${ev - szuletesiEv} éves ${foglalkozasSzeretne} szeretnék lenni!`;
// console.log(balazsUj);

// console.log("Talabér vagyok \n\ haladó programozó");

// console.log(`Talabér vagyok
//     haladó programozó`);

// const kor = 16;
// const elegIdos = kor >= 18;

// if (elegIdos) {
//     console.log(`Teofil ihat bort 🍷`);
// } else {
//     const evekHatra = 18 - kor;
//     console.log(`Teofil még nem ihat bort várnia kell ${evekHatra} évet. ❌`);
// }


// const szuletesiEv = 2002;
// let szazad;

// if (szuletesiEv <= 2000) {
//     szazad = 20;
//     console.log(`${szazad} században születtél.`)
// } else {
//     szazad =21;
//     console.log(`${szazad} században születtél.`)
// }

// console.log(szazad)

// const bekertEv = "1991";
// console.log(bekertEv + 18);

// const szuletesiEv = Number(bekertEv);
// console.log(szuletesiEv + 18);

// console.log(Number("Talabér"));
// console.log(typeof szuletesiEv);


// console.log("Én " + 23 + " éves vagyok.");

// console.log("23" - "10" - 3);

// console.log("Talabér" - "Olivér");

// console.log("23" * "2");
// console.log("24" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 - "5");
// console.log("10" - "4" - "3" - 2 + "5");

// console.log(Boolean(1));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(Number("Talabér")));

// const kor = 18;

// if (kor === 18) console.log(`Most lettél nagykorú`);

// console.log(18 === 18);
// console.log(18 == 18);
// console.log(18 === "18");
// console.log(18 == "18");

// const kedvenc = Number(prompt("Mi a kedvenc számod?"));

// console.log(kedvenc, typeof kedvenc);
// if (kedvenc === 23) {
//     console.log("A 23 egy nagyszerű szám!");
// } else if (kedvenc === 7) {
//     console.log("A 7 is egy jó szám.");
// } else if (kedvenc === 27) {
//     console.log("A 27 a legjobb szám.");
// } else {
//     console.log("Más számot választottál");
// }


// if (kedvenc !== 27) {
//     console.log("Nem értem miért nem 27-et választottál");
// }

// const age = 16;
// const a = age >= 20;
// const b = age < 30;

// console.log(a);
// console.log(b);

// // Logikai operátorok

// console.log(!a);
// console.log(a && b);
// console.log(a || b);
// console.log(!a && b);
// console.log(a && !b);

// const hasDriverLincense = true;
// const hasGoodVision = true;
// const isTired = false;


// const shouldDrive = hasDriverLincense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log("Te vezethetsz.");
// } else {
//     console.log("Nem neked kellene vezetni.");
// }


// let hasDriversLincense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLincense = true;
// }

// if (hasDriversLincense) {
//     console.log("Vezethetek");
// }

// const interface = "hangkártya";
// const private = 23;

function logger() {
    console.log("A nevem Talabér");
}

logger();
logger();
logger();
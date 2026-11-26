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

// function logger() {
//     console.log("A nevem Talabér");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Gyümölcslé ${apples} db almából ${oranges} db narancsból.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// console.log(calcAge3(2009));

// // Függvénydekraláció

// function calcAge1(birthYear) {
//    return 2026 - birthYear;
// }

// const age1 = calcAge1(1999);
// console.log(age1);


// // Függvénykifejezés
// const calcAge2 = function (birthYear) {
//     return 2026 - birthYear;
// }

// const age2 = calcAge2(1999);
// console.log(age2);

// // Nyílfüggvények

// const calcAge3 = birthYear => 2026 - birthYear;

// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(2009));


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} ${retirement} év múlva mehet nyugdíjba.`;
// }

// console.log(yearsUntilRetirement(2009, "Balázs"));
// console.log(yearsUntilRetirement(2009, "Bálint"));
// console.log(yearsUntilRetirement(1987, "Tanár úr"));

// function multiplyByFour(fruit) {
//     return fruit * 4; 
// }



// function fruitProcessor(apples, oranges) {
//     const applePieces = multiplyByFour(apples);
//     const orangePieces = multiplyByFour(oranges);
//     const juice = `Gyümölcslé ${applePieces} almadarabból és ${orangePieces} narancsdarabból áll.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


// const calcAge = function(birthYear) {
//     return 2026 - birthYear;
// }


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} ${retirement} év múlva mehet nyugdíjba.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} már elérte a nyugdíj korhatárt`);
//         return -1;
//     }
// }



// console.log(yearsUntilRetirement(2009, "Balázs"));
// console.log(yearsUntilRetirement(2009, "Bálint"));
// console.log(yearsUntilRetirement(1987, "Tanár úr"));
// console.log(yearsUntilRetirement(1948, "Talabér"));

const friends = ["Talabér", "Tekla", "Tóbiás", "Frédi", "Balázs", "Teofil"];
console.log(friends);

console.log(friends[2]);
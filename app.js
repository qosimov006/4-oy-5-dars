
//1-misol
//Savol :  A dan B gacha bolgan sonlar kopaytmasini topuvchi algoritm yozing.
//Javob

/*
function kopaytmaTop(A, B) {
    let kopaytma = 1;
  
    while (A <= B) {
      kopaytma *= A;
      A++;
    }
  
    return kopaytma;
  }
  
  // Misol:
  const A = 1;
  const B = 5;
  const kopaytmaNatija = kopaytmaTop(A, B);
  console.log(`${A} dan ${B} gacha bolgan sonlar kopaytmasi: ${kopaytmaNatija}`);
*/
  











//2-misol
//Savol : Beilgan sonnig necha xonali ekanligini aniqlavchi algoritm yozing.
//Javob
/*
function xonaSoniTop(son) {
    let xonaSoni = 1;
    let absSon = Math.abs(son); // Sonni musbat qiymatga aylantiramiz
    let bolibTuribKetmoq = 10;
  
    while (absSon >= bolibTuribKetmoq) {
      xonaSoni++;
      bolibTuribKetmoq *= 10;
    }
  
    return xonaSoni;
  }
  
  // Misol:
  const berilganSon = 212345;
  const xonaSoni = xonaSoniTop(berilganSon);
  console.log(`${berilganSon} soni ${xonaSoni} xonalidir.`);
*/
  
//3-misol
//Savol : Beilgan sonnig faktarialini topuvchi algoritm yozing.
//Javob
/*
function faktorialniTop(son) {
    let faktorial = 1;
    let i = 1;
  
    while (i <= son) {
      faktorial *= i;
      i++;
    }
  
    return faktorial;
  }
  
  // Misol:
  const berilganSon = 5;
  const faktorial = faktorialniTop(berilganSon);
  console.log(`${berilganSon} ning faktoriali: ${faktorial}`);
*/
  


//4-misol
//Savol : Foydalanuvchi parol kiritishni so'radigan dastur yozing. Foydalanuvchi to'g'ri parol kiritmaguncha so'rashni davom ettishni davom ettish uchun while dan foydalaning.
//Javob
/*
const togriParol = "Assalomu alaykum"; 
let foydalanuvchiParoli = prompt('Iltimos, parolni kiriting:');

while (foydalanuvchiParoli !== togriParol) {
  foydalanuvchiParoli = prompt("Noto'gri parol! Iltimos, qaytadan kiriting:");
}

console.log('To\'g\'ri parol kiritildi. Kirishga muvaffaqiyatli kirildi!');

*/

//5-misol
//Savol : Birinchi n ta tub sonning yig'indis while siklidan  foydalanib hisoblaydigan dastur yozing.
//Javob
/*
function tubSon(toplam) {
    let tubSonlar = [];
    let i = 2;
  
    while (tubSonlar.length < toplam) {
      if (tubSondur(i)) {
        tubSonlar.push(i);
      }
      i++;
    }
  
    return tubSonlar.reduce((a, b) => a + b, 0);
  }
  
  function tubSondur(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Misol:
  const n = 10;
  const yigindi = tubSon(n);
  console.log(`${n} ta tub sonning yig'indisi: ${yigindi}`);
*/


//6-misol
//Savol : Berilgan sonni teskari tartibda yozuvch algoritm yozing.
//Javob
/*
function teskariTartibdaYozuv(number) {
    let originalNumber = number;
    let reversedNumber = 0;
  
    while (number > 0) {
      let lastDigit = number % 10;
      reversedNumber = reversedNumber * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
  
    console.log(`Asl son: ${originalNumber}`);
    console.log(`Teskari tartibdagi son: ${reversedNumber}`);
  }
  
  teskariTartibdaYozuv(12345);
  */
  


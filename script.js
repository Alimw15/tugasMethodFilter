const mobil = [
  {
    namaMobil: "lamborghini aventador",
    pintu: 2,
    tahun: 2011,
    merek: "lamborghini",
  },
  {
    namaMobil: "nissan gtr",
    pintu: 2,
    tahun: 2007,
    merek: "nissan",
  },
  {
    namaMobil: "bugatti chiron",
    pintu: 2,
    tahun: 2016,
    merek: "bugatti",
  },
];

let dataMobil = prompt("masukan merek mobil");

const merekMobil = mobil.filter((mobil) => mobil.merek === dataMobil);
console.log(merekMobil);

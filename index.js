"use strict";
const studenti = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },

    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },

    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "ženski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "muški",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
    izracunajProsjek: function () {
      let s = 0;
      let br = 0;
      const grades = Object.entries(this.ocjene);
      for (const [student, ocjena] of grades) {
        s += ocjena;
        br++;
      }
      this.prosjek = s / br;
      return this.prosjek;
    },
    uspjeh: function () {
      let odl, vrl, dob, dov, ned;
      if (this.pol === "muški") {
        odl = "odličan";
        vrl = "vrlodobar";
        dob = "dobar";
        dov = "dovoljan";
        ned = "nedovoljan";
      } else {
        usp = "odlična";
        vrl = "vrlodobra";
        dob = "dobra";
        dov = "dovoljna";
        ned = "nedovoljna";
      }

      if (this.prosjek >= 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${odl}.`);
      } else if (this.prosjek >= 3.5 && this.prosjek < 4.5) {
        console.log(`${this.ime} ${this.prezime} je ${vrl}.`);
      } else if (this.prosjek >= 2.5 && this.prosjek < 3.5) {
        console.log(`${this.ime} ${this.prezime} je ${dob}.`);
      } else if (this.prosjek >= 1.5 && this.prosjek < 2.5) {
        console.log(`${this.ime} ${this.prezime} je ${dov}.`);
      } else if (this.prosjek >= 1 && this.prosjek < 1.5) {
        console.log(`${this.ime} ${this.prezime} je ${ned}.`);
      }
    },
  },
];

const statistikaUspjeha = function (studenti) {
  let statUsp = [];
  let brod = 0;
  let brvr = 0;
  let brdobr = 0;
  let brdov = 0;
  let brned = 0;
  for (let i = 0; i < studenti.length; i++) {
    studenti[i].izracunajProsjek();
    if (studenti[i].prosjek >= 4.5) {
      brod++;
    } else if (studenti[i].prosjek >= 3.5 && studenti[i].prosjek < 4.5) {
      brvr++;
    } else if (studenti[i].prosjek >= 2.5 && studenti[i].prosjek < 3.5) {
      brdobr++;
    } else if (studenti[i].prosjek >= 1.5 && studenti[i].prosjek < 2.5) {
      brdov++;
    } else if (studenti[i].prosjek >= 1 && studenti[i].prosjek < 1.5) {
      brned++;
    }
  }

  statUsp = [
    { key: "odličan", value: brod },
    { key: "vrlodobar", value: brvr },
    { key: "dobar", value: brdobr },
    { key: "dovoljan", value: brdov },
    { key: "nedovoljan", value: brned },
  ];
  return statUsp;
};

const sortirajUcenike = function (studenti) {
  let sortiraniUcenici = [];
  for (let i = 0; i < studenti.length; i++) {
    sortiraniUcenici.push(studenti[i].prezime);
  }
  sortiraniUcenici.sort();
  return sortiraniUcenici;
};

console.log(statistikaUspjeha(studenti));
console.log(
  "Sortirana prezimena ucenika u alfabetskom redu:",
  sortirajUcenike(studenti)
);

var comici1 = ["Aldo", "Giovanni", "Giacomo"];
var comici2 = [
  { name: "Aldo", altezza: 190 },
  { name: "Giovanni", altezza: 160 },
  { name: "Giacomo", altezza: 150 },
];
var char1 = ["a1", "a2", "a3"];
var char2 = [
  { a: "a1", b: "b1" },
  { a: "a2", b: "b2" },
  { a: "a3", b: "b3" },
];
var disney1 = ["Pippo", "Pluto", "Topolino"];
var disney2 = [
  { name: "Pippo", type: "Dog" },
  { name: "Pluto", type: "Dog" },
  { name: "Topolino", type: "Mouse" },
];

// 1.	Fa il console.log del primo elemento di un dato array
function esercizio1(arrayIn) {
  console.log(arrayIn[0]);
}
// 2.	Fa il console.log dell’elemento i-esimo di un dato array
function esercizio2(arrayIn, i) {
  console.log(arrayIn[i]);
}
// 3.	Dato l’array  comici1 fare il console log del solo elemento 'Aldo'

for (i = 0; i < comici1.length; i++) {
  if (comici1[i] == "Aldo") {
    console.log(comici1[i]);
  }
}

function esercizio3() {
  comici1.forEach((comico) => {
    if (comico == "Aldo") console.log(comico);
  });
}
// 4.	Dato l’array comici1 fare il console log dei soli elementi che iniziano per la 'G'

for (i = 0; i < comici1.length; i++) {
  if (comici1[i].charAt(0) == "G") {
    console.log(comici1[i]);
  }
}

function esercizio4() {
  comici1.forEach((comico, posizione) => {
    if (comico.startsWith("G")) console.log(comico + " " + posizione);
  });
}
// 5.	Dato l’array comici1 fare il console log dei soli elementi che contengono la string 'nn'
function esercizio5() {
  comici1.forEach((comico) => {
    if (comico.includes("nn")) {
      console.log(comico);
    }
  });
}
function esercizio5parametrico(arrayIn, stringa) {
  arrayIn.forEach((el, _i) => {
    if (el.includes(stringa)) {
      console.log(el);
    }
  });
}
// 6.	Dato l’array comici1 ottenere un array contenente solo le iniziali degli elementi seguiti da '...' e l'ultima lettera
function esercizio6() {
  let nuovoArray = [];
  comici1.forEach((comico) => {
    let varAppoggio = comico.substring(0, 1) + "..." + comico.slice(-1);
    nuovoArray.push(varAppoggio);
  });
  return nuovoArray;
}
function esercizio6map() {
  let nuovoArray = comici1.map((comico) => {
    let varAppoggio = comico.substring(0, 1) + "..." + comico.slice(-1);
    return varAppoggio;
  });
  return nuovoArray;
}
function esercizio6mapContracted() {
  return comici1.map((comico) => {
    return comico.substring(0, 1) + "..." + comico.slice(-1);
  });
}

// 7.	Dato l’array comici2 fare il console log degli elementi con altezza maggiore di 155
function esercizio7() {
  comici2.forEach((comico) => {
    if (comico.altezza > 155) console.log(comico);
  });
}
function esercizio7parametrico(altezzaNumero) {
  arrayIn.forEach((el, i) => {
    if (el.altezza > altezzaNumero) {
      console.log(el, i);
    }
  });
}
// 8.	Dato l’array comici2 fare il console log dei soli elementi che hanno il name che inizia per la ‘G’
function esercizio8() {
  comici2.forEach(
    (comico, i) => {
      if (comico.name.startsWith('G')) {
        console.log(comico, i)
      }
    })
}
function esercizio8parametrico(inizialeString, proprieta, arrayIn) {
  arrayIn.forEach(
    (el, i) => {
      if (el[proprieta].startsWith(inizialeString)) {
        console.log(el, i)
      }
    })
}
// 8.1.	Dato l’array comici2 ottenere un nuovo array con l'altezza in metri
function esercizio81() {
  let nuovoArray = comici2.map((comico) => {
    let variabileAppoggio = comico.altezza / 100;
    let jsonAppoggio = {
      name: comico.name,
      altezza: variabileAppoggio
    }
    return jsonAppoggio;
  });
  return nuovoArray;
}
// 8.2.	Dato l’array comici2 ottenere un nuovo array con l'aggiunta del sesso maschile
function esercizio82() {
  let nuovoArray = comici2.map(comico => {
    let newJson = {
      name: comico.name,
      altezza: comico.altezza,
      sesso: "m"
    }
    return newJson;
  });
  return nuovoArray;
}
function esercizio82() {
  let nuovoArray = comici2.map(comico => {
    let newJson = {
      ...comico,
      sesso: "m"
    }
    return newJson;
  });
  return nuovoArray;
}
function esercizio82each() {
  comici2.forEach((el) => {
    el.sesso = "m";
  });
}
// 9.	Dato l’array char1 ottenere un altro array contenente gli elementi b1,b2,b3
function esercizio9() {
  return char1.map((el, posizione) => {
    posizione = posizione + 1;
    return el = 'b' + posizione
  });
}
function esercizio9replace() {
  return char1.map((el, posizione) => {
    return el.replace("a", "b")
  });
}
function esercizio9(lettera) {
  return arrayProva.map((el, posizione) => {
    posizione = posizione + 1;
    return el = lettera + posizione
  });
}
// 10.	Dato l’array char2 ottenere un altro array che ha per ogni elemento la concatenazione dell’elemento a e b di partenza divisi dal trattino (ovvero: ‘a1-b1’,’a2-b2’ etc..)
function esercizio10() {
  return char2.map((el) => {
    return el = el.a + "-" + el.b
  })
}
// 11.	Dato l’array disney1 ottenere un altro array contenente solo gli elementi che iniziano per 'P'
disney1.filter(el => {
  if (el.startsWith("P"))
    return el
})

disney1.filter(el => el.startsWith("P"))

function esercizio11() {
  return disney1.filter(el => el.startsWith("P"))
}
// 12.	Dato l’array disney2 ottenere un altro array che contiene solo gli oggetti con type==='Mouse'
// tip: ovvero un array contenente solo un item {name:'Topolino', type:'Mouse'}
function esercizio12() {
  return disney2.filter(el => el.type === "Mouse")
}
// 13.	Dato l’array disney1 fare il console.log dell’indice di un determinato elemento (es, l’indice di ‘Pippo’ sarà 0)
var disney1 = ["Pippo", "Pluto", "Topolino"];

function esercizio13(valore) {
  let indexCap = disney1.indexOf(valore);
  console.log(valore + " " + indexCap)
}
// 14.	Dato l’array disney2 fare il console.log dell’indice di un elemento che ha un dato name (es. se il name == ‘Pippo’ l’indice sarà 0)
var disney2 = [
  { name: "Pippo", type: "Dog" },
  { name: "Pluto", type: "Dog" },
  { name: "Topolino", type: "Mouse" },
];
function esercizio14(valore) {
  disney2.forEach((el, i) => {
    if (el.name == valore) console.log(el.name + " " + i)
  });
}
// 15. Dato l'array disney2 ottenere un altro array che ha le stesse proprietà di partenza più il colore nero solo per gli elementi che iniziano per 'P'
function esercizio15() {
  return nuovoArray = disney2.map(el => {
    if (el.name.startsWith("P")) {
      return nuovoOggetto = {
        ...el,
        colore: "nero"
      }
    } else {
      return nuovoOggetto = el
    }
  });
}

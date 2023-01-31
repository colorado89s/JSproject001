comici1 = [
    "Aldo",
    "Giovanni",
    "Giacomo"
];
comici2 = [
    { name: "Aldo", altezza: 190 },
    { name: "Giovanni", altezza: 160 },
    { name: "Giacomo", altezza: 150 }
];
char1 = [
    "a1",
    "a2",
    "a3"
];
char2 = [
    { a: "a1", b: "b1" },
    { a: "a2", b: "b2" },
    { a: "a3", b: "b3" }
];
disney1 = [
    "Pippo",
    "Pluto",
    "Topolino"
];
disney2 = [
    { name: "Pippo", type: "Dog" },
    { name: "Pluto", type: "Dog" },
    { name: "Topolino", type: "Mouse" }
];

// 1.	Fa il console.log del primo elemento di un dato array
console.log(comici1[0]);
// 2.	Fa il console.log dell’elemento i-esimo di un dato array
for (i = 0; i < comici1.length; i++) {
    console.log(comici1[i])
};
// 3.	Dato l’array  comici1 fare il console log del solo elemento 'Aldo'
for (i = 0; i < comici1.length; i++) {
    if (comici1[i] == 'Aldo') {
        console.log(comici1[i])
    }
};
// 4.	Dato l’array comici1 fare il console log dei soli elementi che iniziano per la 'G'
for (i = 0; i < comici1.length; i++) {
    if (comici1[i].charAt(0) == 'G') {
        console.log(comici1[i])
    }
};
// 5.	Dato l’array comici1 fare il console log dei soli elementi che contengono la string 'nn'
for (i = 0; i < comici1.length; i++) {
    for (k = 0; k < comici1[i].length; k++) {
        for (j = 0; j < comici1[i].charAt(k); j++) {
            console.log(comici1[i])
        }
    }
};
// 6.	Dato l’array comici1 ottenere un array contenente solo le iniziali degli elementi seguiti da '...' e l'ultima lettera
for (i = 0; i < comici1.length; i++) {
    comici1[i] = input[0]+'...'+input.slice(-1);
};

let input = 'allocco'
let output = input[0]+'...'+input.slice(-1);

console.log(output)
// 7.	Dato l’array comici2 fare il console log degli elementi con altezza maggiore di 155
// 8.	Dato l’array comici2 fare il console log dei soli elementi che hanno il name che inizia per la ‘G’
// 9.	Dato l’array char1 ottenere un altro array contenente gli elementi b1,b2,b3
// 10.	Dato l’array char2 ottenere un altro array che ha per ogni elemento la concatenazione dell’elemento a e b di partenza divisi dal trattino (ovvero: ‘a1-b1’,’a2-b2’ etc..)
// 11.	Dato l’array disney1 ottenere un altro array contenente solo gli elementi che iniziano per 'P'
// 12.	Dato l’array disney2 ottenere un altro array che contiene solo gli oggetti con type==='Mouse'
// tip: ovvero un array contenente solo un item {name:'Topolino', type:'Mouse'}
// 13.	Dato l’array disney1 fare il console.log dell’indice di un determinato elemento (es, l’indice di ‘Pippo’ sarà 0)
// 14.	Dato l’array disney2 fare il console.log dell’indice di un elemento che ha un dato name (es. se il name == ‘Pippo’ l’indice sarà 0)

let nome = "  Rafael Vasconcelos  "

console.log(nome + " tem " + nome.length + " caracteres.");

console.log("Variável no início: " + nome + "Variável depois do .trim(): " + nome.trim());

let novoNome = nome.trim();
console.log(novoNome.split(" "));

console.log(nome.slice(2, 8));

let minhasGatas = ["Nami", "Chun-li"];
console.log(minhasGatas);
console.log(minhasGatas[1]);

minhasGatas.push("Oni");
console.log(minhasGatas);

let novaGata = "";
novaGata = "Pereba";

minhasGatas.push(novaGata);
console.log(minhasGatas);

novaGata = "Amendoa";

minhasGatas.push(novaGata);
console.log(minhasGatas);

let ultimaGata = minhasGatas.pop();
console.log(minhasGatas, ultimaGata);

let primeiraGata = minhasGatas.shift();
console.log(minhasGatas, primeiraGata);

minhasGatas.unshift(ultimaGata);
console.log(minhasGatas);

let gatitas = minhasGatas.join(" ❤️ ");
console.log(gatitas);

let gatitas02 = minhasGatas.join();
console.log(gatitas02);

console.log(minhasGatas.lastIndexOf("Oni"));
console.log(minhasGatas.indexOf("Batata"));

console.log(minhasGatas.includes("Nami"));
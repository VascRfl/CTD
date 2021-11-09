function microondas (opcao, tempo) {
    switch (opcao) {
        case 1: // Pipoca
            if (tempo >= 20 && tempo <= 30) {
                console.log("Prato queimou")
            } else if (tempo > 30) {
                console.log("Kabuuummm!")
            } else if (tempo < 10) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 2: // Macarrão
            if (tempo >= 16 && tempo <= 24) {
                console.log("Prato queimou")
            } else if (tempo > 24) {
                console.log("Kabuuummm!")
            } else if (tempo < 8) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 3: // Carne
            if (tempo >= 30 && tempo <= 45) {
                console.log("Prato queimou")
            } else if (tempo > 45) {
                console.log("Kabuuummm!")
            } else if (tempo < 15) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 4: // Feijão
            if (tempo >= 24 && tempo <= 36) {
                console.log("Prato queimou")
            } else if (tempo > 36) {
                console.log("Kabuuummm!")
            } else if (tempo < 12) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        case 5: // Brigadeiro
            if (tempo >= 16 && tempo <= 24) {
                console.log("Prato queimou")
            } else if (tempo > 24) {
                console.log("Kabuuummm!")
            } else if (tempo < 8) {
                console.log("Tempo insuficiente")
            } else {
                console.log("Prato pronto. Bom apetite")
            }
            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}

console.log(" Pipoca \n");

microondas(1,9);
microondas(1,13);
microondas(1,24);
microondas(1,31);

console.log("\n Macarrão \n");

microondas(2,7);
microondas(2,12);
microondas(2,24);
microondas(2,30);

console.log("\n Carne \n");

microondas(3,13);
microondas(3,18);
microondas(3,32);
microondas(3,90);

console.log("\n Feijão \n");

microondas(4,10);
microondas(4,15);
microondas(4,30);
microondas(4,37);

console.log("\n Brigadeiro \n");

microondas(5,7);
microondas(5,12);
microondas(5,24);
microondas(5,30);

console.log("\n Prato que não existe \n");

microondas(6,30);
function podeSubir(altura, acompanhante) {
    let resposta = true

    if (altura >= 1.40 && altura < 2.0) {
        console.log("Acesso autorizado")
        resposta = true
        console.log(resposta)
    } else if (altura > 1.20 && altura < 1.40) {
        if (acompanhante == true) {
            console.log("Acesso autorizado com acompanhante")
            resposta = true
            console.log(resposta)
        } else {
            console.log("Acesso negado sem acompanhante")
            resposta = false
            console.log(resposta)
        }
    } else if (altura <= 1.20) {
        console.log("Acesso negado")
        resposta = false
        console.log(resposta)
    }
    return resposta
}

podeSubir(1.83, true);
podeSubir(1.35, true);
podeSubir(1.15, true);
podeSubir(1.83, false);
podeSubir(1.35, false);
podeSubir(1.15, false);
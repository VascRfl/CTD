function contaBancaria(numero, tipo, saldo, titular) {
    this.numero = numero
    this.tipo = tipo
    this.saldo = saldo
    this.titular = titular
}

const jsonConvertidos = require('./clientes');

let json = JSON.parse(jsonConvertidos)

function converteArray(jason) {
    let clientes = [];
    for (let i = 0; i < jason.length; i++) {
        clientes.push(jason[i]);        
    }
    return clientes
}

let banco = {
    clientes: converteArray(json),
    consultarCliente: function (nome) {
        for (let i = 0; i < this.clientes.length; i++) {
          if (nome == this.clientes[i].titular) {
            console.log(this.clientes[i])
          }
        }
      }
}

banco.consultarCliente('Beatriz Esponton');
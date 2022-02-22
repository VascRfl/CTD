var nomeUsuario = prompt("Qual seu nome completo?");

if (nomeUsuario == "" || nomeUsuario == null) {
    alert("Por favor digite um nome!");
    nomeUsuario = prompt("Qual seu nome completo?");
} else {
    var telefone = prompt("Qual seu telefone?");
    if (telefone == "" || telefone == null) {
        alert("Por favor digite um telefone!");
        telefone = prompt("Qual seu telefone?");
    } else {
        var whatsapp = confirm("Este telefone é WhatsApp?");
        alert(`Muito obrigado ${nomeUsuario}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);
    }
}

console.log(`nome: ${nomeUsuario}, telefone: ${telefone}, aceita receber mensagem por WhatsApp: ${whatsapp}.`);
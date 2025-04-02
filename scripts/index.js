const btn_Giro = document.getElementById("btn-girar");


function giro() {
         
    const amount = document.getElementById("amount");
    const valor = parseFloat(amount.innerText.replace("R$", ""));
    if (valor <= 0) {
        console.log("Saldo insuficiente! Adicione mais saldo para continuar jogando.");
        document.getElementById("message").innerText = "Saldo insuficiente! Adicione mais saldo para continuar jogando.";
        document.getElementById("message").style.color = "red";
        return; // Encerra a função
    }

    const frutas = ["maca", "pera", "moeda"];
    const imagens = {
        maca: "public/images/maca-br.png",
        pera: "public/images/pera.png",
        moeda: "public/images/moeda.png",
    };

    // Gera três elementos aleatórios da lista
    const element1 = frutas[Math.floor(Math.random() * frutas.length)];
    const element2 = frutas[Math.floor(Math.random() * frutas.length)];
    const element3 = frutas[Math.floor(Math.random() * frutas.length)];

    console.log(`${element1} ${element2} ${element3}`);

    // Atualiza as imagens na tela
    const display = document.querySelector(".display");

    display.innerHTML = `
        <img id="triangulo" src="public/images/triangulo.png" alt="triangulo">
        <img src="${imagens[element1]}" alt="${element1}">
        <img src="${imagens[element2]}" alt="${element2}">
        <img src="${imagens[element3]}" alt="${element3}">
        <img id="trianguloB" src="public/images/triangulo.png" alt="triangulo">
    `;

    // Verifica se os três elementos são iguais
    if (element1 === element2 && element2 === element3) {
        // Inicializa a variável win
        const amount = document.getElementById("amount");
        const valor = parseFloat(amount.innerText.replace("R$", ""));
        if (element1 === "moeda" && element2 === "moeda" && element3 === "moeda") {
            const win = 30;
            document.getElementById("message").innerText = "Você ganhou! " +` R$${win.toFixed(2)}`;
            document.getElementById("message").style.color = "green";
            novoSaldo = valor + 30; // Adiciona R$30 ao saldo
        }
        if (element1 === "maca" && element2 === "maca" && element3 === "maca") {
            const win = 10;
            document.getElementById("message").innerText = "Você ganhou! " +` R$${win.toFixed(2)}`;
            document.getElementById("message").style.color = "green";
            novoSaldo = valor + 10; // Adiciona R$10 ao saldo
        }
        if (element1 === "pera" && element2 === "pera" && element3 === "pera") {
            const win = 10;
            document.getElementById("message").innerText = "Você ganhou! " + ` R$ ${win.toFixed(2)}`;
            document.getElementById("message").style.color = "green";
            novoSaldo = valor + 10; // Adiciona R$10 ao saldo
        }
        amount.innerText = `R$${novoSaldo.toFixed(2)}`; // Atualiza o saldo na tela
        console.log("Você ganhou!");
       

    } else {

        console.log("Você perdeu! Tente novamente.");
        const amount = document.getElementById("amount");
        const valor = parseFloat(amount.innerText.replace("R$", ""));
        const novoSaldo = valor - 5; // Subtrai R$5 do saldo
        document.getElementById("message").innerText = "Você perdeu! Tente novamente.";
        document.getElementById("message").style.color = "red";
        amount.innerText = `R$${novoSaldo.toFixed(2)}`; // Atualiza o saldo na tela
        if (novoSaldo <= 0) {
            console.log("Saldo insuficiente! Adicione mais saldo a carteira e continue jogando.");
            document.getElementById("message").innerText = "Saldo insuficiente! Adicione mais saldo a carteira e continue jogando.";
            document.getElementById("message").style.color = "red";
            amount.innerText = `R$0.00`; // Reseta o saldo para 0
            return;
        }

    }
}

btn_Giro.addEventListener("click", giro);

document.getElementById("add-saldo").addEventListener("click", () => {

    let input = document.getElementById("input-saldo").value;
    const amount = document.getElementById("amount");
    const valor = parseFloat(amount.innerText.replace("R$", ""));
    input = valor + parseFloat(input); // Adiciona o valor do input ao saldo atual
    if (input < 0) {
        console.log("Valor inválido! O saldo não pode ser negativo.")
        return;
    }
    amount.innerText = `R$${input.toFixed(2)}`;

});




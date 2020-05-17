let margarida = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

let tioPatinhas = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let key in margarida, tioPatinhas) {
    if (margarida[key] === tioPatinhas[key]) {
        console.log("Ambos recorrentes");
    } else {
        console.log(margarida[key] + " e " + tioPatinhas[key]);
    }
}



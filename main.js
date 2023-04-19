const placaDoJoao = {
    modelo: 'rtx3070',
    fabricante: 'Geforce',
    anoModelo: 2020,
    anoFabricacao: 2019,
    video: function() {
        console.log("jogo");
    }
}

const placaDaMaria = {
    modelo: 'rtx3080',
    fabricante: 'Geforce',
    anoModelo: 2021,
    anoFabricacao: 2020,
    video: function() {
        console.log("jogo");
    }
}

const placaDoJose = {
    modelo: 'rtx3090',
    fabricante: 'Geforce',
    anoModelo: 2022,
    anoFabricacao: 2021,
    video: function() {
        console.log("jogo");
    }
}

function Game(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.video = function() {
        console.log("jogo")
    }
}

const placaDoJoao2 = new Game("rtx3070", "Geforce", 2020, 2019);
const placaDaMaria2 = new Game("rtx3080", "Geforce", 2021, 2020);
const placaDoJose2 = new Game("rtx3090", "Geforce", 2022, 2021);

console.log(placaDoJoao2);
console.log(placaDaMaria2);
console.log(placaDoJose2);
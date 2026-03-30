
                                     //função para pegar o valor da cidade após apertar o buttom
document.getElementById("consulta").addEventListener("click", function() {
const cidade = document.getElementById("cidade1").value;
alert(cidade);
resultado.innerHTML = "A cidade selecionada é: " + cidade;
buscarClima(cidade); //chama a função para buscar o clima da cidade
});

async function buscarClima(cidade) { //função para usar a cidade com a API clima
const resposta =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=8cb7a928f252f47575cf6ffe3c355750&units=metric&lang=pt_br`)
const dados = await resposta.json(); //pega os dados

const resultado = document.getElementById("resultado");
console.log(dados);
resultado.innerHTML = `A temperatura em ${cidade} é de ${dados.main.temp}°C.`;
}

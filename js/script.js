document.getElementById("consulta").addEventListener("click", function() {
  const cidade = document.getElementById("cidade1").value;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Cidade: " + cidade;

  buscarClima(cidade);
});

async function buscarClima(cidade) {
  const resposta = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=8cb7a928f252f47575cf6ffe3c355750&units=metric&lang=pt_br`);
  const dados = await resposta.json();

  previsao(dados);
}

function previsao(dados){
  for(let i = 0; i < 40; i += 8) {

    const dia = (i / 8) + 1;

    document.getElementById("dia" + dia).innerHTML = dados.list[i].dt_txt;
    document.getElementById("temp" + dia).innerHTML = dados.list[i].main.temp + "°C";
    document.getElementById("umidade" + dia).innerHTML = dados.list[i].main.humidity + "%";
    document.getElementById("status" + dia).innerHTML = dados.list[i].weather[0].description;

  }
}
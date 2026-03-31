document.getElementById("consulta").addEventListener("click", function() {
  const cidade = document.getElementById("cidade1").value;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Cidade: " + cidade;

  buscarClima(cidade);
});

async function buscarClima(cidade) {
  const resposta = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=8cb7a928f252f47575cf6ffe3c355750&units=metric&lang=pt_br`);
  const dados = await resposta.json();
  console.log(dados);
  previsao(dados);
}

function previsao(dados){
  for(let i = 0; i < 40; i += 8) {
    
    
    const dia = (i / 8) + 1;
    const data = new Date(dados.list[i].dt_txt);
    let diaSemana = data.toLocaleDateString("pt-BR", {
    weekday: "short"
    });
    diaSemana = diaSemana.replace(".", "");
    document.getElementById("dia" + dia).innerHTML = diaSemana;

    

    document.getElementById("umidade" + dia).innerHTML = dados.list[i].main.humidity + "%";
    document.getElementById("status" + dia).innerHTML = dados.list[i].weather[0].description;

    // 🔥 calcular temperaturas do dia
    let temps = [];

for (let j = i; j < i + 8 && j < dados.list.length; j++) {
  temps.push(dados.list[j].main.temp);
}
    const min = Math.min(...temps);
    const max = Math.max(...temps);

    document.getElementById("tempMin" + dia).innerHTML = Math.round(min) + "°C";
    document.getElementById("tempMax" + dia).innerHTML = Math.round(max) + "°C";
  }
}
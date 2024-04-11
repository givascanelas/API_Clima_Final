const express = require ('express'); // <!-- Importa o express, um framework usado para construir aplicativos web em Node.js -->
const axios = require ('axios'); // <!-- Importa o axios, usado para fazer requisições HTTP -->
const path = require ('path'); // <!-- Importa o path, usado para manipular caminhos de arquivos -->
const cors = require ('cors'); // <!-- Importa o cors, usado para transmitir headers de HTTP -->
const config = require('./config.json'); // <!-- Importa as configurações do arquivo -->
const apikey = config.apikey; // <!-- Utiliza a chave API -->

const app = express(); // <!-- Cria uma instância do express -->
app.listen(3000); // <!-- Define a porta como 3000 -->

app.use(cors()); // <!-- Utiliza o cors -->
app.use(express.json()); // <!-- Utiliza o JSON como formato de dados para solicitações -->
app.use(express.static(path.join(__dirname, 'public'))); // <!-- Define public como uma pasta estática -->

const traducaoClima = {
    "few clouds": "Poucas Nuvens",
    "scattered clouds": "Nuvens Dispersas",
    "overcast clouds": "Nublado",
    "broken clouds": "Nuvens Dispersas",
    "shower clouds": "Nuvens Cheias",
    "clear sky": "Céu Limpo",
    "light rain": "Chuva Leve",
    "light intensity drizzle": "Chuvisco Intenso",
    "moderate rain": "Chuva Moderada",
    "shower rain": "Chuva Rápida",
    "mist": "Névoa",
    "thunderstorm": "Tempestade",
    "snow": "Neve",
    "light intensity shower rain": "sei la que porra "
    
} // <!-- Traduções para cada clima -->

app.get('/climatempo/:cidade', async (req, res)=>{ // <!-- Define uma rota GET onde :cidade representa a cidade solicitada na busca -->
    const city = req.params.cidade; // <!-- Obtém o nome da cidade da requisição -->

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`); // <!-- API de clima solicitada usando o axios -->
           
        if(response.status === 200){ // <!-- Verifica se a resposta da API foi bem-sucedida -->

                const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description; // <!-- Obtém as traduções dos climas -->

                const weatherData = {
                    Temperatura: response.data.main.temp,
                    Umidade: response.data.main.humidity,
                    VelocidadeDoVento: response.data.wind.speed,
                    Clima: clima
                }; // <!-- Cria um objeto com os dados climáticos -->

                res.send(weatherData); // <!-- Envia os dados climáticos como resposta -->
            } else {
                res.status(response.status).send({erro: 'Erro ao obter dados meteorológicos'}); // <!-- Exibe um erro caso a solicitação da API não funcione -->
            }
    } catch (error){
        res.status(500).send({erro:'Erro ao obter dados meteorológicos', error }); // <!-- Mensagem de erro caso o servidor falhe -->
    }

});

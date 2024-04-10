# Senai World Weather.

Este é um projeto desenvolvido para as aulas do Senai, utilizando a API do OpenWeatherMap para obter informações meteorológicas.
Este projeto consiste em uma consulta de dados meteorológicos utilizando a API "OpenWeatherMap".

### Requisitos:

Para utilizar os dados climáticos, é necessário a instalação dos principais requisitos de sistema, para isso, abra o console de comandos:

1. Primeiro, para a instalação principal, utilize o comando `npm install`;

2. Para a instalação do framework "Express", utilize o comando `npm i express`;

3. Para a instalação do módulo "Axios", utilize o comando `npm i axios`;

4. Por último, para a instalação do módulo "CORS", utilize o comando `npm i cors`.

### Configuração:

Para começar a usar a API, siga os passos abaixo:

1. Crie um arquivo chamado `config.json`;

2. Dentro do arquivo `config.json`, adicione as seguintes informações:
   ```json
   {
     "apikey": "SUA API"
   } 

3. Crie uma conta no site da API pelo site https://openweathermap.org/api , gere-a e coloque-a no campo "SUA API".

## Complementos & Funções:

* No arquivo App.js há a utilização do axios, para fazer requisições, do express, para criar o servidor e gerenciar suas rotas, e do cors, que permite que as solicitações de diferentes origens sejam feitas.

* A constante traducaoClima define as traduções predefinidas de cada clima para a resposta da API.

* O "app.get" faz requisições na API baseada na cidade em que o usuário solicita.

### Arquivo "app.js":

Neste arquivo, existem duas funções com "addEventListener", que é necessária para que o botão de pesquisa e a tecla Enter sejam utilizadas no campo de busca; Dentro do campo `try`, por método `if` & `else if`, há a resposta da API que define a mudança do símbolo do clima; O fundo baseado na condição climática; E um `if` que se conseguir acessar os dados da API, cria um `innerHtml` com as respostas da mesma, imagens e os fundos; Por fim, o erros são tratados com o uso do `catch`.

### Arquivo "index.hmtl":

Neste arquivo, em seu `body` há uma tela de carregamento simulada a partir de um gif; A `div` "conteúdo" que contém os elementos da página; E outra `div` "formClima", que faz com que sejam obtidas as respostas do usuário e sejam mostradas na tela as informações.

# Demonstração de Tela do Projeto:

![image](https://raw.githubusercontent.com/givascanelas/API_Clima_Final/main/img/tela_inicial.png)

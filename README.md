<h1 align="center">
  sunlabs
</h1>

<h5 >
  Projeto avaliativo para Sparta Labs.
</h5>

## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://facebook.github.io/react-native/)
- [RealmDb](https://docs.mongodb.com/realm/)

## :rocket: Serviços
- [Places Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete)
- [Google Geocode](https://developers.google.com/maps/documentation/geocoding/overview)
- [OpenWeather](https://openweathermap.org/)

-Obs: Foi utilizado o Geocode dado que a api do OpenWeather possui algumas limitações em relação a string da cidade a ser buscada, para uma maior precisão o Geocode fornece informações de latitude e longitude, o que com a openweathermap permite uma maior precisão do local a ser visualizado.

## 💻 Sobre o Projeto

<p>O Sunlabs trata-se de uma aplicativo que utiliza de bibliotecas de localização e de condições climáticas para apresentá-las aos usuários dando a ele um panorama de temperatura semanal, assim no Sunlabs é possível:
  <ul>
    <li>Busca qualquer cidade do Brasil;</li>
    <li>Adicionar cidades;</li>
    <li>Ver condições climáticas atualizadas e dos próximos 7 dias da semana;</li>
    <li>Favoritar cidades;</li>
    <li>Filtrar por cidades favoritas, não favoritas e geral;</li>
    <li>Ao verificar o calendário semanal é possível converter a temperatura entre graus celsius e fahrenheit<li>
  </ul>
<p>
 
## 💻 Imagens do Projeto
[Imagens aqui](https://drive.google.com/drive/folders/1K90EPzfZL34yHZ0BujmsmPsPMRGN92Es?usp=sharing)

## 🤔 Como Executar


- Instale as dependências: `yarn`;
- Criar keys para os serviços do [OpenWeather](https://openweathermap.org/),[Google Geocode](https://developers.google.com/maps/documentation/geocoding/overview) e [Places Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete)
- Crie um arquivo .env com as seguinte keys obtidas no passo acima: PLACE_KEY e WEATHER_KEY
- Gere o build da aplicação: `react-native run-android`;
- Configure a aplicação na porta correta;
- Suba o serviço para utilizar a aplicação: `react-native start`;

-Obs: Testes feitos apenas para dispositivos android.

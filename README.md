# Kalkulator stanowiska komputerowego w React.js
Aplikacja, która pomaga podliczyć koszty nowego stanowiska komputerowego.

 ## Spis treści
* [Instalacja](#instalacja)
* [O aplikacji](#o-aplikacji)
* [Języki i narzędzia](#języki-i-narzędzia)
* [Czego nauczył mnie ten projekt](#czego-nauczył-mnie-ten-projekt)

## Instalacja 
Instalacja aplikacji opiera się na menedżerze pakietów [npm](https://www.npmjs.com/).
```bash
git clone https://github.com/YerbaMatePL/REACT-Kalkulator-stanowiska-komputerowego.git
cd kalkulator-app
npm install
```
Aby uruchomić aplikację użyj 
```bash
npm start
```
Dodatkowo uruchom [serwer "Kalkulatora stanowiska komputerowego w React.js"](https://github.com/YerbaMatePL/serwer-node.js), który znajdziesz w innym repozytorium. 

```bash
git clone https://github.com/YerbaMatePL/serwer-node.js.git
npm install
```
Aby uruchomić serwer użyj 
```bash
node server.js
```

## O aplikacji

- Aplikacja składa się z dwóch części - **formularza oraz tabeli z podsumowaniem**. 
Formularz wypełnia użytkownik podając nazwę przedmiotu, jaki chce zakupić do swojego nowego stanowiska komputerowego, następnie formularz wymaga podania krótkiego opisu tego przedmiotu, np. wpisania modelu. W kolejnym kroku użytkownik przypisuje przedmiot do wybranej kategorii. A na końcu podaje cenę za wybrany przedmiot. **Po kliknięciu przycisku “DODAJ”  uruchamia się walidacja, a dane zostają zapisane na serwerze.** 

<p align="center">
<img src="https://user-images.githubusercontent.com/90143181/162560164-4646f826-6fac-492e-af9e-aefd380fe6b4.png"></p>

- Następnie dane te pobierane są z serwera i wyświetlane w formie tabeli. Każdy rekord posiada dwie możliwe akcje do wykonania - **edycję wybranego rekordu**, a także **możliwość usunięcia danego rekordu z tabeli**. 

<p align="center">
<img src="https://user-images.githubusercontent.com/90143181/162560243-3a1c185a-dda7-47fd-bfe8-aa0a66670024.png"></p>

- Na samym końcu **wyświetlane są dane z podsumowaniem**: ilości przedmiotów w tabeli oraz łącznej kwoty, jaką trzeba będzie zapłacić za wybrane przedmioty. 


## Języki i narzędzia
<p float="left">
<img src="https://user-images.githubusercontent.com/90143181/155710762-98754e3e-27fa-42fc-b1d2-b4976022ff8f.png" width="40" height="40">REACT.JS&nbsp
<img src="https://user-images.githubusercontent.com/90143181/155710948-14bf50e8-30b5-47f3-8151-9fc80556c0ed.png" width="40" height="40">CSS3&nbsp
<img src="https://user-images.githubusercontent.com/90143181/155709360-40a94a88-a7ea-4d82-ba0c-f51aec3b3ff4.png" width="40" height="40"> HTML5<br>
<img src="https://user-images.githubusercontent.com/90143181/155711643-97bc4f8c-0460-4dd7-b4da-8cd79a08a2e3.png" width="40" height="40">&nbsp&nbspNODE.JS&nbsp&nbsp&nbsp&nbsp
<img src="https://user-images.githubusercontent.com/90143181/155712064-fd173cb7-8581-4e16-bf99-194e4ac2be55.png" width="40" height="20">&nbsp&nbspGIT</p>

## Czego nauczył mnie ten projekt

- komunikacji z API w React.js, 
- pracy z hookami, 
- zarządzania stanem, 
- tworzenia i wydzielania komponentów. 


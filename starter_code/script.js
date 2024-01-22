const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dingleberry",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
//Makes the search text non case-sensitive
function search(str) {
  return fruit.filter((it) => it.toLowerCase().includes(str.toLowerCase()));
}
//Takes whats typed in the search box and searches for it in the fruit list
function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);

  //If there's nothing in the search box then no results will show
  if (inputVal !== "") {
    showSuggestions(results, inputVal);
  } else {
    suggestions.replaceChildren();
  }
}

function showSuggestions(results, inputVal) {
  suggestions.replaceChildren();

  //Loops through the search input and makes a suggestion list, if the fruit lettering matches the search input then it makes it bold
  for (let i = 0; i < results.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");

    const firstSpan = document.createElement("span");
    const bold = document.createElement("b");
    const lastSpan = document.createElement("span");
    // creates a span from where the input value begins in a string
    firstSpan.textContent = results[i].substring(
      0,
      results[i].toLowerCase().indexOf(inputVal.toLowerCase())
    );
    // makes the input value bold in the suggestion text
    bold.textContent = results[i].substring(
      results[i].toLowerCase().indexOf(inputVal.toLowerCase()),
      results[i].toLowerCase().indexOf(inputVal.toLowerCase()) + inputVal.length
    );
    // ends the bold lettering at the end of the input value
    lastSpan.textContent = results[i].substring(
      results[i].toLowerCase().indexOf(inputVal.toLowerCase()) + inputVal.length
    );

    span.appendChild(firstSpan);
    span.appendChild(bold);
    span.appendChild(lastSpan);

    li.appendChild(span);

    suggestions.appendChild(li);
  }
}
//If a suggestion is clicked, replaces the text in the search box with the suggestion clicked
function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.replaceChildren();
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

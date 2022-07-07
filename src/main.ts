let state = {
  currentState: "",
  brewery: "",
  breweries: [],
};
document
  .querySelector("#select-state-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector("#select-state");
    state.brewery = "";
    state.currentState = input.value;
    getTheBreweries();
  });
render();
function createBrewery(brewery) {
  let li = document.createElement("li");
  let breweryName = document.createElement("h2");
  breweryName.textContent = brewery.name;
  let breweryType = document.createElement("div");
  breweryType.className = "type";
  breweryType.textContent = brewery.brewery_type;
  let addressSec = document.createElement("section");
  addressSec.className = "address";
  let addressTitle = document.createElement("h3");
  addressTitle.textContent = "Address:";
  let address1 = document.createElement("p");
  address1.textContent = brewery.street;
  let address2 = document.createElement("p");
  let address3 = document.createElement("strong");
  address3.textContent = `${brewery.city}, ${brewery.postal_code}`;
  let phoneSec = document.createElement("section");
  phoneSec.className = "phone";
  let phone = document.createElement("h3");
  phone.textContent = "Phone:";
  let phone1 = document.createElement("p");
  phone1.textContent = brewery.phone;
  let linkSec = document.createElement("section");
  linkSec.className = "link";
  let link = document.createElement("a");
  link.href = brewery.website_url;
  link.target = "_blank";
  link.textContent = "Visit Website";
  document.querySelector(".breweries-list").appendChild(li);
  li.append(breweryName, breweryType, addressSec, phoneSec, linkSec);
  addressSec.append(addressTitle, address1, address2);
  address2.appendChild(address3);
  phoneSec.append(phone, phone1);
  linkSec.appendChild(link);
}
function preRenderThings() {
  let title = document.createElement("h1");
  title.textContent = "List of Breweries";
  let header = document.createElement("header");
  header.className = "search-bar";
  let input = document.createElement("input");
  input.id = "search-breweries";
  input.name = "search-breweries";
  input.type = "text";
  let form = document.createElement("form");
  form.id = "search-breweries-form";
  form.autocomplete = "off";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    state.brewery = input.value;
    getTheBreweries();
  });
  let label = document.createElement("label");
  label.innerHTML = "<h2>Search breweries:</h2>";
  let article = document.createElement("article");
  let ul = document.createElement("ul");
  ul.className = "breweries-list";
  article.appendChild(ul);
  header.appendChild(form);
  form.append(label, input);
  document.querySelector("main")?.append(title, header, article);
}

function getTheBreweries() {
  let url =
    state.brewery.length == 0
      ? `https://api.openbrewerydb.org/breweries?by_state=${state.currentState}&per_page=10`
      : `https://api.openbrewerydb.org/breweries?by_name=${state.brewery}&by_state=${state.currentState}`;
  fetch(url)
    .then((respo) => respo.json())
    .then((breweries) => {
      state.breweries = breweries;
      console.log(breweries);
      render();
    });
}
function render() {
  document.querySelector("main").textContent = "";
  preRenderThings();
  for (let brewery of state.breweries) {
    createBrewery(brewery);
  }
}

const state = {
  brewerys: [
    {
      address_2: null,
      address_3: null,
      brewery_type: "large",
      city: "San Diego",
      country: "United States",
      county_province: null,
      created_at: "2018-07-24T00:00:00.000Z",
      id: 8041,
      latitude: "32.714813",
      longitude: "-117.129593",
      name: "10 Barrel Brewing Co",
      obdb_id: "10-barrel-brewing-co-san-diego",
      phone: "6195782311",
      postal_code: "92101-6618",
      state: "California",
      street: "1501 E St",
      updated_at: "2018-08-23T00:00:00.000Z",
      website_url: "http://10barrel.com",
    },
  ],
};
createBrewery(state.brewerys[0]);
function createBrewery(brewery) {
  let article = document.createElement("article");
  let ul = document.createElement("ul");
  ul.className = "breweries-list";
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
  article.appendChild(ul);
  ul.appendChild(li);
  li.append(breweryName, breweryType, addressSec, phoneSec, linkSec);
  addressSec.append(addressTitle, address1, address2);
  address2.appendChild(address3);
  phoneSec.append(phone, phone1);
  linkSec.appendChild(link);
  document.querySelector("main")?.appendChild(article);
}

//using urlparams so that from each album we can go to its own page
const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

//ading id of one album
const url = "https://customiseme-5a3f.restdb.io/rest/products/" + _id;

//using apikey
const options = {
  headers: {
    "x-apikey": "62275a07dced170e8c83a066",
  },
};

//fetching data using url and apikey for access
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showSoap(data));

//creating a function so that our content is dynamic
function showSoap(soap) {
  console.log(soap);
  document.querySelector("h1").textContent = soap.Name;
  document.querySelector("h2").textContent = soap.Price;
  //document.querySelector("p").textContent = soap.Description;

  document.querySelector(".soap_image").src = soap.Image;
}

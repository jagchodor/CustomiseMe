const url = "https://customiseme-5a3f.restdb.io/rest/products";

//using an apikey to acces all the data
const options = {
  headers: {
    "x-apikey": "62275a07dced170e8c83a066",
  },
};

//fetching data from url from restdb.io using apikey
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleData(data);
  });

//making a function using data, so that each album shows its content
function handleData(soaps) {
  soaps.forEach((soap) => {
    console.log(soap);
    //grab the template
    const template = document.querySelector(".onesoap").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("img").src =
      "https://customiseme-5a3f.restdb.io/media/" + soap.Image;
    copy.querySelector("h1").textContent = soap.Name;
    copy.querySelector("h2").textContent = soap.Price;
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(copy);
  });
}

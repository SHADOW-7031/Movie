let btn = document.getElementById("btn");
let url = "https://www.omdbapi.com/?apikey=1ac21173&s=";
async function handleClick() {
  console.log("Inside click");
  let inp = document.getElementById("inp");
  let response = await fetch(url + inp.value);
  let data = await response.json();
  console.log(data);
}
btn.addEventListener("click", handleClick);

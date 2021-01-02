const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
// const URL1 = "https://pokeapi.co/api/v2/pokemon/ditto";
const list = document.querySelectorAll(".list-item");

function start() {
    fetch(URL)
    // .then(res => console.log(res))
    .then((res) => 
        res.json()
        
    )
    // .then(response => console.log(JSON.stringify(response)))
    // console.log(response)
    .then(data => {
          display(data.results)
        console.log(data)
  }
    )
    .catch(error => ("Erreur : " + error))
};

function display(pokemons) {
    for (let i = 0; i < pokemons.length - 1; i++) {
        for (let y = 0; y < list.length - 1; y++) {
            list[i].innerHTML = pokemons[i].name
            list[i].setAttribute("data-url", pokemons[i].url)
            // list[i].addEventListener("click", displayInfos)
        }
    }
}

start()




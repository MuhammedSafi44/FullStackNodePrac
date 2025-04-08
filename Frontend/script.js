fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if(!response.ok){
            throw new Error ("could not fetch resource")
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error =>console.log(error))


fetchData();
async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");    
        if(!response.ok){
            throw new Error("could not fetch resource")
        } 
        const data = await response.json();
        console.log(data);
        const name = document.getElementById("name");
        name.textContent = data.name;
           
    } catch (error) {
        console.log(error);
    }
}
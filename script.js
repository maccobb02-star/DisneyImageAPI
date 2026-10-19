async function getImage() {
    try {
        const character = document.getElementById("character").value;
        console.log(character)
        const url = "https://api.disneyapi.dev/character?name=" + character;

        const response = await fetch(url)

        const json = await response.json();
        console.log(JSON.stringify(json));
        const characterHolder = document.getElementById("characterHolder")
        characterHolder.textContent = character;

        characterHolder.append(document.createElement("br"))

        let img = document.createElement("img");
        img.src = json.data[0].imageUrl;
        img.width = 100;
        characterHolder.appendChild(img);


    }
    catch (error) {
        console.log(error)
    }
}
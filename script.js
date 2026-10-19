async function getImage() {
    try {
        const characterName = document.getElementById("characterName");
        console.log(characterName)
        const url = "https://api.disneyapi.dev/character?queryParams" + characterName.value;

        const response = await fetch(url, { headers: headers })

        const json = await response.json();
        console.log(JSON.stringify(json));
        const characterHolder = document.getElementById("characterHolder")
        characterHolder.textContent = characterName;

        characterHolder.append(document.getElementById("characterHolder"));

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
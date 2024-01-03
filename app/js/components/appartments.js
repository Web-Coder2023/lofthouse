const appartments = () => {
    const data = {
        "Пентхаус Loft Олимп": "../images/appartments/01.webp",
        "Апартаменты “Nice Loft”": "../images/appartments/02.webp",
        "Апартаменты “Loft Studio”": "../images/appartments/03.webp",
        "Loft квартира “Престиж”": "../images/appartments/04.webp"
    };

    const appartmentsList = document.querySelector(".appartments__list");

    for (const key in data) {
        const listItem = document.createElement("li");
        listItem.classList.add("appartments__list-item");

        const link = document.createElement("a");
        link.href = "#!";
        link.classList.add("appartments__list-link");

        const image = document.createElement("img");
        image.src = data[key];
        image.alt = "";

        const title = document.createElement("span");
        title.classList.add("appartments__list-title");
        title.textContent = key;

        link.appendChild(image);
        link.appendChild(title);
        listItem.appendChild(link);
        appartmentsList.appendChild(listItem);
    }
    console.log(1);
}
appartments();
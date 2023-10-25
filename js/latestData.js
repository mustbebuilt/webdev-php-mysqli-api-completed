(async () => {
    try {
        const filmList = document.getElementById("filmList");

        // Use JavaScript fetch to retrieve the latest films from the API
        const response = await fetch("api/latestData.php");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        data.forEach(film => {
            const filmDiv = document.createElement("div");
            filmDiv.innerHTML = `
                <a href="film-details.php?filmID=${film.filmID}">
                    <div>
                        <img src="images/${film.filmImage}" alt="${film.filmTitle}">
                    </div>
                    <h3>${film.filmTitle}</h3>
                </a>
            `;
            filmList.appendChild(filmDiv);
        });
    } catch (error) {
        console.error("Error fetching latest films from the API:", error);
    }
})();

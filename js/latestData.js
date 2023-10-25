(()=>{

            const filmList = document.getElementById("filmList");

            // Use JavaScript fetch to retrieve the latest films from the API
            fetch("api/latestData.php")
                .then(response => response.json())
                .then(data => {
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
                })
                .catch(error => {
                    console.error("Error fetching latest films from the API:", error);
                });
 
})();
(async () => {
    try {
        // Get the filmID from the query string
        const urlParams = new URLSearchParams(window.location.search);
        const filmID = urlParams.get('filmID');

        // Use JavaScript fetch to retrieve film details from the API
        const response = await fetch(`api/detailsData.php?filmID=${filmID}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const film = await response.json();
        const filmDetails = document.getElementById("filmDetails");

        const filmHTML = `
            <div>
                <img src="images/${film.filmImage}" alt="${film.filmTitle}">
            </div>
            <div>
                <p>${film.filmDescription}</p>
                <p>${film.filmCertificate}</p>
            </div>
        `;

        filmDetails.innerHTML = filmHTML;
        document.title = film.filmTitle;
    } catch (error) {
        console.error("Error fetching film details from the API:", error);
    }
})();

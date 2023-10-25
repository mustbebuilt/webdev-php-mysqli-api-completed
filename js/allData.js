(async () => {
    try {
        // Use JavaScript fetch to retrieve JSON data from the API
        const response = await fetch("api/allData.php");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filmsTableBody = document.getElementById("filmsTableBody");

        data.forEach(film => {
            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            const titleLink = document.createElement("a");
            titleLink.href = `film-details.php?filmID=${film.filmID}`;
            titleLink.textContent = film.filmTitle;
            titleCell.appendChild(titleLink);

            const certificateCell = document.createElement("td");
            certificateCell.textContent = film.filmCertificate;

            const priceCell = document.createElement("td");
            priceCell.innerHTML = `&pound; ${film.filmPrice}`;

            row.appendChild(titleCell);
            row.appendChild(certificateCell);
            row.appendChild(priceCell);

            filmsTableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching data from the API:", error);
    }
})();

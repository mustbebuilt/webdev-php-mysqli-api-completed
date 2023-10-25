(async () => {
    try {
        const sidebarFilmDetails = document.getElementById("sidebarFilmDetails");

        // Use JavaScript fetch to retrieve random film details from the API
        const response = await fetch("api/randomData.php");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const randFilmObj = await response.json();

        const filmHTML = `
            <h3>${randFilmObj.filmTitle}</h3>
            <div>
                <img src="images/${randFilmObj.filmImage}" alt="${randFilmObj.filmTitle}" />
            </div>
            <p>${randFilmObj.filmDescription}</p>
        `;

        sidebarFilmDetails.innerHTML = filmHTML;
    } catch (error) {
        console.error("Error fetching random film details from the API:", error);
    }
})();

(()=>{
	

    const sidebarFilmDetails = document.getElementById("sidebarFilmDetails");

    // Use JavaScript fetch to retrieve random film details from the API
    fetch("api/randomData.php")
        .then(response => response.json())
        .then(randFilmObj => {
            const filmHTML = `
                <h3>${randFilmObj.filmTitle}</h3>
                <div>
                    <img src="images/${randFilmObj.filmImage}" alt="${randFilmObj.filmTitle}" />
                </div>
                <p>${randFilmObj.filmDescription}</p>
            `;

            sidebarFilmDetails.innerHTML = filmHTML;
        })
        .catch(error => {
            console.error("Error fetching random film details from the API:", error);
        });
	
})();

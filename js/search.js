(()=>{
    const searchForm = document.querySelector(".searchForm form");
    const searchResults = document.querySelector(".searchResults");

    searchForm.addEventListener("submit",  (ev) => {
        event.preventDefault();

        const searchInput = searchForm.querySelector("input[name='q']").value;
		
		        // Check if the search query is empty
        if (searchInput.trim() === "") {
            searchResults.innerHTML = "<p>Please enter a search query.</p>";
            return;
        }

        // Use JavaScript fetch to retrieve search results from the API
        fetch(`api/searchData.php?q=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    searchResults.innerHTML = `<p>Your search found ${data.length} result(s)</p>`;
                    data.forEach(film => {
                        searchResults.innerHTML += `<h3>${film.filmTitle}</h3>`;
                        searchResults.innerHTML += `<p><a href="film-details.php?filmID=${film.filmID}">More Details</a></p>`;
                    });
                } else {
                    searchResults.innerHTML = "<p>No results found.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching search results from the API:", error);
            });
    });
	
})();
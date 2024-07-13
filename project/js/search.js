function searchPages() {
    const searchQuery = document.getElementById('Search').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    const pages = [
        { name: 'Home', url: 'index.html' },
        { name: 'About Us', url: 'aboutus.html' },
        { name: 'Our Services', url: 'ourservices.html' },
        { name: 'Reviews', url: 'reviews.html' },
        { name: 'Contact Us', url: 'contactus.html' },
        { name: 'Location', url:'location.html'}
    ];

    const filteredPages = pages.filter(page => page.name.toLowerCase().includes(searchQuery));

    if (filteredPages.length === 1) {
        // If there's exactly one match, redirect to that page
        window.location.href = filteredPages[0].url;
    } else if (filteredPages.length > 1) {
        // If there are multiple matches, display them as links
        filteredPages.forEach(page => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<a href="${page.url}">${page.name}</a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}

function navigateWithFadeOut(url) {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

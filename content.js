// Function to create and add the search button
function addSearchButton(article) {
    // Check if button already exists
    if (article.querySelector('.wirtz-search-btn')) return;

    // Find the username element
    const usernameElement = article.querySelector('a[role="link"]');
    if (!usernameElement) return;

    // Extract username from the href
    const username = usernameElement.href.split('/').pop();
    if (!username) return;

    // Create button
    const button = document.createElement('button');
    button.className = 'wirtz-search-btn';
    button.textContent = 'Wirtz';
    
    // Add click handler
    button.addEventListener('click', () => {
        const searchUrl = `https://x.com/search?q=from%3A${username}%20wirtz%20until%3A2025-05-15&f=top&src=typed_query`;
        window.open(searchUrl, '_blank');
    });

    // Find the action bar (where the like, retweet buttons are)
    const actionBar = article.querySelector('[role="group"]');
    if (actionBar) {
        actionBar.appendChild(button);
    }
}

// Function to observe DOM changes
function observeTweets() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if the added node is an article (tweet)
                    if (node.tagName === 'ARTICLE') {
                        addSearchButton(node);
                    }
                    // Also check for articles within the added node
                    node.querySelectorAll('article').forEach(addSearchButton);
                }
            });
        });
    });

    // Start observing the timeline
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Start observing when the page loads
observeTweets();

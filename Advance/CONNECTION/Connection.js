function loadScriptsFromJson(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const head = document.head || document.getElementsByTagName('head')[0];

            data.scripts.forEach(script => {
                const scriptElement = document.createElement('script');
                scriptElement.src = script;
                scriptElement.type = 'text/javascript';
                head.appendChild(scriptElement);
            });
        })
        .catch(error => {
            console.error('Error loading scripts from JSON:', error);
        });
}

// Example usage
loadScriptsFromJson('/LIBRARY/CONNECTION/Advance-Connection.json');

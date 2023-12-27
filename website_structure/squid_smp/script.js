document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch server status
    function fetchServerStatus() {
        // Replace 'your_server_ip' and 'your_server_port' with your server's IP and port
        const apiUrl = 'https://api.mcsrvstat.us/2/squid_smp.aternos.me:54259;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.online) {
                    document.getElementById('server-status').textContent = 'Server is online';
                    document.getElementById('player-count').textContent = `Players online: ${data.players.online}`;
                } else {
                    document.getElementById('server-status').textContent = 'Server is offline';
                    document.getElementById('player-count').textContent = 'Players online: N/A';
                }
            })
            .catch(error => {
                console.error('Error fetching server status:', error);
                document.getElementById('server-status').textContent = 'Error fetching server status';
                document.getElementById('player-count').textContent = 'Players online: N/A';
            });
    }

    // Initial fetch on page load
    fetchServerStatus();

    // Fetch server status every 5 minutes (adjust as needed)
    setInterval(fetchServerStatus, 300000); // 300,000 milliseconds = 5 minutes
});

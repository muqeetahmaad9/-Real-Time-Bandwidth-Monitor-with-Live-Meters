function updateSpeed() {
    fetch('/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('download-meter').innerText = data.download + " KB/s";
        document.getElementById('upload-meter').innerText = data.upload + " KB/s";
    });
}

setInterval(updateSpeed, 1000);  // Update every second

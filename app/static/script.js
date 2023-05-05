function updateMode() {
    const mode = document.getElementById("mode").value;
    const advancedOptions = document.getElementById("advanced-options");
    const simpleOptions = document.getElementById("simple-options");

    if (mode === "advanced") {
        advancedOptions.classList.remove("hidden");
        simpleOptions.classList.add("hidden");
    } else if (mode === "simple") {
        advancedOptions.classList.add("hidden");
        simpleOptions.classList.remove("hidden");
    } else {
        advancedOptions.classList.add("hidden");
        simpleOptions.classList.add("hidden");
    }
}

function startSending() {
    const mode = document.getElementById("mode").value;
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    const frequency = document.getElementById("frequency").value;
    const requestData = {
        mode: mode,
        ip: ip,
        port: port,
        frequency: frequency,
    };

    if (mode === "advanced") {
        // Add additional data for the advanced mode
    } else if (mode === "simple") {
        // Add additional data for the simple mode
    }

    fetch("/start", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function updateCameraStatus() {
    fetch("/camera_status", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        const cameraStatus = document.getElementById("camera-status");
        if (data.status) {
            cameraStatus.innerText = "Connected";
        } else {
            cameraStatus.innerText = "Not Connected";
        }
    });
}

updateMode();
setInterval(updateCameraStatus, 1000);
function updateMode() {
    const mode = document.getElementById("mode").value;
    const advancedOptions = document.getElementById("advanced-options");
    const simpleOptions = document.getElementById("simple-options");

    if (mode === "advanced") {
        advancedOptions.classList.remove("hidden");
        simpleOptions.classList.add("hidden");
    } else if (mode === "simple") {
        advancedOptions.classList.add("hidden");
        simpleOptions.classList.remove("hidden");
    } else {
        advancedOptions.classList.add("hidden");
        simpleOptions.classList.add("hidden");
    }
}

function startSending() {
    const mode = document.getElementById("mode").value;
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    const frequency = document.getElementById("frequency").value;
    const requestData = {
        mode: mode,
        ip: ip,
        port: port,
        frequency: frequency,
    };

    if (mode === "advanced") {
        // Add additional data for the advanced mode
    } else if (mode === "simple") {
        // Add additional data for the simple mode
    }

    fetch("/start", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

function updateCameraStatus() {
    fetch("/camera_status", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        const cameraStatus = document.getElementById("camera-status");
        if (data.status) {
            cameraStatus.innerText = "Connected";
        } else {
            cameraStatus.innerText = "Not Connected";
        }
    });
}

updateMode();
setInterval(updateCameraStatus, 1000);

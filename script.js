let people=0;
let priority="";
let callStatus="Emergency Alert";
let mediaRecorder;
let audioChunks = [];
function sendAlert() {

    let code = document.getElementById("code").value;

    if (code == "") {
        alert("Please enter the Emergency Code");
        return;
    }

    document.getElementById("message").innerHTML =
    "📡 Connecting to Hybrid Drone...";

    setTimeout(function(){

        document.getElementById("message").innerHTML =
        "✅ Hybrid Drone Connected<br><br>📤 Forwarding to AI...";

    },2000);

    setTimeout(function () {

    document.getElementById("message").innerHTML =
        "<h3>🤖 AI Emergency Assistant</h3>" +

        "<p>How many people are with you?</p>" +
        "<input id='people' type='number' min='1' placeholder='Enter number'>" +

        "<p>Is anyone injured?</p>" +
        "<select id='injured'>" +
            "<option value='no'>No</option>" +
            "<option value='yes'>Yes</option>" +
        "</select>" +

        "<p>Are there children or elderly people?</p>" +
        "<select id='vulnerable'>" +
            "<option value='no'>No</option>" +
            "<option value='yes'>Yes</option>" +
        "</select>" +

        "<p>What is the water level?</p>" +
        "<select id='waterLevel'>" +
            "<option value='low'>Knee Level</option>" +
            "<option value='medium'>Waist Level</option>" +
            "<option value='high'>Roof Level</option>" +
        "</select>" +

        "<br><br>" +

        "<button onclick='nextStep()'>Submit Emergency Details</button>";

}, 4000);
}

function nextStep() {

    people = parseInt(document.getElementById("people").value);

    let injured = document.getElementById("injured").value;
    let vulnerable = document.getElementById("vulnerable").value;
    let waterLevel = document.getElementById("waterLevel").value;

    if (!people || people < 1) {
        alert("Please enter the number of people.");
        return;
    }

    let riskScore = 0;

    // Number of people
    if (people >= 6) {
        riskScore += 2;
    }
    else if (people >= 3) {
        riskScore += 1;
    }

    // Injuries
    if (injured === "yes") {
        riskScore += 3;
    }

    // Children or elderly
    if (vulnerable === "yes") {
        riskScore += 2;
    }

    // Water level
    if (waterLevel === "high") {
        riskScore += 3;
    }
    else if (waterLevel === "medium") {
        riskScore += 2;
    }
    else {
        riskScore += 1;
    }

    // AI priority simulation
    if (riskScore >= 6) {
        priority = "HIGH 🔴";
    }
    else if (riskScore >= 3) {
        priority = "MEDIUM 🟡";
    }
    else {
        priority = "LOW 🟢";
    }

    document.getElementById("message").innerHTML =
        "<h3>🤖 AI Assessment Complete</h3>" +

        "People: <b>" + people + "</b><br><br>" +

        "Injured: <b>" + injured.toUpperCase() + "</b><br><br>" +

        "Children/Elderly: <b>" +
        vulnerable.toUpperCase() + "</b><br><br>" +

        "Water Level: <b>" +
        waterLevel.toUpperCase() + "</b><br><br>" +

        "Emergency Priority: <b>" +
        priority + "</b><br><br>" +

        "<h3>📍 Location Detection</h3>" +
        "<button onclick='checkLocation()'>Detect Location</button>";
}
function checkLocation() {

    document.getElementById("message").innerHTML =
        "<h3>📍 Detecting Victim Location...</h3>" +
        "<p>Checking GPS availability...</p>";

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position){

                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                gpsYes(latitude, longitude);
            },

            function(error) {

                gpsNo();
            }

        );

    } else {

        gpsNo();

    }
}
function gpsYes(latitude, longitude) {
     updateVictimMarker("GPS Location");
    document.getElementById("message").innerHTML =
        "<h2>🚑 Rescue Dashboard</h2>" +

        "<b>Emergency ID:</b> FRS001<br><br>" +

        "<b>Emergency Source:</b> " + callStatus + "<br><br>" +
        "<b>People:</b> " + people + "<br><br>" +


        "<b>Priority:</b> " + priority + "<br><br>" +

        "<b>Location Method:</b> GPS ✅<br><br>" +

        "<b>Latitude:</b> " + latitude.toFixed(6) + "<br><br>" +

        "<b>Longitude:</b> " + longitude.toFixed(6) + "<br><br>" +

        "<b>Assigned Team:</b> Rescue Boat 2<br><br>" +

        "<b>ETA:</b> 6 Minutes<br><br>" +

        "<b>Mission Status:</b> Team Dispatched ✅<br><br>" +

        "<button onclick='startRescue()'>Track Rescue Team</button><br><br>" +

        "<button onclick='resetSystem()'>New Emergency</button>";
        "<b>Emergency Source:</b> " + callStatus + "<br><br>" 
}

function gpsNo() {

    document.getElementById("message").innerHTML =
        "<h2>🛸 GPS Unavailable</h2>" +
        "<p>Activating Drone Mesh Location System...</p>" +
        "<p>📡 Drone 1: Measuring signal... ✅</p>" +
        "<p>📡 Drone 2: Measuring signal... ✅</p>" +
        "<p>📡 Drone 3: Measuring signal... ✅</p>" +
        "<p>🔄 Comparing signal measurements...</p>";

    setTimeout(function () {

        showDroneResult();

    }, 3000);
}
function showDroneResult() {

    let estimatedLatitude = 17.3851;
    let estimatedLongitude = 78.4868;
     updateVictimMarker("drone estimated:");

    document.getElementById("message").innerHTML =
        "<h2>🚑 Rescue Dashboard</h2>" +

        "<b>Emergency ID:</b> FRS001<br><br>" +

        "<b>Emergency Source:</b> " + callStatus + "<br><br>" +
        "<b>People:</b> " + people + "<br><br>" +

        "<b>Priority:</b> " + priority + "<br><br>" +

        "<b>Location Method:</b> Drone Network Estimation 🛸<br><br>" +

        "<b>Estimated Latitude:</b> " +
        estimatedLatitude + "<br><br>" +

        "<b>Estimated Longitude:</b> " +
        estimatedLongitude + "<br><br>" +

        "<b>Estimated Accuracy:</b> Within 20 meters<br><br>" +

        "<b>Assigned Team:</b> Rescue Boat 2<br><br>" +

        "<b>ETA:</b> 8 Minutes<br><br>" +

        "<b>Mission Status:</b> Team Dispatched ✅<br><br>" +

        "<button onclick='startRescue()'>Track Rescue Team</button><br><br>" +
        "<button onclick='showMeshCommunication()'>Show Drone Mesh</button><br><br>" +

        "<button onclick='resetSystem()'>New Emergency</button>";
        "<b>Emergency Source:</b> " + callStatus + "<br><br>" 
}
function updateVictimMarker(locationMethod) {

    let marker = document.getElementById("victimMarker");

    marker.innerHTML =
        "📍 Victim<br><small>" + locationMethod + "</small>";

    marker.style.display = "block";
}
function startRescue() {

    let rescueTeam = document.getElementById("rescueTeam");

    rescueTeam.style.left = "70%";
    rescueTeam.style.bottom = "55px";

    setTimeout(function () {

        rescueTeam.innerHTML =
            "🚤 Rescue Team<br>✅ Victim Reached";

    }, 4000);
}
function resetSystem() {

    // Reset rescue team position
    let rescueTeam = document.getElementById("rescueTeam");

    if (rescueTeam) {
        rescueTeam.style.left = "20px";
        rescueTeam.style.bottom = "20px";
        rescueTeam.innerHTML = "🚤 Rescue Team";
    }

    // Reset victim marker
    let victimMarker = document.getElementById("victimMarker");

    if (victimMarker) {
        victimMarker.innerHTML = "📍 Victim";
    }

    // Clear emergency code
    document.getElementById("code").value = "";

    // Clear the main output
    document.getElementById("message").innerHTML =
        "System ready for a new emergency.";

    // Reset stored values
    people = 0;
    priority = "";
    callStatus = "Emergency Alert";
}
function showMeshCommunication() {

    let drones = document.querySelectorAll(".drone");
    let commandCenter = document.getElementById("commandCenter");
    let lines = document.querySelectorAll(".mesh-line");

    drones.forEach(function(drone) {
        drone.classList.add("mesh-active");
    });
    lines.forEach(function(line) {
    line.classList.add("active");
    
});

    commandCenter.classList.add("mesh-active");

    document.getElementById("message").innerHTML +=
        "<br><br><b>📡 Mesh Communication Active</b><br>" +
        "Victim → Drone Network → AI Command Center";
}
function makeEmergencyCall() {

    let code = document.getElementById("code").value;

    if (code === "") {
        document.getElementById("message").innerHTML =
            "⚠️ Please enter the emergency code.";
        return;
    }

    document.getElementById("message").innerHTML =
        "<h3>📞 Emergency Call Initiated</h3>" +
        "<p>📡 Searching for Airborne Drone Network...</p>";

    setTimeout(function () {

        document.getElementById("message").innerHTML =
            "<h3>📞 Emergency Call Active</h3>" +
            "<p>🛸 Connected through Drone Network ✅</p>" +
            "<p>📡 Routing call to Emergency Management System...</p>";

        setTimeout(function () {

            document.getElementById("message").innerHTML =
              "<h3>📞 Call Connected Successfully ✅</h3>" +
              "<p>🎙️ Emergency voice channel is active.</p>" +
              "<p>Waiting for the affected person's message...</p>" +
              "<br>" +
              "<button onclick='processShortCall()'>📞 Simulate Short Emergency Call</button>" +
              "<br><br>" +
              "<button onclick='startRecording()'>🎙️ Start Real Voice Recording</button>" +
              "<br><br>" +
              "<button onclick='stopRecording()'>⏹️ Stop Recording</button>";
        }, 2000);

    }, 2000);
}
function processVoiceMessage() {

    document.getElementById("message").innerHTML =
        "<h3>🎙️ Processing Emergency Call...</h3>" +
        "<p>Whisper is transcribing the caller's speech...</p>";

    setTimeout(function () {

        document.getElementById("message").innerHTML =
            "<h3>📝 Voice Transcription</h3>" +
            "<p><b>Caller:</b> Help! We are trapped in flood water. " +
            "There are 4 people and one person is injured.</p>" +
            "<br>" +
            "<button onclick='analyzeCall()'>Analyze Emergency</button>";

    }, 2000);
}
function analyzeCall() {

    // Information extracted from the simulated Whisper transcript
    people = 4;
    priority = "HIGH";

    document.getElementById("message").innerHTML =
        "<h2>🤖 Emergency Call Analysis</h2>" +

        "<p><b>Whisper Transcription:</b><br>" +
        "\"Help! We are trapped in flood water. " +
        "There are 4 people and one person is injured.\"</p>" +

        "<p><b>People Detected:</b> 4</p>" +

        "<p><b>Injury Detected:</b> Yes</p>" +

        "<p><b>Emergency Type:</b> Flood Rescue</p>" +

        "<p><b>Priority:</b> HIGH 🔴</p>" +
        "<p>📞 Emergency information received successfully.</p>" +
        "<p>✅ Voice analysis completed.</p>" +
        "<p>📍 Location detection started automatically...</p>";

        "<p>📍 Location detection started automatically...</p>";
        setTimeout(function () {
           checkLocation();
        }, 2000);
        callStatus = "Full Emergency Call - Voice Information Received";
        setTimeout(function () {
          checkLocation();
        }, 2000);
}
function processShortCall() {
    
    people = "Unknown";
    priority = "URGENT - UNVERIFIED";
    callStatus = "Short Call Disconnected - Limited Information";

    document.getElementById("message").innerHTML =
        "<h3>🎙️ Processing Emergency Call...</h3>" +
        "<p>Whisper is transcribing available speech...</p>";

    setTimeout(function () {

        document.getElementById("message").innerHTML =
            "<h3>⚠️ Emergency Call Disconnected</h3>" +

            "<p><b>Whisper Transcription:</b> \"I need help\"</p>" +

            "<p>📞 Call ended unexpectedly.</p>" +

            "<p>🚨 Insufficient information — emergency alert created automatically.</p>" +

            "<p>📍 Starting location detection immediately...</p>";

        // We do not know the number of people
        people = "Unknown";

        // Flag for urgent human review rather than pretending AI knows severity
        priority = "URGENT - UNVERIFIED";

        setTimeout(function () {
            checkLocation();
        }, 2000);

    }, 2000);
    
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        audioChunks = [];

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function(event) {
            audioChunks.push(event.data);
        };

        mediaRecorder.start();

        document.getElementById("message").innerHTML +=
            "<p>🔴 Recording emergency voice message...</p>";

    } catch (error) {
        alert("Microphone access was not allowed.");
    }
}

function stopRecording() {

    if (!mediaRecorder || mediaRecorder.state !== "recording") {
        alert("Please start recording first.");
        return;
    }

    mediaRecorder.onstop = function () {

        document.getElementById("message").innerHTML =
            "<h2>📝 Emergency Voice Transcription</h2>" +
            "<p><b>Demo Mode:</b> Simulated transcription</p>" +
            "<p><b>Caller:</b> Help! We are trapped in flood water. " +
            "There are 4 people and one person is injured.</p>" +
            "<br>" +
            "<button onclick='analyzeCall()'>Analyze Emergency</button>";
    };

    mediaRecorder.stop();
}
                

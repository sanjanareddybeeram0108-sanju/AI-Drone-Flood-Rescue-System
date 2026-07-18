# AI-Powered Flood Emergency Rescue System

## Overview
#Pictorial Representation

![AI Flood Emergency Rescue System Flowchart]
https://github.com/sanjanareddybeeram0108-sanju/AI-Drone-Flood-Rescue-System/blob/main/system-flowchart.png


This project is a **Proof of Concept (PoC)** that demonstrates how technology could help improve emergency response during flood disasters.

The system demonstrates two ways for an affected person to request help:

1. Sending an emergency alert(missed call type)
2. Making an emergency call(if call connects)

The proposed system combines emergency communication, voice-based assistance, drone-assisted location estimation, emergency analysis, and rescue coordination.

Some features, such as real speech-to-text processing, drone operations, and actual rescue-team deployment, are simulated in the current prototype and would require integration with real systems for practical deployment.

---

## Problem Statement

During floods and other disasters, affected people may find it difficult to communicate their exact location or explain their situation clearly.

Some people may:

- Have limited time to speak
- Be injured or under stress
- Have weak network connectivity
- Be unable to describe their exact location
- Only be able to send a quick emergency alert

Delays in identifying their location and understanding the severity of the emergency can affect rescue response time.

---

## Proposed Solution

The proposed system provides two emergency communication options depending on the affected person's situation.

### 1. Emergency Alert

If the person cannot make a call or provide detailed information, they can send an emergency alert.

The demonstrated flow is:

**Emergency Alert → Alert Received → Drone Network Activated → Location Estimation → Rescue Process**

The goal is to begin locating the affected person without requiring them to answer multiple questions.

### 2. Emergency Call

If the person is able to communicate, they can use the emergency call option.

The demonstrated flow is:

**Emergency Call → Voice Message → Transcription → Emergency Analysis → Location Estimation → Rescue Process**

The system is designed with the future goal of analyzing information such as the number of affected people, injuries, vulnerable people, and other indicators of emergency severity.

---

## Key Features

- Emergency alert option for quick assistance
- Voice recording using the browser
- Simulated speech-to-text transcription(using whispher or any other tool)
- Emergency information and priority analysis
- Hybrid-Drone-network-based location estimation simulation(distributed mesh network communications and also acts as mobiizing cell towers)
- Rescue coordination simulation(GPS/NO GPS)
- Rescue mission status dashboard

---

#Pictorial Representation


## How to Use the Prototype

1. Enter the emergency code.
2. Choose one of the available emergency options.

### Using Send Emergency Alert

1. Click **Send Emergency Alert**.
2. The system confirms that the alert has been received.
3. The simulated drone network is activated.
4. The system begins the location estimation process.
5. The rescue process is demonstrated.

### Using Make Emergency Call

1. Click **Make Emergency Call**.
2. The emergency call simulation begins.
3. Record the emergency voice message.
4. Stop the recording.
5. A simulated transcription is displayed.
6. The emergency information is processed.
7. The location estimation and rescue process continues.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser MediaRecorder API
- GitHub
- GitHub Pages

---

## Current Prototype Limitations

This project is currently a **Proof of Concept** and not a production emergency-response system.

- Speech-to-text transcription is simulated in the current prototype.
- The system is not currently integrated with authorized emergency response services.
- The current prototype mainly demonstrates a flood-disaster scenario.
- Real-world deployment would require extensive testing, security measures, reliable infrastructure, and cooperation with authorized emergency authorities.

---

## Future Scope

Future development could include:

- integration of Whisper (Detection of distress indicators such as unusual pauses, urgency, and vocal stress)
- Handling short emergency statements such as "I need help" or "help"
- Real GPS integration
- Integration with authorized emergency response systems
- Improved operation in low-connectivity environments

---

## Important Note

This project is intended as a **hackathon Proof of Concept** to demonstrate the proposed workflow and technical idea.
It does not currently contact real emergency services, control real drones, or dispatch real rescue teams.





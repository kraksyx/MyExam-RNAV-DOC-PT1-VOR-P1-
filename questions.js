const questions = [
  {
    "question": "An aircraft is 100 NM from a VOR facility. Assuming no error when using a deviation indicator where 1 dot = 2\u00b0 deviation, how many dots deviation from the centre line of the instrument will represent the limits of the airway boundary? (Assume that the airway is 10 NM wide)",
    "options": [
      "6.0",
      "3.0",
      "4.5",
      "1.5"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft is attempting to track 1860M on an airway defined by a VOR 80 nm away. The VOR indicates the aircraft position. With these indications the aircraft is on the ___ radial and ___ the airway.",
    "options": [
      "0010 outside",
      "1810 inside",
      "0010 inside",
      "1810 outside"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is on a heading of 100 degrees (m) from a VOR. To make the VOR/ILS deviation indicator needle centralise with the TO flag showing, the following bearing should be selected on the OBS:",
    "options": [
      "100 degrees",
      "110 degrees",
      "290 degrees",
      "280 degrees"
    ],
    "correct": 3
  },
  {
    "question": "The basic principle of operation of a standard VOR is by:",
    "options": [
      "phase comparison between a 108 Mhz reference signal and a 30 Hz variable signal",
      "phase difference between a frequency modulated reference signal and an amplitude modulated variable signal",
      "phase comparison between an amplitude modulated reference signal and a frequency modulated variable signal",
      "phase comparison between a 30 Hz reference signal and a 108 Mhz variable signal"
    ],
    "correct": 1
  },
  {
    "question": "An aircraft is tracking inbound to a VOR beacon on the 105 radial. The setting the pilot should put on the OBS and the CDI indications are:",
    "options": [
      "285, TO",
      "105, TO",
      "285, FROM",
      "105, FROM"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is on a VOR radial of 235o, heading 003o(M), and with the OBS set to 060. The correct indications are:",
    "options": [
      "TO: 1/2 Scale deflection to the left",
      "FROM: 1/2 Scale deflection to the left",
      "TO: 1/2 Scale deflection to the right",
      "FROM: 1/2 Scale deflection to the right"
    ],
    "correct": 0
  },
  {
    "question": "Using a VOR outside the DOC may result in interference from:",
    "options": [
      "other beacons",
      "other aircraft",
      "sky waves",
      "ground waves"
    ],
    "correct": 0
  },
  {
    "question": "The antenna polar diagram of a conventional VOR:",
    "options": [
      "is always directed towards the aircraft",
      "is like a figure of 8",
      "is a pencil beam",
      "Rotates at 30 revolutions per second"
    ],
    "correct": 3
  },
  {
    "question": "With reference to the VOR:",
    "options": [
      "Failure of the monitor will cause the beacon to cease its ident",
      "A typical VOR frequency is 118.15 Mhz",
      "The TO/FROM indicator shows whether the aircraft is heading towards or away from the beacon",
      "Wide coverage is obtained from only a few beacons"
    ],
    "correct": 0
  },
  {
    "question": "(Refer to figure 062-05) Refer to the diagram of a VOR/ILS deviation indicator. Assume that the indicator is set to define the centreline of an airway, that the aircraft is 90 nm from the VOR and inbound to the facility. At the time of observation the aircraft was located on radial:",
    "options": [
      "063o",
      "253o",
      "256o",
      "243o"
    ],
    "correct": 0
  },
  {
    "question": "If the compass providing information to the RMI suddenly gets a 20\u00b0 deviation:",
    "options": [
      "the magnetic track to the VOR station may be read on the compass card under the tip of the VOR needle",
      "the number of the received radial may still be read on the compass card under the tail of the VOR needle",
      "the relative bearing to the VOR, as observed on the RMI, will jump 20o",
      "all 3 answers are correct"
    ],
    "correct": 3
  },
  {
    "question": "Using a VOR beyond the limits of the DOC may result in:",
    "options": [
      "loss of signal due to line of sight limitations",
      "interference from other VORs operating on the same frequency",
      "sky wave contamination of the VOR signal",
      "scalloping errors"
    ],
    "correct": 1
  },
  {
    "question": "Using a 5 dot CDI, how many dots would show for an aircraft on the edge of an airway at 100 nm from the VOR beacon?",
    "options": [
      "5",
      "2.5",
      "1.5",
      "3"
    ],
    "correct": 2
  },
  {
    "question": "An Omni-bearing selector (OBS) shows full deflection to the left when within range of a serviceable VOR. What angular deviation are you from the selected radial?",
    "options": [
      "10o or more",
      "less than 10o",
      "1.5o or more",
      "2.5o or more"
    ],
    "correct": 0
  },
  {
    "question": "The letters QTX and adjacent symbol indicate a:",
    "options": [
      "VOR/DME",
      "TACAN",
      "VOR",
      "Airport"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following lists information required to input a way point or Phantom Station into a basic VOR/DME-based Area Navigation System?",
    "options": [
      "Magnetic track and distance from the aircraft to the way point or Phantom Station",
      "Magnetic track and distance to a VOR/DME from the way point or Phantom Station",
      "Radials from a minimum of two VORs to the way point or Phantom Station",
      "Radial and distance from a VOR/DME to the way point or Phantom Station"
    ],
    "correct": 3
  },
  {
    "question": "The variable signal of a conventional VOR is:",
    "options": [
      "30 Hz frequency modulated",
      "30 Hz amplitude modulated",
      "9960 Hz frequency modulated",
      "9960 Hz amplitude modulated"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following disturbances is most likely to cause the greatest inaccuracy in ADF bearings?",
    "options": [
      "Coastal refraction",
      "Sky waves",
      "Night effect",
      "Thunderstorms nearby"
    ],
    "correct": 3
  },
  {
    "question": "When using a DVOR, the pilot should be aware that the reference and variable signals are reversed. This:",
    "options": [
      "does not affect the VOR indications in any way",
      "reverses the indications",
      "improves the accuracy",
      "improves the range"
    ],
    "correct": 3
  },
  {
    "question": "If you correctly tuned in a VOR situated to your east, your RMI should read ____, and your OBS would read ____",
    "options": [
      "000; 000 with needle central and TO indicated",
      "090; 090 with needle central and FROM indicated",
      "000; 000 with needle central and FROM indicated",
      "090; 090 with needle central and TO indicated"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft on a heading of 270\u00b0 (M) has 093 set on the OBS and TO indicated on the VOR L/R deviation indicator. The needle shows two dots fly left. The aircraft is on the:",
    "options": [
      "277o radial",
      "089o radial",
      "097o radial",
      "269o radial"
    ],
    "correct": 3
  },
  {
    "question": "What is the value of the selected course?",
    "options": [
      "260o (M)",
      "272o (M)",
      "299o (M)",
      "280o (M)"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft is situated at 30oN \u2013 005oE with a magnetic variation of 10oW. A VOR is located at 30oN \u2013 013oE with a magnetic variation of 15oW. The aircraft is situated on the VOR radial:",
    "options": [
      "101o",
      "281o",
      "286o",
      "256o"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following errors is associated with the use of VOR?",
    "options": [
      "Scalloping",
      "Coastal refraction",
      "Quadrantal error",
      "Night effect"
    ],
    "correct": 0
  },
  {
    "question": "What use if any does TACAN provide to civilian users:",
    "options": [
      "Bearing information only",
      "Bearing and range information",
      "Range information only",
      "It is of no use to civilian pilots"
    ],
    "correct": 2
  },
  {
    "question": "The reference signal of a conventional VOR is:",
    "options": [
      "30 Hz frequency modulated",
      "30 Hz amplitude modulated",
      "9960 Hz frequency modulated",
      "9960 amplitude modulated"
    ],
    "correct": 0
  },
  {
    "question": "The Declared Operational Coverage of a VOR is:",
    "options": [
      "An altitude and range limited by transmitter power",
      "A range limited by transmitter power",
      "An altitude and range limited by signal to noise ratio",
      "A range limited by signal to noise ratio"
    ],
    "correct": 2
  },
  {
    "question": "When comparing conventional and Doppler VOR, which of the following applies to the Doppler VOR:",
    "options": [
      "The reference and variphase signals are reversed but the phase difference remains the same",
      "The reference and variphase signals are the same but the phase difference is reversed",
      "The reference and variphase signals are reversed and the phase relationship remains the same",
      "The reference and variphase signals are reversed and the phase relationship is reversed"
    ],
    "correct": 0
  },
  {
    "question": "What are the indications to show that you are receiving a Doppler VOR:",
    "options": [
      "The identification will always end with a D",
      "There is no difference from the conventional VOR indications",
      "The Doppler VOR identification begins with a D",
      "The ident is spoken eg \u201cAberdeen Doppler VOR\u201d"
    ],
    "correct": 1
  },
  {
    "question": "What is the maximum distance between VOR beacons designating the centreline of an airway (10 nm wide), if the expected VOR bearing error is 5.5\u00b0:",
    "options": [
      "120 nm",
      "109 nm",
      "60 nm",
      "54 nm"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is a valid frequency (MHz) for a VOR:",
    "options": [
      "107.75",
      "109.90",
      "118.35",
      "112.20"
    ],
    "correct": 3
  },
  {
    "question": "In a conventional VOR the direction of rotation of the signal will be (i) and the variable signal is (ii). In Doppler VOR the reference signal is (iii) and the direction of rotation will (iv):",
    "options": [
      "(i) Clockwise; (ii) FM; (iii) FM; (iv) Clockwise",
      "(i) Anticlockwise; (ii) AM; (iii) AM; (iv) Clockwise",
      "(i) Clockwise; (ii) AM; (iii) FM; (iv) Anticlockwise",
      "(i) Anticlockwise; (ii) AM; (iii) FM; (iv) Anticlockwise"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft is inbound to VOR X on the 073 radial and has a Doppler drift of 12oL. A position report is required when crossing the 133 radial from VOR Y. If the aircraft is on track the RMI indications at the reporting point will be:",
    "options": [
      "Heading : 085 ; X Pointer : 073 ; Y Pointer ; 133",
      "Heading : 085 ; X Pointer : 253 ; Y Pointer ; 133",
      "Heading : 265 ; X Pointer : 073 ; Y Pointer ; 313",
      "Heading : 265 ; X Pointer : 253 ; Y Pointer ; 313"
    ],
    "correct": 3
  },
  {
    "question": "The JAR OPS recommendation for the colour of a VORTAC which is not in use by the FMC is:",
    "options": [
      "White",
      "Green",
      "Magenta",
      "Cyan"
    ],
    "correct": 3
  },
  {
    "question": "The principle of operation of VOR is:",
    "options": [
      "Calculating the frequency difference of separate transmissions",
      "Calculating the frequency difference of separate transmissions",
      "Phase comparison of signals at the same frequency",
      "Secondary radar technique"
    ],
    "correct": 2
  },
  {
    "question": "When using a VOR outside the DOC, the equipment:",
    "options": [
      "May give reverse readings",
      "May suffer from scalloping",
      "May suffer interference from other VORs",
      "Will indicate normally but the accuracy will always be less than 5\u00b0"
    ],
    "correct": 2
  },
  {
    "question": "The indication was obtained when the aircraft was at a range of 50 nm from the VOR. Assuming that the VOR is correctly set-up, the radial and horizontal distance the aircraft is off track are:",
    "options": [
      "269 radial and 5 nm right of track",
      "089 radial and 5 nm left of track",
      "269 radial and 3.3 nm left of track",
      "089 radial and 3.3 nm right of track"
    ],
    "correct": 3
  }
];

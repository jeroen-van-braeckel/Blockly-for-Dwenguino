var MSG = {
  arduinoCodeCopied: "Arduino code copied to clipboard",
  title: "DwenguinoBlockly",
  blocks: "Blöcke",
  linkTooltip: "Speichern und Verknüpfen mit Blöcken",
  runTooltip: "Führe das Programm aus, das mit den Blöcken im Arbeitsbereich erstellt wurde",
  loadBlocksFileTooltip: "Lade eine zuvor gespeicherte Datei",
  saveBlocksFileTooltip: "Speichere die Blöcke in einer lokalen Datei",
  toggleSimulator: "Öffne oder schließe das Simulatorfenster",
  badCode: "Programmfehler:\n%1",
  timeout: "Die maximale Anzahl von Iterationen wurde überschritten",
  trashTooltip: "Lösche alle Blöcke",
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catLists: "Listen",
  catColour: "Farben",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  catArduino: "Arduino",
  catDwenguino: "Dwenguino",
  catSocialRobot: "Sozialer roboter",
  catComments: "Kommentar",
  catBoardIO: "IO",
  createVar: "Lege neue Variable an",
  listVariable: "Liste",
  textVariable: "Text",
  httpRequestError: "Bei der Bearbeitung deiner Anfrage ist ein Problem aufgetreten",
  linkAlert: "Teile deine Blöcke mit diesem Link:\n\n%1",
  hashError: "\"%1\" stimmt nicht mit einer gespeicherten Datei überein.",
  xmlError: "Deine gespeicherte Datei konnte nicht geladen werden. Wurde es mit einer anderen version von Blockly erstellt?",
  badXml: "Fehler beim Verarbeiten der XML-Datei:\n%1\n\nWähle \"OK\" um deine Änderungen zu ignorieren oder  \"Abbrechen\" um die XML-Datei weiter zu bearbeiten.",
  pressed: "Gedrückt",
  setup: "Bereite vor",
  loop: "Wiederhole",
  dwenguino_main_program_structure: "Der erste Code wird beim Programmstart nur einmal ausgeführt. Der Code in der 'Wiederhole' wird immer wieder wiederholt, bis das Programm stoppt (zB wenn du den Stecker aus der Platine ziehst).",
  delay_help: "Warte einige Millisekunden (1 Sekunde = 1000 Millisekunden)",
  delay: "Warte",
  clearLCD: "Klare LCD-Anzeige",
  dwenguinoLCD: "LCD-Anzeige %1 %2 %3 Schreibe Text: %4 in Zeile %5 von Spalte %6",
  pin: "Stift",
  toneOnPin: "Spiele den Ton an ",
  frequency: "mit der Frequenz",
  noToneOnPin: "Hör auf den Ton zu spielen an",
  toneOnPinTooltip: "Spielen Sie einen Ton mit einer bestimmten Frequenz an einem Stift",
  noToneOnPinTooltip: "Hör auf den Ton zu spielen an einem bestimmten Stift",
  trig: "trig Stift Nummer",
  echo: "echo Stift Nummer",
  sonarTooltip: "Dieser Block liest die Entfernung eines Sonarsensors",
  miliseconds: "ms",
  digitalRead: "Lese den digitalen Wert", 
  digitalWriteToPin: "Schreibe an",
  digitalWriteValue: "der digitale Wert",
  digitalWriteTooltip: "Schreibe hoch oder niedrig an eine Stecknadel des Dwenguino",
  digitalReadTooltip: "Lese einen digitalen Wert von einem Stift des Dwenguino",
  high: "HOCH",
  low: "NIEDRIG",
  highLowTooltip: "Entspricht einem hohen (1) oder niedrigen (0) Wert an eine Stecknadel",
  tutsIntroduction: "Einführung",
  tutsTheremin: "Theremin",
  tutsRobot: "Roboter",
  tutsBasicTest: "Grundtest",
  tutsHelloDwenguino: "Hallo Dwenguino!",
  tutsBlinkLED: "blinkende Lichter",
  tutsHelloRobot: "fahrender Roboter",
  tutsLedOnButtonPress: "LED wenn eine Taste gedrückt wird",
  tutsBitPatternOnLeds: "Bitmuster auf LEDs",
  tutsAllButtons: "Alle Tasten",
  tutsDriveForward: "vorwärts fahren",
  tutsRideInSquare: "in einem Rechteck fahren",
  tutsRideToWall: "an eine Wand fahren",
  tutsAvoidWall: "eine Mauer meiden",
  tutsNameOnLcdBasic: "Deine Name auf dem LCD-Bildschirm",
  tutsNameOnLcdWeGoSTEM: "Name auf dem LCD-Bildschirm",
  tutsIntroduceYourselfWeGoSTEM: "Sich vorstellen",
  tutsShowNameAndDisappearWeGoSTEM: "Lass deinen Namen verschwinden",
  tutsLampOnOffWeGoSTEM: "blinkende Lichter",
  tutsPoem1: "Gedicht 1",
  tutsPoem2: "Gedicht 2",
  simulator: "Simulator",
  setLedState: "Setz %1 %2",
  setLedStateTooltip: "Schalte einen DwenguinoDCMotorBlock auf der Platine ein oder aus.",
  ledPinsTooltip: "Wähle eine LED, die du ein- oder ausschalten möchtest",
  dwenguinoOn: "AN",
  dwenguinoOff: 'AUS',
  dwenguinoLedBlock: "LED",
  dwenguinoOnOffTooltip: "Wähle AN oder AUS",
  dwenguinoSonarBlock: "sonar %1 %2 %3 trig pin number %4 echo pin number %5",
  dwenguinoServoBlock: "Servomotor %1 %2 %3 Nummer %4 Winkel %5",
  dwenguinoServoDropdownBlock: "Servo motor %1",
  dwenguinoServoBlockTooltip: "Servomotor 1 oder 2 auf einen Winkel zwischen 0 und 180 Grad einstellen",
  dwenguinoServoDropdownTooltip: "Select one of the two internal servo motors",
  dwenguinoServoOne: "1",
  dwenguinoServoTwo: "2",
  dwenguinoDCMotorBlock: "DC Motor %1 %2 %3 Nummer %4 Geschwindigkeit %5",
  dwenguinoDCMotorBlockTooltip: "Stell die Geschwindigkeit eines an die Platine angeschlossenen Motors ein. Die Geschwindigkeit ist ein Wert zwischen -255 (volle Geschwindigkeit rückwärts) und 255 (volle Geschwindigkeit vorwärts).",
  dwenguinoAnalogWrite: "Schreibe an %1 der analoge Wert %2",
  dwenguinoAnalogWriteTooltip: "Schreibe einen analogen Wert zwischen 0 und 255 an einem bestimmten Stift",
  dwenguinoAnalogRead: "Lese den analogen Wert %1",
  dwenguinoAnalogWriteTooltip: "Lese einen analogen Wert zwischen 0 und 255 vom angegebenen Stift",
  digitalReadSwitch: "Lese den Wert der Taste %1",
  waitForSwitch: "Warte bis Taste %1 gedrückt wird",
  digitalReadSwitchTooltip: "Lese den Wert einer der Dwenguino Tasten",
  north: "NORD", 
  east:"SUED",
  south: "OST",
  west: "WEST",
  center: "ZENTRUM",
  ledsReg: "LEDs",
  toneOnPinTooltip: "Spiele einen Ton mit einer bestimmten Frequenz an einem Stift",
  noToneOnPinTooltip: "Hör auf den Ton zu spielen an einem bestimmten Stift",
  trig: "trig Stift Nummer",
  echo: "echo Stift Nummer",
  sonarTooltip: "Dieser Block liest die Entfernung eines Sonarsensors",
  miliseconds: "ms",
  digitalRead: "Lese den digitalen Wert", 
  digitalWriteToPin: "Schreibe an",
  digitalWriteValue: "der digitale Wert",
  digitalWriteTooltip: "Schreibe hoch oder niedrig an einen Stift des Dwenguino",
  digitalReadTooltip: "Lese einen digitalen Wert von einem Stift des Dwenguino",
  high: "HOCH",
  low: "NIEDRIG",
  highLowTooltip: "Entspricht einem hohen (1) oder niedrigen (0) Wert an eine Stecknadel",
  tutsIntroduction: "Einführung",
  tutsTheremin: "Theremin",
  tutsRobot: "Roboter",
  tutsBasicTest: "Grundtest",
  tutsHelloDwenguino: "Hallo Dwenguino!",
  tutsBlinkLED: "blinkende Lichter",
  tutsHelloRobot: "fahrender Roboter",
  tutsLedOnButtonPress: "LED wenn eine Taste gedrückt wird",
  tutsBitPatternOnLeds: "Bitmuster auf LEDs",
  tutsAllButtons: "Alle Tasten",
  tutsDriveForward: "vorwärts fahren",
  tutsRideInSquare: "in einem Rechteck fahren",
  tutsRideToWall: "an eine Wand fahren",
  tutsAvoidWall: "eine Mauer meiden",
  tutsNameOnLcdBasic: "Deine Name auf dem LCD-Bildschirm",
  tutsNameOnLcdWeGoSTEM: "Name auf dem LCD-Bildschirm",
  tutsIntroduceYourselfWeGoSTEM: "Sich vorstellen",
  tutsShowNameAndDisappearWeGoSTEM: "Lass deinen Namen verschwinden",
  tutsLampOnOffWeGoSTEM: "blinkende Lichter",
  tutsPoem1: "Gedicht 1",
  tutsPoem2: "Gedicht 2",
  simulator: "Simulator",
  setLedState: "Setz %1 %2",
  setLedStateTooltip: "Schalte einen DwenguinoDCMotorBlock auf der Platine ein oder aus.",
  ledPinsTooltip: "Wähle eine LED, die du ein- oder ausschalten möchtest",
  dwenguinoOn: "AN",
  dwenguinoOff: 'AUS',
  dwenguinoLedBlock: "LED",
  dwenguinoOnOffTooltip: "Wähle AN oder AUS",
  dwenguinoSonarBlock: "sonar %1 %2 %3 trig Stift Nummer %4 echo Stift Nummer %5",
  dwenguinoServoBlock: "Servomotor %1 %2 %3 Nummer %4 Winkel %5",
  dwenguinoServoDropdownBlock: "Servo motor %1",
  dwenguinoServoBlockTooltip: "Servomotor 1 oder 2 auf einen Winkel zwischen 0 und 180 Grad einstellen",
  dwenguinoServoDropdownTooltip: "Select one of the two internal servo motors",
  dwenguinoServoOne: "1",
  dwenguinoServoTwo: "2",
  dwenguinoDCMotorBlock: "DC Motor %1 %2 %3 Nummer %4 Geschwindigkeit %5",
  dwenguinoDCMotorBlockTooltip: "Stell die Geschwindigkeit eines an die Platine angeschlossenen Motors ein. Die Geschwindigkeit ist ein Wert zwischen -255 (volle Geschwindigkeit rückwärts) und 255 (volle Geschwindigkeit vorwärts).",
  dwenguinoAnalogWrite: "Schreibe an %1 der analoge Wert %2",
  dwenguinoAnalogWriteTooltip: "Schreibe einen analogen Wert zwischen 0 und 255 an einem bestimmten Stift",
  dwenguinoAnalogRead: "Lies den analogen Wert %1",
  dwenguinoAnalogWriteTooltip: "Lies einen analogen Wert zwischen 0 und 255 vom angegebenen Stift",
  digitalReadSwitch: "Lies den Wert der Taste %1",
  waitForSwitch: "Warte bis Taste %1 gedrückt wird",
  digitalReadSwitchTooltip: "Lies den Wert einer der Dwenguino Tasten",
  north: "NORD", 
  east:"SUED",
  south: "OST",
  west: "WEST",
  center: "ZENTRUM",
  ledsReg: "LEDs",
  dwenguinoLedsRegTooltip: "Mit diesem Block kannst du die LEDs 0 bis 7 mit einer Binärzahl ein- oder ausschalten. Beispiel: 0b00001111 schaltet die LEDs 0 bis 3 ein und der Rest aus.",
  pressed: "GEDRUECKT",
  notPressed: "NICHT GEDRUECKT",
  pressedTooltip: "Stellt den Wert einer Taste dar. Vergleiche diesen Wert mit dem Wert, den du von einer bestimmten Taste gelesen hast.",
  sureYouWantToChangeTutorial: "Bist du sicher, dass du das Tutorial starten möchtest?\n Alle Blöcke im momentanen Arbeitsbereich werden entfernt.",
  create: "Erstellen",
  with_type: "mit Typ",
  create_global: "Erstellen (Global)",
  dwenguinoStepperMotorBlock: "Schrittmotor %1 %2 %3 Nummer %4 Anzahl Schritte %5",
  dwenguinoStepperMotorBlockTooltip: "TODO",
  drawingrobotMove: "Bewege den Stift im Winkel von %1 Grad in %2 Schritten",
  drawingrobotMoveXY: "Bewege den Stift %1 nach rechts und %2 nach links",
  drawingrobotLine: "Zeichne eine Linie nach x: %1 y: %2",
  drawingrobotCircle: "Zeichne einen Kreis mit Radius: %1",
  drawingrobotRectangle:"Zeichne ein Rechteck mit Breite: %1 und Höhe: %2",
  drawingrobotLiftStylus: "Stift heben",
  drawingrobotLowerStylus: "Stift senken",
  drawingrobotChangeColor: "Farbe %1",
  up:"Nach oben",
  down: "Nach unten",
  left: "Links",
  right:"Rechts",
  bounds: "Achtung\nDu versuchst außerhalb des Papieres zu zeichnen",
  drawingrobotgrid: "Raster",
  colorpicker: "Farbe",
  drawingrobotSaveImage: "Zeichnung speichern",
  drawingrobotDrawing: "Zeichnung",
  stepperMotorOne: "SCHRITTMOTOR1", 
  stepperMotorTwo: "SCHRITTMOTOR2",
  stepperMotorTooltip: "Wähle welchen Schrittmotor des Zeichenroboters du verwenden möchtest.",
  socialrobotSetPinBlock: "Set",
  socialrobotReadPinBlock: "Lies Wert von Pin aus",
  socialRobotRgbLedBlock: "RGB-LED",
  socialRobotPinRed: "Stift rot",
  socialRobotPinGreen: "Stift grün",
  socialRobotPinBlue: "Stift blau",
  socialRobotRgbLedOffBlock: "Schalte die RGB-LED ab mit",
  socialRobotRgbColorBlock: "RGB Farbe %1",
  socialRobotRgbColor: "rot %1 grün %2 blau %3",
  socialRobotLedmatrixImageBlock: "Zeige Muster auf dem LED-Matrixsegment an",
  socialRobotLedmatrixImageBlockTooltip: "Zeige das ausgewählte Muster auf dem ausgewählten LED-Matrixsegment an",
  socialRobotLedmatrixEyePatternBlock: "Zeige Augenmuster an",
  socialRobotLedmatrixEyePatternBlockTooltip: "Zeige das ausgewählte Augenmuster auf dem ausgewählten LED-Matrixsegment an",
  socialRobotLedmatrixEyePatternSegmentBlock: "auf dem LED-Matrixsegment",
  socialRobotLedmatrixClearSegmentBlock: "Leere das LED-Matrixsegment",
  socialRobotLedmatrixClearSegmentBlockTooltip: "Leere das ausgewählte LEd-Matrixsegment.",
  socialRobotLedmatrixClearDisplayBlock: "Leere die LED-Matrix.",
  socialRobotLedmatrixClearDisplayBlockTooltip: "Leere die komplette Led-Matrix.",
  next: "Nächste",
  previous: "Vorherige",
  socialRobotPirBlock: "Näherungssensor %1 %2 %3 Trigger Stift Nummer %4",
  socialRobotSoundSensorBlock: "Geräuschsensor %1 %2 %3 Stift %4",
  socialRobotSoundSensorBlockTooltip: "",
  socialRobotTouchSensorBlock: "Berührungssensor %1 %2 %3 Stift %4",
  socialRobotTouchSensorBlockTooltip: "",
  socialRobotButtonBlock: "Taste %1 %2 %3 Stift %4",
  socialRobotButtonBlockTooltip: "",
  socialrobotSetPinState: "Setz %1 %2",
  socialrobotServoBlock: "servomotor %1 %2 %3 Stift %4 Ecke %5",
  socialrobotWaveArmesBlock: "Winke mit beiden Armen %1 %2 servo Stift rechter Arm %3 %4 servo Stift linker Arm %5 %6",
  socialRobotArmsUpBlock: "Arme nach unten %1 %2 %3 servo rechter Arm %4 %5 servo Stift linker Arm %6 %7",
  socialRobotArmsDownBlock: "Arme nach oben %1 %2 %3 servo Stift rechter Arm %4 %5 servo Stift linker Arm %6 %7",
  socialRobotEyesLeftBlock: "Augen nach links %1 %2 %3 servo Sift linkes Auge %4 %5 servo Stift rechtes Auge %6 %7",
  socialRobotEyesRightBlock: "Augen nach rechts %1 %2 %3 servo Stift linkes Auge %4 %5 servo Stift rechtes Auge %6 %7",
  socialrobotReadPinBlock: "lies Wert von Stift aus %1 %2",
  socialRobotServoRightHand: "servo Stift rechter Hand",
  socialRobotServoLeftHand: "servo Stift linker Hand",
  sonarSliderLabel: "Sonarabstand",
  pirButtonLabel: "Näherungssensor-Taste",
  soundButtonLabel: "Geräuschsensor-Taste",
  touchButtonLabel: "Berührungssensor-Taste",
  lightSensorSliderLabel: "Lichtsensor-Taste",
  servoCostume: "Äußere",
  servoOptions: "Optionen für Servomotoren",
  sonarOptions: "Optionen für Sonarsensoren",
  lcdOptions: "Optionen für die LCD-Bildschirm",
  pirOptions: "Optionen für Näherungssensoren",
  soundOptions: "Optionen für Geräuschsensoren",
  touchOptions: "Optionen für Berührungssensoren",
  buttonOptions: "Tastenoptionen",
  lightOptions: "Optionen für Lichtsensor",
  rgbLedOptions: "Optionen für RGB-LED",
  ledOptions: "Optionen der LED",
  pinOptions: "Stift",
  colorOptions: "Farbe",
  runError: "<h3>Ups, beim Ausführen deines Codes am Board ist ein Fehler aufgetreten.<h3>",
  uploadError: "Code konnte nicht aufs Board geladen werden. \nBitte überprüfe ob das Board mit dem USB-Kabel verbunden ist.\n Sollte das Kabel mit dem Board verbunden sein, versuch es abzustecken, und gleich darauf wieder einzustecken.",
  cleanError: "Entfernen von vorherigem Code fehlgeschlagen.\nBitte überprüfe, ob .cpp files eventuell von einer anderen Applikation verwendet werden.\n Schließe diese Applikation.",
  compileError: "Code konnte nicht kompiliert werden.\nÜberprüfe deinen Code, hast du vielleicht einen Block vergessen?",
  };

  MSG.cookieConsent = {
    close: "Close",
    cookieConsent: "We use functional cookies to set up the Dwenguino simulator. ",
    cookieInfo: "More info on how we use cookies.",
    whatAreCookiesTitle: "Wat zijn cookies?",
    whatAreCookiesDescription1: "Cookies zijn kleine tekstbestanden die lokaal worden opgeslagen op uw computer. Deze cookies dienen voor tal van doeleinden: het onthouden van instellingen (login, taalkeuzes), het vergaren van informatie en het bijhouden van het bezoekgedrag van de gebruikers.",
    whatAreCookiesDescription2: "De cookies die wij gebruiken zijn veilig: zij hebben geen toegang tot persoonlijke informatie op uw computer en kunnen deze niet beschadigen of besmetten met virussen. De cookies geven op geen enkele manier persoonlijke informatie aan ons door. De informatie die we via cookies verzamelen helpt ons om je van specifieke diensten te laten genieten.",
    whatAreNecessaryCookiesTitle: "Wat zijn noodzakelijke cookies?",
    whatAreNecessaryCookiesDescription: "Noodzakelijke cookies zijn cookies die je nodig hebt om te surfen op de website en gebruik te maken van de functionaliteit die we aanbieden. Bovendien zijn de cookies noodzakelijk om de beveiligde onderdelen van de website te kunnen zien.",
    whichCookiesTitle: "Welke cookies gebruikt deze website?",
    dwengoCookieTitle: "Aanmelden als gebruiker (Dwengo cookie)",
    dwengoCookieDescription: "Bij het aanmelden op de website wordt een tijdelijke cookie gebruikt waardoor je herkend wordt als gebruiker. Met behulp van deze cookie wordt onder andere je taalinstelling en vooruitgang bewaard. De cookie zorgt er voor dat je toegang hebt tot de beveiligde delen van de website. Deze cookie is slechts geldig tot aan het einde van de sessie en is enkel beschikbaar voor en gemaakt door Dwengo vzw.",
    jenkinsCookieTitle: "Jenkins configuratie (Jenkins cookie)",
    jenkinsCookieDescription: "De Jenkins cookie is voor ons noodzakelijk om de Dwenguino simulator online op een server te kunnen installeren. Jenkins is software waarvan we gebruik maken om onze simulator te updaten. Die cookie bevat informatie over de instellingen van Jenkins en bevat dus ook geen enkele informatie over jou als gebruiker.",
  };
  
  MSG.dropzone = {
    dictSelectFile: "Wähle eine Datei aus",
    dictChooseFile: "Wähle eine Datei",
    dictDefaultMessage: "Ziehe deine Dateien hier her um den Upload zu starten",
    dictFallbackMessage: "Dateien hochladen mittels Drag'n'Drop wird von deinem Browser nicht unterstützt.",
    dictFileTooBig: "Datei ist zu groß ({{filesize}}MiB). Maximale Dateigröße: {{maxFilesize}}MiB.",
    dictFallbackText: "Bitte verwende das Ersatzformular um deine Dateien hochzuladen, wie in alten Zeiten.",
    dictInvalidFileType: "Dateien dieses Typs können nicht hochgeladen werden.",
    dictResponseError: "Server antwortet mit Code {{statusCode}}.",
    dictCancelUpload: "Upload abbrechen",
    dictCancelUploadConfirmation: "Bist du dir sicher dass du den Upload abbrechen möchtest?",
    dictRemoveFile: "Datei entfernen",
    dictMaxFilesExceeded: "Du kannst keine weiteren Dateien hochladen.",
    dictUploadBlocks: "Upload blocks",
    dictFileNotSupported: "Diese Datei wird nicht unterstützt.",
  };
  
  MSG.ledmatrix = {
    restPosition: 'Ruhezustand', 
    blink1: 'Blink 1',
    blink2: 'Blink 2',
    blink3: 'Blink 3',
    blink4: 'Blink 4',
    blink5: 'Blink 5',
    right1: 'Rechts 1',
    right2: 'Rechts 2',
    left1: 'Links 1',
    left2: 'Links 2',
    up1: ' Oben 1',
    up2: 'Oben 2',
    up3: 'Oben 3',
    down1: 'Unten 1',
    down2: 'Unten 2',
    down3: 'Unten 3',
    angryLeft1: 'böse links 1',
    angryLeft2: 'böse links 2',
    angryLeft3: 'böse links 3',
    angryLeft4: 'böse links 4',
    angryRight1: 'böse rechts 1',
    angryRight2: 'böse rechts 2',
    angryRight3: 'böse rechts 3',
    angryRight4: 'böse rechts 4',
    sadLeft1: 'traurig links 1',
    sadLeft2: 'traurig links 2',
    sadLeft3: 'traurig links 3',
    sadRight1: 'traurig rechts 1',
    sadRight2: 'traurig rechts 2',
    sadRight3: 'traurig rechts 3',
    evilLeft1: 'bösartig links 1',
    evilLeft2: 'bösartig links 2',
    evilRight1: 'bösartig rechts 1',
    evilRight2: 'bösartig rechts 2',
    scanHorizontal1: 'Scann horizontal 1',
    scanHorizontal2: 'Scann horizontal 2',
    scanHorizontal3: 'Scann horizontal 3',
    scanHorizontal4: 'Scann horizontal 4',
    scanVertical1: 'Scann vertikal 1',
    scanVertical2: 'Scann vertikal 2',
    scanVertical3: 'Scann vertikal 3',
    scanVertical4: 'Scann vertikal 4',
    scanVertical5: 'Scann vertikal 5',
    scanVertical6: 'Scann vertikal 6',
    rip1: 'RIP 1',
    rip2: 'RIP 2',
    peering1: 'Starren 1',
    peering2: 'Starren 2',
    peering3: 'Starren 3',
    peering4: 'Starren 4'
  };

  MSG.simulator = {
    start: "Start",
    stop: "Stopp",
    pause: "Pause",
    step: "1 Schritt",
    speed: "Geschwindigkeit",
    speedVerySlow: "40-mal so langsam",
    speedSlow: "20-mal so langsam",
    speedMedium: "10-mal so langsam",
    speedFast: "5-mal so langsam",
    speedVeryFast: "2-mal so langsam",
    speedRealTime: "Echtzeit",
    components: "Wähle Komponenten aus",
    servo: "Servo",
    servoDescription: "Ein Servomotor kann sich über einen bestimmten Winkel zwischen 0 und 180 Grad drehen. Bei Verwendung des Servomotorblocks gibst du den gewünschten Winkel in deinem Programm an. Im Werkzeugkasten befinden sich auch Blöcke, mit denen sich die Hände schwingen lassen; der Winkel ist in diesen Blöcken bereits eingestellt.",
    motor: "Motor",
    DCMotorDescription: "Ein DC-Motor dreht sich rundherum. Du kannst einen solchen Motor für den Antrieb des Roboters verwenden. Die Geschwindigkeit und die Drehrichtung des Motors wird im Programm als Zahl von -255 bis 255 angegeben.",
    scope: "Variablen",
    alertDebug: "Die Simulation stoppt wenn du weiter programmierst.",
    distance: "Abstand",
    scenario: "Szenario",
    scenario_default: "Normales Board",
    scenario_moving: "Bewegender Roboter",
    scenario_wall: "Bewegender Roboter mit Wand",
    scenario_socialrobot:"Sozialer Roboter",
    code: "Code",
    pir: "Näherungssensor",
    pirDescription: "Verwende diesen Sensor, um Bewegung zu erkennen. Im Simulator ist eine Taste vorgesehen, um eine Bewegung durch Drücken der Taste zu simulieren. Wenn er erkannt wird, gibt der Sensor eine 1 zurück, andernfalls eine 0.",
    sonar: "Sonarsensor",
    sonarDescription: "Verwende diesen Sensor, um eine Person oder ein Objekt zu erkennen und um zu bestimmen, wie weit die Person oder das Objekt vom Sensor entfernt ist. Im Simulator ist ein Rollbalken vorgesehen, um den Abstand zwischen Objekt und Sensor zu simulieren. Der Sensor liefert den Abstand in Zentimetern.",
    sound: "Geräuschsensor",
    soundDescription: "Verwende diesen Sensor, um Geräusche zu erkennen. Im Simulator ist eine Taste zur Tonsimulation vorhanden. Wenn ein Geräusch vorhanden ist, gibt der Sensor eine 1 zurück, bei Stille eine 0.",
    light: "Lichtsensor",
    lightDescription: "Verwende diesen Sensor, um hohes oder niedriges Licht zu erkennen. Im Simulator ist ein Rollbalken vorhanden, um Hell und Dunkel zu simulieren. Bei starkem Licht gibt der Lichtsensor des Simulators einen hohen Wert zurück, bei schwachem Licht einen niedrigen Wert.",
    led: "LED",
    ledDescription: "Im Simulator verfügst du über LEDs in vier Farben. Eine LED wird über einen Stift angesteuert, den du selbst angibst. Wenn der Stift im Zustand HOCH ist, leuchtet die LED. Wenn der Stift im Zustand NIEDRIG ist, ist die LED erloschen.",
    rgbled: "RGB-LED",
    rgbledDescription: "",
    ledmatrix: "LED-Matrix",
    ledmatrixDescription: "",
    ledmatrixsegment: "LED matrix segment",
    ledmatrixsegmentDescription: "",
    touch: "Touch sensor",
    touchDescription: "",
    lcd: "LCD-Schirm",
    lcdDescription: "Der LCD-Bildschirm enthält zwei Zeilen mit je 16 Zeichen. Den gewünschten Text gibst du in deinem Programm an.",
    touchsensor: "Tastsensor",
    touchDescription: "Verwende diesen Sensor, um zu erkennen, ob der Roboter berührt wird. Im Simulator ist eine Taste vorgesehen, um eine Berührung durch Drücken der Taste zu simulieren. Bei Berührung liefert der Sensor eine 1, sonst eine 0.",    
    button: "Taste",
    button: "Button",
    sound: "Sound sensor",
    light: "Light sensor",
    buzzer: "Summer",
    buzzerDescription: "Mit dem Summer kannst du einen Ton mit einer von dir gewählten Frequenz abspielen lassen. Die gewünschte Frequenz (in Hz) wird im Programm eingegeben. Mit einem Warteblock bestimmst du, wie lange der Ton abgespielt wird.",
    decoration: "Dekoration"
  };
  
  MSG.socialrobot = {
    plain: "Leere Servo",
    eye: "Auge",
    mouth: "Mund",
    righthand: "Rechte Hand",
    lefthand: "Linke Hand",
  };
  
  MSG.tutorialMenu = {
    header: "Tutorials",
    catDwenguino: "Lerne programmieren<br>mit DwenguinoBlockly",
    catDwenguinoComponents: "Praktische Übersicht über<br>alle Dwenguino-Komponenten",
    catDwenguinoConnector: "Pin mapping &<br>expansion connector",  catRidingRobot: "fahrender Roboter",
    catSocialRobot: "Sozialer Roboter",
    catWeGoStem: "WeGoSTEM",
    chooseCategory: "Wähle eine Tutorial-Kategorie aus",
    chooseTutorial: "Wähle ein Tutorial aus",
    previous: "Zurück",
    close: "Schließen",
    checkAnswer: "Antwort überprüfen",
    correctAnswer: "Die Antwort war richtig!",
    wrongAnswer: "Die Antwort war nicht richtig. Versuch es nochmal!",
    sensors: "Sensoren",
    actuators: "Aktoren",
    movement: "Bewegung",
    audio: "Audio",
    display: "Visuell"
  };  

  MSG.logging = {	
    setup: "Testkonfiguration",	
    login: "Login",	
    logout: "Log out",	
    firstname: "First name",	
    newuser: "Neuer Benutzer",	
    username: "Benutzername",	
    email: "Email address",	
    forgotPassword: "I forgot my password",	
    userDoesNotExist: "This user does not exist. Try a different email address.",	
    resetPassword: "Reset your password",	
    back: "Back",	
    enterFirstname: "Enter your first name",	
    password: "Password",	
    repeatedPassword: "Repeat password",	
    enterPassword: "Enter password",	
    enterRepeatedPassword: "Repeat your password",	
    enterEmail: "Enter email address",	
    chooseUsername: "Wähle einen Benutzernamen",	
    choosePassword: "Wähle 4 persönliche Symbole (Zeichen) als Passwort. Merke sie dir in der richtigen Reihenfolge.",	
    currentlySelected: "Ausgewählt: ",	
    language: "Language",	
    role: "Role",	
    verification: "Verify your email address",	
    verificationSentTo: "A verification message has been sent to your email address. Click the link in the email to verify your account.",	
    birth: "Geburtsdatum",	
    school: "Schule",	
    selectSchool: "Suche nach Schulnamen...",	
    agegroup: "Altersgruppe:",	
    primary1: "Primärstufe 1",	
    primary2: "Primärstufe 2",	
    primary3: "Primärstufe 3",	
    primary4: "Primärstufe 4",	
    primary5: "Sekundärstufe 1",	
    primary6: "Sekundärstufe 2",	
    secondary1: "Sekundärstufe 3",	
    secondary2: "Sekundärstufe 4",	
    secondary3: "Sekundärstufe 5",	
    secondary4: "Sekundärstufe 6",	
    secondary5: "Sekundärstufe 7",	
    secondary6: "Sekundärstufe 8",	
    gender: "Geschlecht: ",	
    gender1: "F",	
    gender2: "M",	
    gender3: "X",	
    gender4: "Das möchte ich nicht sagen",	
    activity: "Aktivität: ",	
    name: "Name ",	
    date: "Datum ",	
    ok: "Ok",	
    reset: "Reset (Zurücksetzen)",	
    person: "Person",	
    dog: "Hund",	
    car: "Katze",	
    camera: "Kamera",	
    heart: "Herz",	
    plane: "Flugzeug",	
    house: "Haus",	
    umbrella: "Regenschirm",	
    star: "Stern",	
    money: "Geld",	
    gift: "Geschenk",	
    keys: "Schlüssel",	
    music: "Musik",	
    snowflake: "Schneeflocke",	
    fire: "Feuer",	
    envelope: "Umschlag"	
  };
  
  MSG.validator = {
    errSchool: "Wähle eine Schule.",
    errId: "Du hast nicht genug Symbole ausgewählt.",
    errAgeGroup: "Wähle deine Altersgruppe.",
    errGender: "Wähle dein Geschlecht.",
    errActivityId: "Deine Aktivität muss einen Namen haben. Der Titel darf nicht leer sein."
  };

  MSG.tutorials = {
    introduction: {},
    theremin: {},
    robot: {},
    basic_test: {},
    hello_dwenguino: {},
    blink: {},
    hello_robot: {},
}; 

MSG.tutorials.general = {
  sureTitle: "Bist du sicher?",
  sureText: "Wenn du auf 'Weiter' klickst, werden die Blöcke im Arbeitsblatt ersetzt.",
};

MSG.tutorials.introduction = {
  stepTitles: [
    "Willkommen bei DwenguinoBlockly",
    "Der Blockly Codebereich",
    "Die Blockly Toolbox",
    "Sprache wählen",
    "Die Schwierigkeit",
    "Dwengobooks",
    "Deine Code hochladen auf die Dwenguino",
    "Öffnen",
    "Speichern",
    "Der Simulator"
  ],
  stepContents: [
    "Hallo, ich bin Dwenguino! Ich werde dir helfen, das Interface kennenzulernen!",
    "Dies ist der Blockly-Codebereich. Hier kommt das Programm, das du schreiben würdest.",
    "Dies ist die Toolbox. Sie enthält alle Blöcke, mit denen du dein Programm schreiben kannst. Je nach gewählter Ebene siehst du mehr oder weniger Blöcke. Schau mal, welche Blöcke alle vorhanden sind.",
    "Hier kannst du eine andere Sprache auswählen.",
    "Mit diesem Rollbalken kannst du den Schwierigkeitsgrad einstellen. Auf höheren Ebenen hast du fortgeschrittenere Blöcke. Um diese zu verwenden, musst du zuerst die Blöcke auf niedrigeren Ebenen verstehen. Im Moment gibt es nur zwei Ebenen, die Blöcke enthalten, in Zukunft wird es mehr Ebenen geben.",
    "Dwengobooks sind interaktive Tutorials, die Schritt für Schritt erklären, wie man ein Programm schreibt.",
    "Wenn du denkst, dass dein Programm fertig ist, kannst du es durch Drücken dieser Taste auf die Dwenguino hochladen. (Vergesse nicht, die Dwenguino zuerst mit dem USB-Kabel an den Computer anzuschließen.) <br/>< em>Achtung! Dies funktioniert nur, wenn du dieses Programm in der Arduino IDE ausführst und nicht online im Browser.</ em>",
    "Mit dieser Taste kannst du eine Datei öffnen, die du zuvor im Editor gespeichert hast.",
    "Mit dieser Taste kannst du die Blöcke in einer lokalen Datei speichern.",
    "Mit dieser Taste kannst du den Simulator öffnen. Du kannst dies verwenden, um deinen Code zu testen, bevor du ihn auf das Board hochladen."
  ],
};

MSG.tutorials.basic_test = {
  step1Title: "Teste dein Grundwissen über Dwenguino",
  step1Content: "Wenn du noch nie ein Programm für den Dwenguino geschrieben hast, kannst du diesen Test verwenden, um zu sehen, wie weit du bist.",
  step2Title: "Sequenz",
  step2ContentA: "Siehst du sich den Code an, den Sie im Blockly workspace sehen. Welcher Wert ist nach Ausführung des Codes in a enthalten?",
  step2ContentB: "Welcher Wert ist in b enthalten?",
  stepEndTitle: "Gut gemacht!",
  stepEndContent: "Du hast das Quiz erfolgreich abgeschlossen, auf zum nächsten!"
};

MSG.tutorials.theremin = {
  step1Title: "Vorwort",
  step1Content: "Elektronische Geräte sind heute unverzichtbar. Viele dieser Geräte werden von Mikrocontrollern gesteuert. In diesem Buch erkunden wir Schritt für Schritt die wunderbare Welt der Mikrocontroller. Am Ende dieses Buches wirdst du in der Lage sein, dein eigenes Digitalpiano zu programmieren. Damit hast du dein erstes Embedded System entwickelt: ein digitales System, das in der Lage ist, mit seiner Umgebung zu interagieren.\
Wir tun dies mit dem Dwenguino, einer einfachen, multifunktionalen Mikrocontroller-Plattform. Der Dwenguino ist mit vielen Funktionen ausgestattet, die dir die ersten Schritte erleichtern werden. Dank der Kompatibilität mit der Arduino-IDE geschieht dies mit durchdachten Tools, die sowohl grafische als auch textuelle Programmierung ermöglichen.\
Das Experimentieren mit Mikrocontrollern kann sowohl zu Hause als auch im Klassenzimmer. Dieses Buch richtet sich in erster Linie an Lehrer, die sich im Rahmen ihres Unterrichts mit Informatik, Elektronik oder Technik beschäftigen. Aber auch junge Menschen können dieses Büch für sich entdecken. Das wird ihre Lernerfahrung noch intensiver machen.\
Viel Erfolg!",
  step2Title: "Überall Microcontrollers",
  step2Content: "In den letzten Jahrzehnten hat die Anzahl der digitalen Geräte in Haus, Garten und Arbeitsumgebung exponentiell zugenommen. Es begann mit der Einführung von einfachen Dingen wie Radiowecker und elektrischen Zahnbürsten, aber mittlerweile ist fast jedes Gerät intelligent. Vielleicht hast du einen Rasenmäher- oder Staubsaugerroboter zu Hause, oder sogar ein selbstfahrendes Auto, das ist heutzutage sicherlich keine Science Fiction mehr!\
Stärker noch, all diese Geräte werden immer mehr mit dem Internet verbunden und bilden das Internet der Dinge (IoT). Studien schätzen, dass bis 2020 über 50 Milliarden Geräte mit dem Internet verbunden sein werden. Dabei geht es nicht nur um Smartphones und Tablets, sondern zum Beispiel auch um Smarthome Rauchmelder, intelligente Kühlschränke und Roboter.\
Die Basis all dieser Geräte sind digitale Rechensysteme, die für die nötige Intelligenz sorgen. Ein Beispiel dafür ist der Mikrocontroller, der alles enthält, was notwendig ist, um Sensordaten zu verarbeiten, Berechnungen durchzuführen und Aktionen auszuführen.",  
  step3Title: "Das Board",
};

MSG.tutorials.hello_dwenguino = {
  step1Title: "Hallo Dwenguino!",
  step1Content: "In diesem Tutorial schreibst du dein erstes Dwenguino-Programm. Dieses Programm schreibt den Text 'Hello Dwenguino' auf das LCD-Display des Boards.",
  step2Title: "Der Simulator",
  step2Content: "Klicke auf die Taste des Simulators, um ihn zu öffnen.",
  step3Title: "Ziehen von Blöcken aus dem Toolbox",
  step3Content: "Nimm nun den unterstehenden Block aus dem Toolbox und setze ihn unter den Text <em><b>zum Start bereit machen</b></em>. </br><img src='img/helloDwenguino/dwenguinoLCD.png' alt='Image of the dwenguino LCD block' style='max-width:100%'/>",
  step4Title: "deine Code ausführen",
  step4Content: "Um deine Code im Simulator auszuführen, drücke die <em><b>Start</b></em>-Taste.</br>Was siehst du?</br>Mit der <em><b>Stopp</b></em>-Taste kannst du die Ausführung in den Simulator stoppen.</br>Beachte, dass du den Code nicht bearbeiten kannst, während er ausgeführt wird.",
  step5Title: "Der 'set, repeat' Block",
  step5Content: "Der Code unterhalb des Textes <em><b>bei Start bereitstellen</b></em> wird beim Programmstart einmal ausgeführt. Der Code unter dem Text <em><b>wiederhohl</b></em> wird unendlich wiederhohlt.</br>Gibt es einen Unterschied, wenn du den <em><b>lcd</b></em>-Block in den <em><b>bei Start bereitstellen</b></em>-Abschnitt oder den <em><b>Wiederholung</b></em>-Abschnitt setzt?",
  step6Title: "Jetzt bist du dran!",
  step6Content: "Probiere es jetzt aus! Ändere den Text, der auf dem Bildschirm erscheint, in deinen eigenen Namen. </br> Versuche auch, den Text in der zweiten Zeile des Bildschirms erscheinen zu lassen.",
};

MSG.tutorials.blink = {
  step1Title: "Blinklicht",
  step1Content: "In diesem Tutorial werden wir ein Programm schreiben, das LD13 abwechselnd ein- und ausschaltet. Wir werden dafür sorgen, dass die LED zweimal pro Sekunde an- und ausgeht.",
  step2Title: "Der Simulator",
  step2Content: "Klicke auf auf die Taste des Simulators, um ihn zu öffnen.",
  step3Title: "Ziehen von Blöcken aus dem Toolbox",
  step3Content: "Verwende die folgenden Blöcke, um dein Programm zu schreiben: </br><img src='img/blink/requiredBlocks.png' alt='Image of the blocks required for the blink exercise' style='max-width:100%'/></br><b>Tip:</b> die Zeit im <em><b>wacht</b></em>Bolck ist im Millisekundenn.</br> 1 Sekunde = 1000 Millisekunden.",
  step4Title: "deine Code ausführen",
  step4Content: "Um deine Code im Simulator auszuführen, drücke die <em><b>Start</b></em>-Taste.</br>Was siehst du?</br>Mit der <em><b>Stopp</b></em>-Taste kannst du die Ausführung im Simulator stoppen.</br>Beachte, dass du den Code nicht bearbeiten kannst, während er ausgeführt wird.",
  step5Title: "Funktioniert deine Code korrekt?",
  step5Content: "Wenn deine Code immer noch nicht richtig funktioniert, kannst du versuchen, den Fehler herauszufinden, indem du deine Code Block für Block durchgehst. Du kannst dies tun, indem du im Simulator auf die Taste <em><b>1 Schritt</b></em> klickst. Wenn deine Code bereits korrekt funktioniert, drücke dann die Daumen!",
  step6Title: "jetzt bist du dran!",
  step6Content: "Probiere es jetzt aus!</br><ul><li>Ändere die Blinkfrequenz so, dass die LED einmal pro Sekunde ein- und ausgeschaltet wird.</li><li>Wähle eine andere LED zum Ein- und Ausschalten.</li><li>Versuche mehrere LEDs ein- und auszuschalten.</li></ul>",
};

MSG.tutorials.hello_robot = {
  step1Title: "Fahrender Roboter",
  step1Content: "In diesem Tutorial wirdst du einen zweirädrigen Fahrroboter programmieren. Deine Aufgabe ist es, den Roboter verschiedene Muster fahren zu lassen.",
  step2Title: "Der Simulator",
  step2Content: "Klicke auf die Taste des Simulators, um ihn zu öffnen.",
  step3Title: "Auswählen eines Szenarios",
  step3Inhalt: "Um unseren fahrenden Roboter zu programmieren, musst du im Simulator das Szenario <em><b>Fahrender Roboter</b></em> auswählen.",
  step4Title: "Vorwärts fahren",
  step4Content: "Als erste Aufgabe musst du den Roboter dazu bringen, einfach geradeaus zu fahren. Jedes Rad des Roboters ist mit einem Gleichstrommotor verbunden. Um diese Motoren zu programmieren, verwendest du den folgenden Block:</br><img src='img/helloRobot/DCMotor.png' alt='Motorblock' style='max-width:100%'/></br>Durch Ändern der <em><b>Nummer</b></em> kannst du Motor 1 oder 2 laufen lassen.</br>Die <em><b>Geschwindigkeit</b></em> wird durch eine Zahl zwischen -255 und 255 bestimmt. (-255 = maximale Geschwindigkeit rückwärts, 0 = läuft nicht, 255 = maximale Geschwindigkeit vorwärts.)",
  step5Title: "Eine Wende",
  step5Content: "Überlege, wie du den Roboter dazu bringen kannst, einen rechten Winkel zu drehen. </br><b>Tipp:</b> Drehe die Räder in entgegengesetzte Richtungen, damit der Roboter eine Kurve fährt.",
  step6Title: "Ein Quadrat",
  step6Content: "Nachdem es dir gelungen ist, den Roboter eine 90°-Drehung ausführen zu lassen, kannst du nun versuchen, ihn in einem Quadrat fahren zu lassen.",
};

MSG.tutorials.nameOnLcd = {
  step1Title: "Name auf LCD-Bildschirm",
  step1Content: "Öffne die Simulatoransicht und teste den Code. Was siehst du?",
  step2Title: "Name auf dem LCD-Bildschirm",
  step2Content: "Ändere das Programm so, dass deine Name in der ersten Zeile des LCD-Bildschirms erscheint.",
};

MSG.tutorials.blinkLED = {
  step1Title: "Blinkende LED",
  step1Content: "Öffne die Simulatoransicht und teste den Code. Was siehst du?",
  step2Title: "Blinkende LED",
  step2Content: "Ändere das Programm so, dass die LED eine Sekunde lang leuchtet und dann eine Sekunde lang ausgeschaltet wird. Diese Sequenz wird unendlich wiederholt.",
  step3Title: "Extra",
  step3Content: "Schalte eine andere LED ein und aus.",
};

MSG.tutorials.ledOnButtonPress = {
  step1Title: "LED bei Tastendruck",
  step1Content: "Öffne die Simulatoransicht und teste den Code. Was siehst du?",
  step2Title: "LED bei Tastendruck",
  step2Content: "Ändere das Programm so, dass die LED aufleuchtet, wenn du die Nordtaste drückst.",
  step3Title: "Extra",
  step3Content: "Stelle sicher, dass die LED ausgeschaltet wird, wenn du die Nordtaste loslasst.",
};

MSG.tutorials.bitPatternOnLeds = {
  step1Title: "Muster auf LEDs",
  step1Content: "Öffne die Simulatoransicht und teste den Code. Was siehst du?",
  step2Title: "Muster auf LEDs", 
  step2Content: "Der Code, den du hast, ist sehr lang. Kannst du das gleiche Ergebnis mit weniger Blöcken erzielen? Versuche, das gleiche Ergebnis mit weniger Blöcken zu erzielen!",
  step3Title: "Muster auf LEDs",
  step3Content: "Wenn es dir gelungen ist, die Anzahl der Blöcke zu reduzieren, rufe einen der Tutoren an, um ein Feedback zu deiner Lösung zu erhalten.",
};

MSG.tutorials.allButtons = {
  step1Title: "Alle Tasten",
  step1Content: "Öffne die Simulatoransicht und teste den Code. Was siehst du?",
  step2Title: "Alle Tasten",
  step2Content: "Dieser Code sollte eine LED einschalten, wenn eine der Tasten gedrückt wird. Schaust du dir das Programm an. Funktionieren alle Tasten? Versuche, den Code für die Tasten, die nicht funktionieren, zu korrigieren.",
  step3Title: "Extra",
  step3Content: "Ändere den Code so, dass die LED ausgeschaltet wird, wenn die Taste losgelassen wird.",
};

MSG.tutorials.driveForward = {
  stepTitles: [
    "Vorwärts fahren",
    "Vorwärts fahren",
    "Vorwärts fahren",
  ],
  stepContents: [
    "Öffne den Simulator",
    "Wähle das Szenario \"Fahrender Roboter\" und teste den Code im Simulator. Was siehst du?",
    "Bewegt sich das Auto vorwärts?",
  ],
};

MSG.tutorials.rideInSquare = {
  stepTitles: [
    "Im Quadrat fahren",
    "Im Quadrat fahren",
    "Im Quadrat fahren",
    "Extra",
  ],
  stepContents: [
    "Öffne den Simulator",
    "Wähle das Szenario \"Fahrender Roboter\" und teste den Code im Simulator. Was siehst du?",
    "Fährt das Auto in einem Quadrat? Versuche, den Fehler zu finden und zu beheben. Verwende dazu den Debugger.",
    "Der Code ist sehr lang. Kannst du den Code kürzer machen?",
  ],
};


MSG.tutorials.rideToWall = {
  stepTitles: [
    "an die Wand fahren",
    "an die Wand fahren",
    "an die Wand fahren",
    "an die Wand fahren",
  ],
  stepContents: [
    "Öffne den Simulator",
    "Wähle das Szenario \"Fahrender Roboter\" und teste den Code im Simulator. Was siehst du?",
    "Ändere den Szenariotyp in 'Fahrender Roboter mit Wand'?",
    "Fährt der Roboter an die Wand? Versuche, den Fehler zu finden und zu beheben. Verwende dazu den Debugger."
  ],
};

MSG.tutorials.avoidWall = {
  stepTitles: [
    "Ausweichen vor die Wand",
    "Ausweichen vor die Wand",
    "Ausweichen vor die Wand",
    "Ausweichen vor die Wand",
  ],
  stepContents: [
    "Öffne den Simulator.",
    "Wähle die Taste 'Szenario'.",
    "Ändere den Szenariotyp auf 'Fahrender Robot mit Wand'?",
    "Weicht der Roboter an die Wand aus? Versuche, den Fehler zu finden und zu beheben. Verwende dazu den Debugger.",
 ],
};

MSG.tutorials.nameOnLcdBasic = {
  step1Title: "Name auf dem LCD-Display",
  step1Content: "In diesem Tutorial wirdst du deinen Namen auf dem LCD-Bildschirm platzieren. Du wirdst ein Beispiel sehen, wie man das macht.</br> Schaue dir den Code an und versuche zu verstehen, was er tut.",
  step2Title: "Testen auf dem Board",
  step2Content: "Teste den Code, indem du das Dwenguino-Board mit dem usb-Kabel an den Computer anschließt und die Play-Taste drückst.",
  step3Title: "Dein eigener Name",
  step3Content: "In Moment siehst du den Namen 'Tom' auf dem Bildschirm erscheinen. Ändere den Code, damit du deinen Namen siehst.",
  step4Title: "zwei Zeilen",
  step4Content: "Der LCD-Bildschirm hat zwei Zeilen. Ändere die Zeile mit deinem Namen von 0 auf 1.",
  step5Title: "Test",
  step5Content: "Teste deine Code.",
  step6Title: "Herzlichen Glückwunsch",
  step6Content: "Gut gemacht! Du weißt nun, wie du Text auf dem LCD-Bildschirm platzieren kannst.",
};

MSG.tutorials.nameOnLcdWeGoSTEM = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "Name auf LCD-Bildsschirm",
    "Testen im Simulator",
    "Simulation stoppen",
    "dein eigener Name",
    "zwei Zeilen",
    "Test",
    "Herzlichen Glückwunsch",
  ],
stepContents: [
    "Öffne das Simulationsfenster, indem du die Simulator-Taste drückst.",
    "In dieser Übung wirdst du deinen Namen auf dem LCD-Bildschirm platzieren. Du siehst ein Beispiel dafür, wie man das macht.</br> Schaue die Codeblöcke an und versuche zu verstehen, was er tut.",,
    "Teste den Code, indem du <e>Start</e> im Simulator drückst.</br> Was siehst du?",
    "Beende den Test, indem du die <e>Stop</e> -Taste drückst",
    "In Moment siehst du den Namen 'Tom' auf dem Bildschirm erscheinen. Bitte ändere den Code so, dass du deinen Namen siehst.",
    "Der LCD-Bildsschirm hat zwei Zeilen. Ändere die Zeile, in der dein Name steht, von 0 auf 1.",
    "Teste deine Code.",
    "Gut gemacht! Du weißt nun, wie du Text auf dem LCD-Bildschirm platzieren kannst.",
 ],
};

MSG.tutorials.introduceYourself = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "sich vorstellen",
    "Testen im Simulator",
    "Simulation stoppen",
    "den Code anpassen",
    "Gelungen?",
  ],
  stepContents: [
    "Öffne das Simulationsfenster, indem du die Taste \"Simulator\" drückst.",
    "In dieser Übung stellst du sich selbst über den LCD-Bildschirm vor. </br> Schaue den Code an und versuche herauszufinden, was er macht.",
    "Teste den Code, indem du <e>Start</e> im Simulator drückst.</br>Was siehst du?",
    "Beende den Test, indem du <i>Stop</i> drückst. </br>Was macht das Programm? Schreibe das bitte auf!",
    "Es gibt einige Unterschiede zwischen dem Text, den dieses Programm anzeigt, und was du willst, dass das Programm anzeigt.</br>Stelle das Programm so ein, dass der richtige Text angezeigt wird.",
    "Konntest du den Code korrigieren?",
  ],
};

MSG.tutorials.showNameAndDisappear = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "Name ziegen",
    "Testen im Simulator",
    "Simulation stoppen",
    "Den Code anpassen",
    "Gelungen?",
  ],
  stepContents: [
    "Öffne das Simulationsfenster, indem du die Taste \"Simulator\" drückst.",
    "In dieser Übung zeigt du deinen Namen für 2 Sekunden auf dem LCD an und lasse ihn dann wieder verschwinden.",
    "Teste den Code, indem du <e>Start</e> im Simulator drückst.</br>Was siehst du?",
    "Beende den Test, indem du <i>Stop</i> drückst. </br>Wat macht das Programm? Schreibe das bitte auf!",
    "Was sind die Unterschiede zwischen diesem Programm und deinem gewünschten Programm?</br> Verbessere deinen Code!",
    "Konntest du den Code korrigieren?",
  ],
};

MSG.tutorials.poem1 = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "Gedicht",
    "Testen im simulator",
    "Simulation stoppen",
    "Den Code anpassen",
    "Gelungen?",
  ],
  stepContents: [
    "Öffne das Simulationsfenster, indem du die Taste \"Simulator\" drückst.",
    "Dieses Programm sollte das Gedicht, das du auf der Board siehst, auf dem LCD-Bildschirm anzeigen.",
    "Teste den Code, indem du <e>Start</e> im Simulator drückst.</br>Was siehst du?",
    "Beende den Test, indem du <i>Stop</i> drückst. </br>Wat macht das Programm? Schreibe das bitte auf!",
    "Was sind die Unterschiede zwischen diesem Programm und deinem gewünschten Programm? </br>Dieses Programm enthält zwei Fehler.</br>Du kannst den Code so oft ausprobieren, wie du willst, um die Fehler zu finden.</br><b>Versuche, die Fehler im Programm zu korrigieren.</b>",
    "Konntest du den Code korrigieren?",
  ],
};

MSG.tutorials.poem2 = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "Gedicht",
    "Testen im simulator",
    "Simulation stoppen",
    "den Code anpassen",
    "Gelungen?",
  ],
  stepContents: [
    "Öffne das Simulationsfenster, indem du die Taste \"Simulator\" drückst.",
    "Dieses Programm zeigt das Gedicht, das du auf der Board sehen kan, auf dem LCD-Bildschirm an.",
    "Teste den Code, indem du <e>Start</e> im Simulator drückst.",
    "Beende den Test, indem du <i>Stop</i> drückst. </br>Was macht das Programm? Schreibe das bitte auf!",
    "Das Programm arbeitet korrekt, aber ist sehr groß. Versuche, den Code kürzer zu machen, indem du einen <b>berechnen mit</b>-Block verwendest.",
    "Konntest du den Code korrigieren?",
  ],
};

MSG.tutorials.lampOnOffWeGoSTEM = {
  stepTitles: [
    "Simulationsfenster öffnen",
    "Gedicht",
    "Testen im Simulator",
    "Simulation stoppen",
    "den Code anpassen",
    "Gelungen?",
  ],
  stepContents: [
    "Öffne das Simulationsfenster, indem du die Taste \"Simulator\" drückst.",
    "Dieses Programm sollte die Lampe Nummer 3 einmal pro Sekunde aufleuchten lassen.",
    "Teste den Code, indem du <e>Start</e> im Simulatur drückst.",
    "Beende den Test, indem du <i>Stop</i> drückst. </br>Wa machst das Programm? Schreibe das bitte auf!",
    "Funktioniert das Programm so, wie es sollte?</br>Stelle das Programm so ein, dass es korrekt funktioniert.",
    "Konntest du den Code korrigieren",
  ],
};
/**
* Social robot tutorials
 */
MSG.tutorials.socialrobot['introduction'] = {};
MSG.tutorials.socialrobot['introduction'].label = '1. Arbeiten mit dem Simulator';
MSG.tutorials.socialrobot['introduction'].stepTitles = [
  "Entwerfe einen Roboter",
  "Zum Simulator",
  "Wähle dein Szenario",
  "Blöcke hinzufügen",
  "Deinen Roboter zusammensetzen",
  "Blöcke entfernen",
  "Deinen Roboter steuern",
  "Deinen Roboter steuern",
  "Ende"
];

MSG.tutorials.socialrobot['introduction'].stepContents = [
  "In diesem Tutorial machst du sich an die Arbeit, deinen eigenen sozialen Roboter zu entwerfen. Du wirst entdecken, was du mit dem <b>Simulator</b> machen kannst. <br><img class='tutorial' src='./DwenguinoIDE/img/tutorials/socialrobot/socialrobot.png'><br><!--Danach kannst du die folgenden Tutorials durchgehen, um Schritt für Schritt zu lernen, wie du deinen eigenen persönlichen Roboter baust.-->",
  "Der Bau des Roboters wird im Simulator durchgeführt. Du öffnest und verbirgst es, indem du auf diese Taste klickst.",
  "Man kann im Simulator nicht nur soziale Roboter bauen, sondern auch Fahrroboter simulieren. Es gibt also verschiedene Szenarien. <b>Klicke jetzt auf das soziale Roboterszenario.</b>Du siehst dann weitere Blöcke.",
  "Hier siehst du alle Blöcke aus dem Simulator, die du für die Konstruktion deines Roboters verwenden kannst. <br><br>Klicke auf eine <b>+ Taste</b>, um einen Block zu deinem Roboter hinzuzufügen</b>. Siehst du, dass es unten in der Simulation erscheint?",
  "Nachdem du einen Block hinzugefügt hast, kannst du ihn hier an eine andere Stelle ziehen. Auf diese Weise kannst du entscheiden, wie dein Roboter aussieht. <br><br>Fahre mit der Maus über den neuen Block und ziehe den Roboter mit der <img class='tutorial' src='./DwenguinoIDE/img/tutorials/socialrobot/drag.jpg' width='20px'>.",
  "Wenn du einen Block zu viel hinzugefügt hast, kannst du mit der <b>Taste</b> den zuletzt erstellten Block wieder löschen. <br><br>Entferne alle Blöcke aus deinem Roboter. Ist das gelungen?",
  "Du weißt jetzt, wie du einen Roboter bauen kannst, aber dein Roboter kann sich noch nicht bewegen. Deshalb müssen wir den Roboter noch mit einem selbst geschriebenen Programm steuern. Dies kann mit den <b>Programmierblöcken</b> aus der <b>Toolbox</b> erfolgen.",
  "Wenn du Blöcke aus dem Toolbox ziehst, landen sie im <b>Codebereich</b>. Hier wird das Programm sein, das du schreiben wirst.",
  "Du bist jetzt bereit für die nächsten Tutorials, in denen du lernst, wie du die Roboterblöcke verwendest."
];

MSG.tutorials.socialrobot['socialrobots'] = {};
MSG.tutorials.socialrobot['socialrobots'].label = '2. Soziale Roboter';
MSG.tutorials.socialrobot['socialrobots'].stepTitles = [
  "Soziale Roboter",
  "Soziale Roboter",
  "Soziale Roboter",
  "Soziale Roboter"
];

MSG.tutorials.socialrobot['socialrobots'].stepContents = [
  "Soziale Roboter sind Roboter, die mit uns kommunizieren können, genau wie Menschen untereinander."
    + "Sie sind darauf ausgelegt, Menschen zu verstehen und unser Wohlbefinden zu steigern.",
  "Was genau soziale Roboter tun und in welcher Umgebung, ist von Roboter zu Roboter unterschiedlich."
    + "Einige Roboter sind für den Einsatz in deinem Zuhause konzipiert. Andere werden nur am Arbeitsplatz oder"
    + "im öffentlichen Raum funktionieren. <br><br>Du bist vielleicht schon einem sozialen Roboter begegnet"
    + "am Flughafen? Er hilft dir bei deinen Flugtickets oder bei der Suche nach dem richtigen Gate."
    + "Selbst in Pflegeheimen gibt es knuddelige Roboter, die den Bewohnern Gesellschaft leisten.",
  "Um mit der Außenwelt zu interagieren, verwenden Roboter <b>Sensoren</b> und <b>Aktuatoren</b>."
    + "<br><br><b>Sensoren</b>sind sensorische Eingänge, die es einem Roboter ermöglichen, seine Umgebung zu 'vermessen'. "
    + "Diese Messdaten können dann zu Informationen verarbeitet werden. Es gibt alle Arten von Sensoren, "
    + "zum Beispiel Temperatur-, Licht-, Infrarot-, Druck- oder Bewegungssensoren."
    + "<br><br><div class='row'><div class='col-md-4'><img class='tutorial' src='./DwenguinoIDE/img/sonar.png' width='120px'></div>"
    + "<div class='col-md-4'><img class='tutorial' src='./DwenguinoIDE/img/socialrobot/pir.png' width='70px'></div></div>"
    + "<div class='row'><div class='col-md-4 tutorial'><i>Ultrasoonsensor</i></div><div class='col-md-4 tutorial'><i>Passiv-Infrarotsensor</i></div></div><br><br>"
    + "<b>Aktoren</b> sind die Ausgänge, die es einem Roboter ermöglichen, zu 'handeln'."
    + "Denke zum Beispiel an einen Servomotor, der den Arm eines Roboters so steuert, dass der Roboter dir zuwinkt, wenn er dich sieht.<br><br>"
    + "<div class='row'><div class='col-md-4'><img class='tutorial' src='./DwenguinoIDE/img/servo.png'  width='100px'></div>"
    + "<div class='col-md-4'><img class='tutorial' src='./DwenguinoIDE/img/dc.png'  width='100px'></div></div>"
    + "<div class='row'><div class='col-md-4 tutorial'><i>Servomotor</i></div><div class='col-md-4 tutorial'><i>DC motor</i></div></div>",
  "Ein Roboter soll <b>Entscheidungen</b> selbständig treffen. Er kann dies auf der Grundlage der Daten tun"
    + "die die Sensoren messen. Entscheidungen werden normalerweise in einem <b>Prozessor</b> (in einem Computer) getroffen"
    + "oder einem <b>Mikrocontroller</b> (in der Simulation)."
    + "<br><br>Der Mikrocontroller unseres Simulators sieht wie folgt aus:"
    + "<div class='row'><img class='tutorial center-block' src='./DwenguinoIDE/img/tutorials/dwenguino.png'></div>"
];

MSG.tutorials.socialrobot['hello'] = {};
MSG.tutorials.socialrobot['hello'].label = '3. Sage mal Hallo';
MSG.tutorials.socialrobot['hello'].stepTitles = [
  "Einführung",
  "Zum Simulator",
  "Soziale Roboter",
  "Wähle den richtigen Block",
  "Füge den LCD-Bildschirm zu deinem Roboter hinzu",
  "Füge den LCD-Bildschirm in deinen Code ein",
  "Spiele die Simulation",
  "Beende deine Simulation",
  "Frage",
];

MSG.tutorials.socialrobot['hello'].stepContents = [
  "In diesem Lernprogramm lernst du, wie du den Roboter dazu bringst, etwas zu sagen. Wir werden dafür den LCD-Bildschirm benutzen.",
  "Öffne den Simulator.",
  "Wähle den sozialen Roboter",
  "<b>Blättere</b> durch das Blockmenü, bis du den <b>LCD-Bildschirm</b> findest.",
  "Klicke auf die Taste <b>+</b>, um den LCD-Bildschirm zu deinem Roboter hinzuzufügen.",
    + "Ziehe dann den Bildschirm an die gewünschte Stelle des Roboters.",
  "Zeit, um etwas auf dem Bildschirm erscheinen zu lassen. Klicke auf das Menü <b>Dwenguino</b>",
    + "und ziehe den <b>LCD-Bildschirm</b> aus dem Toolbox. Klicke den Bildschirm in den \"Set\"-Block.",
    + " Gib eine Nachricht ein, die auf dem Bildschirm angezeigt werden soll.<br>",
    + "<div class='row'><img class='tutorial center-block' src='./DwenguinoIDE/img/tutorials/socialrobot/lcd1.png'>"
    + "<p class='tutorial center-block'><i>Das Programm wird den Text \'Hallo!\' auf dem LCD-Display anzeigen.</i></p></div>",
  "Drücke nun die Taste <b>Play</b>, um dein Programm zu starten.",
    + "<br><br>Siehst du den Text, der auf dem LCD-Bildschirm deines Roboters erscheint?",
  "Drücke nun die Taste <b>Stop</b>, um die Simulation zu beenden.",
  "Placeholder"
];

MSG.tutorials.socialrobot['hello'].questions = [
  "Wähle das richtige Ergebnis für das unterstehende Programm."
];

MSG.tutorials.socialrobot['hello'].answers = [
  "Antwort A",
  "Antwort B"
];
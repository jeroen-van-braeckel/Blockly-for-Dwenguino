var MSG = {
  title: "DwenguinoBlockly",
  blocks: "Blocs",
  linkTooltip: "Sauvegarder et lier aux blocs.",
  runTooltip: "Lancer le programme défini par les blocs dans l’espace de travail.",
  badCode: "Erreur du programme :\n%1",
  timeout: "Nombre maximum d’itérations d’exécution dépassé.",
  trashTooltip: "Jeter tous les blocs.",
  catLogic: "Logique",
  catLoops: "Boucles",
  catMath: "Math",
  catText: "Texte",
  catLists: "Listes",
  catColour: "Couleur",
  catVariables: "Variables",
  catFunctions: "Fonctions",
  catDwenguino: "Dwenguino",
  catSocialRobot: "Robot social",
  catComments: "Commentaire",
  catBoardIO: "IO",
  listVariable: "liste",
  textVariable: "texte",
  httpRequestError: "Il y a eu un problème avec la demande.",
  linkAlert: "Partagez vos blocs grâce à ce lien:\n\n%1",
  hashError: "Désolé, '%1' ne correspond à aucun programme sauvegardé.",
  xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?",
  badXml: "Erreur d’analyse du XML :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le XML.",
  setup: "initialiser",
  loop: "répéter",
  dwenguino_main_program_structure: "Le code dans le bloc setup est exécuté une fois au début du programme. Le code dans la block répéter est répété jusqu'à ce que le programme s'arrête.",
  catDwenguino: "Dwenguino",
  delay_help: "Attendez une quantité spécifiée de millisecondes (1 milliseconde = 1000 secondes)",
  delay: "attends",
  clearLCD: "efface l'écran lcd",
  dwenguinoLCD: "Dwenguino LCD %1 %2 %3 écris du texte: %4 en ligne: %5 À partir de la colonne: %6",
  pin: "broche",
  toneOnPin: "joue ton sur ",
  frequency: "avec fréquence",
  noToneOnPin: "arrête ton sur",
  toneOnPinTooltip: "Joue une tone avec une fréquence spécifique sur la broche spécifiée",
  noToneOnPinTooltip: "Arrête ton sur la broche",
  trig: "numéro de la broche trig",
  echo: "numéro de le broche echo",
  sonarTooltip: "This sensor reads the distance from a sonar sensor",
  miliseconds: "ms",
  digitalRead: "lis la valeur digital de",
  digitalWriteToPin: "Écrire sur",
  digitalWriteValue: "valeur digital",
  digitalWriteTooltip: "Write high or low value to a digital pin of the Dwenguino board",
  digitalReadTooltip: "Read a digital value (1/high or 0/low) from a specified pin",
  high: "HAUTE",
  low: "BAS",
  highLowTooltip: "Represents a high (1) or low (0) value on a pin.",
  tutsIntroduction: "Introduction",
  tutsTheremin: "Theremin",
  tutsRobot: "Robot",
  tutsHelloDwenguino: "Hello Dwenguino!",
  tutsNameOnLcd: "Name on LCD",
  tutsBlinkLED: "Blink LED",
  tutsLedOnButtonPress: "LED on button press",
  tutsBitPatternOnLeds: "Bit pattern on leds",
  tutsAllButtons: "All buttons",
  tutsDriveForward: "Drive forward",
  tutsRideInSquare: "Ride a square",
  tutsRideToWall: "Ride to wall",
  tutsAvoidWall: "Avoid wall",
  tutsNameOnLcdBasic: "Your name on LCD",
  simulator: "Simulateur",
  setLedState: "mets %1 %2",
  setLedStateTooltip: "Turn an LED on the Dwenguino board on or off",
  ledPinsTooltip: "Pic a led you want to control",
  dwenguinoOn: "ON",
  dwenguinoOff: 'OFF',
  dwenguinoOnOffTooltip: "Select a value to turn an LED ON or OFF",
  dwenguinoLedBlock: "LED",
  dwenguinoSonarBlock: "Sonar %1 %2 %3 trig pin number %4 echo pin number %5",
  dwenguinoServoBlock: "Servomoteur %1 %2 %3 canal # %4 angle %5",
  dwenguinoServoDropdownBlock: "Servomoteur %1",
  dwenguinoServoBlockTooltip: "Set one of the servo's connected to the Dwenguino to a specified angle between 0 and 180 degrees",
  dwenguinoServoDropdownTooltip: "Select one of the two internal servo motors",
  dwenguinoServoOne: "1",
  dwenguinoServoTwo: "2",
  dwenguinoDCMotorBlock: "DC moteur %1 %2 %3 canal %4 vitesse %5",
  dwenguinoDCMotorBlockTooltip: "Set the speed of one of the two dwenguino motors. Speed = value between -255 (full speed backwards) and 255 (full speed forwards)",
  dwenguinoAnalogWrite: "Écris sur %1 valeur analogiques %2",
  dwenguinoAnalogWriteTooltip: "Write an analog value between 0 and 255 to the specified pin",
  dwenguinoAnalogRead: "Lire la valeur analogique de %1",
  dwenguinoAnalogWriteTooltip: "Read a value beteween 0 and 255 from the specified pin",
  digitalReadSwitch: "Lis bouton %1",
  waitForSwitch: "attends que le bouton %1 soit pressé",
  digitalReadSwitchTooltip: "Read value from one of the dwenguino switches",
  north: "Nord",
  east:"Est",
  south: "Sud",
  west: "Ouest",
  center: "Centre",
  ledsReg: "LEDS",
  dwenguinoLedsRegTooltip: "You can turn leds 0 to 7 on using a binary number. For example 0b00001111 will turn leds 0 to 3 on and the rest off",
  pressed: "PRESSE",
  notPressed: "PAS PRESSE",
  pressedTooltip: "Represents the state of a button. Use these values to compare to the actual button state",
  sureYouWantToChangeTutorial: "Are you sure you want to start this tutorial?\n All the blocks in the current workspace will be removed.",
  create: "Create",
  with_type: "with type",
  create_global: "Create global",
  socialRobotRgbLedBlock: "RGB LED",
  socialRobotPinRed: "pin red",
  socialRobotPinGreen: "pin green",
  socialRobotPinBlue: "pin blue",
  socialRobotRgbLedOffBlock: "Turn the RGB LED off with",
  socialRobotRgbColorBlock: "RGB color",
  socialRobotPirBlock: "Pir %1 %2 %3 trig pin number %4",
  socialRobotSoundSensorBlock: "Sound sensor %1 %2 %3 pin %4",
  socialRobotSoundSensorBlockTooltip: "",
  socialRobotTouchSensorBlock: "Touch sensor %1 %2 %3 pin %4",
  socialRobotTouchSensorBlockTooltip: "",
  socialrobotSetPinState: "Set %1 %2",
  socialrobotServoBlock: "Servo motor %1 %2 %3 pin %4 angle %5",
  socialrobotWaveArmesBlock: "Saluez avec les mains %1 %2 Servo main droite %3 %4 Servo main gauche %5 %6",
  socialRobotArmsDownBlock: "Baissez les mains  %1 %2 %3 Servo main droite %4 %5 Servo main gauche %6 %7",
  socialRobotArmsUpBlock: "Levez les mains %1 %2 %3 Servo main droite %4 %5 Servo main gauche %6 %7",
  socialRobotEyesLeftBlock: "Tournez les yeux à gauche %1 %2 %3 Servo oeil gauche %4 %5 Servo oeil droit %6 %7",
  socialRobotEyesRightBlock: "Tournez les yeux à droit %1 %2 %3 Servo oeil gauche %4 %5 Servo oeil droit %6 %7",
  socialrobotReadPinBlock: "Read value of pin %1 %2",
  socialRobotServoRightHand: "Servo main droite",
  socialRobotServoLeftHand: "Servo main gauche",
  sonarSliderLabel: "Sonar distance",
  pirButtonLabel: "PIR button",
  soundButtonLabel: "Sound button",
  touchButtonLabel: "Touch button",
  lightSensorSliderLabel: "Light sensor button",
  servoCostume: "Costume",
  servoOptions: "Servo motor options",
  sonarOptions: "Sonar sensor options",
  lcdOptions: "LCD screen options",
  pirOptions: "PIR sensor options",
  soundOptions: "Sound sensor options",
  lightOptions: "Light sensor options",
  rgbLedOptions: "Options du RGB LED",
  ledOptions: "LED options",
  pinOptions: "Pin",
  colorOptions: "Couleur",
  runError: "<h3>Désolé, je n'ai pas pu téléverser le code sur la carte</h3>",
  uploadError: "Suivez ces étapes pour redémarrer la carte Dwenguino: \n    1. Débranchez le câble USB \n    2. Connectez l'ordinateur et la carte Dwenguino avec le câble USB \n    3. Appuyez simultanément sur le bouton RESET et le bouton SUD de la carte Dwenguino \n    4. Ensuite, relâchez d'abord le bouton RESET \n    5. Puis relâchez le bouton SUD \n    6. Téléversez à nouveau le programme via le menu principal (<span id='db_menu_item_run' class='glyphicon glyphicon-play' alt='Upload code to Dwenguino board'></span>)",
  cleanError: "The previous code could not be removed.\nPlease check if another application is using any .cpp files.\n Close the application.",
  compileError: "The code could not be compiled.\nYou should check your code, did you forget a block someware?",

  // TODO: Translate:
  dwenguinoStepperMotorBlock: "stepper-motor %1 %2 %3 nummer %4 aantal stappen %5",
  dwenguinoStepperMotorBlockTooltip: "TODO",
  drawingrobotMove:"Verplaats de stift onder een van hoek %1 graden met %2 stappen",
  drawingrobotMoveXY:"Verplaats de stift %1 naar rechts en %2 naar links",
  drawingrobotLine:"Teken een lijn naar x: %1 y: %2",
  drawingrobotCircle:"Teken een cirkel met straal: %1",
  drawingrobotRectangle:"Teken een rechthoek met breedte: %1 en hoogte: %2",
  drawingrobotLiftStylus: "Stift opheffen",
  drawingrobotLowerStylus: "Stift neerzetten",
  drawingrobotChangeColor: "Kleur %1",
  up:"omhoog",
  down:"omlaag",
  left:"links",
  right:"rechts",
  bounds:"Opgelet\nJe probeert buiten het papier te tekenen",
  drawingrobotgrid: "raster",
  colorpicker:"Kleur",
  drawingrobotSaveImage:"Tekening opslaan",
  drawingrobotDrawing:"Tekening",
  stepperMotorOne: "STEPPER1", 
  stepperMotorTwo: "STEPPER2",
  stepperMotorTooltip: "Select which stepper motor from the plotter robot you want to use.",
  clear: "Clear",
  save: "Save",
};

//TODO: Translate

MSG.simulator = {
  start: "Start",
  stop: "Stop",
  pause: "Pause",
  step: "Step",
  speed: "Speed",
  speedVerySlow: "40 times as slow",
  speedSlow: "20 times as slow",
  speedMedium: "10 times as slow",
  speedFast: "5 times as slow",
  speedVeryFast: "2 times as slow",
  speedRealTime: "Real-time",
  components: "Select components",
  servo: "Servo",
  servoDescription: "A servo motor is an actuator that can <b>rotate an object over a certain angle</b>. In the simulator servo motors can be put at an angle between 0 and 180 degrees. Servo motors can easily be decorated and are thus ideal to make periodically moving components.",
  motor: "Motor",
  DCMotorDescription: "",
  scope: "Variables",
  alertDebug: "The simulation stops when you resume programming.",
  distance: "distance",
  scenario: "Scenario",
  scenario_default: "Normal board",
  scenario_moving: "Moving robot",
  scenario_wall: "Moving robot with wall",
  code: "Code",
  pir: "PIR sensor",
  pirDescription: "A passif infrared (PIR) sensor allows you to <b>sense motion</b>, because it detects changes of infrared radiation in its environment",
  sonar: "Sonar",
  sonarDescription: "",
  led: "LED",
  ledDescription: "A light-emitting diode (LED) is a semiconductor device that <b>emits light</b> when an electric current passes through it. Different semiconductor materials produce <b>different colors of light</b>. ",
  rgbled: "RGB LED",
  rgbledDescription: "",
  touch: "Touch sensor",
  touchDescription: "",
  lcd: "LCD screen",
  lcdDescription: "The LCD display on the Dwengo board is a 16x2 character display with backlight.",
  button: "Button",
  buttonDescription: "",
  sound: "Sound sensor",
  soundDescription: "",
  light: "Light sensor",
  lightDescription: "",
  buzzer: "Buzzer",
  buzzerDescription: "The buzzer on the Dwengo board can be used to <b>play a series of tones</b> or short sound fragments. The height of each tone is controlled by defining the <b>frequency</b> of the buzzer. Use a delay block to change the length of a tone.",
  decoration: "Decoration"
};

MSG.socialrobot = {
  plain: "Standard",
  eye: "Oeil",
  mouth: "Bouche",
  righthand: "Main droite",
  lefthand: "Main gauche",
};

MSG.dropzone = {
  dictSelectFile: "Select a file.",
  dictChooseFile: "Choose file",
  dictDefaultMessage: "Drop files here to upload",
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
  dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
  dictInvalidFileType: "You can't upload files of this type.",
  dictResponseError: "Server responded with {{statusCode}} code.",
  dictCancelUpload: "Cancel upload",
  dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
  dictRemoveFile: "Remove file",
  dictMaxFilesExceeded: "You can not upload any more files.",
}

MSG.tutorialMenu = {
  header: "Tutoriels",
  catDwenguino: "Programmer<br>avec DwenguinoBlockly",
  catRidingRobot: "Robot roulant",
  catSocialRobot: "Robot social",
  catWeGoStem: "WeGoSTEM",
  chooseCategory: "Choisissez une catégorie de tutoriels",
  chooseTutorial: "Choisissez un tutoriel",
  previous: "Précedent",
  close: "Fermer",
  checkAnswer: "Check answer",
  correctAnswer: "The answer was correct!",
  wrongAnswer: "The answer was not correct. Try again!",
  dwenguinoComponents: "Dwenguino components",
  sensors: "Sensors",
  actuators: "Actuators",
  movement: "Movement",
  audio: "Audio",
  display: "Display"
}

MSG.tutorials = {
    introduction: {},
    /*theremin: {},
    robot: {},
    hello_dwenguino: {},*/
};

MSG.tutorials.general = {
  sureTitle: "Es-tu sûr?",
  sureText: "Lorsque vous cliquez sur 'Suivant', les blocs de la feuille de calcul sont remplacés.",
};

MSG.tutorials.introduction = {
  step1Title: "Welkom to DwenguinoBlockly",
  step1Content: "Hi, my name is Dwenguino! I will help you to get to know the interface!",
  step2aTitle: "The Blockly code area",
  step2aContent: "In this area you put your code blocks. You should put your blocks inside the setup-loop block if you want them to be executed.",
  step2bTitle: "The Blockly toolbox",
  step2bContent: "This is the toolbox, it contains all the blocks you can use to create your program. You can explore the different cathegories to find out what your Dwenguino can do.",
  step3Title: "Language selection",
  step3Content: "Use this to change the language",
  step4Title: "Difficulty",
  step4Content: "This slider lets you set the difficulyt level. For now we only provide beginner and advanced levels.",
  step5Title: "Dwengobooks",
  step5Content: "Dwengobooks are interactive tutorials which guide you through the different physical computing challenges.",
  step6Title: "Upload code",
  step6Content: "When your code is complete, you can upload it to the Dwenguino board by clicking this button. Make sure you fist select the right board and port inside the Arduino ide.",
  step7Title: "Open",
  step7Content: "This button lets you open a previously saved program.",
  step8Title: "Save",
  step8Content: "With this button you can save your code to a local file.",
  step9Title: "The simulator",
  step9Content: "In the future you will be able to use this button to open the simulator. You can use it to test your code before uploading."

};

MSG.tutorials.nameOnLcd = {
  step1Title: "Name on lcd-screen",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Name on lcd-screen",
  step2Content: "Change the program so your name appears on the first line of the lcd-screen.",
};

MSG.tutorials.blinkLED = {
  step1Title: "Blink LED",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Blink LED",
  step2Content: "Change the program so the LED turns on for one second and then turns off the LED for one second. This sequence is repeated indefinitely.",
  step3Title: "Extra",
  step3Content: "Make another LED turn on and off.",
};

MSG.tutorials.ledOnButtonPress = {
  step1Title: "LED on button press",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "LED on button press",
  step2Content: "Change the program so the LED turns on when you press the north button.",
  step3Title: "Extra",
  step3Content: "Make sure the LED turns off when you release the north button.",
};

MSG.tutorials.bitPatternOnLeds = {
  step1Title: "Pattern on LEDs",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Pattern on LEDs",
  step2Content: "The code you have is very long. Can you get the same result using less blocks? Try to get the same result by using less blocks!",
  step3Title: "Pattern on LEDs",
  step3Content: "When you succeeded in reducing the number of blocks, call one of the tutors to get feedback on your solution.",
};


MSG.tutorials.allButtons = {
  step1Title: "All buttons",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "All buttons",
  step2Content: "This code should turn on a led when one of the buttons is pressed. Look at the program. Do all buttons work? Try to correct the code for the buttons that do not work.",
  step3Title: "Extra",
  step3Content: "Change the code so the LED turns off when the button is released.",
};

MSG.tutorials.driveForward = {
  step1Title: "Drive forward",
  step1Content: "Open the simulator view.",
  step2Title: "Drive forward",
  step2Content: "Select the scenario view and test the code. What do you see?",
  step3Title: "Drive forward",
  step3Content: "Does the car drive forward? Correct the code so the car drives forward.",
};

MSG.tutorials.rideInSquare = {
  step1Title: "Ride into square",
  step1Content: "Open the simulator view.",
  step2Title: "Ride into square",
  step2Content: "Select the scenario view and test the code. What do you see?",
  step3Title: "Ride into square",
  step3Content: "Does the car ride in a square? Correct the code so the car ride in a square.",
  step4Title: "Extra",
  step4Content: "The code is long, can you make it shorter while maintaining the same behaviour?",
};

MSG.tutorials.rideToWall = {
  step1Title: "Ride to wall",
  step1Content: "Open the simulator view.",
  step2Title: "Ride to wall",
  step2Content: "Select the scenario view.",
  step3Title: "Ride to wall",
  step3Content: "Change the scenario to moving robot with wall and test the code. What do you see?",
  step4Title: "Ride to wall",
  step4Content: "Does the car ride to the wall? Does it stop at the wall? Change the code so the car stop near the wall.",
};


MSG.tutorials.avoidWall = {
  step1Title: "Avoid wall",
  step1Content: "Open the simulator view.",
  step2Title: "Avoid wall",
  step2Content: "Select the scenario view.",
  step3Title: "Avoid wall",
  step3Content: "Change the scenario to moving robot with wall and test the code. What do you see?",
  step4Title: "Avoid wall",
  step4Content: "Does the car avoid the wall by turning before it reaches it? Change the code so the car keeps driving but never hits a wall.",
};



MSG.tutorials.nameOnLcdBasic = {
  step0Title: "Ben je zeker?",
  step0Content: "Ben je zeker? Waneer je op volgende klikt zullen de blokken op het werkblad vervangen worden.",
  step1Title: "Naam op LCD-scherm",
  step1Content: "In deze tutorial plaats je je naam op het LCD-scherm. Je ziet een voorbeeld van hoe dat moet.",
  step2Title: "Testen op het bord",
  step2Content: "Test de code door het Dwenguino bord aan de computer te schakelen met de usb-kabel en op de play knop te drukken.",
  step3Title: "Je eigen naam",
  step3Content: "Momenteel zie je de naam 'Tom' op het scherm verschijnen. Pas de code aan zodat je jouw naam ziet.",
  step4Title: "Twee rijen",
  step4Content: "Het LCD-scherm heeft twee rijen. Verander de rij waarop je naam staat van 0 naar 1.",
  step5Title: "Test",
  step5Content: "Test je code.",
  step6Title: "Great!",
  step6Content: "Well done! Now you know how to display your name on the LCD-screen.",
};

MSG.logging = {
  setup: "Test setup",
  login: "Login",
  newuser: "New user",
  username: "Username",
  chooseUsername: "Choose a username",
  choosePassword: "Select 4 personal icons as your password. You need to be able to remember these in the right order.",
  currentlySelected: "Currently selected: ",
  birth: "Date of birth",
  school: "School",
  selectSchool: "Search by name of school...",
  agegroup: "Age group:",
  primary1: "Primary grade 1",
  primary2: "Primary grade 2",
  primary3: "Primary grade 3",
  primary4: "Primary grade 4",
  primary5: "Primary grade 5",
  primary6: "Primary grade 6",
  secondary1: "Secondary grade 1",
  secondary2: "Secondary grade 2",
  secondary3: "Secondary grade 3",
  secondary4: "Secondary grade 4",
  secondary5: "Secondary grade 5",
  secondary6: "Secondary grade 6",
  gender: "Gender: ",
  gender1: "F",
  gender2: "M",
  gender3: "X",
  gender4: "I\'d rather not say",
  activity: "Activity: ",
  name: "Name ",
  date: "Date ",
  ok: "Ok",
  reset: "Reset",
  person: "Person",
  dog: "Dog",
  car: "Car",
  camera: "Camera",
  heart: "Heart",
  plane: "Plane",
  house: "House",
  umbrella: "Umbrella",
  star: "Star",
  money: "Money",
  gift: "Gift",
  keys: "Keys",
  music: "Music",
  snowflake: "Snowflake",
  fire: "Fire",
  envelope: "Envelope"
};

MSG.validator = {
  errSchool: "Select a school.",
  errId: "You didn't select enough icons.",
  errAgeGroup: "Select your age group.",
  errGender: "Select your gender.",
  errActivityId: "Your activity title cannot be empty."
};

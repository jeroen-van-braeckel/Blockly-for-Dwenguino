var MSG = {
  arduinoCodeCopied: "Arduino code copied to clipboard",
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
  echo: "numéro de la broche echo",
  sonarTooltip: "Ce bloc lit la distance d'un capteur sonar",
  miliseconds: "ms",
  digitalRead: "lis la valeur digital de",
  digitalWriteToPin: "Écrire sur",
  digitalWriteValue: "valeur digital",
  digitalWriteTooltip: "Ecrivez logique haut ou logique bas sur une entrée numérique du Dwenguino.",
  digitalReadTooltip: "Lisez une sortie numérique du Dwenguino (1/logique haut ou 0/logique bas).",
  high: "HAUTE",
  low: "BAS",
  highLowTooltip: "Répresente logique haut (1) ou logique bas (0) d'une entrée ou sortie du Dwenguino.",
  tutsIntroduction: "Introduction",
  tutsTheremin: "Theremin",
  tutsRobot: "Robot",
  tutsHelloDwenguino: "Bonjour Dwenguino!",
  tutsNameOnLcd: "Nom sur LCD",
  tutsBlinkLED: "Blink LED",
  tutsLedOnButtonPress: "LED sur bouton pressé",
  tutsBitPatternOnLeds: "Modèle de bits sur les LED",
  tutsAllButtons: "Tous les boutons",
  tutsDriveForward: "Avancer",
  tutsRideInSquare: "Rouler dans un carré",
  tutsRideToWall: "Rouler jusquau mur",
  tutsAvoidWall: "Éviter le mur",
  tutsNameOnLcdBasic: "Nom sur l'écran LCD",
  tutsNameOnLcdWeGoSTEM: "Nom sur l'écran LCD",
  tutsIntroduceYourselfWeGoSTEM: "Présentez-vous",
  tutsShowNameAndDisappearWeGoSTEM: "Faire disparaître le nom",
  tutsLampOnOffWeGoSTEM: "Feu clignotant",
  tutsPoem1: "Poème 1",
  tutsPoem2: "Poème 2",
  simulator: "Simulateur",
  setLedState: "mets %1 %2",
  setLedStateTooltip: "Allumer ou éteindre LEdwenguinoDCMotorBlock sur le panneau Dwenguino",
  ledPinsTooltip: "Choisissez une LED que vous voulez allumer ou éteindre",
  dwenguinoOn: "ALLUMÉ",
  dwenguinoOff: 'ÉTEINT',
  dwenguinoOnOffTooltip: "Sélectionnez ALLUMÉ ou ÉTEINT",
  dwenguinoLedBlock: "LED",
  dwenguinoSonarBlock: "Sonar %1 %2 %3 trig pin numéro %4 echo pin numéro %5",
  dwenguinoServoBlock: "Servomoteur %1 %2 %3 canal # %4 angle %5",
  dwenguinoServoDropdownBlock: "Servomoteur %1",
  dwenguinoServoBlockTooltip: "Réglez l'un des servomoteurs connectés au Dwenguino à un angle spécifié entre 0 et 180 degrés",
  dwenguinoServoDropdownTooltip: "Sélectionnez un des deux servomoteurs internes",
  dwenguinoServoOne: "1",
  dwenguinoServoTwo: "2",
  dwenguinoDCMotorBlock: "DC moteur %1 %2 %3 canal %4 vitesse %5",
  dwenguinoDCMotorBlockTooltip: "Réglez la vitesse d'un des deux moteurs connectés au Dwenguino. Vitesse = valeur comprise entre -255 (pleine vitesse en arrière) et 255 (pleine vitesse en avant)",
  dwenguinoAnalogWrite: "Écrivez sur %1 valeur analogiques %2",
  dwenguinoAnalogWriteTooltip: "Ecrivez une valeur analogique entre 0 et 255 sur la broche spécifiée",
  dwenguinoAnalogRead: "Lisez la valeur analogique de %1",
  dwenguinoAnalogWriteTooltip: "Lisez une valeur entre 0 et 255 de la broche spécifiée",
  digitalReadSwitch: "Lis bouton %1",
  waitForSwitch: "attends que le bouton %1 soit pressé",
  digitalReadSwitchTooltip: "lisez la valeur de l'un des boutons Dwenguino",
  north: "Nord",
  east:"Est",
  south: "Sud",
  west: "Ouest",
  center: "Centre",
  ledsReg: "LEDS",
  dwenguinoLedsRegTooltip: "Vous pouvez allumer les LEDS de 0 à 7 en utilisant un nombre binaire. Par exemple, 0b00001111 allume les LEDS 0 à 3 et éteint les autres.",
  pressed: "PRESSE",
  notPressed: "PAS PRESSE",
  pressedTooltip: "Représente la valeur du bouton. Utilisez ces valeurs pour les comparer à l'état réel du bouton.",
  sureYouWantToChangeTutorial: "Êtes-vous sûr de vouloir commencer ce tutoriel ? Tous les blocs de l'espace de travail actuel seront remplacés !",
  create: "Créer",
  with_type: "avec type",
  create_global: "Créer global",
  socialRobotRgbLedBlock: "RGB LED",
  socialRobotPinRed: "broche rouge",
  socialRobotPinGreen: "broche verte",
  socialRobotPinBlue: "broche bleue",
  socialRobotRgbLedOffBlock: "Éteignez la LED RVB avec",
  socialRobotRgbColorBlock: "couleur RGB %1",
  socialRobotRgbColor: "rouge %1 vert %2 bleu %3",
  socialRobotLedmatrixImageBlock: "Montrez le dessin sur un segment de la matrice à LED",
  socialRobotLedmatrixImageBlockTooltip: "Montrez le dessin sur un segment de la matrice à LED.",
  socialRobotLedmatrixEyePatternBlock: "Montrez le dessin de l'oeil",
  socialRobotLedmatrixEyePatternBlockTooltip: "Montrez le dessin de l'oeil selectionné sur la matrice à LED.",
  socialRobotLedmatrixEyePatternSegmentBlock: "sur le segment de la matrice à LED",
  socialRobotLedmatrixClearSegmentBlock: "Débarassez un segment de la matrice à LED",
  socialRobotLedmatrixClearSegmentBlockTooltip: "Débarassez un segment de la matrice à LED.",
  socialRobotLedmatrixClearDisplayBlock: "Débarassez la matrice à LED",
  socialRobotLedmatrixClearDisplayBlockTooltip: 'Débarassez la matrice à LED complètement.',
  next: "Suivant",
  previous: "Précédent",
  socialRobotPirBlock: "capteur de proximité %1 %2 %3 trig pin numéro %4",
  socialRobotSoundSensorBlock: "Capteur de son %1 %2 %3 broche %4",
  socialRobotSoundSensorBlockTooltip: "",
  socialRobotTouchSensorBlock: "Senseur tactile %1 %2 %3 pin %4",
  socialRobotTouchSensorBlockTooltip: "",
  socialRobotButtonBlock: "Bouton %1 %2 %3 pin %4",
  socialRobotButtonBlockTooltip: "",
  socialrobotSetPinState: "Mets %1 %2",
  socialrobotServoBlock: "Servo moteur %1 %2 %3 broche %4 angle %5",
  socialrobotWaveArmesBlock: "Saluez avec les mains %1 %2 Servo main droite %3 %4 Servo main gauche %5 %6",
  socialRobotArmsDownBlock: "Baissez les mains  %1 %2 %3 Servo main droite %4 %5 Servo main gauche %6 %7",
  socialRobotArmsUpBlock: "Levez les mains %1 %2 %3 Servo main droite %4 %5 Servo main gauche %6 %7",
  socialRobotEyesLeftBlock: "Tournez les yeux à gauche %1 %2 %3 Servo oeil gauche %4 %5 Servo oeil droit %6 %7",
  socialRobotEyesRightBlock: "Tournez les yeux à droit %1 %2 %3 Servo oeil gauche %4 %5 Servo oeil droit %6 %7",
  socialrobotReadPinBlock: "Lisez la valeur de la broche %1 %2",
  socialRobotServoRightHand: "Servo main droite",
  socialRobotServoLeftHand: "Servo main gauche",
  sonarSliderLabel: "Distance ultrason",
  pirButtonLabel: "Bouton PIR",
  soundButtonLabel: "Bouton son",
  touchButtonLabel: "Bouton touche",
  lightSensorSliderLabel: "Bouton capteur lumière",
  servoCostume: "Costume",
  servoOptions: "Options du servo moteur",
  sonarOptions: "Options du capteur ultrason",
  lcdOptions: "Options de l'afficheur LCD",
  pirOptions: "Options du capteur PIR/mouvement",
  soundOptions: "Options du capteur de son",
  touchOptions: "Options du capteur de touche",
  buttonOptions: "Options du boutoun-poussoir",
  lightOptions: "Options du capteur de lumière",
  rgbLedOptions: "Options du LED RGB",
  ledmatrixOptions: 'Led  Matrix Options',
  ledOptions: "Options du LED",
  pinOptions: "Broche",
  colorOptions: "Couleur",
  runError: "<h3>Désolé, je n'ai pas pu téléverser le code sur la carte</h3>",
  uploadError: "Suivez ces étapes pour redémarrer la carte Dwenguino: \n    1. Débranchez le câble USB \n    2. Connectez l'ordinateur et la carte Dwenguino avec le câble USB \n    3. Appuyez simultanément sur le bouton RESET et le bouton SUD de la carte Dwenguino \n    4. Ensuite, relâchez d'abord le bouton RESET \n    5. Puis relâchez le bouton SUD \n    6. Téléversez à nouveau le programme via le menu principal (<span id='db_menu_item_run' class='fas fa-play-circle' alt='Upload code to Dwenguino board'></span>)",
  cleanError: " Le code précédent n'a pu être supprimé.\nVérifiez si un autre programme utilise des fichiers .cpp. Fermez ce programme.",
  compileError: "Le code n'a pas pu être compilé.\nVérifiez s'il y a une erreur dans votre programme, avez-vous oublié un bloc quelque part ?",
  dwenguinoStepperMotorBlock: "moteur pas-à-pas %1 %2 %3 numéro %4 nombre de pas %5",
  dwenguinoStepperMotorBlockTooltip: "TODO",
  drawingrobotMove: "Déplacez le marqueur %1 degrés par %2 pas",
  drawingrobotMoveXY: "Déplacez le marqueur %1 vers la droite et %2 vers la gauche",
  drawingrobotLine: "Dessinez une ligne vers x : %1 y : %2",
  drawingrobotCircle: "Dessinez un cercle de rayon %1",
  drawingrobotRectangle: "Dessinez un rectangle de largeur : %1 et de hauteur : %2",
  drawingrobotLiftStylus: "Soulevez le marqueur",
  drawingrobotLowerStylus: "Posez le marqueur",
  drawingrobotChangeColor: "Couleur %1",
  up:"en haut",
  down:"en bas",
  left:"gauche",
  right:"droite",
  bounds:" Attention\nVous essayez de dessiner en dehors du papier",
  drawingrobotgrid: "grille",
  colorpicker:"Couleur",
  drawingrobotSaveImage:"Sauvegarder dessin",
  drawingrobotDrawing:"Dessin",
  stepperMotorOne: "STEPPER1", 
  stepperMotorTwo: "STEPPER2",
  stepperMotorTooltip: "Choisissez lequel des deux moteurs du robot de dessin que vous souhaitez contrôler.",
  clear: "Supprimer",
  save: "Sauvegarder",
  triggerPin: "Trigger pin",
  echoPin: "Echo pin",
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
  dictSelectFile: "Sélectionner un fichier",
  dictChooseFile: "Choisissez un fichier",
  dictDefaultMessage: "Déposer des fichiers ici pour les télécharger",
  dictFallbackMessage: "Votre navigateur ne prend pas en charge le téléchargement de fichiers déroulants",
  dictFileTooBig: "Le fichier est trop gros ({{filesize}}MiB). Taille maximale du fichier: {{maxFilesize}}MiB.",
  dictFallbackText: "Veuillez utiliser le formulaire de repli ci-dessous pour télécharger vos fichiers comme autrefois.",
  dictInvalidFileType: "Vous ne pouvez pas télécharger des fichiers de ce type.",
  dictResponseError : "Le serveur a répondu avec le code {{statusCode}}.",
  dictCancelUpload: "Annuler le téléchargement",
  dictCancelUploadConfirmation : "Êtes-vous sûr de vouloir annuler ce téléchargement ?",
  dictRemoveFile: "Supprimer le fichier",
  dictMaxFilesExceeded : "Vous ne pouvez plus télécharger de fichiers",
  dictUploadBlocks: "Téléchargement de blocs",
  dictFileNotSupported: "Ce fichier n'est pas pris en charge.",
};

MSG.ledmatrix = {
  restPosition: 'Reposez', 
  blink1: 'Clignez 1',
  blink2: 'Clignez 2',
  blink3: 'Clignez 3',
  blink4: 'Clignez 4',
  blink5: 'Clignez 5',
  right1: 'Droit 1',
  right2: 'Droit 2',
  left1: 'Gauche 1',
  left2: 'Gauche 2',
  up1: 'Haut 1',
  up2: 'Haut 2',
  up3: 'Haut 3',
  down1: 'Bas 1',
  down2: 'Bas 2',
  down3: 'Bas 3',
  angryLeft1: 'Fâché gauche 1',
  angryLeft2: 'Fâché gauche 2',
  angryLeft3: 'Fâché gauche 3',
  angryLeft4: 'Fâché gauche 4',
  angryRight1: 'Fâché droit 1',
  angryRight2: 'Fâché droit 2',
  angryRight3: 'Fâché droit 3',
  angryRight4: 'Fâché droit 4',
  sadLeft1: 'Triste gauche 1',
  sadLeft2: 'Triste gauche 2',
  sadLeft3: 'Triste gauche 3',
  sadRight1: 'Triste droit 1',
  sadRight2: 'Triste droit 2',
  sadRight3: 'Triste droit 3',
  evilLeft1: 'Menaçant gauche 1',
  evilLeft2: 'Menaçant gauche 2',
  evilRight1: 'Menaçant droit 1',
  evilRight2: 'Menaçant droit 2',
  scanHorizontal1: 'Scrutez horizontal 1',
  scanHorizontal2: 'Scrutez horizontal 2',
  scanHorizontal3: 'Scrutez horizontal 3',
  scanHorizontal4: 'Scrutez horizontal 4',
  scanVertical1: 'Scrutez vertical 1',
  scanVertical2: 'Scrutez vertical 2',
  scanVertical3: 'Scrutez vertical 3',
  scanVertical4: 'Scrutez vertical 4',
  scanVertical5: 'Scrutez vertical 5',
  scanVertical6: 'Scrutez vertical 6',
  rip1: 'RIP 1',
  rip2: 'RIP 2',
  peering1: 'Regardez 1',
  peering2: 'Regardez 2',
  peering3: 'Regardez 3',
  peering4: 'Regardez 4'
};

MSG.simulator = {
  start: "Start",
  stop: "Stop",
  pause: "Pause",
  step: "1 pas",
  speed: "Vitesse",
  speedVerySlow: "40 fois plus lent",
  speedSlow: "20 fois plus lent",
  speedMedium: "10 fois plus lent",
  speedFast: "5 fois plus lent",
  speedVeryFast: "2 fois plus lent",
  speedRealTime: "Temps réel",
  components: "Sélectionner les composants",
  servo: "Servo",
  servoDescription: "Un servomoteur peut tourner selon un certain angle entre 0 et 180 degrés. Lors de l'utilisation du bloc servomoteur, vous incluez l'angle souhaité dans votre programme. Il y a aussi des blocs dans la boîte à outils pour, par exemple, agiter les mains; l'angle est déjà défini dans ces blocs.",
  moteur: "Moteur",
  DCMotorDescription : "Un moteur à courant continu ou un moteur DC tourne tout autour. Vous pouvez utiliser un tel moteur pour faire conduire le robot. Vous entrez la vitesse et le sens de rotation du moteur dans votre programme sous la forme d'un nombre de -255 à 255.",
  scope: "Variables",
  alertDebug: "La simulation s'arrête lorsque vous reprenez la programmation",
  distance: "distance",
  scenario: "Scénario",
  scenario_default: "Tableau normal",
  scenario_moving: "Robot en mouvement",
  scenario_wall: "Robot en mouvement avec mur",
  scenario_spyrograph: "Spyrographe",
  code: "Code",
  pir: "Capteur de proximité",
  pirDescription: "Utilisez ce capteur pour détecter les mouvements. Un bouton est fourni dans le simulateur pour simuler le mouvement en appuyant sur le bouton. Lorsqu'il est détecté, le capteur renvoie un 1, sinon un 0.",
  sonar: "Capteur sonar",
  sonarDescription: "Utilisez ce capteur pour détecter une personne ou un objet et déterminer à quelle distance du capteur se trouve la personne ou l'objet. Un curseur est fourni dans le simulateur pour simuler la distance entre l'objet et le capteur. Le capteur renvoie la distance en centimètres.",
  sound: "Capteur de son",
  soundDescription: "Utilisez ce capteur pour détecter le son. Un bouton est prévu dans le simulateur pour simuler le son. Lorsqu'il y a un son, le capteur renvoie 1, lorsqu'il y a un silence, il renvoie 0.",
  light: "Capteur de lumière",
  lightDescription: "Utilisez ce capteur pour détecter une lumière élevée ou faible. Le simulateur dispose d'un curseur pour simuler la lumière et l'obscurité. En haute lumière, le capteur de lumière du simulateur renvoie une valeur élevée, en basse lumière une valeur faible.",
  led: "LED",
  ledDescription: "Dans le simulateur, vous avez des LED de quatre couleurs. Une LED est contrôlée par une broche que vous désignez vous-même. Si la broche est à l'état HAUT, la LED s'allume. A l'état BAS, la LED est éteinte.",
  rgbled: "LED RGB",
  rgbledDescription: "",
  ledmatrix: "Matrice à LED",
  ledmatrixDescription: "",
  ledmatrixsegment: "LED matrix",
  ledmatrixsegmentDescription: "",
  touch: "Capteur touche",
  touchDescription: "Utilisez ce capteur pour détecter si le robot est touché. Le simulateur dispose d'un bouton pour simuler le toucher en appuyant sur le bouton. Lorsqu'il est touché, le capteur renvoie un 1, sinon un 0.",
  lcd: "Afficheur LCD",
  lcdDescription: "L'écran LCD contient deux lignes de 16 caractères chacune. Vous ajoutez le texte souhaité à votre programme.",
  button: "Bouton-poussoir",
  buttonDescription: "",
  sound: "Capteur de son",
  soundDescription: "",
  light: "Capteur de lumière",
  lightDescription: "",
  buzzer: "Radiomessageur",
  buzzerDescription: "Avec le radiomessageur, vous pouvez jouer le son à la fréquence de votre choix. La fréquence souhaitée (en Hz) est incluse dans votre programme. Avec un bloc d'attente, vous déterminez la durée de lecture du son.",
  decoration: "Décoration"
};

MSG.socialrobot = {
  plain: "Standard",
  eye: "Oeil",
  mouth: "Bouche",
  righthand: "Main droite",
  lefthand: "Main gauche",
};

MSG.tutorialMenu = {
  header: "Tutoriels",
  catDwenguino: "Programmer<br>avec DwenguinoBlockly",
  catDwenguinoComponents : "Aperçu pratique des<br>composants de Dwenguino",
  catDwenguinoConnector : "Cartographie des broches &<br>connecteur d'extension",  
  catRidingRobot: "Robot roulant",
  catSocialRobot: "Robot social",
  catWeGoStem: "WeGoSTEM",
  chooseCategory: "Choisissez une catégorie de tutoriels",
  chooseTutorial: "Choisissez un tutoriel",
  previous: "Précedent",
  close: "Fermer",
  checkAnswer: "Vérifier la réponse",
  correctAnswer: "La réponse est correcte!",
  wrongAnswer: "La réponse n'était pas correcte. Essayez à nouveau!",
  dwenguinoComponents: "Composants de Dwenguino",
  sensors: "Capteurs",
  actuators: "Actionneurs",
  movement: "Mouvement",
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
  step1Title: "Bienvenue à DwenguinoBlockly",
  step1Content: "Salut, je m'appelle Dwenguino! Je vais vous aider à vous familiariser avec l'interface !",
  step2aTitle: "La zone de code Blockly",
  step2aContent: "Dans cette zone, vous mettez vos blocs de code. Vous devez placer vos blocs à l'intérieur du bloc setup-loop si vous voulez qu'ils soient exécutés.",
  step2bTitle : "La boîte à outils Blockly",
  step2bContent : "Voici la boîte à outils, elle contient tous les blocs que vous pouvez utiliser pour créer votre programme. Vous pouvez explorer les différentes catégories pour découvrir ce que votre Dwenguino peut faire.",
  step3Title : "Sélection de la langue",
  step3Content : "Utilisez ceci pour changer la langue",
  step4Title : "Difficulté",
  step4Content : "Ce curseur vous permet de définir le niveau de difficulté. Aux niveaux supérieurs, vous avez des blocs plus avancés. Pour les utiliser, il est préférable de maîtriser d'abord les blocs des niveaux inférieurs. Pour l'instant, il n'y a que deux niveaux qui contiennent des blocs, d'autres viendront dans le futur.",
  step5Title : "Dwengobooks",
  step5Content : "Les Dwengobooks sont des tutoriels interactifs qui vous guident à travers les différents défis de calcul physique.",
  step6Title : "Télécharger le code",
  step6Content : "Lorsque votre code est terminé, vous pouvez le télécharger sur la carte Dwenguino en cliquant sur ce bouton. Assurez-vous que vous sélectionnez bien la bonne carte et le bon port dans l'idée Arduino.",
  step7Title : "Ouvrir",
  step7Content : "Ce bouton vous permet d'ouvrir un programme précédemment enregistré.",
  step8Title : "Enregistrer",
  step8Content : "Ce bouton vous permet d'enregistrer votre code dans un fichier local.",
  step9Title : "Le simulateur",
  step9Content : "Avec ce bouton, vous pouvez ouvrir le simulateur. Vous pouvez l'utiliser pour tester votre code avant de le télécharger sur le tableau."
};

MSG.tutorials.nameOnLcd = {
  step1Title: "Nom sur écran lcd",
  step1Content:"Ouvrez la vue du simulateur et testez le code. Que voyez-vous?",
  step2Title: "Nom sur l'écran lcd",
  step2Content: "Changez le programme pour que votre nom apparaisse sur la première ligne de l'écran lcd.",
};

MSG.tutorials.blinkLED = {
  step1Title: "LED clignotante",
  step1Content: "Ouvrez la vue du simulateur et testez le code. Que voyez-vous ?",
  step2Title: " LED clignotante ",
  step2Content: "Modifiez le programme pour que la LED s'allume pendant une seconde, puis s'éteigne pendant une seconde. Cette séquence est répétée indéfiniment.",
  step3Title: "Extra",
  step3Content: "Faites en sorte qu'une autre LED s'allume et s'éteigne.",
};

MSG.tutorials.ledOnButtonPress = {
  step1Title: "LED sur bouton pressé",
  step1Content: " Ouvrez la vue du simulateur et testez le code. Que voyez-vous?",
  step2Title: "LED sur bouton pressé",
  step2Content: "Changez le programme pour que la LED s'allume lorsque vous appuyez sur le bouton nord.",
  step3Title: "Extra",
  step3Content: " Assurez-vous que la LED s'éteint lorsque vous relâchez le bouton nord.",
};

MSG.tutorials.bitPatternOnLeds = {
  step1Title: "Motif sur les LEDs",
  step1Content: "Ouvrez la vue du simulateur et testez le code. Que voyez-vous?",
  step2Title: "Motif sur les LEDs",
  step2Content: "Le code que vous avez est très long. Pouvez-vous obtenir le même résultat en utilisant moins de blocs ? Essayez d'obtenir le même résultat en utilisant moins de blocs !",
  step3Title: "Motif sur les LEDs",
  step3Content: "Lorsque vous avez réussi à réduire le nombre de blocs, appelez l'un des tuteurs pour recevoir du feed-back sur votre solution.",
};

MSG.tutorials.allButtons = {
  step1Title: "Tous les boutons",
  step1Content: " Ouvrez la vue du simulateur et testez le code. Que voyez-vous ?",
  step2Title: "Tous les boutons",
  step2Content: " e code devrait allumer une led lorsque l'on appuie sur l'un des boutons. Regardez le programme. Est-ce que tous les boutons fonctionnent? Essayez de corriger le code pour les boutons qui ne fonctionnent pas",
  step3Title: "Extra",
  step3Content: "Changez le code pour que la LED s'éteigne lorsque le bouton est relâché.",
};

MSG.tutorials.driveForward = {
  step1Title: "Conduire en avant",
  step1Content: "Ouvrir la vue du simulateur.",
  step2Title: "Avancer",
  step2Content: "Sélectionnez la vue du scénario et testez le code. Que voyez-vous?",
  step3Title: "Avancez",
  step3Content: "La voiture avance-t-elle ? Corrigez le code pour que la voiture avance.",
};

MSG.tutorials.rideInSquare = {
  step1Title: "Rouler dans le carré",
  step1Content: "Ouvrir la vue du simulateur",
  step2Title: "Rouler dans le carré",
  step2Content: "Sélectionnez la vue du scénario et testez le code. Que voyez-vous ?",
  step3Title: "Roler dans le carré",
  step3Content: "La voiture roule-t-elle dans un carré ? Corrigez le code pour que la voiture se déplace dans un carré.",
  step4Title: "Extra",
  step4Content: "Le code est long, pouvez-vous le réduire tout en conservant le même comportement ?",
};

MSG.tutorials.rideToWall = {
  step1Title: "Rouler jusquau mur",
  step1Content: "Ouvrir la vue du simulateur.",
  step2Title: "Rouler jusquau mur",
  step2Content: "Sélectionner la vue du scénario.",
  step3Title: " Rouler jusquau mur",
  step3Content: "Changez le scénario en robot mobile avec mur et testez le code. Que voyez-vous?",
  step4Title: " Rouler jusquau mur",
  step4Content: "La voiture roule-t-elle vers le mur ? S'arrête-t-elle au mur ? Changez le code pour que la voiture s'arrête près du mur",
};

MSG.tutorials.avoidWall = {
  step1Title: "Éviter le mur",
  step1Content: "Ouvrir la vue du simulateur",
  step2Title: "Éviter le mur",
  step2Content: "Select the scenario view.",
  step3Title: "Avoid wall",
  step3Content: "Changez le scénario en robot mobile avec un mur et testez le code. Que voyez-vous?",
  step4Title: " Éviter le mur",
  step4Content: "La voiture évite-t-elle le mur en tournant avant de l'atteindre? Changez le code pour que la voiture continue de rouler mais ne heurte jamais le mur.",
};

MSG.tutorials.nameOnLcdBasic = {
  step0Title: "Êtes-vous sûr?",
  step0Content: "Êtes-vous sur? Lorsque vous cliquez sur suivant, les blocs de la feuille de calcul seront remplacés",
  step1Title: "Nom sur lécran LCD",
  step1Content: "Dans ce tutoriel, vous mettrez votre nom sur le LCD. Vous verrez un exemple de la façon de procéder",
  step2Title: "Tester sur le panneau",
  step2Content: "Testez le code en connectant le panneau Dwenguino à l'ordinateur avec le câble usb et en appuyant sur le bouton play",
  step3Title: "Votre propre nom",
  step3Content: "En ce moment, vous voyez le nom 'Tom' affiché à l'écran. Veuillez modifier le code pour que votre nom apparaisse.",
  step4Title: "Deux rangs",
  step4Content: "L'écran LCD comporte deux rangs. Changez la ligne avec votre nom de 0 à 1.",
  step5Title: "Test",
  step5Content: "Testez votre code.",
  step6Title: "Parfait!",
  step6Content: " Bravo ! Vous savez maintenant comment afficher votre nom sur l'écran LCD.",
};

MSG.logging = {
  setup: "Test setup",
  login: "Login",
  logout: "Log out",
  firstname: "First name",
  newuser: "Nouvel utilisateur",
  email: "Email address",
  enterEmail: "Enter email address",
  forgotPassword: "I forgot my password",
  secretCode: "Secret code",
  enterSecretCode: "Enter your secret code sent to you by email",
  userDoesNotExist: "This user does not exist. Try a different email address.",
  resetPassword: "Reset your password",
  back: "Back",
  enterFirstname: "Enter your first name",
  password: "Password",
  repeatedPassword: "Repeat password",
  enterPassword: "Enter password",
  enterRepeatedPassword: "Repeat your password",
  choosePassword: "Sélectionnez 4 icônes personnelles comme mot de passe. Vous devez être capable de les mémoriser dans le bon ordre",
  currentlySelected: "Actuellement sélectionné : ",
  role: "Role",
  student: "Student",
  teacher: "Teacher",
  verification: "Verify your email address",
  verificationSentTo: "A verification message has been sent to your email address. Click the link in the email to verify your account.",
  birth: "Date de naissance",
  school: "École",
  selectSchool: "Recherche par nom d'école...",
  agegroup: "Groupe d'âge :",
  primary1: "Première année de primaire",
  primary2: "2ème année primaire",
  primary3: "Premier grade 3",
  primary4: "Premier grade 4",
  primary5: "Premier grade 5",
  primary6: "Premier grade 6",
  secondary1: "Second grade 1",
  secondary2: "Second grade 2",
  secondary3: "Second grade 3",
  secondary4: "Second grade 4",
  secondary5: "Second grade 5",
  secondary6: "Second grade 6",
  gender: "Sexe: ",
  gender1: "F",
  gender2: "M",
  gender3: "X",
  gender4: "Je préfère ne pas le dire",
  activité: "Activité: ",
  name: "Nom",
  date: "Date",
  ok: "Ok",
  continue: "Continue",
  reset: "Reset",
  person: "Personne",
  dog: "Chien",
  Car: "Voiture",
  camera: "Caméra",
  Heart: "Coeur",
  plane: "Avion",
  house: "Maison",
  umbrella: "Parapluie",
  star: "Étoile",
  money: "Argent",
  cadeau: "Cadeau",
  keys: "Clés",
  music: "Musique",
  snowflake: "Flocon de neige",
  fire: "Feu",
  envelope: "Enveloppe",
  conditions: "Voorwaarden",
  conditions1: "Om de app te gebruiken, moet je akkoord gaan met de <b>gebruiksvoorwaarden</b> en het <b>privacybeleid</b>.",
  generalConditions: "de gebruiksvoorwaarden",
  privacyStatement: "het privacybeleid",
  conditions2: "Daar staat onder andere in dat je moet inloggen om te beschikken over functionaliteit zoals het bewaren van je programma's of het bijhouden van je voortgang, dat je data anoniem wordt gelogd en verwerkt, en dat je ons mag mailen met vragen over privacy.",
  conditions3: "Ben je <b>13 jaar of ouder?</b> Dan mag je hieronder <b>zelf bevestigen</b> dat je de info hebt gelezen en akkoord gaat.",
  conditions4: "Ben je <b>12 jaar of jonger?</b> Dan moet een van je ouders of voogden toestemming geven.",
  acceptConditions: "Ik ga akkoord met de gebruiksvoorwaarden en het privacybeleid van de Dwengo-simulator",
  acceptResearch: "Ik geef toestemming aan Dwengo vzw om de gegevens die de simulator verzamelt, voor <b>wetenschappelijk onderzoek</b> te gebruiken, geanonimiseerd en volgens het privacybeleid.",
  anonymized: "* <b>\'Geanonimiseerd\'</b> wil zeggen dat er geen link is tussen je persoonsgegevens en je data. Niemand weet dus wat je deed in de simulator."
};

MSG.validator = {
  errSchool: "Sélectionnez une école",
  errId: "Vous n'avez pas sélectionné assez d'icônes.",
  errAgeGroup: "Sélectionnez votre groupe d'âge.",
  errGender: "Sélectionnez votre sexe.",
  errFirstname: "Je voornaam is niet ingevuld.",
  errLastname: "Je achternaam is niet ingevuld.",
  errPassword: "Je paswoord voldoet niet aan de voorwaarden.",
  errPasswordNotIdentical: "Je paswoorden zijn niet identiek.",
  errEmail: "Je email is niet geldig",
  errActivityId: "Le titre de votre activité ne peut être vide.",
  errAcceptConditions: "Je hebt de gebruiksvoorwaarden en het privacybeleid nog niet geaccepteerd.",
  errAcceptResearch: "Je hebt nog geen toestemming gegeven om de gegevens voor wetenschappelijk onderzoek te laten gebruiken.",
  errRequiredFields: "Je hebt niet alle velden ingevuld.",
  errRoleInvalid: "De opgegeven rol is niet geldig."
};

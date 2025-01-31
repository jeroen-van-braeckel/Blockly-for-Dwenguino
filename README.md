## Dwenguinoblockly

Dwenguinoblockly is a javascript application with nodejs backend which enables programming of the Dwenguino board (dwengo.org/dwenguino) using the blockly graphical and textual code editor. Most of the application runs in browser. However, some parts, like the compilation service, user management, and logging system are contained in the backend application. Both applications can be run independently of each other. 

The application has the following features:

* Using the blocks editor to create arduino/dwenguino c++ code.
* Live translation of blocks to code.
* In browser simulation environment with different scenarios.
* Predefined tutorials to be used in a classroom.
* Multiple language support (English, Dutch, French, German, Greek, Italian, Malay)
* Direct compilation and upload to the Dwenguino board through nodejs application.
* Textual editor based on the [vscode monaco editor](https://github.com/microsoft/monaco-editor)


To run the backend application:
* Set the correct parameters in the backend/.env file. 
* Be sure to set MONGODB_URI to a valid mongodb instance running on your system (or in the cloud).
* Run `npm install`
* Start the application using `node --experimental-modules index.js` 


### Dependencies

* nodejs
* monogdb
* webpack
* babel

To execute the compiled code on the Dwenguino µC, you need our custom usb bootloader. More information can be found on the [github page](https://github.com/dwengovzw/MassStorageBootloader) of the project.


### Deploying the application

On linux, run the deploy.sh script in the deploy folder.

### Building the application

#### In production

Run `npm install` and use `npm run build` to build the application. Start the backend application with `/backend/index.js`.

#### In development

Run `npm install` and use `npm run build-dev` to build the application. This makes debugging in the browser possible. Use the script `start.sh` to start the server locally.

### Contributing

# Running the application

### Instal dependencies

Install node and npm:

```bash
sudo apt update
sudo apt install curl dirmngr apt-transport-https lsb-release ca-certificates vim
sudo apt update
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs
```

Install mongodb

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc |  gpg --dearmor | sudo tee /usr/share/keyrings/mongodb.gpg > /dev/null
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install mongodb-org
```

Install npm dependencies:
```bash
cd Blockly-for-Dwenguino
npm install --legacy-peer-deps
```


We refer to [this styleguide](https://google.github.io/styleguide/jsguide.html) to help you contribute to the Dwenguinoblockly project. 

The documentation can be accessed from the `docs` folder (`docs/index.html`). You can generate new documentation by running the following command: `./node_modules/.bin/jsdoc -c jsdoc-conf.json -r -d docs`.



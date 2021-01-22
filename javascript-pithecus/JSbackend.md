<link href="mdstyle.css" rel="stylesheet"></link>

# back-end

## server
### nodeJS

### npm
the center world of nodeJS! everybody puts their packages to there. all we need to do is `npm install`. 

### what is a server?
a piece of codes that connected to the internet or network. is is listening to certain connection, and respond to the client side requests and make the decision to accept them. 

### express.js
it is a nodeJS framework, help us to make it so easy to build a server. it already has a lot of codes. 

it is just a shortcut. still you are in javascript.

# wetube cloning
## order of the lecture
### how the node.js project works?

how do I install node packages including express? : npm. node package manager. npm comes with node.js, so don't worry. the command will automatically created.
require or import: importing 'express' folder from the node_modules. then, wtf is the 'express' here? it is a bunch of requires

1. `npm init` <br>create a nodeJS package of my own. (package.json)
2. `npm install express` <br> downloading express.js and  making node_modules in my folder. 
3. node_modules <br> the location where your packages live in. after `npm install`, you can import any of them you installed. `dependencies` shows the core packages that you installed. it's how our project survive.
4. package.json <br> Is a file where I save information about my project and the packages it needs to run. later, when you share your codes with others, you don't have to send the whole node_modules folder. instead, just sending package.json and `npm i`. then it will automatically downloaded according to dependencies.


### babel
1. `npm i @babel/core @babel/node @babel/cli @babel/preset-env --save-dev`
2. `npm i core-js@3`
3. in the package.json, `"start":"babel-node index.js"`
4. make a .babelrc file :  {
"presets": [["@babel/preset-env",
{"useBuiltIns": "entry",
"corejs":3}]]}

### nodemon
1. `npm i nodemon -D`
2. in the package.json, `"start": "nodemon --legacy-watch --exec babel-node index.js --delay 2"`
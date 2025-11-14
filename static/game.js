// =============================================================================
// --- API AND DATA MANAGEMENT HELPER ---
// =============================================================================
class GameDataManager {
    constructor(saveUrl, loadUrl) {
        // The URLs for your API Gateway endpoints
        this.SAVE_API_URL = saveUrl;
        this.LOAD_API_URL = loadUrl;
    }

    /**
     * Creates a default game state object for a new player.
     */
    createDefaultData() {
        
        return {
            player: { x: 135, y: 2946, currentMap: 'Overworld' },
            tasksCompleted: { task1: false, task2: false, task3: false, task4: false, task5: false, task6: false },
            samsaram: { npc1: false, npc2: false, npc3: false, npc4: false, npc5: false, npc6: false, npc7: false },
            keyss: 0
        };
    }

    /**
     * Asynchronously saves the game state to your backend.
     * @param {object} gameState - The complete game state object to save.
     */
    async saveData(gameState) {
        
    const logindata=JSON.parse(localStorage.getItem("logindata"));
    const userJwtToken=logindata.token;
    
        try {
            const response = await fetch(this.SAVE_API_URL, {
  method: "POST", // or "PUT" if your API expects that
  headers: {
    "Authorization": "Bearer " + userJwtToken,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(gameState),
            });

            const result = await response.json();
            

        } catch (error) {
            
        }
    }
}

// --- Create a single instance of the manager with your API URLs ---
// IMPORTANT: Replace these placeholder URLs with your actual API Gateway URLs.
const SAVE_URL = 'https://ekadxkdpdg.execute-api.ap-south-1.amazonaws.com/sahasam-gamedata-updater';
const gameDataManager = new GameDataManager(SAVE_URL);

class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('PreloaderScene');
    }

    preload() {
        // --- Remove the initial loading screen ---
       
        

        // --- Create a loading bar ---
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background for the bar
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

        // Loading text
        this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            fontFamily: '"Press Start 2P"', fontSize: '20px', fill: '#ffffff'
        }).setOrigin(0.5, 0.5);

        // Percent text
        const percentText = this.add.text(width / 2, height / 2, '0%', {
            fontFamily: '"Press Start 2P"', fontSize: '18px', fill: '#ffffff'
        }).setOrigin(0.5, 0.5);

          const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            fontFamily: '"Press Start 2P"', fontSize: '20px', fill: '#ffffff'
        }).setOrigin(0.5, 0.5);

        // --- Listen to loading events ---
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            percentText.destroy();
            loadingText.destroy();
        });

        // --- Load ALL game assets here ---
            this.load.image('door', STATIC_PATHS.door);
        this.load.image('map_background', STATIC_PATHS.map_background);
        this.load.image('map_foreground', STATIC_PATHS.map_foreground);
        this.load.image('collision', STATIC_PATHS.collision_tiles);
        this.load.tilemapTiledJSON('map_data', STATIC_PATHS.map_data);
        this.load.image('action_button', STATIC_PATHS.action_button);
        this.load.spritesheet('player', STATIC_PATHS.player, { frameWidth: 48, frameHeight: 68 });
        this.load.spritesheet('playeru', STATIC_PATHS.playeru, { frameWidth: 48, frameHeight: 68 });
        this.load.spritesheet('playerl', STATIC_PATHS.playerl, { frameWidth: 48, frameHeight: 68 });
        this.load.spritesheet('playerr', STATIC_PATHS.playerr, { frameWidth: 48, frameHeight: 68 });
        this.load.image('npc7', STATIC_PATHS.npc7);
        this.load.image('npc6', STATIC_PATHS.npc6);
        this.load.image('npc5', STATIC_PATHS.npc5);
        this.load.image('npc4', STATIC_PATHS.npc4);
        this.load.image('npc3', STATIC_PATHS.npc3);
        this.load.image('npc2', STATIC_PATHS.npc2);
        this.load.image('npc1', STATIC_PATHS.npc1);
        this.load.image('npc1_portrait', STATIC_PATHS.npc1_portrait);
        this.load.image('npc2_portrait', STATIC_PATHS.npc2_portrait);
        this.load.image('npc3_portrait', STATIC_PATHS.npc3_portrait);
        this.load.image('npc4_portrait', STATIC_PATHS.npc4_portrait);
        this.load.image('npc5_portrait', STATIC_PATHS.npc5_portrait);
        this.load.image('npc6_portrait', STATIC_PATHS.npc6_portrait);
        this.load.image('npc7_portrait', STATIC_PATHS.npc7_portrait);
        this.load.audio('npc7_audio', STATIC_PATHS.npc7_audio);
        this.load.audio('npc6_audio', STATIC_PATHS.npc6_audio);
        this.load.audio('npc5_audio', STATIC_PATHS.npc5_audio);
        this.load.audio('npc4_audio', STATIC_PATHS.npc4_audio);
        this.load.audio('npc3_audio', STATIC_PATHS.npc3_audio);
        this.load.audio('npc2_audio', STATIC_PATHS.npc2_audio);
        this.load.audio('npc1_audio', STATIC_PATHS.npc1_audio);
        this.load.audio('npc7_audio2', STATIC_PATHS.npc7_audio2);
        this.load.audio('npc6_audio2', STATIC_PATHS.npc6_audio2);
        this.load.audio('npc5_audio2', STATIC_PATHS.npc5_audio2);
        this.load.audio('npc4_audio2', STATIC_PATHS.npc4_audio2);
        this.load.audio('npc3_audio2', STATIC_PATHS.npc3_audio2);
        this.load.audio('npc2_audio2', STATIC_PATHS.npc2_audio2);
        this.load.audio('npc1_audio2', STATIC_PATHS.npc1_audio2);
        this.load.audio('male_voice', STATIC_PATHS.male_voice);
        this.load.audio('female_voice', STATIC_PATHS.female_voice);
        this.load.audio('music_overworld', STATIC_PATHS.music_overworld);
        this.load.audio('sfx_footstep', STATIC_PATHS.sfx_footstep);
        this.load.audio('sfx_npc_interact', STATIC_PATHS.sfx_npc_interact);
        this.load.audio('sfx_item_interact', STATIC_PATHS.sfx_item_interact);
        this.load.audio('sfx_task_interact', STATIC_PATHS.sfx_task_interact);
        // this.load.image('butterfly', '/static/assets/imgs/butterfly.png');
    }

    create() {
        
        this.scene.start('GameScene');
    }
}


class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        // Player & Input
        this.player = null;
        this.keys = null;
        this.lastDirection = 'down';
        this.spaceKey = null;
        
        // Interaction State
        this.activeTarget = null; 
        
        // Textbox UI
        this.textBox = null;
        this.textObject = null;
        this.portrait = null;
        
        // Footstep Audio
        this.footstepSound = null;
        this.wasMoving = false;

        // Choice Box UI Properties
        this.choiceBox = null;         // The graphics object for the choice box background and border
        this.choiceOptions = [];       // An array to hold the text objects for the choices
        this.selectedChoice = 0;       // The index of the currently selected choice (0, 1, etc.)
        
        // UI State Flags
        this.isTextBoxOpen = false;
        this.isChoiceBoxOpen = false;  // Our new state flag!

        // IFrame properties
        this.challengeContainer = null;
        this.challengeIframe = null;
        this.joystick = null;
        this.actionButton=null;
        this.currentTask = null; // Remembers which task is being attempted
        const taCompletedRaw = GAME_DATA.levels;
const saramRaw = GAME_DATA.npcs;
const ke = GAME_DATA.keys || 0;
const ca = GAME_DATA.cash || 0;

// Parse JSON strings into objects
const taCompleted = taCompletedRaw ? taCompletedRaw : {};
const saram = saramRaw ? saramRaw : {};
this.cash=ca;
this.tasksCompleted = {
    task1: false, task2: false, task3: false, 
    task4: false, task5: false, task6: false
};

this.samsaram = {
    npc1: false, npc2: false, npc3: false, 
    npc4: false, npc5: false, npc6: false
};

this.keyss = ke;

// Correctly iterate over the actual object keys
for (let key in this.tasksCompleted) {
    this.tasksCompleted[key] = taCompleted[key] ? true : false;
}

for (let key in this.samsaram) {
    this.samsaram[key] = saram[key] ? true : false;
}


this.rida=GAME_DATA.rida === "true" || GAME_DATA.rida === true;
    }

    bcomic(){
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        document.getElementById("keyCounter").style.display="flex";
        document.getElementById("cashCounter").style.display="flex";
        document.getElementById("sbox").style.display="flex";
        document.getElementById("amountCounter").style.display="block";
        setgolbalamount();
        const comic= document.getElementById('loading');
        comic.blur();
            // When everything is loaded, hide the loading screen...
           updateVolDisplay();
                loadingScreen.style.display = 'none';
            gameContainer.style.visibility = 'visible';
            comic.src="../templates/loading.html";
            this.sound.play('music_overworld', { loop: true, volume: 1 });
    }
    brida(){
      const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
           const comic= document.getElementById('loading');
           this.rida=true;
           comic.src="../templates/trailer2.html";
        }
        btrailer(){
        this.cash=10;
      const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
           const comic= document.getElementById('loading');
         comic.src="../templates/comicviewer.html";
    }

    create() {
        
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        const comic= document.getElementById('loading');
        if(this.rida)
        this.bcomic()
        else
        comic.src="../templates/game_start.html";

        const itemMessages = {
            'task1':"task1", 'task2':"task2", 'task3':"task3", 'task4':"task4", 'task5':"task5", 'task6':"task6",
            'Godson':[
  "Here lies Godson, slain in glorious combat with the game engine's bugs.",
  "Godson fought the engine... and the engine won.",
  "Rest in peace, Godson. He tried to optimize one last time.",
  "Godson: Bravest of coders, victim of the eternal loop.",
  "Godson's last words: 'It works on my machine…'",
  "Fallen hero of the dev realm. Patch note: Godson is now a skeleton.",
  "Killed by undefined. Buried in line 245."
],
            'Anila': [
  "Here lies Anila, after fighting buttons that just wouldn't stay in place.",
  "Anila tried to make the website perfect... it broke her instead.",
  "She made the page beautiful — just not for all screen sizes.",
  "Anila disappeared while fixing one last thing on the homepage.",
  "RIP Anila. The website looked fine... until it went live.",
  "She said 'just one more tweak' — we never saw her again.",
  "Anila gave her life to fix a tiny misaligned box."
], 
            'Fida':[
  "Here lies Fida, who said 'just one more fix'... again.",
  "Fida gave the game its beauty — and it took her soul in return.",
  "She clicked 'Save' — and vanished forever.",
  "Fida made things look perfect. Sadly, perfection has a price.",
  "She styled until she was out of style.",
  "Fida's last commit: 'Final_final_fix_really_this_time.css'",
  "She made the buttons smooth — and disappeared without a click."
], 
            'Das':[
  "Here lies Arjun, trapped in an infinite testing loop.",
  "Arjun planned the game... but forgot to plan his own escape.",
  "He debugged the code until it debugged him back.",
  "Rest in pieces, Arjun. Collapsed under his own game logic.",
  "He said 'it's almost done'... five days ago.",
  "Arjun tested everything — except his limits.",
  "Built the game's skeleton. Became one himself."
], 
            'Alfred': [
  "Here lies Alfred, who gave his life to fix a server that 'was working yesterday.'",
  "Alfred deployed the game... and then the server deployed him.",
  "He made the game live. Sadly, he didn't survive.",
  "Alfred blocked every threat — except burnout.",
  "Rest in peace, Alfred. The server runs… but at what cost?",
  "He secured the site, but couldn't secure himself.",
  "Alfred disappeared after saying: 'I'll just restart the server.'"
],
            'box':[
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
                "Map Developer forgot to explain what it does !",
            ],
            'door':"Find the 6 keys to open this door.",
            'npc1':`"Hey, listen up!\n
In the south-east, there’s a challenge waiting — and it holds the first key.\n
To get it, you’ll have to complete the letter challenge.\n
Sounds simple? Trust me, it’s not. Time is short, and you need a sharp memory.\n

Mess it up, and guess what?\n
You’ll have to do it all over again. From the start.\n

So stay focused, don’t panic, and keep your brain awake.\n
Oh — and good luck.\n
You’re seriously going to need it!`, 
            'npc2':`Okay... just walk down.\n
Yeah, like… literally down. It should be somewhere around there. You’ll see it.\n

Now, your task?\n
Pretty simple... or not.\n
You have to align a code.\n

But here’s the catch — just think the opposite.\n
If it feels right, it’s probably wrong.\n
If it looks wrong… well, maybe you’re on the right track.`, 
            'npc6':`It isn’t far, and it isn’t wide,\n
The task you seek is just to your side.\n
Stand in the center, let your eyes roam,\n
Take a few steps right — you’re almost home.\n

That’s your hint.\n
Now once you find it — here comes the fun part.\n
Your task is simple: don’t let the bird fall.\n
Just guide it all the way to the goal. Sounds peaceful, right?\n

Well… until the bird decides to have a mind of its own.\n
Stay focused — and the key will be yours`, 
            'npc4':`Look towards the north...\n
That’s where your task is waiting.\n

It’s a bit old-school — no tricks, no shortcuts.\n
Something tells me you might have some experience with this kind of thing.\n

Handle it well… and the key will be yours.\n
Sometimes, the classics still test us the best`, 
            'npc5':`Think like this — when the map stretches out like a stage,\n
where do you look if you want the best seat to watch the drama?\n

Exactly. Somewhere up… right in the heart of the top.\n

That’s where your task is waiting.\n
And to claim the key, you don’t need speed, brains, or muscle.\n

Just one thing…\n
A good aim.\n

Miss it, and you'll be walking back with empty hands and a bruised ego.\n
So breathe, focus… and don’t shoot like it’s your first day at the fair.`, 
            'npc3':`It’s freezing out here… this forest really knows how to chill you to the bone.\n
Thankfully, I found a little fireplace to sit by — you should try it sometime.\n

Anyway, if you're looking for my key, just head to the south-east part of the map.\n
It’s somewhere around there.\n
Your task?\n
Don’t touch the blocks on the way.\n
Just keep moving, stay light on your feet, and survive till the time runs out.\n

Do that — and the key is yours.\n
Simple… but only if your nerves are steady.`,


            'npc1-thug':`Really? You missed it?\n
Da, I literally said 'sharp memory' — not 'sharp forgetting'.\n
What were you doing, counting clouds?\n
Go back, focus… and please don’t make me explain it again`, 
            'npc2-thug':`Oh… you're back?\n
I mean… yeah, cool. Totally expected that.\n
What happened? Pattern too much for the brain?\n
It’s literally just 'opposite', bro… it’s not rocket science!`, 
            'npc3-thug':`Let me guess…\n
Touched a block, didn’t you?\n
It’s cold out here and you’re still managing to sweat!\n
Go on, try again — this time, maybe don’t treat it like a dance floor.`, 
            'npc4-thug':`Oh, back again?\n
Let me guess… the ‘north’ confused you, or was it the ‘old-school’ part that scared you?\n

Come on, I literally handed you a classic task.\n
It’s not a riddle, it’s not magic — just plain old challenge.\n

But hey, I get it…\n
Maybe the ‘experience’ I talked about wasn’t exactly in your toolbox.\n

No worries. Take a deep breath…\n
Go back, try again — and this time, actually use that brain of yours.`, 
            'npc5-thug':`I said 'aim', not 'spray and pray'.\n
You walked in like a hero and left like a beginner.\n
Go back. Stand straight. Breathe.\n
And for heaven’s sake — aim like you mean it!`, 
            'npc6-thug':`Oh dear…\n
Did my little rhyme confuse you?\n
It was really simple, you know.\n
Next time, maybe read it twice before running off like it’s a race`,
            'npc7':"Listen…\nIn this forest, there are six keys.\n Six keys that lead to the underground castle.\n And within that castle lies a hidden treasure — one that many have searched for, but none have claimed.\n After every two keys you find, a mystical force will reward you with a piece of the treasure.\n Hold on to it. Cherish it. It’s more valuable than you think. But you won’t find the keys alone.\n There are people hidden deep in this forest. Seek them out.\n They hold the clues you need. Trust them… or outsmart them.\n And when you finally stand at the gates of the treasure… Know this — the final reward doesn’t come to the strongest or the smartest.\n It comes to the lucky. \nTo claim it… \nYou’ll have to guess the secret pattern. \nGuess right — and the treasure is yours. Guess wrong — and all you’ll leave with… is regret.\n So tell me…\n Are you just another hunter chasing gold?\n Or the one this forest has been waiting for?"
        };

        this.add.image(0, 0, 'map_background').setOrigin(0);
        const map = this.make.tilemap({ key: 'map_data' });
        const mapWidth = map.widthInPixels;
        const mapHeight = map.heightInPixels;
        const tileset = map.addTilesetImage('collision', 'collision');
        const collisionLayer = map.createLayer('collision', tileset, 0, 0).setCollisionByExclusion([-1]).setVisible(false);
        this.npcs = this.physics.add.group({ classType: Phaser.Physics.Arcade.Sprite, immovable: true });
        
        const interactionZones = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        const zoneObjects = map.getObjectLayer('InteractionZones').objects;
        
        this.footstepSound = this.sound.add('sfx_footstep', { loop: true, volume: 0.7 });

        zoneObjects.forEach(zoneObject => {
            const zoneId = this.findProperty(zoneObject.properties, 'interaction_id');
            if (!zoneId) return;
            const zone = interactionZones.create(zoneObject.x, zoneObject.y, zoneObject.width, zoneObject.height).setOrigin(0, 0);

            let interactionType = 'message';
            if (zoneId.startsWith('task')) {
                interactionType = 'choice';
            }
            else if(zoneId.startsWith('door')){
                interactionType = 'door';
            }
            zone.setData('interactionType', interactionType);
            zone.setData('message', itemMessages[zoneId] || "...");

            let sfxKey = 'sfx_item_interact';
            if (zoneId.startsWith('npc')){ sfxKey = 'sfx_npc_interact';
                zone.setData('zoneId', zoneId);
                zone.setData('thug', itemMessages[zoneId+"-thug"] || "...");
            }
            else if (zoneId.startsWith('task'))
                 {
                    sfxKey = 'sfx_task_interact';
                    const num=zoneId[zoneId.length-1];
                    zone.setData('taskno',num);
                }
            zone.setData('sfxKey', sfxKey);

            if (zoneId.startsWith('npc')) {
                zone.setData('portraitKey', zoneId + '_portrait');
                const npcX = zoneObject.x + (zoneObject.width / 2);
                const npcY = zoneObject.y + (zoneObject.height / 2);
                this.npcs.create(npcX, npcY, zoneId, 0).setDisplaySize(80, 140).setDepth(5);
            }
            if (zoneId.startsWith('door')){
                const npcX = zoneObject.x + (zoneObject.width / 2);
                const npcY = zoneObject.y + (zoneObject.height / 2);
                this.npcs.create(npcX, npcY, zoneId, 0).setDisplaySize(400, 400).setDepth(5);
            }
            // if (zoneId.startsWith('task')){
            //     const npcX = zoneObject.x + (zoneObject.width / 2);
            //     const npcY = zoneObject.y + (zoneObject.height / 2);
            //     this.npcs.create(npcX, npcY, 'butterfly', 0).setDisplaySize(40, 40).setDepth(5);
            // }
        });

        const playerStartX = Number(GAME_DATA.playerX) || 100;
        const playerStartY = Number(GAME_DATA.playerY) || mapHeight-150;
        this.player = this.physics.add.sprite(playerStartX, playerStartY, 'playeru', 0).setCollideWorldBounds(true).setDepth(5);
        this.physics.world.setBounds(0, 0, mapWidth, mapHeight);
        
        const foreground = this.add.image(0, 0, 'map_foreground').setOrigin(0).setDepth(10);
        
        this.cameras.main.startFollow(this.player).setBounds(0, 0, mapWidth, mapHeight);

        this.physics.add.collider(this.player, collisionLayer);
        this.physics.add.collider(this.player, this.npcs);
        this.physics.add.overlap(this.player, interactionZones, this.onOverlapStart, null, this);

        this.keys = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // UI Element Creation
        this.textBox = this.add.graphics().setScrollFactor(0).setDepth(20).setVisible(false);
        this.textObject = this.add.text(0, 0, '', {
            fontFamily: '"Press Start 2P"', fontSize: '16px', fill: '#000',
            wordWrap: { width: this.cameras.main.width - 60 }
        }).setScrollFactor(0).setDepth(21).setVisible(false);
        this.portrait = this.add.image(0, 0, 'npc1_portrait').setScrollFactor(0).setDepth(20).setVisible(false);
        this.choiceBox = this.add.graphics().setScrollFactor(0).setDepth(30).setVisible(false);

        if (!this.sys.game.device.os.desktop) {
            this.createMobileControls();
        }

        // IFrame setup
        this.challengeContainer = document.getElementById('challenge-container');
        this.challengeIframe = document.getElementById('challenge-iframe');
        window.addEventListener('message', (event) => {
            
                this.handleChallengeResult(event.data);
            
        });
        
        const walkCycleFrames = [1, 0, 3, 2];
        this.anims.create({ key: 'walk-down', frames: this.anims.generateFrameNumbers('player', { frames: walkCycleFrames }), frameRate: 8, repeat: -1 });
        this.anims.create({ key: 'walk-up', frames: this.anims.generateFrameNumbers('playeru', { frames: walkCycleFrames }), frameRate: 8, repeat: -1 });
        this.anims.create({ key: 'walk-left', frames: this.anims.generateFrameNumbers('playerl', { frames: walkCycleFrames }), frameRate: 8, repeat: -1 });
        this.anims.create({ key: 'walk-right', frames: this.anims.generateFrameNumbers('playerr', { frames: walkCycleFrames }), frameRate: 8, repeat: -1 });
        this.saveTimer = this.time.addEvent({
                delay: 1000, // 1 seconds
                callback: this.saveGameData,
                callbackScope: this,
                loop: true
            });
        this.dbTimer = this.time.addEvent({
                delay: 5000, // 30 seconds
                callback: this.saveGameDB,
                callbackScope: this,
                loop: true
            });
    }
    saveGameDB(){
       if (!this.player) {
            
            return;
        }
        
        // Create a snapshot of the current game state
        //const logindata=JSON.parse(localStorage.getItem("logindata"));
        const currentGameState = {
            player: {
                x: Math.round(this.player.x),
                y: Math.round(this.player.y)
            },
            is_played:this.rida,
            tasksCompleted: this.tasksCompleted,
            samsaram: this.samsaram,
            cash: this.cash || 0,
            //lastlogin: "2023-07-17,14:30:00",
            //phone_number: logindata.user.phone_number,
            keyss: this.keyss
        };
        
        updatecashCounter();
        // Use our manager to send the data to the API
       gameDataManager.saveData(currentGameState);
    }
    saveGameData() {
 if (!this.player) {
            
            return;
        }
        
        // Create a snapshot of the current game state
        GAME_DATA.keys= this.keyss;
        GAME_DATA.rida= this.rida;
        GAME_DATA.cash= Number(this.cash);
            GAME_DATA.playerX= Math.round(this.player.x);
            GAME_DATA.playerY= Math.round(this.player.y);
            GAME_DATA.npcs= this.samsaram;
            GAME_DATA.levels= this.tasksCompleted;
        updatecashCounter();
        updateKeyCounter();
        // Use our manager to send the data to the API
       //gameDataManager.saveData(currentGameState);
    }


    findProperty(properties, key) {
        if (!properties) return null;
        const prop = properties.find(p => p.name === key);
        return prop ? prop.value : null;
    }

    onOverlapStart(player, target) {
        this.activeTarget = target;
    }

    showTextBox(message, portraitKey) {
        this.isTextBoxOpen = true;
        this.isMoving=false;
        this.player.body.setVelocity(0, 0);
        this.player.body.velocity.normalize().scale(0);
        this.player.anims.stop();
        const padding = 20; const boxHeight = 150; const portraitSize = 120; const portraitPadding = 10;
        const boxWidth = this.cameras.main.width - (padding * 2);
        const lines = message.split('\n').length;
        const lineHeight = 22; // Approximate line height
        const dynamicHeight = Math.max(150, lines * lineHeight + 30);
        const boxY = this.cameras.main.height - dynamicHeight - padding;

        const textX = padding + 15;

        this.textBox.clear();
        this.textBox.fillStyle(0xFFFFFF, 0.9);
        //this.textBox.fillRoundedRect(padding, boxY, boxWidth, boxHeight, 10);
        this.textBox.lineStyle(4, 0x000000, 1);
        this.textBox.strokeRoundedRect(padding, boxY, boxWidth, boxHeight, 10);
        this.textBox.setVisible(true);
        if (portraitKey) {
            const portraitY = boxY - portraitPadding;
            this.portrait.setPosition(padding, portraitY).setOrigin(0, 1).setVisible(true).setTexture(portraitKey).setDisplaySize(portraitSize, portraitSize);
        }
        this.textBox.fillRoundedRect(padding, boxY, boxWidth, dynamicHeight, 10);
        this.textObject.setPosition(textX, boxY + 15).setWordWrapWidth(boxWidth - 30);
        this.textObject.setText(message).setPosition(textX, boxY + 15).setWordWrapWidth(boxWidth - 30).setVisible(true);
        
        const iframe= document.getElementById('challenge-iframe');
        iframe.blur();
    }

    hideTextBox() {
        this.isTextBoxOpen = false;
        this.textBox.setVisible(false);
            for (let i = 1; i <= 7; i++) {
  const key = `npc${i}_audio`;      // <-- use the exact same delimiter you used when you added the sound
  const s = this.sound.get(key);
  
  if (s) { s.stop(); }
}
for (let i = 1; i <= 7; i++) {
  const key = `npc${i}_audio2`;      // <-- use the exact same delimiter you used when you added the sound
  const s = this.sound.get(key);
  
  if (s) { s.stop(); }
}
this.sound.stopAll();
        this.sound.get(`music_overworld`).setVolume(audio.volume).play();

        this.textObject.setVisible(false);
        this.portrait.setVisible(false);
        this.activeTarget = null;
    }
    
    showChoiceBox(options) {
        this.player.body.setVelocity(0, 0);
        this.player.body.velocity.normalize().scale(0);
        this.player.anims.stop();
        this.isChoiceBoxOpen = true;
        this.isMoving=false;
        this.selectedChoice = 0;
        this.choiceOptions = [];
        const boxWidth = 250; const boxHeight = 40 + (options.length * 40);
        const boxX = this.cameras.main.width - boxWidth - 20;
        const boxY = this.cameras.main.height - boxHeight - 20;
        this.choiceBox.clear();
        this.choiceBox.fillStyle(0x000000, 0.8);
        this.choiceBox.fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 10);
        this.choiceBox.setVisible(true);
        options.forEach((option, index) => {
            const textY = boxY + 30 + (index * 40);
            const text = this.add.text(boxX + boxWidth / 2, textY, option, {
                fontFamily: '"Press Start 2P"', fontSize: '16px', fill: '#FFF'
            }).setOrigin(0.5).setScrollFactor(0).setDepth(31).setInteractive();
            text.on('pointerover', () => { this.selectedChoice = index; this.updateChoiceSelection(); });
            text.on('pointerdown', () => this.confirmChoice());
            this.choiceOptions.push(text);
        });
        this.updateChoiceSelection();
    }

    hideChoiceBox() {
        this.isChoiceBoxOpen = false;
        this.choiceBox.setVisible(false).clear();
        this.choiceOptions.forEach(option => option.destroy());
        this.choiceOptions = [];
        this.activeTarget = null;
    }

    updateChoiceSelection() {
        if (this.choiceOptions.length === 0) return;
        this.choiceBox.lineStyle(); // Reset line style
        this.choiceBox.clear();
        const bg = this.choiceBox.geom;
        if(bg) { // safety check
            this.choiceBox.fillStyle(0x000000, 0.8);
            this.choiceBox.fillRoundedRect(bg.x, bg.y, bg.width, bg.height, 10);
        }
        const selectedOption = this.choiceOptions[this.selectedChoice];
        this.choiceBox.lineStyle(4, 0xFFFFFF, 1);
        //console.log(selectedOption.y);
        this.choiceBox.strokeRect(575 - 110, ((this.selectedChoice>0)?650:610 )- 18, 220, 36);
    }

    changeChoice(direction) {
        this.selectedChoice += direction;
        if (this.selectedChoice < 0) this.selectedChoice = this.choiceOptions.length - 1;
        else if (this.selectedChoice >= this.choiceOptions.length) this.selectedChoice = 0;
        this.updateChoiceSelection();
    }

   confirmChoice() {
        const taskId = this.activeTarget.getData('message');
        const selection = this.selectedChoice;
        this.hideChoiceBox(); // This also clears activeTarget
        if (selection === 0) { // Player chose "Start challenge"
            this.currentTask = taskId; // Remember which task we are doing
            // Check if the task has already been completed
            if (this.tasksCompleted[taskId]) {
                this.showTextBox("You have already completed this challenge!");
                return;
            }
            let challengeUrl = '';
            switch (taskId) {
                case 'task1': challengeUrl = "../templates/mini4.html"; break;
                case 'task2': challengeUrl = "../templates/unlock.html"; break;
                case 'task3': challengeUrl = "../templates/square.html"; break;
                case 'task4': challengeUrl = "../templates/cam.html"; break;
                case 'task5': challengeUrl = "../templates/shoot.html"; break;
                case 'task6': challengeUrl = "../templates/flappy-bird.html"; break;
                default:
                    this.showTextBox("Error: This challenge is not set up correctly.");
                    return;
            }
            
            this.challengeIframe.src = challengeUrl;
            this.challengeContainer.style.display = 'block';
            document.getElementById("all").style.display="none";
        } 
    }

handleChallengeResult(data) {
        
        this.challengeContainer.style.display = 'none';
        this.challengeIframe.src = '';
        let reward=data.score.toString();
        const taskId = this.currentTask;
        document.getElementById("all").style.display="flex";
        if (data.challengeStatus === 'completed') {
            this.showTextBox("Success! You have completed the challenge.");
            if (!this.tasksCompleted[taskId])
            {
                if (taskId && this.tasksCompleted.hasOwnProperty(taskId)) {
                    this.tasksCompleted[taskId] = true;
                    this.keyss++;
                    document.getElementById('keys').innerText=`${this.keyss}/6`;
                    const comic= document.getElementById('loading');
                    const loadingScreen = document.getElementById('loading-screen');
                    const gameContainer = document.getElementById('game-container');
                    if(Number(this.keyss)>0 && !(Number(this.keyss)%2))
                    {loadingScreen.style.display = 'block';
                    gameContainer.style.visibility = 'visible';
                    comic.src="/spin3";
                    document.getElementById("keyCounter").style.display="none";
                    }
                    
                }
            }

        } else if (data.challengeStatus === 'failed') {
            this.showTextBox("So close! Why not give it another try?");
        }
        else if (data.challengeStatus === 'bcomic') {
            this.bcomic();
        }
        else if (data.challengeStatus === 'ridacompleted') {
            this.brida();
        }
        else if (data.challengeStatus === 'btrailer') {
            this.btrailer();
        }
        else if (data.challengeStatus === 'bspin') {
            this.bcomic();
                this.showTextBox(`You Won: ${reward}`);
                let num = parseInt(reward.replace(/[^0-9]/g, ''));
                this.cash=Number(this.cash)+Number(num);
                this.saveGameData;
        }
        else {
            this.showTextBox("You left the challenge early.");
        }
        this.saveGameData;
        this.currentTask = null;
    }



    update() {
        // --- State Checks (Highest Priority) ---
        if (this.challengeContainer.style.display === 'block') {
            if (this.footstepSound.isPlaying) this.footstepSound.stop();
            this.wasMoving = false;
            return;
        }

        if (this.isChoiceBoxOpen) {
            let dx = 0;
            let dy = 0;

        // Check Joystick Input First
        if (this.joystick && this.joystick.force > 0) {
            // Use joystick direction vectors which are already normalized (-1 to 1)
            dx = this.joystick.forceX;  // normalized -1 to 1
            dy = this.joystick.forceY;
            
            //this.changeChoice((dx*dy)>0?-1:1);
            this.changeChoice((-dy)||1);
        }
            if (Phaser.Input.Keyboard.JustDown(this.keys.W)) this.changeChoice(-1);
            else if (Phaser.Input.Keyboard.JustDown(this.keys.S)) this.changeChoice(1);
            else if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) this.confirmChoice();
            return;
        }

        if (this.isTextBoxOpen) {
            if (this.footstepSound.isPlaying) this.footstepSound.stop();
            this.wasMoving = false;
            if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) this.hideTextBox();
            return;
        }

        // --- Handle Interaction Button Press ---
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.handleInteraction();
            return;
        }
        
        // --- Free Roam Logic Starts Here ---
        if (this.activeTarget && !this.physics.overlap(this.player, this.activeTarget)) {
            this.activeTarget = null;
        }
        
        // --- CONSOLIDATED MOVEMENT LOGIC (THE ONLY ONE!) ---
        const playerSpeed = 200;
        let dx = 0;
        let dy = 0;

        // Check Joystick Input First
        if (this.joystick && this.joystick.force > 0) {
            // Use joystick direction vectors which are already normalized (-1 to 1)
            dx = this.joystick.forceX;  // normalized -1 to 1
            dy = this.joystick.forceY;
            
        } else {
            // Fallback to Keyboard Input
            if (this.keys.A.isDown) dx = -1;
            else if (this.keys.D.isDown) dx = 1;
            
            if (this.keys.W.isDown) dy = -1;
            else if (this.keys.S.isDown) dy = 1;
        }

        // Set Velocity based on direction
        this.player.body.setVelocity(dx * playerSpeed, dy * playerSpeed);
        this.player.body.velocity.normalize().scale(playerSpeed); // Normalize for consistent diagonal speed

        // --- Animation and Sound Logic ---
           const isMoving = dx !== 0 || dy !== 0;

        if (isMoving) {
            // This logic correctly prioritizes left/right animation over up/down
            if (this.joystick && this.joystick.force > 0)
            {
                let ang=this.joystick.angle;
                let dir="up";
                if (Math.abs(dx) > Math.abs(dy)) {
    // horizontal is stronger
                dir = dx < 0 ? 'left' : 'right';
            } else {
                // vertical is stronger (or exactly equal)
                dir = dy < 0 ? 'up' : 'down';
            }
                this.player.anims.play(`walk-${dir}`, true); this.lastDirection = dir;
            }
            else{

                if (dx < 0) { this.player.anims.play('walk-left', true); this.lastDirection = 'left'; } 
                else if (dx > 0) { this.player.anims.play('walk-right', true); this.lastDirection = 'right'; }
                else if (dy < 0) { this.player.anims.play('walk-up', true); this.lastDirection = 'up'; }
                else if (dy > 0) { this.player.anims.play('walk-down', true); this.lastDirection = 'down'; }
            }
        }

        if (isMoving && !this.wasMoving) {
            this.footstepSound.play();
        } else if (!isMoving && this.wasMoving) {
            this.footstepSound.stop();
            this.player.anims.stop();
            // Set idle frame
            switch (this.lastDirection) {
                case 'down': this.player.setFrame(0); break;
                case 'up': this.player.setFrame(0); break;
                case 'left': this.player.setFrame(1); break;
                case 'right': this.player.setFrame(3); break;
            }
        }
        this.wasMoving = isMoving;

    }
   createMobileControls() {
        
        
        this.joystick = this.plugins.get('rexVirtualJoystick').add(this, {
            x: 120,
            y: this.cameras.main.height - 120,
            radius: 80,
            base: this.add.circle(0, 0, 60, 0x888888, 0.5),
            thumb: this.add.circle(0, 0, 30, 0xcccccc, 0.7),
        }).setScrollFactor(0);

        const buttonX = this.cameras.main.width - 50;
        const buttonY = this.cameras.main.height - 220;
        this.actionButton = this.add.image(buttonX, buttonY, 'action_button')
            .setScrollFactor(0)
            .setDepth(40)
            .setAlpha(0.9)
            .setInteractive().setDisplaySize(80,80);
        
        this.actionButton.on('pointerdown', () => {
            this.handleInteraction();
        });
    }
handleInteraction() {
        // If a choice box is open, confirm the choice.
        if (this.isChoiceBoxOpen) {
            this.confirmChoice();
            return;
        }

        // If a textbox is open, close it.
        if (this.isTextBoxOpen) {
            this.hideTextBox();
            return;
        }

        // If there's an active target, interact with it.
        if (this.activeTarget) {
            const interactionType = this.activeTarget.getData('interactionType');
            const sfxKey = this.activeTarget.getData('sfxKey');
            const num = this.activeTarget.getData('taskno');
            const message = this.activeTarget.getData('message');
            const portraitKey = this.activeTarget.getData('portraitKey');
            const zoneId = this.activeTarget.getData('zoneId');
            const thug = this.activeTarget.getData('thug');
            //if (sfxKey) this.sound.play(sfxKey, { volume: 0.7 });
            if (interactionType === 'choice') {
                const npm=`npc${num}`;
                if(this.samsaram[npm])
                this.showChoiceBox(['Start challenge', 'Challenge later']);
                else
                this.showTextBox("Plz talk once with it's owner to play");
            }
            else if(interactionType === 'door')
                {
                    if(this.keyss<6)
                    {
                        this.showTextBox(message || "...", portraitKey);
                    }
                    else{
                        this.npcs.children.entries.forEach(child => {
                            if (child.texture.key === 'door') {
                                child.setVisible(false);
                            }
                        });
                        setTimeout(()=>{
                            
                            setTimeout(()=>{
                            this.gotounder();
                    },100);
                    },1000);
                        
                    }
                }          
            else {
               
                // Object.keys(this.samsaram).forEach(key => {
                // this.samsaram[key] = false;
                // });
                
                if (sfxKey=='sfx_npc_interact')
                {
                    this.sound.get(`music_overworld`).setVolume(audio.volume/10);
                if (this.samsaram.hasOwnProperty(zoneId)) {
                        if(this.samsaram[zoneId])
                        {
                            if (this.tasksCompleted[`task${zoneId[3]}`])
                            {
                                this.showTextBox("Ooh you found the key, Good luck in your journey",portraitKey);
                                if(zoneId==="npc3" || zoneId==="npc6")
                                this.sound.play(`female_voice`, { volume: 0.7 });
                                else
                                this.sound.play(`male_voice`, { volume: 0.7 });
                            }
                            else
                            {
                                this.sound.play(`${zoneId}_audio2`, { volume: 0.7 });
                                this.showTextBox( thug,portraitKey);
                            }
                        }
                    else{
                        
                        this.samsaram[zoneId]=true;
                        this.sound.play(`${zoneId}_audio`, { volume: 0.7 });
                        this.showTextBox(message || "...", portraitKey);
                    }
                }
                else{
                    this.sound.play(`${zoneId}_audio`, { volume: 0.7 });
                    this.showTextBox(message || "...", portraitKey);
                }
                }
                else{
                    const i = (Math.floor(Math.random()*100)%7);
                    this.showTextBox(message[i] || message);
                }
            }
        }
    }
    bgmuzic(v){
            this.sound.get('music_overworld').setVolume(v);
        }
// Inside your GameScene class
    gotounder() {
        
        
        // Prepare the data object to pass to the next scene.
        // This ensures the player's progress is carried over.
        const playerData = {
            tasksCompleted: this.tasksCompleted,
            samsaram: this.samsaram, // Using your variable name for npc interactions
            keyss: this.keyss
        };

        // Stop all sounds from the current scene to prevent them from
        // playing over the new scene's audio.
        this.sound.stopAll();

        // --- THE CORRECT WAY TO CHANGE SCENES ---
        // Start the new scene and pass the player's progress data to it.
        // Phaser will automatically shut down this scene and start the new one.
        this.scene.start('UndergroundScene', playerData);
    }

}


// =============================================================================
// --- NEW SCENE FOR THE SECOND MAP ---
// =============================================================================
class UndergroundScene extends Phaser.Scene {
   constructor() {
        super('UndergroundScene');

        // --- Properties required for this scene ---
        this.player = null;
        this.keys = null;
        this.spaceKey = null;
        this.activeTarget = null;
        
        // UI State Flags
        this.isTextBoxOpen = false;
        this.isChoiceBoxOpen = false; // Added for task choices
        
        // UI Elements
        this.textBox = null;
        this.textObject = null;
        this.choiceBox = null;
        this.choiceOptions = [];
        this.selectedChoice = 0;
        
        // Mobile Controls
        this.joystick = null;
        this.actionButton = null;
        
        // Task & IFrame Management
        this.challengeContainer = null;
        this.challengeIframe = null;
        this.currentTask = null; // To remember which task is active
        
        // Player state data passed from the previous scene
        this.playerData = {};
        this.holes={
            hole0:{
                x:1382,
                y:233
            },
            hole1:{
                x:2710,
                y:234
            },
            hole3:{
                x:2271,
                y:1383
            },
            hole2:{
                x:1825,
                y:1383
            }
        }
        this.chance=GAME_DATA.chance|| 0;
        this.isGuessed=GAME_DATA.isGuessed===true || GAME_DATA.isGuessed==="true";
    }

    init(data) {
        
        this.playerData = data;

    }


    // This scene loads its OWN assets
    preload() {
        
        
        // --- Create a simple loading text ---
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Entering to the depths...', {
            fontFamily: '"Press Start 2P"', fontSize: '24px', fill: '#ff0000'
        }).setOrigin(0.5);

        // --- Load ONLY the assets needed for THIS map ---
        this.load.image('goal', STATIC_PATHS.goal);
        this.load.image('map_background2', STATIC_PATHS.map_background2);
        this.load.image('map_foreground2', STATIC_PATHS.map_foreground2);
        this.load.image('collision_tiles2', STATIC_PATHS.collision_tiles2);
        this.load.tilemapTiledJSON('map_data2', STATIC_PATHS.map_data2);
        this.load.audio('music_overworld2', STATIC_PATHS.music_overworld2);
        this.load.audio('sfx_footstep2', STATIC_PATHS.sfx_footstep2);
        this.load.audio('sfx_npc_interact2', STATIC_PATHS.sfx_npc_interact2);
        this.load.audio('sfx_item_interact2', STATIC_PATHS.sfx_item_interact2);
        this.load.audio('sfx_task_interact2', STATIC_PATHS.sfx_task_interact2);
    }
     bcomic(){
         const loadingScreen = document.getElementById('loading-screen');
         const gameContainer = document.getElementById('game-container');
         document.getElementById("keyCounter").style.display="flex";
         const comic= document.getElementById('loading');
         comic.blur();
         // When everything is loaded, hide the loading screen...
         
         loadingScreen.style.display = 'none';
         gameContainer.style.visibility = 'visible';
         comic.src="../templates/loading.html";
         this.sound.play('music_overworld', { loop: true, volume: 1 });
        }
        bgmuzic(v){
            this.sound.get('music_overworld2').setVolume(v);
        }
    create() {
        document.getElementById("keyCounter").style.display="none";
        if(!this.isGuessed)
        document.getElementById("chanceCounter").style.display="flex";
        
        const itemMessages = {
            'task7':"task7", 'task8':"task8",
            'liya':[
  "Here lies Liya, trapped between the S and the M.",
  "Liya's final puzzle was herself.",
  "She clicked every tile — except the one that saved her.",
  "Rest in peace, Liya. She made the game too clever for mortals.",
  "She asked: 'How hard can 7 letters be?' Fate answered.",
  "Liya built the rules, but forgot how to win.",
  "One tile out of place... and Liya was out of existence."
], 
            'rida':[
  "Here lies Rida, her bones still searching for the final puzzle piece.",
  "Timed puzzles are fun, they said. Rida believed them.",
  "Rida's skeleton was last seen dragging a puzzle piece into place.",
  "She raced the clock — now only her bones remain.",
  "She beat the timer once. The second time — not so lucky.",
  "Rida said 'just drop it in place!' — and vanished.",
  "Here lies Rida. Too many pieces, too little peace."
], 
            'akshay':[
  "Here rests Akshay, forever tracing patterns into the void.",
  "He designed the pattern lock — but one wrong swipe sealed his fate.",
  "They say if you unlock it right, you hear his final sigh.",
  "The shapes were simple, the logic clear — yet something still snapped.",
  "He cracked the pattern. The pattern cracked him back.",
  "His puzzle made players think. Sadly, he thought too hard.",
  "Now he's stuck in a pattern — of haunting this cave eternally."
], 
            'hari':[
  "Here lies Harigovind, crushed between a bouncing bug and a falling brick.",
  "He fixed the ball physics at 3 AM. The ball never forgave him.",
  "Harigovind tried to code perfect collision… now he's part of one.",
  "He built a game of bouncing chaos — but it bounced out of the main levels.",
  "One bug, two crashes, and a brick that ended it all.",
  "His game didn't make the main cut — but his skeleton sure did.",
  "He gave his all to the bricks… now he's just another piece in the underground map."
],
            'goal':"goal",
            'hole1':'hole0',
            'hole2':'hole1',
            'hole3':'hole2',
            'hole4':'hole3'
        };
        this.sound.play('music_overworld2', { loop: true, volume: 1 });
        // Build the map using the newly loaded assets
        this.add.image(0, 0, 'map_background2').setOrigin(0);
        const map = this.make.tilemap({ key: 'map_data2' });
        const mapWidth = map.widthInPixels;
        const mapHeight = map.heightInPixels;

        const tileset = map.addTilesetImage('collision', 'collision_tiles2'); // The name in Tiled, then the key in Phaser
        const collisionLayer = map.createLayer('collision', tileset, 0, 0).setCollisionByExclusion([-1]).setVisible(true);

        const interactionZones = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        const zoneObjects = map.getObjectLayer('InteractionZones').objects;
        this.npcs = this.physics.add.group({ classType: Phaser.Physics.Arcade.Sprite, immovable: true });
        if (zoneObjects) {
            zoneObjects.forEach(zoneObject => {
                const idProp = zoneObject.properties ? zoneObject.properties.find(p => p.name === 'interaction_id') : null;
                const zoneId = idProp ? idProp.value : null;

                if (zoneId) {
                    const zone = interactionZones.create(zoneObject.x, zoneObject.y, zoneObject.width, zoneObject.height).setOrigin(0, 0);
                    let interactionType = zoneId.startsWith('task') ? 'choice' : zoneId.startsWith('hole')? 'holes': zoneId.startsWith('goal')? 'goal': 'message';
                    zone.setData('interactionType', interactionType);
                    zone.setData('message', itemMessages[zoneId] || `teleport`);
                }
                if (zoneId.startsWith('goal')){
                const npcX = zoneObject.x + (zoneObject.width / 2);
                const npcY = zoneObject.y + (zoneObject.height / 2);
                this.npcs.create(npcX, npcY, zoneId, 0).setDisplaySize(200, 200).setDepth(5);
                //console.log(this.npcs);
            }
            });
        }

        // Create the player at a specific starting point for this new map
        const playerStartX = -300;
        const playerStartY = 20;
        this.player = this.physics.add.sprite(playerStartX, playerStartY, 'player', 0).setCollideWorldBounds(true).setDepth(5).setDisplaySize(35,50);
        
        this.physics.world.setBounds(0, 0, mapWidth, mapHeight);
        this.cameras.main.startFollow(this.player).setBounds(0, 0, mapWidth, mapHeight);
        this.physics.add.collider(this.player, collisionLayer);
        this.physics.add.overlap(this.player, interactionZones, this.onOverlapStart, null, this);
        this.add.image(0, 0, 'map_foreground2').setOrigin(0).setDepth(10);

        // We can reuse the player animations since they were created in the previous scene
        this.keys = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        this.textBox = this.add.graphics().setScrollFactor(0).setDepth(20).setVisible(false);
        this.textObject = this.add.text(0, 0, '', { fontFamily: '"Press Start 2P"', fontSize: '16px', fill: '#FFFFFF', wordWrap: { width: this.cameras.main.width - 60 } }).setScrollFactor(0).setDepth(21).setVisible(false);
        
        // Create the choice box UI element
        this.choiceBox = this.add.graphics().setScrollFactor(0).setDepth(30).setVisible(false);
        
        // --- IFRAME SETUP ---
        this.challengeContainer = document.getElementById('challenge-container');
        this.challengeIframe = document.getElementById('challenge-iframe');
        // The window listener is global and was already added by GameScene, so we don't need to add it again.
        // However, we need our own function to handle the result.
        window.addEventListener('message', (event) => {
            if (this.scene.isActive() && event.data && event.data.challengeStatus) {
                this.handleChallengeResult(event.data);
            }
        });

        if (!this.sys.game.device.os.desktop) {
            this.createMobileControls();
        }
    }



 onOverlapStart(player, target) { this.activeTarget = target; }
    showTextBox(message) {
        this.isTextBoxOpen = true;
        this.player.body.setVelocity(0);
        this.player.anims.stop();

        const padding = 20; const boxHeight = 150;
        const boxY = this.cameras.main.height - boxHeight - padding;
        const boxWidth = this.cameras.main.width - (padding * 2);
        const textX = padding + 15;
        
        this.textBox.clear();
        this.textBox.fillStyle(0x111111, 0.9); // Dark theme for the cave
        this.textBox.fillRoundedRect(padding, boxY, boxWidth, boxHeight, 10);
        this.textBox.lineStyle(4, 0xeeeeee, 1);
        this.textBox.strokeRoundedRect(padding, boxY, boxWidth, boxHeight, 10);
        this.textBox.setVisible(true);

        this.textObject.setText(message).setPosition(textX, boxY + 15).setWordWrapWidth(boxWidth - 30).setVisible(true);
        const iframe= document.getElementById('challenge-iframe');
        iframe.blur();
    }

    hideTextBox() {
        this.isTextBoxOpen = false;
        this.textBox.setVisible(false);
        this.textObject.setVisible(false);
        this.activeTarget = null;
    }
    

     
    showChoiceBox(options) {
        this.isChoiceBoxOpen = true;
        this.selectedChoice = 0;
        this.choiceOptions = [];
        const boxWidth = 250; const boxHeight = 40 + (options.length * 40);
        const boxX = this.cameras.main.width - boxWidth - 20;
        const boxY = this.cameras.main.height - boxHeight - 20;
        this.choiceBox.clear();
        this.choiceBox.fillStyle(0x000000, 0.8).fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 10);
        this.choiceBox.setVisible(true);

        options.forEach((option, index) => {
            const textY = boxY + 30 + (index * 40);
            const text = this.add.text(boxX + boxWidth / 2, textY, option, { fontFamily: '"Press Start 2P"', fontSize: '16px', fill: '#FFF' })
                .setOrigin(0.5).setScrollFactor(0).setDepth(31).setInteractive();
            text.on('pointerover', () => { this.selectedChoice = index; this.updateChoiceSelection(); });
            text.on('pointerdown', () => this.confirmChoice());
            this.choiceOptions.push(text);
        });
        this.updateChoiceSelection();
    }
    
    hideChoiceBox() {
        this.isChoiceBoxOpen = false;
        this.choiceBox.setVisible(false).clear();
        this.choiceOptions.forEach(option => option.destroy());
        this.choiceOptions = [];
        this.activeTarget = null;
    }

    updateChoiceSelection() {
        if (this.choiceOptions.length === 0) return;
        this.choiceBox.clear();
        const bg = this.choiceBox.geom;
        if(bg) this.choiceBox.fillStyle(0x000000, 0.8).fillRoundedRect(bg.x, bg.y, bg.width, bg.height, 10);
        const selectedOption = this.choiceOptions[this.selectedChoice];
        //this.choiceBox.strokeRect(575 - 110, ((this.selectedChoice>0)?650:610 )- 18, 220, 36);
        this.choiceBox.lineStyle(4, 0xFFFFFF, 1).strokeRect(575 - 110, ((this.selectedChoice>0)?650:610 )- 18, 220, 36);
    }
    
    changeChoice(direction) {
        this.selectedChoice += direction;
        if (this.selectedChoice < 0) this.selectedChoice = this.choiceOptions.length - 1;
        else if (this.selectedChoice >= this.choiceOptions.length) this.selectedChoice = 0;
        this.updateChoiceSelection();
    }
     confirmChoice() {
        const taskId = this.activeTarget.getData('message');
        const selection = this.selectedChoice;
        this.hideChoiceBox();
        
        if (selection === 0) { // Player chose "View it"
            this.currentTask = taskId;
            let challengeUrl = '';
            // Define URLs for tasks in this scene
            switch (taskId) {
                case 'task7': challengeUrl = "../templates/hari.html"; break;
                case 'task8': challengeUrl = "../templates/trailer.html"; break;
                case 'goal': challengeUrl = "../templates/keypad.html"; break;
                default:
                    this.showTextBox("This challenge seems to be broken.");
                    return;
            }
            this.challengeIframe.src = challengeUrl;
            this.challengeContainer.style.display = 'block';
        } else {
            
        }
    }
    closeframe(){
        this.challengeContainer.style.display = 'none';
        this.challengeIframe.src = '';
    }
    handleChallengeResult(data) {
        if(data.challengeStatus==="bkeypad")
        {
            this.chance--;
            GAME_DATA.chance=Number(this.chance);
            updatechanceCounter();
            
                if(data.kittiyo)
                this.showTextBox("correct guess");
                else
                this.showTextBox("wrong guess");
                setgolbalamount();
                this.closeframe();
                //this.showTextBox("No More chance for you");
            
        }
        else{
            this.closeframe();
            this.showTextBox("You have returned from the fun game.");
            // Here you could update the main game state stored in this.playerData
            // e.g., if (data.challengeStatus === 'completed') { this.playerData.tasksCompleted[this.currentTask] = true; }
            this.currentTask = null;
        }
        
    }

    handleInteraction() {
        if (this.isTextBoxOpen) { this.hideTextBox(); return; }
        if (this.isChoiceBoxOpen) { this.confirmChoice(); return; }

        if (this.activeTarget) {
            const message = this.activeTarget.getData('message');
            const interactionType = this.activeTarget.getData('interactionType');
            if (interactionType === 'choice') {
                this.showChoiceBox(['View it', 'Go back']);
            }
            else if (interactionType === 'goal') {
                if(this.isGuessed)
                {
                    this.showTextBox("already you guessed the code");
                }
                else{

                    if(this.chance<1)
                        this.showTextBox("You have no more chances");
                    else
                    this.showChoiceBox(['Guess Code', 'Go back']);
                }
            }
            else if(interactionType==="holes")
            {
                const randomNumber = (Math.floor(Math.random()*100)%4);
                
                
                let goto=`hole${randomNumber}`;
                while(goto===message)
                    goto=`hole${(randomNumber+1)%4}`

                this.player.setVisible(false);
                setTimeout(()=>{
                    this.player.x=this.holes[goto].x;
                    this.player.y=this.holes[goto].y;
                    this.player.setVisible(true);
                },1000);
                // this.player.x=100;
                // this.player.y=100;
            }
            else
            {
                if (message === 'teleport') {

                    this.showTextBox("Going back to the Top...");
                    setTimeout(()=>{location.reload();},2000); 
                }
                else
                {const i = (Math.floor(Math.random()*100)%7);
                this.showTextBox(message[i] || message);}
            }
        }
    }

    
update() {
        // Freeze all actions if a textbox is open
        if (this.challengeContainer.style.display === 'block') return;

        if (this.isChoiceBoxOpen) {
             let dx = 0;
            let dy = 0;

        // Check Joystick Input First
        if (this.joystick && this.joystick.force > 0) {
            // Use joystick direction vectors which are already normalized (-1 to 1)
            dx = this.joystick.forceX;  // normalized -1 to 1
            dy = this.joystick.forceY;
            this.changeChoice((-dy)||1);
        }
            if (Phaser.Input.Keyboard.JustDown(this.keys.W)) this.changeChoice(-1);
            else if (Phaser.Input.Keyboard.JustDown(this.keys.S)) this.changeChoice(1);
            else if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) this.confirmChoice();
            return;
        }

        if (this.isTextBoxOpen) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) this.hideTextBox();
            return;
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.handleInteraction();
            return;
        }
       
        if (this.activeTarget && !this.physics.overlap(this.player, this.activeTarget)) {
            this.activeTarget = null;
        }
        
        // --- Movement Logic ---
        const playerSpeed = 200;
        let dx = 0;
        let dy = 0;

        // Check Joystick Input First
        if (this.joystick && this.joystick.force > 0) {
            // Use joystick direction vectors which are already normalized (-1 to 1)
            dx = this.joystick.forceX;  // normalized -1 to 1
            dy = this.joystick.forceY;
            
        } else {
            // Fallback to Keyboard Input
            if (this.keys.A.isDown) dx = -1;
            else if (this.keys.D.isDown) dx = 1;
            
            if (this.keys.W.isDown) dy = -1;
            else if (this.keys.S.isDown) dy = 1;
        }

        // Set Velocity based on direction
        this.player.body.setVelocity(dx * playerSpeed, dy * playerSpeed);
        this.player.body.velocity.normalize().scale(playerSpeed); // Normalize for consistent diagonal speed

        // --- Animation and Sound Logic ---
           const isMoving = dx !== 0 || dy !== 0;

        if (isMoving) {
            // This logic correctly prioritizes left/right animation over up/down
            if (this.joystick && this.joystick.force > 0)
            {
                let ang=this.joystick.angle;
                let dir="up";
                if (Math.abs(dx) > Math.abs(dy)) {
    // horizontal is stronger
                dir = dx < 0 ? 'left' : 'right';
            } else {
                // vertical is stronger (or exactly equal)
                dir = dy < 0 ? 'up' : 'down';
            }
                this.player.anims.play(`walk-${dir}`, true); this.lastDirection = dir;
            }
            else{

                if (dx < 0) { this.player.anims.play('walk-left', true); this.lastDirection = 'left'; } 
                else if (dx > 0) { this.player.anims.play('walk-right', true); this.lastDirection = 'right'; }
                else if (dy < 0) { this.player.anims.play('walk-up', true); this.lastDirection = 'up'; }
                else if (dy > 0) { this.player.anims.play('walk-down', true); this.lastDirection = 'down'; }
            }
        }

        if (isMoving && !this.wasMoving) {
           
        } else if (!isMoving && this.wasMoving) {
           
            this.player.anims.stop();
            // Set idle frame
            switch (this.lastDirection) {
                case 'down': this.player.setFrame(0); break;
                case 'up': this.player.setFrame(0); break;
                case 'left': this.player.setFrame(1); break;
                case 'right': this.player.setFrame(3); break;
            }
        }
        this.wasMoving = isMoving;
    }
 
    createMobileControls() {
        
        
        this.joystick = this.plugins.get('rexVirtualJoystick').add(this, {
            x: 120,
            y: this.cameras.main.height - 120,
            radius: 80,
            base: this.add.circle(0, 0, 60, 0x888888, 0.5),
            thumb: this.add.circle(0, 0, 30, 0xcccccc, 0.7),
        }).setScrollFactor(0);

        const buttonX = this.cameras.main.width - 100;
        const buttonY = this.cameras.main.height - 200;
        this.actionButton = this.add.image(buttonX, buttonY, 'action_button')
            .setScrollFactor(0)
            .setDepth(40)
            .setAlpha(0.7)
            .setInteractive().setDisplaySize(100,100);
        
        this.actionButton.on('pointerdown', () => {
            this.handleInteraction();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 720,
        height: 720,
    },
    parent: 'game-container',
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    plugins: {
        global: [{
            key: 'rexVirtualJoystick',
            plugin: rexvirtualjoystickplugin, 
            start: true
        }]
    },
     scene: [PreloaderScene,GameScene, UndergroundScene]
};
const game = new Phaser.Game(config);

 let audio = new Audio();
        const LSvol = localStorage.getItem("gamesound");
        if (LSvol==="M")
        audio.muted = true;
        else if(LSvol)
          audio.volume = LSvol;
        else
          audio.volume = 1.0;

        const volBtn = document.getElementById('volBtn');
        const volDisplay = document.getElementById('volDisplay');
        const volRange = document.getElementById('volRange');
        const volRangeWrapper = document.getElementById('volRangeWrapper');

        let volumeTimeout;

        
        function updateVolDisplay() {
            const volume = audio.muted ? 0 : Math.round(audio.volume * 100);
            volDisplay.textContent = audio.muted ? "Muted" : `${volume}%`;
            
            // Update button icon based on volume/mute state
            if (audio.muted || audio.volume === 0) {
                volBtn.textContent = "🔇";
                volRange.value = 0;
            } else if (audio.volume < 0.5) {
                volBtn.textContent = "🔉";
                volRange.value = Math.round(audio.volume * 100);
            } else {
                volBtn.textContent = "🔊";
                volRange.value = Math.round(audio.volume * 100);
            }
            
            volBtn.title=audio.muted?"unmuute":"mute";
            // grab the live scene
            game.sound.volume = audio.muted ? 0 : audio.volume;
            localStorage.setItem("gamesound",audio.muted ? "M" : audio.volume);

            
        }

        function showVolumeSlider() {
            clearTimeout(volumeTimeout);
            volRangeWrapper.classList.add('show');
        }

        function hideVolumeSlider() {
            volumeTimeout = setTimeout(() => {
                volRangeWrapper.classList.remove('show');
            }, 900);
        }

        // Volume button events - now handles both volume control and mute
        volBtn.addEventListener('mouseenter', showVolumeSlider);
        volBtn.addEventListener('mouseleave', hideVolumeSlider);
        volBtn.addEventListener('click', () => {
            // Toggle mute on click
            audio.muted = !audio.muted;
            //audio.volume=!audio.volume;
            updateVolDisplay();
        });

        // Volume slider events
        volRangeWrapper.addEventListener('mouseenter', () => {
            clearTimeout(volumeTimeout);
        });
        volRangeWrapper.addEventListener('mouseleave', hideVolumeSlider);

        volRange.addEventListener('input', function() {
            const newVolume = parseInt(this.value) / 100;
            audio.volume = newVolume;
            audio.muted = newVolume === 0;
            updateVolDisplay();
        });

        // Keyboard controls
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowUp' || e.key === '+') {
                e.preventDefault();
                const newVolume = Math.min(100, parseInt(volRange.value) + 5);
                volRange.value = newVolume;
                audio.volume = newVolume / 100;
                audio.muted = false;
                updateVolDisplay();
                showVolumeSlider();
                hideVolumeSlider();
            }
            if (e.key === 'ArrowDown' || e.key === '-') {
                e.preventDefault();
                const newVolume = Math.max(0, parseInt(volRange.value) - 5);
                volRange.value = newVolume;
                audio.volume = newVolume / 100;
                audio.muted = newVolume === 0;
                updateVolDisplay();
                showVolumeSlider();
                hideVolumeSlider();
            }
            if (e.key === 'm' || e.key === 'M') {
                e.preventDefault();
                volBtn.click();
            }
        });
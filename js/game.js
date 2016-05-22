var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var map;
var player;
var bus;
var reward;
var currentStation;
var goalStation;
var goalSprite;
var stationsPool;
var statusTextStyle = {font: 'bold 20px Arial', fill: '#000000', backgroundColor: '#f0f0f0'};
var statusText;
var infoTextStyle = {font: 'bold 24px Arial', fill: '#ffffff', align: 'center', boundsAlignH: 'center'};
var infoText;

function preload() {
    game.load.image('map', 'assets/Map.jpg');
    game.load.image('player', 'assets/Player.png');
    game.load.image('bus', 'assets/Bus.png');
    game.load.image('flag', 'assets/Flag.png');
    game.load.image('marker', 'assets/Marker.png');
    game.load.image('reward', 'assets/Reward.jpg');
}

function create() {
    //Set world size
    var image = game.cache.getImage('map');
    game.world.setBounds(0, 0, image.width, image.height);
    //Background map
    map = game.add.image(0, 0, 'map');

    //Reward Sprite
    reward = game.add.button(game.camera.width / 2, game.camera.height / 2, 'reward', restart, this);
    reward.fixedToCamera = true;
    reward.kill();
    //Goal Sprite
    goalSprite = game.add.image(0, 0, 'flag');
    goalSprite.anchor.set(0.2, 1.0);
    goalSprite.height = 32;
    goalSprite.width = 32;
    goalSprite.kill();
    //Movement Markers
    stationsPool = game.add.group();

    //Player sprite
    player = game.add.sprite(0, 0, 'player');
    player.anchor.set(0.5, 0.5);
    player.height = 32;
    player.width = 32;
    player.kill();
    //Bus sprite
    bus = game.add.sprite(0, 0, 'bus');
    bus.anchor.set(0.5, 0.5);
    bus.scale.setTo(0.05, 0.05);
    bus.kill();

    //Buttons for each station
    var button;
    for (var i = 0; i < stations.length; i++) {
        button = game.add.button(stations[i].x - 12, stations[i].y - 12, 'marker', onButtonPressed, this);
        button.height = 24;
        button.width = 24;
        button.station = stations[i];

        // Doesn't work
        // button.onInputOver.add(function () {
        //     game.stage.canvas.style.cursor = "pointer";
        // }); // Doesn't work
        // button.onInputOut.add(function () {
        //     game.stage.canvas.style.cursor = "default";
        // });

        // Doesn't work
        // button.inputEnabled = true;
        // button.input.useHandCursor = true;

        stations[i].button = button;
        stationsPool.add(button);
        button.kill();
    }

    statusText = game.add.text(25, 25, "", statusTextStyle);
    statusText.fixedToCamera = true;
    statusText.kill();

    infoText = game.add.text(game.camera.width / 2, 20, "", infoTextStyle);
    infoText.anchor.set(0.5, 0.0);
    infoText.fixedToCamera = true;
    infoText.setText("Felicidades, has encontrado la tarjeta del millon.\nAhora podras viajar gratis en el metro de Bogotá");
    infoText.kill();

    restart();
}

function update() {
    //Set mouse pointer when is over a station.
    var hover = false;
    stationsPool.forEachAlive(
        function (s) {
            //Check if mouse is inside a button area
            var rectangle = new Phaser.Rectangle(s.left, s.top, s.width, s.height);
            if (Phaser.Rectangle.contains(rectangle, game.input.x + game.camera.x, game.input.y + game.camera.y)) {
                hover = true;
            }
        });
    if (hover) {
        game.canvas.style.cursor = "pointer";
    } else {
        game.canvas.style.cursor = "default";
    }
}

function render() {

}

//Start a new game
function restart() {
    reward.kill();
    map.revive();
    player.revive();
    bus.kill();
    goalSprite.revive();
    statusText.revive();
    infoText.kill();

    game.camera.follow(player);

    //Start at random station
    currentStation = stations[game.rnd.integerInRange(0, stations.length - 1)];
    player.x = currentStation.x;
    player.y = currentStation.y;
    //And try to get to some other
    goalStation = stations[game.rnd.integerInRange(0, stations.length - 1)];
    goalSprite.x = goalStation.x;
    goalSprite.y = goalStation.y;

    updateText();
    updateStations();
}

//The player has reach the goal
function finish() {
    reward.revive();
    reward.bringToTop();
    map.kill();
    player.kill();
    bus.kill();
    goalSprite.kill();
    statusText.kill();
    infoText.revive();
    clearMarkers();

    //Reward animation
    reward.anchor.set(0.5, -1.5);
    this.game.add.tween(reward.anchor)
        .to(
            {y: 0.5},
            Phaser.Timer.SECOND * 2.5,
            Phaser.Easing.Elastic.Out,
            true
        );
}

//Move to clicked station
function onButtonPressed(button) {
    var targetStation = button.station;

    //Move to target if is connected
    if (areConnected(currentStation, targetStation)) {
        bus.revive();
        bus.position = player.position;
        game.camera.follow(bus);
        player.kill();
        updateText(true);
        clearMarkers();

        //Bus movement animation
        this.game.add.tween(bus)
            .to(
                {x: targetStation.x, y: targetStation.y},
                Phaser.Timer.SECOND,
                Phaser.Easing.Sinusoidal.InOut,
                true
            );

        //Return to player sprite when the bus reach the target
        game.time.events.add(Phaser.Timer.SECOND, moveToStation, this, targetStation);
    }
}

function moveToStation(targetStation) {
    currentStation = targetStation;
    updateText(false);
    updateStations();

    //Switch to player sprite again
    player.revive();
    player.position = bus.position;
    game.camera.follow(player);
    bus.kill();

    //Has reach the goal
    if (currentStation == goalStation) {
        finish.call(this);
    }
}

//Are these two stations connected?
function areConnected(station1, station2) {
    return station1.connected.indexOf(station2.name) != -1 && station2.connected.indexOf(station1.name) != -1
}

//Update status text
function updateText(movement) {
    if (movement)
        statusText.setText("En Movimiento\nObjetivo: " + goalStation.name);
    else
        statusText.setText(currentStation.name + "\nObjetivo: " + goalStation.name);
}

//Add markers for reachable stations
function updateStations() {
    for (var i = 0; i < stations.length; i++) {
        if (areConnected(currentStation, stations[i])) {
            stations[i].button.revive();
        } else {
            stations[i].button.kill();
        }
    }
}

//Remove the station's markers
function clearMarkers() {
    stationsPool.forEachAlive(
        function (s) {
            s.kill();
        });
}

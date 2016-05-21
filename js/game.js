var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var player;
var currentStation;
var goalStation;
var goalSprite;
var stationsPool;
var textStyle = {font: 'bold 16px Arial', fill: '#000000', backgroundColor: '#cccccc'};
var text;

function preload() {
    game.load.image('map', 'assets/Map.jpg');
    game.load.image('bus', 'assets/Bus.png');
    game.load.image('flag', 'assets/Flag.png');
    game.load.image('marker', 'assets/Marker.png');
    game.load.image('reward', 'assets/Winner.jpg');
}

function create() {
    //Set world size
    var image = game.cache.getImage('map');
    game.world.setBounds(0, 0, image.width, image.height);

    //Background map
    game.add.image(0, 0, 'map');
    //Goal Sprite
    goalSprite = game.add.image(0, 0, 'flag');
    goalSprite.anchor.set(0.2, 1.0);
    goalSprite.height = 32;
    goalSprite.width = 32;
    //Movement Markers
    stationsPool = game.add.group();

    //Player sprite
    player = game.add.sprite(0, 0, 'bus');
    player.scale.setTo(0.05, 0.05);
    player.anchor.set(0.5, 0.5);
    game.camera.follow(player);

    //Buttons for each station
    var button;
    for (var i = 0; i < stations.length; i++) {
        button = game.add.button(stations[i].x - 12, stations[i].y - 12, 'marker', onButtonPressed, this);
        button.height = 24;
        button.width = 24;
        button.station = stations[i];
        stations[i].button = button;
        stationsPool.add(button);
    }

    //Start at random station
    currentStation = stations[game.rnd.integerInRange(0, stations.length - 1)];
    player.x = currentStation.x;
    player.y = currentStation.y;
    //And try to get to some other
    goalStation = stations[game.rnd.integerInRange(0, stations.length - 1)];
    goalSprite.x = goalStation.x;
    goalSprite.y = goalStation.y;


    text = game.add.text(50, 50, "", textStyle);
    text.fixedToCamera = true;

    updateText();
    updateStations();
}

function update() {

}

function render() {

}
function onButtonPressed(button) {
    var targetStation;
    targetStation = button.station;

    //Move to target if is connected
    if (areConnected(currentStation, targetStation)) {
        currentStation = targetStation;
        updateText();
        updateStations();
        this.game.add.tween(player)
            .to(
                {x: targetStation.x, y: targetStation.y},
                1000,
                Phaser.Easing.Sinusoidal.InOut,
                true,
                0,
                0
            );
    }
}

function areConnected(station1, station2) {
    return station1.connected.indexOf(station2.name) != -1 && station2.connected.indexOf(station1.name) != -1
}

function updateText() {
    text.setText("Estacion Actual: " + currentStation.name + "\nObjetivo:               " + goalStation.name);
}

function updateStations() {
    stationsPool.forEachAlive(function (m) {
        m.kill();
    });
    for (var i = 0; i < stations.length; i++) {
        if (areConnected(currentStation, stations[i])) {
            stations[i].button.revive();
        }
    }
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var player;
var currentStation;

function preload() {
    game.load.image('map', 'assets/Map.jpg');
    game.load.image('bus', 'assets/Bus.png');
}

function create() {
    //Set world size
    var image = game.cache.getImage('map');
    game.world.setBounds(0, 0, image.width, image.height);

    //Background map
    game.add.image(0, 0, 'map');

    //Player sprite
    player = game.add.sprite(0, 0, 'bus');
    player.scale.setTo(0.05, 0.05);
    player.anchor.set(0.5, 0.5);
    game.camera.follow(player);

    //Buttons for each station
    var button;
    for (var i = 0; i < stations.length; i++) {
        button = game.add.button(stations[i].x - 10, stations[i].y - 10, null, onButtonPressed, this);
        button.height = 20;
        button.width = 20;
        button.station = stations[i];
        stations[i].button = button;
    }

    //Start at random station
    currentStation = stations[game.rnd.integerInRange(0, stations.length - 1)];
    player.x = currentStation.x;
    player.y = currentStation.y;
}

function update() {

}

function render() {

}
function onButtonPressed(button) {
    var targetStation;
    targetStation = button.station;

    //Move to target if is connected
    if (currentStation.connected.indexOf(targetStation.name) != -1) {
        currentStation = targetStation;
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

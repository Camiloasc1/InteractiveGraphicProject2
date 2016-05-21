var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var player;

function preload() {
    game.load.image('map', 'assets/Map.jpg');
    game.load.image('bus', 'assets/Bus.png');
}

function create() {
    game.add.image(0, 0, 'map');
    player = game.add.sprite(0, 0, 'bus');
    player.scale.setTo(0.05, 0.05);
    player.anchor.set(0.5, 0.5);
    var image = game.cache.getImage('map');
    game.world.setBounds(0, 0, image.width, image.height);
    game.camera.follow(player);
    var button;
    for (var i = 0; i < stations.length; i++) {
        button = game.add.button(stations[i].x - 10, stations[i].y - 10, null, onButtonPressed, this);
        button.height = 20;
        button.width = 20;
    }
}

function update() {

}

function render() {

}

function onButtonPressed(button) {
    this.game.add.tween(player)
        .to(
            {x: button.x + 10, y: button.y + 10},
            1000,
            Phaser.Easing.Sinusoidal.InOut,
            true,
            0,
            0
        );
}
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    game.load.image('map', 'assets/Map.jpg');
}

function create() {
    game.add.image(0, 0, 'map');
    game.world.setBounds(0, 0, 1505, 983);
    //game.camera.setPosition(500, 500);
}

function update() {

}

function render() {

}
window.onload = function () {

    var states = {
        preload: preload,
        create: create
    }
    
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', states);
    
    function preload() {
        game.load.image('logo', '../assets/Phaser.png')
    }

    function create() {
        game.add.sprite(0,0)
    }
}
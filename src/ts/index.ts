/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />
import Player from './models/player'

let player = new Player(`John`, `Cheesman`);
let game = new Phaser.Game();

console.log(player, player.fullName);

module.exports.loop = function () {
    var msg = "Step reacher"
    for ( var r in Game.rooms ) {
        var room = Game.rooms[r];
        msg += "\n" + "r\t" + r + "\t\t" + "room\t" + room;
        for ( var s in room.spawns ) {
            var spawn = room.spawns[s];
            msg += "\n\ts\t" + s + "\t\t" + "spawn\t" + spawn;
        }

    }
    console.log( msg );
}
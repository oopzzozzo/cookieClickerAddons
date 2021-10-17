backups = {}
Game.registerMod("backup",{
	init:function(){
		Game.Notify("Backup Mod loaded","","", 1);
		addEventListener("keydown", function(event) {
      if (!event.altKey || event.key < "0" || event.key > "9")
        return
      if (event.shiftKey)
        Game.LoadSave(backups[event.keyCode])
      else
        backups[event.keyCode] = Game.WriteSave(1)
  		});
	},
	save:function(){
	},
	load:function(str){
	},
});

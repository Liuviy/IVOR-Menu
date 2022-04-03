
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//By: Andr3w246,@IVOR_Real
print('Loaded');

ModPE.langEdit('menu.copyright','§b§l§IVOR MENU'); 

var Volume= 1
var playSounds= 1
var name= " "
var sounds= null

 function playMedia(m){
 	if  (playSounds){
      if (sounds==null){
 		   try{
 		    	sounds = new android.media.MediaPlayer;
 		    	sounds.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/"+m);
  		    	sounds.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/Download/"+m);
   		    	sounds.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/IVOR Menu/"+m);
 		    	sounds.prepare();
 		       sounds.setLooping(true);
 	    		sounds.setVolume(Volume, Volume);
 	    		sounds.start();
 	    	}catch (e){
 	    		clientMessage(ChatColor.RED+"Failed to play music due to the following error:");
             clientMessage(e);
 		    	clientMessage(ChatColor.RED+"Make sure you entered the name correctly, that it is an mp3 file and that it is in the correct folder!");
             sounds= null
             name= " "
 	       }
    	}
     else if (sounds!=null){
        clientMessage(ChatColor.YELLOW+"You can only play one song at a time! To stop the song, type '//stop'!");
     }
   }
 }

function chatHook(command){
   var cmd = command.split(" ");
   if (cmd[0]=="//play"){
      if (cmd[1]!=null){
         if (playSounds==1){

                	clientMessage(ChatColor.GREEN+"Music: '"+cmd[1]+".mp3'!");
            playMedia(cmd[1]+".mp3");
            name= cmd[1]
            }

      }
      if (cmd[1]==null){

         clientMessage(ChatColor.RED+"Error: you must enter the file name (Without mp3)!");
      
   }
 }
     if(cmd[0] == '//google') 
           {      
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://www.google.com/search?q=' + cmd[1]);
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }
        if(cmd[0] == '//game')
        {1
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://minesweeper.online/ru/');
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
    if(cmd[0] == '//file')
        {1
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('file:///sdcard/');
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
    if(cmd == "//info") {
    	print("Retrieving Server Information...");
    	clientMessage("§b[IVOR Menu] §lServer Info");
        clientMessage("§b[IVOR Menu] §4§lIP - " + Server.getAddress());
        clientMessage("§b[IVOR Menu] §a§lPort - " + Server.getPort());
        clientMessage("§b[IVOR Menu] §e§lBiome - " + Level.getBiomeName());
        clientMessage("§b[IVOR Menu] §e§lDifficulty - " + Level.getDifficulty());
        clientMessage("§b[IVOR Menu] §e§lServer Time - " + Level.getTime());
        clientMessage("§b[IVOR Menu] §c§lWorld Name - " + Level.getWorldName());
        clientMessage("§b[IVOR Menu] §e§lBiome ID - " + Level.getBiome());
        clientMessage("§b[IVOR Menu] §c§lData - " + Level.getData());
        clientMessage("§b[IVOR Menu] §e§lXYZ - " + Player.getX() + " " +  Player.getY() + " " +  Player.getZ());
        clientMessage("§b[IVOR Menu] §c§lWorld location - §4Error #1");
		clientMessage("§b[IVOR Menu] §6§lEntity - " + Entity.getAll());
		clientMessage("§b[IVOR Menu] §6§lPlayers - " + Server.getAllPlayers());
		//clientMessage("§b[IVOR Menu] §eBrightness - " +// Level.getBrightness());
		clientMessage("§b[IVOR Menu] §aYour Nick on the server §r- " + Player.getName(Player.getEntity()));
		clientMessage("§b[IVOR Menu] §o§lThe script does not guarantee complete accurate information");
}
    if(cmd[0] == "//cinfo") {
    	Server.sendChat("!Server Info -> Ip - " + Server.getAddress() + "; Port - " + Server.getPort() + "; Biome - " + Level.getBiomeName() + "; Difficulty - " + Level.getDifficulty() + " ; Server Time - " + Level.getTime() + "; World Name - " + Level.getWorldName() + "; Biome iD - " + Level.getBiome() + "; Data - " + Level.getData() + "; XYZ - " + Player.getX() + " " + Player.getY() + " " + Player.getZ() + "; Entity - " + Entity.getAll() + "; Players - " + Server.getAllPlayers() + "; Bot - " + Player.getName(Player.getEntity()) + "");

		}
		    if(cmd[0] == "//winfo") {
		Server.sendChat("/tell " + cmd[1] + " Server Info -> Ip - " + Server.getAddress() + "; Port - " + Server.getPort() + "; Biome - " + Level.getBiomeName() + "; Difficulty - " + Level.getDifficulty() + " ; Server Time - " + Level.getTime() + "; World Name - " + Level.getWorldName() + "; Biome iD - " + Level.getBiome() + "; Data - " + Level.getData() + "; XYZ - " + Player.getX() + " " + Player.getY() + " " + Player.getZ() + "; Entity - " + Entity.getAll() + "; Players - " + Server.getAllPlayers() + "; Bot - " + Player.getName(Player.getEntity()) + "");

		}
if(cmd == "//test") {
Player.addItemInventory(175, 1, 6); 
Player.addItemInventory(162, 1, 15); 
Player.addItemInventory(105, 1, 0); 
clientMessage("§b[IVOR Menu] §e§lIssued Items for errors TallGrass.php , Wood2.php , MelonStem.php");
clientMessage("§b[IVOR Menu] §e§lVulnerability check core...");
}

if(cmd == "//color") {
	clientMessage("§b===[Color Info]===");
	clientMessage("§e[IVOR Menu]§e§l All colors in SIAT have their own meaning (only in //info)");
	clientMessage("§e[IVOR Menu]§e§l colored prefixes and titles don't matter color");
	clientMessage("§e[IVOR Menu]§4§l Color Dark Red - Hidden information that can harm the server");
	clientMessage("§e[IVOR Menu]§c§l Color Light Red - Hidden Information that can and cannot harm the server");
	clientMessage("§e[IVOR Menu]§e§l Color Yellow -  Hidden Information that cannot harm the server");
	clientMessage("§e[IVOR Menu]§a§l Light Green - Not hidden information that in no way can harm the server");
	clientMessage("§e[IVOR Menu]§6§l Color Orange - Between the colors §eYellow§6 And §cLight Red§6");
	}
	if(cmd == "//about") {
	clientMessage("§b[IVOR Menu] Scripts loaded: SIAT, Google, IMusic, IGames");
	clientMessage("§b[IVOR Menu] VERSION - 2.0.0 Release");
	clientMessage("§b[IVOR Menu] Authors - @Ivor_Real, Andr3w246(Only IMUSIC)");
	}
	if(cmd == "//Tinfo") {
		clientMessage("§b[IVOR Menu]§e info -> pop-up message");
		print("[IVOR Menu]\nServer Info\nIp - " + Server.getAddress() + "\nPort - " + Server.getPort() + "\nBiome - " + Level.getBiomeName() + "\nDifficulty - " + Level.getDifficulty() + " \nServer Time - " + Level.getTime() + "\nWorld Name - " + Level.getWorldName() + "\nBiome iD - " + Level.getBiome() + "\nData - " + Level.getData() + "\nXYZ - " + Player.getX() + " " + Player.getY() + " " + Player.getZ() + "\nEntity - " + Entity.getAll() + "\nPlayers - " + Server.getAllPlayers() + "\nNickname - " + Player.getName(Player.getEntity()));
}
if(cmd[0] == "//help") {
	clientMessage("§e===[Help Menu]==="); 
	clientMessage("§eSelect Script to view its commands");
	clientMessage("§e//help SIAT - Help Menu Script Server Information And Test");
	clientMessage("§e//help IMUSIC - Help Menu Script IMUSIC");
	clientMessage("§e//help terminal - Terminal help");
	clientMessage("§e//google (use _ symbols instead of spaces) - Google Search")
clientMessage("§e//game - Sapper game");;
	clientMessage("§e//about - Details of the Script");

if(cmd[1] == "SIAT") {
	clientMessage("§e===[Help Menu §dSIAT§e]==="); 
	clientMessage("§e[IVOR Menu]§l //info - Shows information about the server");
	clientMessage("§e[IVOR Menu]§l //Tinfo - Shows information about the server as a pop-up message");
	clientMessage("§e[IVOR Menu]§l //test - Testing the server for known vulnerabilities");
	//clientMessage("§b§e[IVOR Menu]§l //spamtest - Checking the Server for Spam Protection");
	clientMessage("§e[IVOR Menu]§l //color - Shows what the colors mean in messages");
}
if(cmd[1] == "IMUSIC") {
	clientMessage("§e===[Help Menu §dIMusic§e]==="); 
	clientMessage("§e Music must be in a folder 'mojang.com'");
	clientMessage("§e//play (Music name without .mp3) - music playback");
clientMessage("§e//stop - Mute Music"); 
}
if(cmd[1] == "Terminal") {
	clientMessage("§e===[Help Menu §dTerminal§e]==="); 
	clientMessage("§e$show help - Auxiliary Parameters for the command $show");
	clientMessage("§e$additem - Добавляет Предмет к вам в инвентарь");
clientMessage("§e$addexp - Добавляет указанное количество опыта"); 
clientMessage ("§e$site - Открывает всплывающий браузер");
}}
    if(cmd == "//ip") {
    	clientMessage ("§b[IVOR Menu§b] §l§f§oIP Checking........");
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://google.com/search?q=' + Server.getAddress());
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
        if(cmd == "//myip") {
    	clientMessage ("§b[IVOR Menu] §l§f§oIP Checking........");
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://2ip.ru' + Server.getAddress());
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
if (cmd[0]=="$"){
      	clientMessage("$");
      }
      if(cmd[0]=="$help"){
      	clientMessage ("$show help - Показывает Данные\nadditem - Выдаёт предмет\naddexp - Выдаёт опыт\nsite - открывает сайт в игре\n\nTerminal v1.0");
      }
          if (cmd[0]=="$show"){
          	if(cmd[1]=="help"){
          	clientMessage ("Использование show (текст(внизу показаны))");
    clientMessage("Доступная Информация Для показа :\n ip , port , biome , XYZ , difficulty , time , nameuser , worldname ,\n entity , help , worldlocation ,\n hunger , score , allplayers , data , entity");
    }
if (cmd[1]=="ip"){
	clientMessage("\nIP server - " + Server.getAddress());
	clientMessage ("IP user - Shown on site");
		ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https:$2ip.ru');
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
    }
 if (cmd[1]=="port"){
      	clientMessage("\nPort - " + Server.getPort());
      clientMessage("Localhost Port - 8080");
      }
      if (cmd[1]=="biome"){
      	clientMessage("\nBiome Server/Local - " + Level.getBiomeName());
      clientMessage ("Biome Server/Local ID - " + Level.getBiome());
      }
      if (cmd[1]=="difficulty"){
      	clientMessage("\nDifficulty Server/Local - " + Level.getDifficulty());
      }
      if (cmd[1]=="time"){
      	clientMessage("\nServer/Local Time - " + Level.getTime());
      }
      if (cmd[1]=="worldname"){
      	clientMessage("\nWorld Name - " + Level.getWorldName());
      }
      if (cmd[1]=="nameuser"){
      	clientMessage("\nYour Nick on the server - " + Player.getName(Player.getEntity()));
      }
      if (cmd[1]=="XYZ"){
      	clientMessage("\nXYZ - " + Player.getX() + " " +  Player.getY() + " " +  Player.getZ());
      }
      if (cmd[1]=="data"){
      	clientMessage("\nUnknown Data - " + Level.getData());
      }
      if (cmd[1]=="worldlocation"){
clientMessage("\nworldlocation - server/Worlds/world");
	clientMessage("sdcard/games/com.mojang/minecraftWorlds/" + Level.getWorldName());
      }
      if (cmd[1]=="hunger"){
      var exhaustion = Player.getExhaustion();
    var hunger = Player.getHunger();
    var saturation = Player.getSaturation();
    
    exhaustion = ~~(exhaustion*1000)/1000;
    hunger = ~~(hunger*1000)/1000;
    saturation = ~~(saturation*1000)/1000;
    
    clientMessage("\nИстощение: " + exhaustion + "\nГолод: " + hunger + "\nНасыщение: " + saturation);
}
if (cmd[1]=="score"){
    clientMessage("\nОпыт: " + Player.getExp() + "\nУровень: " + Player.getLevel() + "\nСчет: " + Player.getScore());
    }
    if (cmd[1]=="entity"){
    	clientMessage ("\nEntity - " + Entity.getAll());
    clientMessage ("Players - " + Server.getAllPlayers());
    }
    if (cmd[1]=="allplayers"){
    	clientMessage ("\nИгроки - " + Server.getAllPlayerNames());
    }}
          if (cmd[0]=="$site"){
      	clientMessage("\nСайт " + cmd[1] + " открывается...");
		ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl(cmd[1]);
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }
      if (cmd[0]=="$additem"){
    Player.addItemInventory(cmd[1], cmd[2], cmd[3]);
      	clientMessage("\nВыдан предмет - " + item.getName(cmd[1], cmd[3]) + " В кол-ве - " + cmd[2]);
      clientMessage ("\nИспользование: additem (ID) (Кол-во) (Тип(Если не имеет ставьте 0)");
      }
            if (cmd[0]=="$addexp"){
      Player.addExp(cmd[1]);
      	clientMessage("\nВыдано " + cmd[1] + " Опыта");
      clientMessage ("\nИспользование: addexp (Кол-во)");
      }
      
   if (cmd[0]=="//stop") {

      sounds.stop();
      sounds= null
      name= " "
      clientMessage(ChatColor.GREEN+"The music has been stopped!");
   }
}

function leaveGame(){
   if (sounds!=null){
      sounds.stop();
      sounds= null
   }
}

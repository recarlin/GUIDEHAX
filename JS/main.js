// Russell Carlin
// MIU 1202
// Project 3
var types = {
        LoL:["Bruiser", "AP Carry", "AD Carry", "Support", "Jungle"],
        WoW:["Death Knight", "Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
        Skyrim:["Caster", "Melee", "Ranger", "Stealth", "Tank"],
        TQ: ["Earth", "Defense", "Dream", "Hunting", "Nature", "Rogue", "Spirit", "Storm", "Warfare"]
    };
$(document).ready(function(){
    $("#clickLoL").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
    });
    $("#clickWoW").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
    });
    $("#clickSky").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
    });
    $("#clickTQ").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
    });
    $("#clickMC").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
    });
    $("#game").change(function(){
        $.each(types, function(key, value) {   
        	$('#type')
        	.append($('<option>', { value : key })
        	.text(value)); 
});
		type.selectmenu("refresh");
    });
});

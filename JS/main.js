// Russell Carlin
// MIU 1202
// Project 3
var types = {
        LoL:["Bruiser", "AP Carry", "AD Carry", "Support", "Jungle"],
        WoW:["Death Knight", "Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
        Skyrim:["Caster", "Melee", "Ranger", "Stealth", "Tank"],
        MC: ["Redstone", "Builds", "Servers", "Textures", "Adventure"],
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
   
    $('select#game').change(function() {
    	var x= $('#game').val()
    	$('#type').find("option").remove()
        for(index in types[x]) {
        	$('#type').append('<option value="' + types[x][index] + '">' + types[x][index] + '</option>')
        };
    	$('#type').selectmenu('refresh', true);
    });
    
    $('#guideForm').validate({
    	invalidHandler: function(form, validator){},
    	submitHandler: function(){
    		alert("Guide saved!");
    		location.reload();
    	}
    });
});
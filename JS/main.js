// Russell Carlin
// MIU 1202
// Project 1
window.addEventListener("DOMContentLoaded", function () {
    var types = {
        LoL:["Bruiser", "AP Carry", "AD Carry", "Support", "Jungle"],
        WoW:["Death Knight", "Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
        Skyrim:["Caster", "Melee", "Ranger", "Stealth", "Tank"],
        TQ: ["Earth", "Defense", "Dream", "Hunting", "Nature", "Rogue", "Spirit", "Storm", "Warfare"]
    };
    function ge(id) {
        var se = document.getElementById(id);
        return se;
    };
    function toggle(x) {
        switch(x){
            case "on":
                ge("guide").style.display = "none";
                ge("clear").style.display = "inline-block";
                ge("show").style.display = "none";
                ge("addMore").style.display = "inline-block";
                ge("txt").innerHTML = "Here are all of your saved guides. Click the edit and delete buttons to change individual guides."
                break;
            case "off":
                ge("guide").style.display = "block";
                ge("clear").style.display = "inline-block";
                ge("show").style.display = "inline-block";
                ge("addMore").style.display = "none";
                ge("guides").style.display = "none";
                ge("txt").innerHTML = "Follow the steps below to create your very own guide."
                break;
            default:
        };
    };
    function gameSelect() {
        game = ge("game").value
        popType(game)
        function popType(x) {
            var gt = ge("type");
            gt.options.length = 0
            for(index in types[x]) {
                gt.options[gt.options.length] = new Option(types[x][index], types[x][index]);
            };
        };
    };
    function showCheck () {
        if (localStorage.length === 0) {
            var popAsk = confirm("There are no saved guides. Populate with filler?");
            if(popAsk) {
                addFiller();
                alert("Filler guides have been added.");
                showGuides();
            } else {
                alert("Filler guides not added.")
            };
        } else {
            showGuides();
        };
    };
    function addFiller() {
        for(var n in filler) {
            var id = Math.floor(Math.random()*100000000);
            localStorage.setItem(id, JSON.stringify(filler[n]));
        };
    };
    function showGuides() {     
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "guides");
        var makeList = document.createElement("ol");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        ge("guides").style.display = "block";
        for(i=0, l=localStorage.length; i<l; i++) {
            var makeli = document.createElement("li");
            var buttonsLi = document.createElement("li");
            buttonsLi.style.display = "inline-block";
            buttonsLi.style.textAlign = "center";
            makeList.appendChild(makeli);
            var key = localStorage.key(i)
            var value = localStorage.getItem(key);
            var rune = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeli.appendChild(makeSubList);
            makeSubList.style.listStyle = "none";
            makeSubList.style.textIndent = "-35px";
            buttonsLi.style.textIndent = "0px";
            for(var r in rune) {
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var runeSubText = rune[r][0] + ": " + rune[r][1];
                makeSubli.innerHTML = runeSubText;
                makeSubList.appendChild(buttonsLi);
            };
            createButtons(localStorage.key(i), buttonsLi);  
        };
        toggle("on");
    };
    function createButtons(key, buttonsLi) {
        var editButton = document.createElement("a");
        editButton.href = "#";
        editButton.key = key;
        editButton.setAttribute("id", "edit")
        var editTxt = "Edit guide";
        editButton.addEventListener("click", editGuide);
        editButton.innerHTML = editTxt;
        buttonsLi.appendChild(editButton);
        
        var deleteButton = document.createElement("a");
        deleteButton.href = "#";
        deleteButton.key = key;
        deleteButton.setAttribute("id", "del")
        var deleteTxt = "Delete guide";
        deleteButton.addEventListener("click", deleteGuide);
        deleteButton.innerHTML = deleteTxt;
        buttonsLi.appendChild(deleteButton);
        buttonsLi.style.margin = "0px 0px 10px 0px";
    };
    function clearGuides() {
        if(localStorage.length != 0) {
            var delAsk = confirm("Delete all your guides?");
            if(delAsk) {
                localStorage.clear();
                alert("Your guides have been deleted.")
                window.location.reload();
            } else {
                alert("Your guides have not been deleted.")
            };
        } else {
            alert("You have no guides saved.")
        };
    };
    function valiData(e) {
        e.preventDefault();
        var ga = ge("author"),
            gg = ge("game"),
            gc = ge("content"),
            el = ge("errorList");
            el.innerHTML = "";
            ge("a").style.color = "#333333";
            ge("b").style.color = "#333333";
            ge("c").style.color = "#333333";
        if (ga.value === "") {
            var authorError = "Please type in an author";
            ge("a").style.color = "#990000";
            errors.push(authorError);
        }
        if (gg.value === "default") {
            var gameError = "Please select a game";
            ge("b").style.color = "#990000";
            errors.push(gameError);
        }
        if (gc.value === "") {
            var contentError = "Please type in some content";
            ge("c").style.color = "#990000";
            errors.push(contentError);
        }
        if (errors.length === 0) {
            if (ge("add").value === "Save Edit") {
                localStorage.removeItem(currentKey);
                addGuide();
            } else {
                addGuide();
            };
        } else {
            showErrors();
        };
    };
    function addGuide() {
        var id = Math.floor(Math.random()*100000000);
        var guide = {};
            guide.author    = ["Author", ge("author").value]
            guide.game      = ["Game", ge("game").value];
            guide.type      = ["Type", ge("type").value];
            guide.content   = ["Content", ge("content").value];
        localStorage.setItem(id, JSON.stringify(guide))
        alert("Guide Saved!")
        document.location.reload();
    };
    function editGuide () {
        ge("nav").style.display = "none";
        var value = localStorage.getItem(this.key);
        var guide = JSON.parse(value);
        toggle("off");
        ge("author").value  = guide.author[1]
        ge("game").value    = guide.game[1]
        gameSelect();
        ge("type").value    = guide.type[1]
        ge("content").value = guide.content[1]
        ge("add").value     = "Save Edit";
        currentKey = (this.key)
    };
    function deleteGuide () {
        var ask = confirm("Delete this guide?");
        if (ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
        } else {
            alert("guide not deleted.")
        };
    };
    function showErrors() {
        var el = ge("errorList")
        for(i=0, l=errors.length; i<l; i++) {
            var newError = document.createElement("li");
            newError.innerHTML = errors[i];
            el.appendChild(newError);
        };
        errors = [];
    };
    function browse () {
    
    };
    var game = ge("game");
    game.addEventListener("change", gameSelect);
    var sg = ge("show");
    sg.addEventListener("click", showCheck);
    var cg = ge("clear");
    cg.addEventListener("click", clearGuides);
    var ag = ge("add");
    ag.addEventListener("click", valiData);
    var errors = [],
        currentKey;
});
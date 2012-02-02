// Russell Carlin
// MIU 1202
// Project 1
window.addEventListener("DOMContentLoaded", function () {
    var runes = {
        mark: ["Alacrity - 1.7% AS", "Desolation - 1.66 APen", "Destruction - 1 APen, .57 MPen", "Focus - .16% CD", "Force - .1 AP/lvl", "Fortitude - 3.47 HP", "Furor - 2.23% CritD", "Insight - .95 MPen", "Intellect - 5.91 MP", "Knowledge - 1.17 MP/lvl", "Malice - .93% CritC", "Might - .13 AD/lvl", "Potency - .59 AP", "Replenishment - .26 Mregen/5", "Resilience - .91 Armor", "Shielding - .07 MR/lvl", "Strength - .95 AD", "Vitality - .54 HP/lvl", "Warding - .97 MR"],
        seal: ["Alacrity - .76% AS", "Avarice - .25 G/10", "Clarity - .065 Mregen/5/lvl", "Defense - .15/lvl", "Endurance - .5% MHP", "Focus - .29% CD", "Force - .1 AP/lvl", "Fortitude - 5.35 HP", "Furor - .76% CritD", "Intellect - 6.89 MP", "Knowledge - 1.17 MP/lvl", "Lucidity - .064 Eregen/5/lvl", "Malice - .42% CritC", "Meditation - .63 Eregen/5", "Might - .06 AD/lvl", "Potency - .59 AP", "Regeneration - .11 Hregen/5/lvl", "Replenishment - .41 Mregen/5", "Resilience - 1.41 Armor", "Shielding - .1 MR/lvl", "Strength - .43 AD", "Vigor - .43 Hregen/5", "Vitality - 1.08 HP/lvl", "Warding - .74 MR"],
        glyph: ["Acumen - 2.2 Energy", "Alacrity - .64% AS", "Celerity - .05 CD/lvl", "Clarity - .055 Mregen/5/lvl", "Focus - .65% CD", "Force - .17 AP/lvl", "Fortitude - 2.67 HP", "Furor - .56% CritD", "Insight - .57 MPen", "Intellect - 11.25 MP", "Knowledge - 1.42 MP/lvl", "Malice - .28% CritC", "Might - .04 AD/lvl", "Potency - .99 AP", "Replenishment - .31 Mregen/5", "Resilience - .7 Armor", "Sapience - .161 Energy/lvl", "Shielding - .15 MR/lvl", "Strength - .28 AD", "Vigor - .27 Hregen/5", "Vitality - .54 HP/lvl", "Warding - 1.49 MR"],
        quint: ["Acumen - 5.4 Energy", "Alacrity - 3.4% AS", "Avarice - 1 G/10", "Celerity - .13 CD/lvl", "Clarity - .24 Mregen/5/lvl", "Defense - .38/lvl", "Desolation - 3.33 APen", "Destruction - 2 APen, 1.13 MPen",  "Endurance - 1.5% MHP", "Focus - 1.64% CD", "Force - .43 AP/lvl", "Fortitude - 26 HP", "Furor - 4.46% CritD", "Insight - 1.89 MPen", "Intellect - 37.5 MP", "Knowledge - 4.17 MP/lvl", "Malice - 1.86% CritC", "Meditation - 1.575 Eregen/5", "Might - .25 AD/lvl", "Potency - 4.95 AP", "Regeneration - .28 Hregen/5/lvl", "Replenishment - 1.25 Mregen/5", "Resilience - 4.26 Armor", "Revival - 5% Time Dead", "Shielding - .37 MR/lvl", "Strength - 2.25 AD", "Swiftness - 1.5% MS", "Transmutation - 2% SV", "Vampirism - 2% LS", "Vigor - 2.7 Hregen/5", "Vitality - 2.7 HP/lvl", "Warding - 4.5 MR", "Wisdom - 2% EXP"]
    };
    function ge(id) {
        var e = document.getElementById(id);
        return e;
    }
    function toggle(x) {
        switch(x){
            case "on":
                ge("runeForm").style.display = "none";
                ge("clear").style.display = "inline-block";
                ge("show").style.display = "none";
                ge("addMore").style.display = "inline-block";
                break;
            case "off":
                ge("runeForm").style.display = "block";
                ge("clear").style.display = "inline-block";
                ge("show").style.display = "inline-block";
                ge("addMore").style.display = "none";
                ge("runes").style.display = "none";
                break;
            default:
                return false;
        }
    }
    function gameSelect() {
        if(runeCat === "Mark"){
            popSelect(runes.mark);
            showPic("Mark");
        } else {
            if(runeCat === "Seal"){
                popSelect(runes.seal);
                showPic("Seal");
            } else {
                if(runeCat === "Glyph") {
                    popSelect(runes.glyph);
                    showPic("Glyph");
                } else {
                    if(runeCat === "Quintessence"){
                        popSelect(runes.quint);
                        showPic("Quintessence");
                    };
                };
            };
        };
        function popSelect(x) {
            var rs = ge("runeType");
            rs.options.length = 0
            for(index in x) {
                rs.options[rs.options.length] = new Option(x[index], x[index]);
            };
        };
        function showPic(x) {
            pic.setAttribute("src", "Images/" + x +".png");
        };
    };
    function showCheck () {
        if (localStorage.length === 0) {
            var popAsk = confirm("There are no saved runes. Populate with filler runes?");
            if(popAsk) {
                addFiller();
                showRunes();
                alert("Filler runes have been added.")
            } else {
                alert("Filler runes not added.")
            };
        } else {
            showRunes();
        };
    };
    function addFiller() {
        for(var n in filler) {
            var id = Math.floor(Math.random()*100000000);
            localStorage.setItem(id, JSON.stringify(filler[n]));
        };
    };
    function showRunes() {     
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "runes");
        var makeList = document.createElement("ol");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        ge("runes").style.display = "block";
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
            getImage(rune.cat[1], makeSubList);
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
        var editTxt = "Edit Rune Set";
        editButton.addEventListener("click", editRunes);
        editButton.innerHTML = editTxt;
        buttonsLi.appendChild(editButton);
        
        var deleteButton = document.createElement("a");
        deleteButton.href = "#";
        deleteButton.key = key;
        deleteButton.setAttribute("id", "del")
        var deleteTxt = "Delete Rune Set";
        deleteButton.addEventListener("click", deleteRunes);
        deleteButton.innerHTML = deleteTxt;
        buttonsLi.appendChild(deleteButton);
        buttonsLi.style.margin = "0px 0px 10px 0px";
    };
    function clearGuides() {
        if(localStorage.length === 0) {
            alert("You currently have no saved guides.")
        } else {
            localStorage.clear();
            alert("Cleared saved guides.")
            window.location.reload();
        };
    };
    function addGuide() {
        var id = Math.floor(Math.random()*100000000);
        var guide = {};
            guide.author    = ["Guide author", ge("author").value]
            guide.game      = ["Game", ge("type").value];
            guide.type      = ["Guide type", ge("type").value];
            guide.content   = ["Content", ge("content").value];
            guide.date      = ["Date Added", ge("date").value];
        localStorage.setItem(id, JSON.stringify(rune))
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
        ge("type").value    = guide.type[1]
        ge("content").value = guide.content[1]
        ge("date").value    = guide.date[1]
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
    function valiData(e) {
        var ga = ge("author"),
            ct = ge("content"),
            da = ge("date"),
            el = ge("errorList");
            el.innerHTML = "";
            ga.style.border = "1px solid black";
            ct.style.border = "1px solid black";
            da.style.border = "1px solid black";
        if (ga.value === "") {
            var titleError = "Please give a section title";
            ga.style.border = "2px solid red";
            errors.push(titleError);
        }
        if (ex.value === "") {
            var contentError = "Please give a rune explaination";
            ex.style.border = "2px solid red";
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
        e.preventDefault();
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
    var game = ge("runeCat");
    game.addEventListener("click", gameSelect);
    var sr = ge("show");
    sr.addEventListener("click", showCheck);
    var cg = ge("clear");
    cg.addEventListener("click", clearGuides);
    var ar = ge("add");
    ar.addEventListener("click", valiData);
    var errors = [],
        currentKey;
});
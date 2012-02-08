// Russell Carlin
// MIU 1202
// Project 1
$(document).ready(function(){
    $("#clear").bind("click", function(){
        if(localStorage.length != 0) {
            localStorage.clear();
            alert("Your guides have been deleted.")
            window.location.reload();
        } else {
            alert("You have no guides saved.")
        };
    }); 
    $("#goodBrowse").bind("pageshow", function(){     
        if (localStorage.length === 0){
            for(var n in filler) {
                var id = Math.floor(Math.random()*100000000);
                localStorage.setItem(id, JSON.stringify(filler[n]));
            };
        };
        var makeList = document.getElementById("guides")
        for(i=0, l=localStorage.length; i<l; i++) {
            var makeli = document.createElement("li"),
                makeA = document.createElement("a");
            makeA.setAttribute("href", "#details")
            makeList.appendChild(makeA);
            makeA.appendChild(makeli);
            var key = localStorage.key(i),
                value = localStorage.getItem(key),
                guide = JSON.parse(value),
                titleText = guide.game[1] + " - " + guide.title[1]
                makeSubList = document.createElement("ul");
            makeli.innerHTML = titleText;
            makeli.appendChild(makeSubList);
            makeSubList.style.listStyle = "none";
            for(var g in guide) {
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var guideSubText = guide[g][0] + ": " + guide[g][1];
                    makeSubli.innerHTML = guideSubText;
            };
        };
        $("#guides").listview("refresh");
    });
});

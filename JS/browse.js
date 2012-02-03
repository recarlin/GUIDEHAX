// Russell Carlin
// MIU 1202
// Project 1
window.addEventListener("DOMContentLoaded", function () {
    showGuides()
    function ge(id) {
        var se = document.getElementById(id);
        return se;
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
            makeList.appendChild(makeli);
            var key = localStorage.key(i)
            var value = localStorage.getItem(key);
            var guide = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeli.appendChild(makeSubList);
            makeSubList.style.listStyle = "none";
            makeSubList.style.textIndent = "-35px";
            for(var r in guide) {
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var guideSubText = guide[r][0] + ": " + guide[r][1];
                makeSubli.innerHTML = guideSubText;
            };
        };
    };
});
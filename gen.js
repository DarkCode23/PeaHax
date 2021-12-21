function gen() {
    var n = prompt("Enter a Number");
    console.log(n);
    for(var j = 0; j < n; j++) {
        let code = "";
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 18; i++) {
          code = code + letters.charAt(Math.floor(Math.random() * letters.length));
        }
        console.log("https://discord.gift/"+code);
        var node = document.createElement("LI");
        var textnode = document.createTextNode("https://discord.gift/"+code);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
}
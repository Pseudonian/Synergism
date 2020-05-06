function exportSynergism() {
    var string = localStorage.getItem("Synergysave2");
    document.getElementById('exporttext').textContent = string

    var text = document.getElementById('exporttext')
    text.select()
    document.execCommand("copy")

    document.getElementById("exportinfo").textContent = "Copied to clickboard! Paste it somewhere safe."
    document.getElementById("importinfo").textContent = ""
  }

function importSynergism() {
    const input = prompt("Got a save? Great! Just paste it below.");
    try {
        const data = JSON.parse(atob(input));
        if (data.exporttest === "YES!" && data.kongregatetest !== "YES!") {
            localStorage.setItem("Synergysave2", input);
            loadSynergy(true);
            document.getElementById("importinfo").textContent = "Successfully imported your savefile. Go nuts!"
        } else { //
            document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?"
        }
    } catch(err) {
        if(err instanceof SyntaxError) {
            const lzData = JSON.parse(LZString.decompressFromBase64(input));
            if(lzData) {
                localStorage.clear();
                console.log()
                localStorage.setItem('Synergysave2', btoa(JSON.stringify(lzData)));
                loadSynergy(true);
            }
        } else {
            document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?";
        }
    }

    document.getElementById("exportinfo").textContent = '';
    promocodes(input);
}

function promocodes(i) {
    const el = document.getElementById("importinfo");
    if(i == "synergism2020" && !player.offerpromo1used) {
        player.offerpromo1used = true; 
        player.runeshards += 25; 
        player.worlds += 50; 
        el.textContent = "Promo Code 'synergism2020' Applied! +25 Offerings, +50 Quarks"
    } else if (i == "synergism1004" && (player.version == "1.004") && player.offerpromo7used == false){
        player.offerpromo7used = true;
        player.worlds += 25;

        var p = 0
        if (player.transcendCount > 0.5 || player.reincarnationCount > 0.5) {p += 15}
        if (player.achievements[44] > 0.5) {p += 10}
        if (player.challengecompletions.three > 0.5) {p += 10}
        if (player.challengecompletions.five > 0.5) {p += 15}
        if (player.coinsTotal.greaterThanOrEqualTo("1e2500")) {p += 25}
        if (player.reincarnationCount > 0.5) {p += 25}
        if (player.challengecompletions.six > 0.5){p += 40}
        if (player.challengecompletions.seven > 0.5){p += 60}
        if (player.upgrades[67] > 0.5){p += 100}
        player.runeshards += p
        el.textContent = "Promo Code 'synergism1004' Applied! +25 Quarks, +" + p + " Offerings."
    }

    if(el.textContent.length) {
        // remove text after 5 seconds
        setTimeout(() => el.textContent = '', 3000);
    }
}
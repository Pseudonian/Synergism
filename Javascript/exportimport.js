/**
 * Copy the save file to clipboard (IE) or export it as a file (EVERYTHING else).
 */
function exportSynergism() {
    player.offlinetick = Date.now();
    saveSynergy();

    const saveElement = document.querySelector('.save');
    // https://stackoverflow.com/a/7690750
    if(!document.querySelector('#fileSave') && !('ActiveXObject' in window)) {
        /*** Button that handles exporting a save to a txt file */
        const button_file = document.createElement('button');
        button_file.style = 'position: static; margin-top: 5px; margin-left: 5px; width: 14%; height: 90%; font-size: 140%;';
        button_file.textContent = 'Save as File';
        button_file.id = 'fileSave';
        button_file.addEventListener('click', function() {
            const a = document.createElement('a');
            a.setAttribute('href', 'data:text/plain;charset=utf-8,' + localStorage.getItem('Synergysave2'));
            a.setAttribute('download', 'SynergismSave.txt');
            a.setAttribute('id', 'downloadSave');
            a.click();
        });

        saveElement.appendChild(button_file);
    }

    if(!document.querySelector('#copySave') || 'ActiveXObject' in window) {
        /*** Button that handles copying a save to clipboard */
        const button_copy = document.createElement('button');
        button_copy.style = 'position: static; margin-top: 5px; margin-left: 5px; width: 14%; height: 90%; font-size: 140%;';
        button_copy.textContent = 'Copy to Clipboard';
        button_copy.id = 'copySave';
        button_copy.addEventListener('click', function() {
            if('clipboardData' in window) { // Internet Explorer
                window.clipboardData.setData('Text', localStorage.getItem('Synergysave2'));
            } else if('clipboard' in navigator && 'writeText' in navigator.clipboard) {
                // https://www.w3.org/TR/clipboard-apis/#async-clipboard-api
                // the modern, recommended approach.
                navigator.clipboard.writeText(localStorage.getItem('Synergysave2')).then(function() {
                    alert('Copied save to Clipboard successfully!');
                }, function() {
                    alert('Failed to copy save to Clipboard!');
                });
            } else {
                const textarea = document.createElement("textarea");
                textarea.textContent = localStorage.getItem('Synergysave2');
                document.body.appendChild(textarea);
                textarea.select();
                try { document.execCommand('copy'); } catch(_) {}
                document.body.removeChild(textarea);
                alert('Copied save to Clipboard successfully! However I recommend updating your browser.');
            }
        });

        saveElement.appendChild(button_copy);
    }

    saveElement.style = 'display: block;';
}

function importSynergism() {
    const input = prompt("Got a save? Great! Just paste it below.");
    try {
        const lzData = LZString.decompressFromBase64(input);
        if(lzData && lzData.length) {
            localStorage.clear();
            localStorage.setItem('Synergysave2', btoa(lzData));
            loadSynergy();
        } else {
            const data = JSON.parse(atob(input));
            if (data.exporttest === "YES!" && data.kongregatetest !== "YES!") {
                localStorage.setItem("Synergysave2", input);
                loadSynergy();
                document.getElementById("importinfo").textContent = "Successfully imported your savefile. Go nuts!"
            } else { //
                document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?"
            }
        }
    } catch(_) {
        document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?";
    }

    document.getElementById("exportinfo").textContent = '';
}

function promocodes() {
    const input = prompt("Got a code? Great! Enter it in (CaSe SeNsItIvE).");
    const el = document.getElementById("promocodeinfo");
    if(input == "synergism2020" && !player.offerpromo1used) {
        player.offerpromo1used = true; 
        player.runeshards += 25; 
        player.worlds += 50; 
        el.textContent = "Promo Code 'synergism2020' Applied! +25 Offerings, +50 Quarks"
    } else if (input == "synergism1008" && (player.version == "1.008" || player.version == "1.0081" || player.version == "1.0082") && player.offerpromo13used == false){
        player.offerpromo13used = true;
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
        if (player.upgrades[71] > 0.5){p += 300}
        if (player.upgrades[75] > 0.5){p += 2500}
        player.runeshards += p
        el.textContent = "Promo Code 'synergism1008' Applied! +25 Quarks, +" + p + " Offerings."
    }
    else if (input == "transcendlol" && (player.version == "1.0081" || player.version == "1.0082") && player.offerpromo14used == false){
        player.offerpromo14used = true;
        player.worlds += 25;

        el.textContent = "Promo Code 'transcendlol' Applied! +25 Quarks."
    }
    else if (input == "111111hype" && (player.version == "1.0082") && player.offerpromo15used == false){
        player.offerpromo15used = true;
        player.worlds += 200;

        el.textContent = "Thank you for playing Synergism! I'm a bit late on the 100k celebration so here's the next best thing. +200 Quarks! [Oh and 111111hype applied!]"
    }
    else if (input == "oops" && (player.version == "1.0082") && player.offerpromo16used == false){
        player.offerpromo16used = true;
        player.worlds += 200;
        var p = 200
        if (player.brokenfile1 == true){
        player.worlds += 300
        p += 300
        }

        el.textContent = "Sorry for the balances, but it was necessary to prevent saves from breaking. Enjoy a nice reward! +" + p + " Quarks."
    } else {
        el.textContent = "I don't think you put that code in right, or your code is simply not valid. Try again!"
    }
        
    setTimeout(function() {
        el.textContent = ''
    }, 15000);
}
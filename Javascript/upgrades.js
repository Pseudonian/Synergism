const upgradetexts = [
    null,
    function() { return "Worker Production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2) },
    function() { return "Investment Production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2)},
    function() { return "Printer Production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2) },
    function() { return "Mint Production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2) },
    function() { return "Alchemy Production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2) },
    function() { return "All Coin production x" + format((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),2) },
    function() { return "Gain " + Math.min(4, 1 + Math.floor(Decimal.log(player.fifthOwnedCoin + 1, 10))) + " free multipliers from bought Alchemies." },
    function() { return "+" +Math.floor(player.multiplierBought/7) + " free Accelerators." },
    function() { return "+" + Math.floor(player.acceleratorBought/10) + " free Multipliers." },
    function() { return "Worker Production x" + format(Decimal.pow(2, Math.min(50, player.secondOwnedCoin/15)),2) },
    function() { return "Generator efficiency x" + format(Decimal.pow(1.02, freeAccelerator),2)},
    function() { return "All Coin production x" + format(Decimal.min(1e4, Decimal.pow(1.01, player.prestigeCount)), 2) },
    function() { return "Investment Production x" + format(Decimal.min(1e50, Decimal.pow(player.firstGeneratedMythos.add(player.firstOwnedMythos).add(1), 4/3).times(1e10)),2)},
    function() { return "Printer Generation x" +format(Decimal.pow(1.15, freeAccelerator),2)},
    function() { return "Mint Generation x" +format(Decimal.pow(1.15, freeAccelerator),2)},
    function() { return "Gain " + format(Decimal.pow(acceleratorEffect, 1/3),2) + "x more Diamonds on prestige"},
    function() { return "Mint Production x1e100 (Duh)"},
    function() { return "Printer Prodction x" + format(Decimal.min(1e125, player.transcendShards.add(1)))},
    function() { return "Investment Production x" + format(Decimal.min(1e200, player.transcendPoints.times(1e30).add(1)))},
    function() { return "All coin production is further multiplied by " + format(Decimal.pow((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)),10),2) + " [Stacks with upgrade 1]!"},
    function() { return "+" + format(Math.floor((1 + (1/101 * freeMultiplier)))) + " Multipliers, +" + format(Math.floor((5 + (1/101 * freeAccelerator)))) + " Accelerators."},
    function() { return "+" + format(Math.floor((1 + (1/101 * freeMultiplier)))) + " Multipliers, +" + format(Math.floor((4 + (1/101 * freeAccelerator)))) + " Accelerators."},
    function() { return "+" + format(Math.floor((1 + (1/101 * freeMultiplier)))) + " Multipliers, +" + format(Math.floor((3 + (1/101 * freeAccelerator)))) + " Accelerators."},
    function() { return "+" + format(Math.floor((1 + (1/101 * freeMultiplier)))) + " Multipliers, +" + format(Math.floor((2 + (1/101 * freeAccelerator)))) + " Accelerators."},
    function() { return "+" + format(Math.floor((1 + (1/101 * freeMultiplier)))) + " Multipliers, +" + format(Math.floor((1 + (1/101 * freeAccelerator)))) + " Accelerators."},
    function() { return "+" + format(Math.floor((1 + (1/41 * freeAcceleratorBoost)))) + " Accelerator Boosts."},
    function() { return "+" + format(Math.min(250, Math.floor(Decimal.log(player.coins.add(1), 1e3))) +  Math.min(1750, Math.floor(Decimal.log(player.coins.add(1),1e15)) - 50)) + " Accelerators."},
    function() { return "+" + format(Math.min(1000, Math.floor((player.firstOwnedCoin + player.secondOwnedCoin + player.thirdOwnedCoin + player.fourthOwnedCoin + player.fifthOwnedCoin)/160))) + " Multipliers."},
    function() { return "+" + format(Math.floor(Math.min(2000,(player.firstOwnedCoin + player.secondOwnedCoin + player.thirdOwnedCoin + player.fourthOwnedCoin + player.fifthOwnedCoin) / 80))) + " Accelerators."},
    function() { return "+" + format(Math.min(75, Math.floor(Decimal.log(player.coins.add(1), 1e10))) + Math.min(925, Math.floor(Decimal.log(player.coins.add(1), 1e30)))) + " Multipliers."},
    function() { return "+" + format(Math.floor(totalCoinOwned/2000)) + " Accelerator Boosts"},
    function() { return "+" + format(Math.min(500, Math.floor(Decimal.log(player.prestigePoints.add(1), 1e25)))) + " Accelerators"},
    function() { return "+" + format(totalAcceleratorBoost) + " Multipliers"},
    function() { return "+" + format(Math.floor(3/103 * freeMultiplier)) + " Multipliers"},
    function() { return "+" + format(Math.floor(2/102 * freeMultiplier)) + " Multipliers"},
    function() { return "All Crystal producers x" + format(Decimal.min("1e5000", Decimal.pow(player.prestigePoints, 1/500)),2)},
    function() { return "All Mythos producers production x" + format(Decimal.pow(Decimal.log(player.prestigePoints.add(10),10),2),2) },
    function() { return "This upgrade is currently not finished, so in the meantime you get a multiplier to a building. Enjoy!"},
    function() { return "This upgrade is currently not finished, so in the meantime you get a multiplier to a building. Enjoy!"},
    function() { return "This upgrade is currently not finished, so in the meantime you get a multiplier to a building. Enjoy!"},
    function() { return "Welcome to Transcension! Coin production is multiplied by " + format(Decimal.min(1e30,Decimal.pow(player.transcendPoints.add(1), 1/2))) + "."},
    function() { return "All mythos shard producers are going into overdrive: x" + format(Decimal.min(1e50, Decimal.pow(player.prestigePoints.add(1), 1/50).dividedBy(2.5).add(1)),2) + " the production!"},
    function() { return "Multiply all coin production by " + format(Decimal.min(1e30, Decimal.pow(1.01, player.transcendCount)),2) + "!"},
    function() { return "Multiply Mythos gained in Transcension by " + format(Decimal.min(1e6, Decimal.pow(1.01, player.transcendCount)),2) + "!"},
    function() { return "+" + format(Math.min(2500, Math.floor(Decimal.log(player.transcendShards.add(1), 10)))) + " Accelerators!"},
    function() { return "It's kinda self-evident, ain't it?"},
    function() { return "Mythos-tier producers production x" + format(Math.pow(1.05, player.achievementPoints) * (player.achievementPoints + 1),2) },
    function() { return "Multiply coin production by a factor of " + format(Math.pow((totalMultiplier * totalAccelerator / 1000 + 1), 8)) + "!"},
    function() { return "+" + format(Math.min(50, Math.floor(Decimal.log(player.transcendPoints.add(1), 1e10)))) + " Multipliers through magic!"},
    function() { return "It's quite obvious what the benefit is, but you must be in a challenge for it to be in use!"},
    function() { return "Mythos-tier producers production x" + format(Math.pow(totalAcceleratorBoost, 2),2) + "!"},
    function() { return "Mythos-tier producers production x" + format(Decimal.pow(globalMythosMultiplier, 0.025),2) +"! It's like inception, or something."},
    function() { return "Augments will produce " + format(Decimal.min("1e1250", Decimal.pow(acceleratorEffect, 1/125)),2) + "x as many Mythos Shards."},
    function() { return "Wizards will produce " + format(Decimal.min("1e2000", Decimal.pow(multiplierEffect, 1/180)),2) + "x as many Enchantments; what productive spirits!"},
    function() { return "Grandmasters will produce " + format((Decimal.pow("1e1000", buildingPower - 1)),2) + "x as many Oracles!"},
    function() { return "It's quite obvious, ain't it?"},
    function() { return "Look above!"},
    function() { return "Look above!"},
    function() { return "Look above!"},
    function() { return "Look above!"},
    function() { return "+5% Offering Recycle/+5EXP per Offerings. Duh!"},
    function() { return "Base offering amount for Reincarnations +" + Math.floor(1/5 * (player.challengecompletions.one + player.challengecompletions.two + player.challengecompletions.three + player.challengecompletions.four + player.challengecompletions.five + player.challengecompletions.six + player.challengecompletions.seven + player.challengecompletions.eight)) + ". Challenge yourself!"},
    function() { return "All crystal production x" + format(Decimal.min("1e6000", Decimal.pow(player.reincarnationPoints.add(1),6)))},
    function() { return "All mythos shard production x" + format(Decimal.min("1e2000",Decimal.pow(player.reincarnationPoints.add(1),2)))},
    function() { return "5x Particle gain from Reincarnations. Duh!"},
    function() { return "It's quite clear in the description!"},
    function() { return "The first particle-tier producer is " + format(Decimal.pow(1.03, player.firstOwnedParticles + player.secondOwnedParticles + player.thirdOwnedParticles + player.fourthOwnedParticles + player.fifthOwnedParticles),2) + "x as productive."},
    function() { return "Your compliance with tax laws provides you with " + format(Math.min(2500, Math.floor(1/1000 * Decimal.log(taxdivisor,10)))) + " free Multipliers, for some reason."},
    function() { return "Cosmic Magnetics will allow you to gain " + format(Math.min(10, Decimal.pow(Decimal.log(reincarnationPointGain.add(10), 10), 0.5)),2) + "x as much Obtainium reincarnating, x" + format(Math.min(3,Decimal.pow(Decimal.log(reincarnationPointGain.add(10), 10), 0.5)),2) + " automation gain."},
    function() { return "Your patience will allow you to gain " + format(Math.min(4, Math.max(1, Math.pow(player.reincarnationcounter/30,2))) * Math.pow(Math.min(19, 1 + 2 * player.reincarnationcounter / 400),2),2) + "x more Obtainium on Reincarnation."},
    function() { return "Writing's on the wall. Look above!"},
    function() { return "Obtainium multiplier: x" + (Math.min(50 , 1 + 2 * player.challengecompletions.six + 2 * player.challengecompletions.seven + 2 * player.challengecompletions.eight + 2 * player.challengecompletions.nine + 2 * player.challengecompletions.ten))},
    function() { return "Same as Transcend upgrade 10, except you MUST be in a Reincarnation challenge in particular."},
    function() { return "Obtainium multiplier: x" + format((1 + 4 * Math.min(1, Math.pow(player.maxofferings / 100000, 0.5))),2)},
    function() { return "Offering Multiplier: x" + format((1 + 2 * Math.min(1, Math.pow(player.maxobtainium/30000000, 0.5))),2)},
    function() { return "Lorem ipsum"},
    function() { return "Lorem ipsum"},
    function() { return "Lorem ipsum"},
    function() { return "Lorem ipsum"},
    function() { return "Lorem ipsum"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"},
    function() { return "All you need to know is right above this message!"}
]
    function upgradeeffects(i) {
        document.getElementById("upgradeeffect").innerHTML = "Effect: " + upgradetexts[i]()
     }



function upgradedescriptions(i) {
    if(!window.i18n || !window.i18n.c) {
        return;
    }

    var y = window.i18n.c['upgdesc' + i];
    var z = ""
    if (player.upgrades[i] > 0.5) {
        z = z + " BOUGHT!"
    }
    document.getElementById("upgradedescription").textContent = y + z
    if (player.upgrades[i] > 0.5) {
        document.getElementById("upgradedescription").style.color = "gold"
    }
    else {document.getElementById("upgradedescription").style.color = "white"}

    if (player.toggles.nine == true) { 
        var type = ''   
        if (i <= 20 && i >= 1) {type = 'coin'}
        if (i <= 40 && i >= 21) {type = 'prestige'}  
        if (i <= 60 && i >= 41) {type = 'transcend'}  
        if (i <= 80 && i >= 61) {type = 'reincarnation'}  
        if (i <= 87 && i >= 81) {type = 'prestige'}
        if (i <= 93 && i >= 88) {type = 'transcend'}
        if (i <= 100 && i >= 94) {type = 'reincarnation'}
        if (type !== '' && i <= 80 && i >= 1) {
        buyUpgrades(type,i)
        }
        if (type !== '' && i <= 100 && i >= 81) {
            var q=i-80;
        buyAutobuyers(q)
        }
        if (i <= 120 && i >= 101) {
            var q = i - 100
        buyGenerator(q)
        }
    }

    var currency = ''
    var color = ''
    if ((i <= 20 && i >= 1) || (i <= 110 && i >= 106)) {currency = "Coins"; color = "yellow"}
    if ((i <= 40 && i >= 21) || (i <= 105 && i >= 101) || (i <= 115 && i >= 111) || (i <= 87 && i >= 81)) {currency = "Diamonds"; color = "cyan"}
    if ((i <= 60 && i >= 41) || (i <= 120 && i >= 116) || (i <= 93 &&  i >= 88)) {currency = "Mythos"; color = "plum"}
    if ((i <= 80 && i >= 61) || (i <= 100 && i >= 94)) {currency = "Particles"; color = "limegreen"}

    document.getElementById("upgradecost").textContent = "Cost: " + format(Decimal.pow(10, upgradeCosts[i])) + " " + currency
    document.getElementById("upgradecost").style.color = color
    upgradeeffects(i)
}

function crystalupgradedescriptions(i) {
    var w = window.i18n.c['crystalupgdesc' + i];

    var u = i - 1
    var p = player.crystalUpgrades[u]
    var c = 0;
    if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== "") {c = 10}
    c += Math.floor(player.runelevels[2] * (1 + player.researches[5] / 10) * (1 + player.researches[21]/800) / 10) * 100/100
    var q = Decimal.pow(10, (crystalUpgradesCost[u] + crystalUpgradeCostIncrement[u] * Math.floor(Math.pow(player.crystalUpgrades[u] + 0.5 - c, 2) / 2)))
    document.getElementById("crystalupgradedescription").textContent = w
    document.getElementById("crystalupgradeslevel").textContent = "Level: " + p;
    document.getElementById("crystalupgradescost").textContent = "Cost: " + format(q) + " crystals"
}



function upgradeupdate(num, fast /*= false*/) {
    if(!window.i18n || !window.i18n.c) {
        return; 
    }
    
    var x = "upg"+num
    if (player.upgrades[num] > 0.5 && ((num <= 60 || num > 80) && (num <= 93 || num > 100))) {
        document.getElementById(x).style.backgroundColor = "green"
    }
    if (player.upgrades[num] > 0.5 && ((num > 60 && num <= 80) || (num > 93 && num <= 100))) {
        document.getElementById(x).style.backgroundColor = "white"
    }

    var b = window.i18n.c['upgdesc' + num];
    var c = ""
    if (player.upgrades[num] > 0.5) {
        c = c + " BOUGHT!"
    
    if (!fast) {    
    document.getElementById("upgradedescription").textContent = b + c
    document.getElementById("upgradedescription").style.color = "gold"
    }
    }    
    else {document.getElementById(x).style.backgroundColor = "Black"}

    if (!fast) revealStuff()
}

function researchdescriptions(i) {
    if(!window.i18n || !window.i18n.c) {
        return;
    }

    var y = window.i18n.c['resdesc' + i];
    var z = " Cost: " + (format(researchBaseCosts[i],0,false)) + " Obtainium";
    var p = "res" + i

    if (player.researches[i] == researchMaxLevels[i]) {
        document.getElementById("researchcost").style.color = "Gold"
        document.getElementById("researchinfo3").style.color = "plum"
        z = z + " || MAXED!"
    } else {
        document.getElementById("researchcost").style.color = "white";
        document.getElementById("researchinfo3").style.color = "white";
    }

    if (player.researches[i] > 0.5 && player.researches[i] < researchMaxLevels[i]) {document.getElementById(p).style.backgroundColor = "purple"}
    if (player.researches[i] > 0.5 && player.researches[i] >= researchMaxLevels[i]) {document.getElementById(p).style.backgroundColor = "green"}

    document.getElementById("researchinfo2").textContent = y
    document.getElementById("researchcost").textContent = z
    document.getElementById("researchinfo3").textContent = "Level " + player.researches[i] + "/" + researchMaxLevels[i]
}

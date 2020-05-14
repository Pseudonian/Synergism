var achievementpointvalues = [0, 1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
2, 8, 10, 2, 8, 10, 10,
2, 8, 10, 10, 10, 10, 10,
2, 4, 6, 8, 10, 10, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,
1, 2, 4, 6, 8, 9, 10,]

var totalachievementpoints = achievementpointvalues.reduce(function(a, b) { 
    return a + b
}, 0);

function resetachievementcheck(i) {
    if (i == 1) {
        if (player.prestigenoaccelerator == true) {
            achievementaward(60)
        }
        if (player.prestigenomultiplier == true) {
            achievementaward(57)
        }
        if (player.prestigenocoinupgrades == true){
            achievementaward(64)
        }
        if (prestigePointGain.greaterThanOrEqualTo(1)) {
            achievementaward(36)

        }
        if (prestigePointGain.greaterThanOrEqualTo(1e6)) {
            achievementaward(37)

        }
        if (prestigePointGain.greaterThanOrEqualTo(1e100)) {
            achievementaward(38)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e1000")) {
            achievementaward(39)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e10000")) {
            achievementaward(40)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e77777")) {
            achievementaward(41)

        }
        if (prestigePointGain.greaterThanOrEqualTo("1e250000")) {
            achievementaward(42)

        }
    }
    if (i == 2) {
        if (player.transcendnoaccelerator == true) {
            achievementaward(61)
        }
        if (player.transcendnomultiplier == true) {
            achievementaward(58)
        }
        if (player.transcendnocoinupgrades == true) {
            achievementaward(65)
        }
        if (player.transcendnocoinorprestigeupgrades == true) {
            achievementaward(66)
        }
        if (player.transcendnoaccelerator == true) {
            achievementaward(61)
        }
        if (player.transcendnomultiplier == true) {
            achievementaward(58)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1)) {
            achievementaward(43)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e6)) {
            achievementaward(44)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e50)) {
            achievementaward(45)
        }
        if (transcendPointGain.greaterThanOrEqualTo(1e308)) {
            achievementaward(46)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e1500")) {
            achievementaward(47)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e25000")) {
            achievementaward(48)
        }
        if (transcendPointGain.greaterThanOrEqualTo("1e100000")) {
            achievementaward(49)
        }
    }
    if (i == 3) {
        if (player.reincarnatenoaccelerator == true) {
            achievementaward(62)
        }
        if (player.reincarnatenomultiplier == true) {
            achievementaward(59)
        }
        if (player.reincarnatenocoinupgrades == true) {
            achievementaward(67)
        }
        if (player.reincarnatenocoinorprestigeupgrades == true) {
            achievementaward(68)
        }
        if (player.reincarnatenocoinprestigeortranscendupgrades == true) {
            achievementaward(69)
        }
        if (player.reincarnatenocoinprestigetranscendorgeneratorupgrades == true) {
            achievementaward(70)
        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1)) {
            achievementaward(50)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e5)) {
            achievementaward(51)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e30)) {
            achievementaward(52)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo(1e200)) {
            achievementaward(53)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e2000")) {
            achievementaward(54)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e5000")) {
            achievementaward(55)

        }
        if (reincarnationPointGain.greaterThanOrEqualTo("1e7777")) {
            achievementaward(56)

        }
    }
}


function challengeachievementcheck(i,auto) {
    var generatorcheck = Math.max(player.upgrades[101] + player.upgrades[102] + player.upgrades[103] + player.upgrades[104] + player.upgrades[105])
if (i == 'one') {
    if (player.challengecompletions.one > 0.5) {achievementaward(78)}
    if (player.challengecompletions.one > 2.5) {achievementaward(79)}
    if (player.challengecompletions.one > 4.5) {achievementaward(80)}
    if (player.challengecompletions.one > 9.5) {achievementaward(81)}
    if (player.challengecompletions.one > 19.5) {achievementaward(82)}
    if (player.challengecompletions.one > 49.5) {achievementaward(83)}
    if (player.challengecompletions.one > 74.5) {achievementaward(84)}

    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e1000") && generatorcheck == 0){achievementaward(75)}
    }
}
if (i == 'two') {
    if (player.challengecompletions.two > 0.5) {achievementaward(85)}
    if (player.challengecompletions.two > 2.5) {achievementaward(86)}
    if (player.challengecompletions.two > 4.5) {achievementaward(87)}
    if (player.challengecompletions.two > 9.5) {achievementaward(88)}
    if (player.challengecompletions.two > 19.5) {achievementaward(89)}
    if (player.challengecompletions.two > 49.5) {achievementaward(90)}
    if (player.challengecompletions.two > 74.5) {achievementaward(91)}
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e1000") && generatorcheck == 0){achievementaward(76)}
    }
}
if (i == 'three') {
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e99999") && generatorcheck == 0){achievementaward(77)}
    }
    if (player.challengecompletions.three > 0.5) {achievementaward(92)}
    if (player.challengecompletions.three > 2.5) {achievementaward(93)}
    if (player.challengecompletions.three > 4.5) {achievementaward(94)}
    if (player.challengecompletions.three > 9.5) {achievementaward(95)}
    if (player.challengecompletions.three > 19.5) {achievementaward(96)}
    if (player.challengecompletions.three > 49.5) {achievementaward(97)}
    if (player.challengecompletions.three > 74.5) {achievementaward(98)}
}
if (i == 'four') {
    if (player.challengecompletions.four > 0.5) {achievementaward(99)}
    if (player.challengecompletions.four > 2.5) {achievementaward(100)}
    if (player.challengecompletions.four > 4.5) {achievementaward(101)}
    if (player.challengecompletions.four > 9.5) {achievementaward(102)}
    if (player.challengecompletions.four > 19.5) {achievementaward(103)}
    if (player.challengecompletions.four > 49.5) {achievementaward(104)}
    if (player.challengecompletions.four > 74.5) {achievementaward(105)}
}
if (i == 'five') {
    if (!auto) {
    if (player.coinsThisTranscension.greaterThanOrEqualTo("1e120000")) {achievementaward(63)}
    }
    if (player.challengecompletions.five > 0.5) {achievementaward(106)}
    if (player.challengecompletions.five > 2.5) {achievementaward(107)}
    if (player.challengecompletions.five > 4.5) {achievementaward(108)}
    if (player.challengecompletions.five > 9.5) {achievementaward(109)}
    if (player.challengecompletions.five > 19.5) {achievementaward(110)}
    if (player.challengecompletions.five > 49.5) {achievementaward(111)}
    if (player.challengecompletions.five > 74.5) {achievementaward(112)}
}
if (i == 'six') {
    if (player.challengecompletions.six > 0.5) {achievementaward(113)}
    if (player.challengecompletions.six > 1.5) {achievementaward(114)}
    if (player.challengecompletions.six > 2.5) {achievementaward(115)}
    if (player.challengecompletions.six > 4.5) {achievementaward(116)}
    if (player.challengecompletions.six > 9.5) {achievementaward(117)}
    if (player.challengecompletions.six > 14.5) {achievementaward(118)}
    if (player.challengecompletions.six > 24.5) {achievementaward(119)}
}
if (i == 'seven') {
    if (player.challengecompletions.seven > 0.5) {achievementaward(120)}
    if (player.challengecompletions.seven > 1.5) {achievementaward(121)}
    if (player.challengecompletions.seven > 2.5) {achievementaward(122)}
    if (player.challengecompletions.seven > 4.5) {achievementaward(123)}
    if (player.challengecompletions.seven > 9.5) {achievementaward(124)}
    if (player.challengecompletions.seven > 14.5) {achievementaward(125)}
    if (player.challengecompletions.seven > 24.5) {achievementaward(126)}
}
if (i == 'eight') {
    if (player.challengecompletions.eight > 0.5) {achievementaward(127)}
    if (player.challengecompletions.eight > 1.5) {achievementaward(128)}
    if (player.challengecompletions.eight > 2.5) {achievementaward(129)}
    if (player.challengecompletions.eight > 4.5) {achievementaward(130)}
    if (player.challengecompletions.eight > 9.5) {achievementaward(131)}
    if (player.challengecompletions.eight > 14.5) {achievementaward(132)}
    if (player.challengecompletions.eight > 24.5) {achievementaward(133)}
}
}

function achievementdescriptions(i) {
    const y = i18n.c['adesc' + i];
    const z = (player.achievements[i] > 0.5) ? ' COMPLETED!' : '';
    const k = i18n.c['areward' + i] || ''; 

    document.getElementById("achievementdescription").textContent = y + z
    document.getElementById("achievementreward").textContent = "Reward: " + achievementpointvalues[i] + " AP. " + achievementpointvalues[i] + " Quarks! " + k
    if (player.achievements[i] > 0.5) {
        document.getElementById("achievementdescription").style.color = "gold"
    }
    else {document.getElementById("achievementdescription").style.color = "white"}
}

function achievementaward(num) {
    if (player.achievements[num] < 0.5) {
        player.achievementPoints += achievementpointvalues[num]
        player.worlds += achievementpointvalues[num]
        document.getElementById("achievementprogress").textContent = "Achievement Points: " + player.achievementPoints + "/" + totalachievementpoints + " [" + (100 * player.achievementPoints / totalachievementpoints).toPrecision(4) + "%]"
        player.achievements[num] = 1;
        revealStuff()
    }
    var x = "ach" + num
    document.getElementById(x).style.backgroundColor = "Green"
}


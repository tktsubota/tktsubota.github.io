// Declare words
var words = ["pole","band","hole","vent","ramp","rock","sock","dot","ore","card","line","part","bush","note","boy","girl","air","hen","camp","curb","blog","ice","nut","back","cup","car","oath","idea","pool","boss","soda","rose","seam","drop","cob","hut","web","tub","pane","glob","yard","star","soup","hat","book","cat","dog","sky","arm","desk","hill","box","shoe","leg","game","cube","hand","hair","ball","foot"];
var definitions = [];
definitions[0] = "pole [pohl]"+"<br/>"+"n. a long, cylindrical, often slender piece of wood, metal, etc.";
definitions[1] = "band [band]"+"<br/>"+"n. a company of persons or, sometimes, animals or things, joined, acting, or functioning together;"+"<br/>"+"aggregation; party; troop";
definitions[2] = "hole [hohl]"+"<br/>"+"n. an opening through something; gap; aperture";
definitions[3] = "vent [vent]"+"<br/>"+"n. an opening, as in a wall, serving as an outlet for air, smoke, fumes, or the like";
definitions[4] = "ramp [ramp]"+"<br/>"+"n. a sloping surface connecting two levels; incline";
definitions[5] = "rock [rok]"+"<br/>"+"n. a large mass of stone forming a hill, cliff, promontory, or the like";
definitions[6] = "sock [sok]"+"<br/>"+"n. a short stocking usually reaching to the calf or just above the ankle";
definitions[7] = "dot [dot]"+"<br/>"+"n. a small, roundish mark made with or as if with a pen";
definitions[8] = "ore [awr]"+"<br/>"+"n. a metal-bearing mineral or rock, or a native metal, that can be mined at a profit";
definitions[9] = "card [kahrd]"+"<br/>"+"n. a usually rectangular piece of stiff paper, thin pasteboard, or plastic for various uses, as to write"+"<br/>"+"information on or printed as a means of identifying the holder";
definitions[10] = "line [lahyn]"+"<br/>"+"n. a mark or stroke long in proportion to its breadth, made with a pen, pencil, tool, etc., on a surface";
definitions[11] = "part [pahrt]"+"<br/>"+"n. a portion or division of a whole that is separate or distinct; piece, fragment, fraction, or section;"+"<br/>"+"constituent";
definitions[12] = "bush [boosh]"+"<br/>"+"n. a low plant with many branches that arise from or near the ground";
definitions[13] = "note [noht]"+"<br/>"+"n. a brief record of something written down to assist the memory or for future reference";
definitions[14] = "boy [boi]"+"<br/>"+"n. a male child, from birth to full growth, especially one less than 18 years of age";
definitions[15] = "girl [gurl]"+"<br/>"+"n. a female child, from birth to full growth";
definitions[16] = "air [air]"+"<br/>"+"n. a mixture of nitrogen, oxygen, and minute amounts of other gases that surrounds the earth and forms"+"<br/>"+"its atmosphere";
definitions[17] = "hen [hen]"+"<br/>"+"n. the female of the domestic fowl";
definitions[18] = "camp [kamp]"+"<br/>"+"n. a place where an army or other group of persons or an individual is lodged in a tent or tents or other"+"<br/>"+"temporary means of shelter";
definitions[19] = "curb [kurb]"+"<br/>"+"n. a rim, especially of joined stones or concrete, along a street or roadway, forming an edge for a"+"<br/>"+"sidewalk";
definitions[20] = "blog [blawg]"+"<br/>"+"n. a Web site containing the writer's or group of writers' own experiences, observations, opinions, etc.,"+"<br/>"+"and often having images and links to other Web sites";
definitions[21] = "ice [ahys]"+"<br/>"+"n. the solid form of water, produced by freezing; frozen water";
definitions[22] = "nut [nuht]"+"<br/>"+"n. a dry fruit consisting of an edible kernel or meat enclosed in a woody or leathery shell";
definitions[23] = "back [bak]"+"<br/>"+"n. the rear part of the human body, extending from the neck to the lower end of the spine";
definitions[24] = "cup [kuhp]"+"<br/>"+"n. a small, open container made of china, glass, metal, etc., usually having a handle and used chiefly as"+"<br/>"+"a receptable from which to drink tea, soup, etc.";
definitions[25] = "car [kahr]"+"<br/>"+"n. an automobile";
definitions[26] = "oath [ohth]"+"<br/>"+"n. a solemn appeal to a deity, or to some revered person or thing, to witness one's determination to"+"<br/>"+"speak the truth, to keep a promise, etc.";
definitions[27] = "i-de-a [ahy-dee-uh]"+"<br/>"+"n. any conception existing in the mind as a result of mental understanding, awareness, or activity";
definitions[28] = "pool [pool]"+"<br/>"+"n. a small body of standing water; pond";
definitions[29] = "boss [baws]"+"<br/>"+"n. a person who employs or superintends workers; manager";
definitions[30] = "so-da [soh-duh]"+"<br/>"+"n. sodium hydroxide";
definitions[31] = "rose [rohz]"+"<br/>"+"n. any of the wild or cultivated, usually prickly-stemmed, pinnate-leaved, showy-flowered shrubs of the"+"<br/>"+"genus Rosa";
definitions[32] = "seam [seem]"+"<br/>"+"n. the line formed by sewing together pieces of cloth, leather, or the like";
definitions[33] = "drop [drop]"+"<br/>"+"n. a small quantity of liquid that falls or is produced in a more or less spherical mass; a liquid globule";
definitions[34] = "cob [kob]"+"<br/>"+"n. a corncob";
definitions[35] = "hut [huht]"+"<br/>"+"n. a small or humble dwelling of simple construction, especially one made of natural materials, as of"+"<br/>"+"logs or grass";
definitions[36] = "web [web]"+"<br/>"+"n. something formed by or as if by weaving or interweaving";
definitions[37] = "tub [tuhb]"+"<br/>"+"n. a bathtub";
definitions[38] = "pane [peyn]"+"<br/>"+"n. one of the divisions of a window or the like, consisting of a single plate of glass in a frame";
definitions[39] = "glob [glob]"+"<br/>"+"n. a drop or globule of a liquid";
definitions[40] = "yard [yahrd]"+"<br/>"+"n. a common unit of linear measure in English-speaking countries, equal to 3 feet or 36 inches, and"+"<br/>"+"equivalent to 0.9144 meter";
definitions[41] = "star [stahr]"+"<br/>"+"n. any of the heavenly bodies, except the moon, appearing as fixed luminous points in the sky at night";
definitions[42] = "soup [soop]"+"<br/>"+"n. a liquid food made by boiling or simmering meat, fish, or vegetables with various added ingredients";
definitions[43] = "hat [hat]"+"<br/>"+"n. a shaped covering for the head, usually with a crown and brim, especially for wear outdoors";
definitions[44] = "book [book]"+"<br/>"+"n. a written or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound"+"<br/>"+"together within covers";
definitions[45] = "cat [kat]"+"<br/>"+"n. a small domesticated carnivore, Felis domestica  or F. catus,  bred in a number of varieties";
definitions[46] = "dog [dawg]"+"<br/>"+"n. a domesticated canid, Canis familiaris,  bred in many varieties";
definitions[47] = "sky [skahy]"+"<br/>"+"n. the region of the clouds or the upper air; the upper atmosphere of the earth";
definitions[48] = "arm [ahrm]"+"<br/>"+"n. the upper limb of the human body, especially the part extending from the shoulder to the wrist";
definitions[49] = "desk [desk]"+"<br/>"+"n. an article of furniture having a broad, usually level, writing surface, as well as drawers or"+"<br/>"+"compartments for papers, writing materials, etc.";
definitions[50] = "hill [hil]"+"<br/>"+"n. a natural elevation of the earth's surface, smaller than a mountain";
definitions[51] = "box [boks]"+"<br/>"+"n. a container, case, or receptacle, usually rectangular, of wood, metal, cardboard, etc., and often with a"+"<br/>"+"lid or removable cover";
definitions[52] = "shoe [shoo]"+"<br/>"+"n. an external covering for the human foot, usually of leather and consisting of a more or less stiff or"+"<br/>"+"heavy sole and a lighter upper part ending a short distance above, at, or below the ankle";
definitions[53] = "leg [leg]"+"<br/>"+"n. either of the two lower limbs of a biped, as a human being, or any of the paired limbs of an animal,"+"<br/>"+"arthropod, etc., that support and move the body";
definitions[54] = "game [geym]"+"<br/>"+"n. an amusement or pastime";
definitions[55] = "cube [kyoob]"+"<br/>"+"n. a solid bounded by six equal squares, the angle between any two adjacent faces being a right angle";
definitions[56] = "hand [hand]"+"<br/>"+"n. the terminal, prehensile part of the upper limb in humans and other primates, consisting of the wrist,"+"<br/>"+"metacarpal area, fingers, and thumb";
definitions[57] = "hair [hair]"+"<br/>"+"n. any of the numerous fine, usually cylindrical, keratinous filaments growing from the skin of humans"+"<br/>"+"and animals; a pilus";
definitions[58] = "ball [bawl]"+"<br/>"+"n. a spherical or approximately spherical body or shape; sphere";
definitions[59] = "foot [foot]"+"<br/>"+"n. the terminal part of the leg, below the ankle joint, on which the body stands and moves";
var word;
var definition;
var hangmanState = 0;
var wletterlength;
var wletterarray;
var element;
var x = 60;
// underscoresInWord debugged!
function underscoresInWord(underscoringWord) {
    if (underscoringWord.length === 2) {
        document.getElementById("chosenword").style.left = "640px";
        document.getElementById("chosenword2").style.left = "670px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
    } else if (underscoringWord.length === 3) {
        document.getElementById("chosenword").style.left = "625px";
        document.getElementById("chosenword2").style.left = "655px";
        document.getElementById("chosenword3").style.left = "685px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
    } else if (underscoringWord.length === 4) {
        document.getElementById("chosenword").style.left = "610px";
        document.getElementById("chosenword2").style.left = "640px";
        document.getElementById("chosenword3").style.left = "670px";
        document.getElementById("chosenword4").style.left = "700px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
    }
}
// findDefinition debugged!
function findDefinition(definitioningWord) {
    switch (definitioningWord) {
        case words[0]:
            document.getElementById("definitionp").innerHTML = definitions[0];
        break;
        case words[1]:
            document.getElementById("definitionp").innerHTML = definitions[1];
        break;
        case words[2]:
            document.getElementById("definitionp").innerHTML = definitions[2];
        break;
        case words[3]:
            document.getElementById("definitionp").innerHTML = definitions[3];
        break;
        case words[4]:
            document.getElementById("definitionp").innerHTML = definitions[4];
        break;
        case words[5]:
            document.getElementById("definitionp").innerHTML = definitions[5];
        break;
        case words[6]:
            document.getElementById("definitionp").innerHTML = definitions[6];
        break;
        case words[7]:
            document.getElementById("definitionp").innerHTML = definitions[7];
        break;
        case words[8]:
            document.getElementById("definitionp").innerHTML = definitions[8];
        break;
        case words[9]:
            document.getElementById("definitionp").innerHTML = definitions[9];
        break;
        case words[10]:
            document.getElementById("definitionp").innerHTML = definitions[10];
        break;
        case words[11]:
            document.getElementById("definitionp").innerHTML = definitions[11];
        break;
        case words[12]:
            document.getElementById("definitionp").innerHTML = definitions[12];
        break;
        case words[13]:
            document.getElementById("definitionp").innerHTML = definitions[13];
        break;
        case words[14]:
            document.getElementById("definitionp").innerHTML = definitions[14];
        break;
        case words[15]:
            document.getElementById("definitionp").innerHTML = definitions[15];
        break;
        case words[16]:
            document.getElementById("definitionp").innerHTML = definitions[16];
        break;
        case words[17]:
            document.getElementById("definitionp").innerHTML = definitions[17];
        break;
        case words[18]:
            document.getElementById("definitionp").innerHTML = definitions[18];
        break;
        case words[19]:
            document.getElementById("definitionp").innerHTML = definitions[19];
        break;
        case words[20]:
            document.getElementById("definitionp").innerHTML = definitions[20];
        break;
        case words[21]:
            document.getElementById("definitionp").innerHTML = definitions[21];
        break;
        case words[22]:
            document.getElementById("definitionp").innerHTML = definitions[22];
        break;
        case words[23]:
            document.getElementById("definitionp").innerHTML = definitions[23];
        break;
        case words[24]:
            document.getElementById("definitionp").innerHTML = definitions[24];
        break;
        case words[25]:
            document.getElementById("definitionp").innerHTML = definitions[25];
        break;
        case words[26]:
            document.getElementById("definitionp").innerHTML = definitions[26];
        break;
        case words[27]:
            document.getElementById("definitionp").innerHTML = definitions[27];
        break;
        case words[28]:
            document.getElementById("definitionp").innerHTML = definitions[28];
        break;
        case words[29]:
            document.getElementById("definitionp").innerHTML = definitions[29];
        break;
        case words[30]:
            document.getElementById("definitionp").innerHTML = definitions[30];
        break;
        case words[31]:
            document.getElementById("definitionp").innerHTML = definitions[31];
        break;
        case words[32]:
            document.getElementById("definitionp").innerHTML = definitions[32];
        break;
        case words[33]:
            document.getElementById("definitionp").innerHTML = definitions[33];
        break;
        case words[34]:
            document.getElementById("definitionp").innerHTML = definitions[34];
        break;
        case words[35]:
            document.getElementById("definitionp").innerHTML = definitions[35];
        break;
        case words[36]:
            document.getElementById("definitionp").innerHTML = definitions[36];
        break;
        case words[37]:
            document.getElementById("definitionp").innerHTML = definitions[37];
        break;
        case words[38]:
            document.getElementById("definitionp").innerHTML = definitions[38];
        break;
        case words[39]:
            document.getElementById("definitionp").innerHTML = definitions[39];
        break;
        case words[40]:
            document.getElementById("definitionp").innerHTML = definitions[40];
        break;
        case words[41]:
            document.getElementById("definitionp").innerHTML = definitions[41];
        break;
        case words[42]:
            document.getElementById("definitionp").innerHTML = definitions[42];
        break;
        case words[43]:
            document.getElementById("definitionp").innerHTML = definitions[43];
        break;
        case words[44]:
            document.getElementById("definitionp").innerHTML = definitions[44];
        break;
        case words[45]:
            document.getElementById("definitionp").innerHTML = definitions[45];
        break;
        case words[46]:
            document.getElementById("definitionp").innerHTML = definitions[46];
        break;
        case words[47]:
            document.getElementById("definitionp").innerHTML = definitions[47];
        break;
        case words[48]:
            document.getElementById("definitionp").innerHTML = definitions[48];
        break;
        case words[49]:
            document.getElementById("definitionp").innerHTML = definitions[49];
        break;
        case words[50]:
            document.getElementById("definitionp").innerHTML = definitions[50];
        break;
        case words[51]:
            document.getElementById("definitionp").innerHTML = definitions[51];
        break;
        case words[52]:
            document.getElementById("definitionp").innerHTML = definitions[52];
        break;
        case words[53]:
            document.getElementById("definitionp").innerHTML = definitions[53];
        break;
        case words[54]:
            document.getElementById("definitionp").innerHTML = definitions[54];
        break;
        case words[55]:
            document.getElementById("definitionp").innerHTML = definitions[55];
        break;
        case words[56]:
            document.getElementById("definitionp").innerHTML = definitions[56];
        break;
        case words[57]:
            document.getElementById("definitionp").innerHTML = definitions[57];
        break;
        case words[58]:
            document.getElementById("definitionp").innerHTML = definitions[58];
        break;
        case words[59]:
            document.getElementById("definitionp").innerHTML = definitions[59];
        break;
    }
}
function drawHangerBase() {
    document.getElementById("hanger-base").style.visibility = "visible";
}
function drawHangerMiddle() {
    document.getElementById("hanger-middle").style.visibility = "visible";
}
function drawHanger() {
    document.getElementById("hanger-top").style.visibility = "visible";
    document.getElementById("hanger").style.visibility = "visible";
}
//drawHead debugged!
function drawHead() {
    document.getElementById("head").style.visibility = "visible";
}
//drawTorso debugged!
function drawTorso() {
    document.getElementById("torso").style.visibility = "visible";
}
//drawLeftArm debugged!
function drawLeftArm() {
    document.getElementById("leftarm").style.visibility = "visible";
}
//drawRightArm debugged!
function drawRightArm() {
    document.getElementById("rightarm").style.visibility = "visible";
}
//drawLeftLeg debugged!
function drawLeftLeg() {
    document.getElementById("leftleg").style.visibility = "visible";
}
//drawRightLeg debugged!
function drawRightLeg() {
    document.getElementById("rightleg").style.visibility = "visible";
}
var drawBody = [drawHangerBase,drawHangerMiddle,drawHanger,drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg];
//hideBody debugged!
function hideBody() {
    document.getElementById("hanger-base").style.visibility = "hidden";
    document.getElementById("hanger-middle").style.visibility = "hidden";
    document.getElementById("hanger-top").style.visibility = "hidden";
    document.getElementById("hanger").style.visibility = "hidden";
    document.getElementById("head").style.visibility = "hidden";
    document.getElementById("torso").style.visibility = "hidden";
    document.getElementById("leftarm").style.visibility = "hidden";
    document.getElementById("rightarm").style.visibility = "hidden";
    document.getElementById("leftleg").style.visibility = "hidden";
    document.getElementById("rightleg").style.visibility = "hidden";
}
// 65 - 90 - letters
function mainGame(e) {
    var keycode = e.keyCode? e.keyCode : e.charCode;
    var proceed;
    chosenwordhtml1 = document.getElementById("chosenword").innerHTML;
    chosenwordhtml2 = document.getElementById("chosenword2").innerHTML;
    chosenwordhtml3 = document.getElementById("chosenword3").innerHTML;
    chosenwordhtml4 = document.getElementById("chosenword4").innerHTML;
    document.getElementById("incorrectp").innerHTML = "";
    if (keycode >= 65 && keycode <= 90) {
        if (document.getElementById("wletterp").innerHTML.length === 0) {
            proceed = "true";
        } else if (document.getElementById("wletterp").innerHTML.length === 1) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                proceed = "true";
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 2) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    proceed = "true";
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 3) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        proceed = "true";
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 4) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            proceed = "true";
                        }
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 5) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(4,1)) {
                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                proceed = "false";
                            } else {
                                proceed = "true";
                            }
                        }
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 6) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(4,1)) {
                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                proceed = "false";
                            } else {
                                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(5,1)) {
                                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                    proceed = "false";
                                } else {
                                    proceed = "true";
                                }
                            }
                        }
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 7) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(4,1)) {
                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                proceed = "false";
                            } else {
                                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(5,1)) {
                                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                    proceed = "false";
                                } else {
                                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(6,1)) {
                                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                        proceed = "false";
                                    } else {
                                        proceed = "true";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 8) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(4,1)) {
                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                proceed = "false";
                            } else {
                                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(5,1)) {
                                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                    proceed = "false";
                                } else {
                                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(6,1)) {
                                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                        proceed = "false";
                                    } else {
                                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(7,1)) {
                                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                            proceed = "false";
                                        } else {
                                            proceed = "true";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else if (document.getElementById("wletterp").innerHTML.length === 9) {
            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(0,1)) {
                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                proceed = "false";
            } else {
                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(1,1)) {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    proceed = "false";
                } else {
                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(2,1)) {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                        proceed = "false";
                    } else {
                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(3,1)) {
                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                            proceed = "false";
                        } else {
                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(4,1)) {
                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                proceed = "false";
                            } else {
                                if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(5,1)) {
                                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                    proceed = "false";
                                } else {
                                    if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(6,1)) {
                                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                        proceed = "false";
                                    } else {
                                        if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(7,1)) {
                                            document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                            proceed = "false";
                                        } else {
                                            if (String.fromCharCode(keycode).toLowerCase() === document.getElementById("wletterp").innerHTML.substr(8,1)) {
                                                document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                                                proceed = "false";
                                            } else {
                                                proceed = "true";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (proceed === "true") {
        if (word.length === 2) {
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(0,1)) {
                if (chosenwordhtml1 === "_") {
                    document.getElementById("chosenword").innerHTML = word.substr(0,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(1,1)) {
                if (chosenwordhtml2 === "_") {
                    document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1)) {
                document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                drawBody[hangmanState++]();
            }
            if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && hangmanState <= 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Win!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("smallcheck").style.visibility = "visible";
                document.getElementById("bigcheck").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                if (document.getElementById("head").style.visibility === "visible") {
                    document.getElementById("winlefteye").style.visibility = "visible";
                    document.getElementById("winrighteye").style.visibility = "visible";
                    document.getElementById("winmouth").style.visibility = "visible";
                }
            }
            if (hangmanState === 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Lose!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("chosenword").innerHTML = word.substr(0,1);
                document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                document.getElementById("leftx").style.visibility = "visible";
                document.getElementById("rightx").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                document.getElementById("xleftlefteye").style.visibility = "visible";
                document.getElementById("xrightlefteye").style.visibility = "visible";
                document.getElementById("xleftrighteye").style.visibility = "visible";
                document.getElementById("xrightrighteye").style.visibility = "visible";
                document.getElementById("losemouth").style.visibility = "visible";
                document.getElementById("tongue").style.visibility = "visible";
                document.getElementById("tongueend").style.visibility = "visible";
            }
        } else if (word.length === 3) {
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(0,1)) {
                if (chosenwordhtml1 === "_") {
                    document.getElementById("chosenword").innerHTML = word.substr(0,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(1,1)) {
                if (chosenwordhtml2 === "_") {
                    document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(2,1)) {
                if (chosenwordhtml3 === "_") {
                    document.getElementById("chosenword3").innerHTML = word.substr(2,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1)) {
                document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                drawBody[hangmanState++]();
            }
            if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && hangmanState !== 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Win!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("smallcheck").style.visibility = "visible";
                document.getElementById("bigcheck").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                if (document.getElementById("head").style.visibility === "visible") {
                    document.getElementById("winlefteye").style.visibility = "visible";
                    document.getElementById("winrighteye").style.visibility = "visible";
                    document.getElementById("winmouth").style.visibility = "visible";
                }
                
            }
            if (hangmanState === 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Lose!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("chosenword").innerHTML = word.substr(0,1);
                document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                document.getElementById("chosenword3").innerHTML = word.substr(2,1);
                document.getElementById("leftx").style.visibility = "visible";
                document.getElementById("rightx").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                document.getElementById("xleftlefteye").style.visibility = "visible";
                document.getElementById("xrightlefteye").style.visibility = "visible";
                document.getElementById("xleftrighteye").style.visibility = "visible";
                document.getElementById("xrightrighteye").style.visibility = "visible";
                document.getElementById("losemouth").style.visibility = "visible";
                document.getElementById("tongue").style.visibility = "visible";
                document.getElementById("tongueend").style.visibility = "visible";
            }
        } else if (word.length === 4) {
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(0,1)) {
                if (chosenwordhtml1 === "_") {
                    document.getElementById("chosenword").innerHTML = word.substr(0,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(1,1)) {
                if (chosenwordhtml2 === "_") {
                    document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(2,1)) {
                if (chosenwordhtml3 === "_") {
                    document.getElementById("chosenword3").innerHTML = word.substr(2,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() === word.substr(3,1)) {
                if (chosenwordhtml4 === "_") {
                    document.getElementById("chosenword4").innerHTML = word.substr(3,1);
                } else {
                    document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                }
            }
            if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1)) {
                document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                drawBody[hangmanState++]();
            }
            if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && hangmanState !== 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Win!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("smallcheck").style.visibility = "visible";
                document.getElementById("bigcheck").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                if (document.getElementById("head").style.visibility === "visible") {
                    document.getElementById("winlefteye").style.visibility = "visible";
                    document.getElementById("winrighteye").style.visibility = "visible";
                    document.getElementById("winmouth").style.visibility = "visible";
                }
            }
            if (hangmanState === 9) {
                document.getElementById("guess").parentNode.removeChild(document.getElementById("guess"));
                document.getElementById("winlose").innerHTML = "You Lose!";
                document.getElementById("definitionp").style.visibility = "visible";
                document.getElementById("chosenword").innerHTML = word.substr(0,1);
                document.getElementById("chosenword2").innerHTML = word.substr(1,1);
                document.getElementById("chosenword3").innerHTML = word.substr(2,1);
                document.getElementById("chosenword4").innerHTML = word.substr(3,1);
                document.getElementById("leftx").style.visibility = "visible";
                document.getElementById("rightx").style.visibility = "visible";
                document.getElementById("resetbutton").style.visibility = "visible";
                document.getElementById("xleftlefteye").style.visibility = "visible";
                document.getElementById("xrightlefteye").style.visibility = "visible";
                document.getElementById("xleftrighteye").style.visibility = "visible";
                document.getElementById("xrightrighteye").style.visibility = "visible";
                document.getElementById("losemouth").style.visibility = "visible";
                document.getElementById("tongue").style.visibility = "visible";
                document.getElementById("tongueend").style.visibility = "visible";
            }
        }
        }
    }
    document.getElementById("guess").value = "";
}
function reset() {
    random = Math.floor(Math.random()*x);
    word = words[random];
    document.getElementById("chosenword").innerHTML = "";
    document.getElementById("chosenword2").innerHTML = "";
    document.getElementById("chosenword3").innerHTML = "";
    document.getElementById("chosenword4").innerHTML = "";
    document.getElementById("winlose").innerHTML = "";
    underscoresInWord(word);
    findDefinition(word);
    document.getElementById("definitionp").style.visibility = "hidden";
    hideBody();
    hangmanState = 0;
    document.getElementById("wletterp").innerHTML = "";
    document.getElementById("xleftlefteye").style.visibility = "hidden";
    document.getElementById("xrightlefteye").style.visibility = "hidden";
    document.getElementById("xleftrighteye").style.visibility = "hidden";
    document.getElementById("xrightrighteye").style.visibility = "hidden";
    document.getElementById("losemouth").style.visibility = "hidden";
    document.getElementById("tongue").style.visibility = "hidden";
    document.getElementById("tongueend").style.visibility = "hidden";
    document.getElementById("winlefteye").style.visibility = "hidden";
    document.getElementById("winrighteye").style.visibility = "hidden";
    document.getElementById("winmouth").style.visibility = "hidden";
    document.getElementById("leftx").style.visibility = "hidden";
    document.getElementById("rightx").style.visibility = "hidden";
    document.getElementById("smallcheck").style.visibility = "hidden";
    document.getElementById("bigcheck").style.visibility = "hidden";
    document.getElementById("resetbutton").style.visibility = "hidden";
    document.getElementById("guessDiv").innerHTML = "<input type='text' id='guess' maxlength='1' onkeyup='mainGame(event)'/>";
}
window.onload = function(){
    reset();
}
var words = ["thing","chair","trash","stair","window","truck","tower","hinge","pillow","pencil","moon","eraser","clock","puzzle","button","table","light","hook","charge","mask","couch","bottle","rail","candle","brain","pile","lung","toast","bush","tennis","shade","shock","shape","pool","skull","pants","shirt","stove","handle","bullet","rock","ruler","mirror","piano","violin","lamp","piece","stick","crease","grease","glass","switch","sock","cover","phone","chest","rest","bone","blank","system"];
var definitions = [];
definitions[0] = "thing [thing]"+"<br/>"+"n. a material object without life or consciousness; an inanimate object";
definitions[1] = "chair [chair]"+"<br/>"+"n. a seat, especially for one person, usually having four legs for support and a rest for the back and"+"<br/>"+"often having rests for the arms";
definitions[2] = "trash [trash]"+"<br/>"+"n. anything worthless, useless, or discarded; rubbish";
definitions[3] = "stair [stair]"+"<br/>"+"n. one of a flight or series of steps for going from one level to another, as in a building";
definitions[4] = "win-dow [win-doh]"+"<br/>"+"n. an opening in the wall of a building, the side of a vehicle, etc., for the admission of air or light, or"+"<br/>"+"both, commonly fitted with a frame in which are set movable sashes containing panes of glass";
definitions[5] = "truck [truhk]"+"<br/>"+"n. any of various forms of vehicle for carrying goods and materials, usually consisting of a single"+"<br/>"+"self-propelled unit but also often composed of a trailer vehicle hauled by a tractor unit";
definitions[6] = "tow-er [tou-er]"+"<br/>"+"n. a building or structure high in proportion to its lateral dimensions, either isolated or forming part of a"+"<br/>"+"building";
definitions[7] = "hinge [hinj]"+"<br/>"+"n. a jointed device or flexible piece on which a door, gate, shutter, lid, or other attached part turns,"+"<br/>"+"swings, or moves";
definitions[8] = "pil-low [pil-ow]"+"<br/>"+"n. a bag or case made of cloth that is filled with feathers, down, or other soft material, and is used to"+"<br/>"+"cushion the head during sleep or rest";
definitions[9] = "pen-cil [pen-suhl]"+"<br/>"+"n. a slender tube of wood, metal, plastic, etc., containing a core or strip of graphite, a solid coloring"+"<br/>"+"material, or the like, used for writing or drawing";
definitions[10] = "moon [moon]"+"<br/>"+"n. the earth's natural satellite, orbiting the earth at a mean distance of 238,857 miles (384,393 km) and"+"<br/>"+"having a diameter of 2160 miles (3476 km)";
definitions[11] = "e-ras-er [i-rey-ser]"+"<br/>"+"n. a device, as a piece of rubber or cloth, for erasing  marks made with pen, pencil, chalk, etc.";
definitions[12] = "clock [klok]"+"<br/>"+"n. an instrument for measuring and recording time, especially by mechanical means, usually with hands"+"<br/>"+"or changing numbers to indicate the hour and minute: not designed to be worn or carried about";
definitions[13] = "puz-zle [puhz-uhl]"+"<br/>"+"n. a toy, problem, or other contrivance designed to amuse by presenting difficulties to be solved by"+"<br/>"+"ingenuity or patient effort";
definitions[14] = "but-ton [buht-n]"+"<br/>"+"n. a small disk, knob, or the like for sewing or otherwise attaching to an article, as of clothing, serving"+"<br/>"+"as a fastening when passed through a buttonhole or loop";
definitions[15] = "ta-ble [tey-buhl]"+"<br/>"+"n. an article of furniture consisting of a flat, slablike top supported on one or more legs or other supports";
definitions[16] = "light [lahyt]"+"<br/>"+"n. something that makes things visible or affords illumination";
definitions[17] = "hook [hook]"+"<br/>"+"n. a curved or angular piece of metal or other hard substance for catching, pulling, holding, or"+"<br/>"+"suspending something";
definitions[18] = "charge [chahrj]"+"<br/>"+"to impose or ask as a price or fee";
definitions[19] = "mask [mask]"+"<br/>"+"n. a covering for all or part of the face, worn to conceal one's identity";
definitions[20] = "couch [kouch]"+"<br/>"+"n. a piece of furniture for seating from two to four people, typically in the form of a bench with a back,"+"<br/>"+"sometimes having an armrest at one or each end, and partly or wholly upholstered and often fitted with"+"<br/>"+"springs, tailored cushions, skirts, etc.; sofa";
definitions[21] = "bot-tle [bot-l]"+"<br/>"+"n. a portable container for holding liquids, characteristically having a neck and mouth and made of"+"<br/>"+"glass or plastic";
definitions[22] = "rail [reyl]"+"<br/>"+"n. a bar of wood or metal fixed horizontally for any of various purposes, as for a support, barrier, fence,"+"<br/>"+"or railing";
definitions[23] = "can-dle [kan-dl]"+"<br/>"+"n. a long, usually slender piece of tallow or wax with an embedded wick that is burned to give light";
definitions[24] = "brain [breyn]"+"<br/>"+"n. the part of the central nervous system enclosed in the cranium of humans and other vertebrates,"+"<br/>"+"consisting of a soft, convoluted mass of gray and white matter and serving to control and coordinate the"+"<br/>"+"mental and physical actions";
definitions[25] = "pile [pahyl]"+"<br/>"+"n. an assemblage of things laid or lying one upon the other";
definitions[26] = "lung [luhng]"+"<br/>"+"n. either of the two saclike respiratory organs in the thorax of humans and the higher vertebrates";
definitions[27] = "toast [tohst]"+"<br/>"+"n. sliced bread that has been browned by dry heat";
definitions[28] = "bush [boosh]"+"<br/>"+"n. a low plant with many branches that arise from or near the ground";
definitions[29] = "ten-nis [ten-is]"+"<br/>"+"n. a game played on a rectangular court by two players or two pairs of players equipped with rackets, in"+"<br/>"+"which a ball is driven back and forth over a low net that divides the court in half";
definitions[30] = "shade [sheyd]"+"<br/>"+"n. the comparative darkness caused by the interception or screening of rays of light from an object,"+"<br/>"+"place, or area";
definitions[31] = "shock [shok]"+"<br/>"+"n. a sudden and violent blow or impact; collision";
definitions[32] = "shape [sheyp]"+"<br/>"+"n. the quality of a distinct object or body in having an external surface or outline of specific form or"+"<br/>"+"figure";
definitions[33] = "pool [pool]"+"<br/>"+"n. a small body of standing water; pond";
definitions[34] = "skull [skuhl]"+"<br/>"+"n. the bony framework of the head, enclosing the brain and supporting the face; the skeleton of the head";
definitions[35] = "pants [pants]"+"<br/>"+"n. trousers";
definitions[36] = "shirt [shurt]"+"<br/>"+"n. a long- or short-sleeved garment for the upper part of the body, usually lightweight and having a"+"<br/>"+"collar and a front opening";
definitions[37] = "stove [stohv]"+"<br/>"+"n. a portable or fixed apparatus that furnishes heat for warmth, cooking, etc., commonly using coal, oil,"+"<br/>"+"gas, wood, or electricity as a source of power";
definitions[38] = "han-dle [han-dl]"+"<br/>"+"n. a part of a thing made specifically to be grasped or held by the hand";
definitions[39] = "bul-let [bool-it]"+"<br/>"+"n. a small metal projectile, part of a cartridge, for firing from small arms";
definitions[40] = "rock [rok]"+"<br/>"+"n. a large mass of stone forming a hill, cliff, promontory, or the like";
definitions[41] = "rul-er [roo-ler]"+"<br/>"+"n. a person who rules or governs; sovereign";
definitions[42] = "mir-ror [mir-er]"+"<br/>"+"n. a reflecting surface, originally of polished metal but now usually of glass with a silvery, metallic, or"+"<br/>"+"amalgam backing";
definitions[43] = "pi-an-o [pee-an-oh]"+"<br/>"+"n. a musical instrument in which felt-covered hammers, operated from a keyboard, strike the metal"+"<br/>"+"strings";
definitions[44] = "vi-o-lin [vahy-uh-lin]"+"<br/>"+"n. the treble instrument of the family of modern bowed instruments, held nearly horizontal by the"+"<br/>"+"player's arm with the lower part supported against the collarbone or shoulder";
definitions[45] = "lamp [lamp]"+"<br/>"+"n. any of various devices furnishing artificial light, as by electricity or gas";
definitions[46] = "piece [pees]"+"<br/>"+"n. a separate or limited portion or quantity of something";
definitions[47] = "stick [stik]"+"<br/>"+"n. a branch or shoot of a tree or shrub that has been cut or broken off";
definitions[48] = "crease [krees]"+"<br/>"+"n. a ridge or groove produced in anything by folding, heat, pressure, etc.; fold; furrow";
definitions[49] = "grease [grees]"+"<br/>"+"n. the melted or rendered fat of animals, especially when in a soft state";
definitions[50] = "glass [glas]"+"<br/>"+"n. a hard, brittle, noncrystalline, more or less transparent substance produced by fusion, usually"+"<br/>"+"consisting of mutually dissolved silica and silicates that also contain soda and lime, as in the ordinary variety used for windows and bottles";
definitions[51] = "switch [swich]"+"<br/>"+"n. a slender, flexible shoot, rod, etc., used especially in whipping or disciplining";
definitions[52] = "sock [sok]"+"<br/>"+"n. a short stocking usually reaching to the calf or just above the ankle";
definitions[53] = "cov-er [kuhv-er]"+"<br/>"+"to be or serve as a covering for; extend over; rest on the surface of";
definitions[54] = "phone [fohn]"+"<br/>"+"n. telephone";
definitions[55] = "chest [chest]"+"<br/>"+"n. the trunk of the body from the neck to the abdomen; thorax";
definitions[56] = "rest [rest]"+"<br/>"+"n. the refreshing quiet or repose of sleep";
definitions[57] = "bone [bohn]"+"<br/>"+"n. one of the structures composing the skeleton of a vertebrate";
definitions[58] = "blank [blangk]"+"<br/>"+"adj. having no marks; not written or printed on";
definitions[59] = "system [sis-tuhm]"+"<br/>"+"n. an assemblage or combination of things or parts forming a complex or unitary whole";
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
    } else if (underscoringWord.length === 5) {
        document.getElementById("chosenword").style.left = "595px";
        document.getElementById("chosenword2").style.left = "625px";
        document.getElementById("chosenword3").style.left = "655px";
        document.getElementById("chosenword4").style.left = "685px";
        document.getElementById("chosenword5").style.left = "715px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
    } else if (underscoringWord.length === 6) {
        document.getElementById("chosenword").style.left = "580px";
        document.getElementById("chosenword2").style.left = "610px";
        document.getElementById("chosenword3").style.left = "640px";
        document.getElementById("chosenword4").style.left = "670px";
        document.getElementById("chosenword5").style.left = "700px";
        document.getElementById("chosenword6").style.left = "730px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
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
    chosenwordhtml5 = document.getElementById("chosenword5").innerHTML;
    chosenwordhtml6 = document.getElementById("chosenword6").innerHTML;
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
            } else if (word.length === 5) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(4,1)) {
                    if (chosenwordhtml5 === "_") {
                        document.getElementById("chosenword5").innerHTML = word.substr(4,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword5").innerHTML = word.substr(4,1);
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
            } else if (word.length === 6) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(4,1)) {
                    if (chosenwordhtml5 === "_") {
                        document.getElementById("chosenword5").innerHTML = word.substr(4,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(5,1)) {
                    if (chosenwordhtml6 === "_") {
                        document.getElementById("chosenword6").innerHTML = word.substr(5,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword5").innerHTML = word.substr(4,1);
                    document.getElementById("chosenword6").innerHTML = word.substr(5,1);
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
/*
definitions[0] = "thing [thing]"+"<br/>"+"n. a material object without life or consciousness; an inanimate object";
definitions[1] = "chair [chair]"+"<br/>"+"n. a seat, especially for one person, usually having four legs for support and a rest for the back and"+"<br/>"+"often having rests for the arms";
definitions[2] = "trash [trash]"+"<br/>"+"n. anything worthless, useless, or discarded; rubbish";
definitions[3] = "stair [stair]"+"<br/>"+"n. one of a flight or series of steps for going from one level to another, as in a building";
definitions[4] = "win-dow [win-doh]"+"<br/>"+"n. an opening in the wall of a building, the side of a vehicle, etc., for the admission of air or light, or"+"<br/>"+"both, commonly fitted with a frame in which are set movable sashes containing panes of glass";
definitions[5] = "truck [truhk]"+"<br/>"+"n. any of various forms of vehicle for carrying goods and materials, usually consisting of a single"+"<br/>"+"self-propelled unit but also often composed of a trailer vehicle hauled by a tractor unit";
definitions[6] = "tow-er [tou-er]"+"<br/>"+"n. a building or structure high in proportion to its lateral dimensions, either isolated or forming part of a"+"<br/>"+"building";
definitions[7] = "hinge [hinj]"+"<br/>"+"n. a jointed device or flexible piece on which a door, gate, shutter, lid, or other attached part turns,"+"<br/>"+"swings, or moves";
definitions[8] = "pil-low [pil-ow]"+"<br/>"+"n. a bag or case made of cloth that is filled with feathers, down, or other soft material, and is used to"+"<br/>"+"cushion the head during sleep or rest";
definitions[9] = "pen-cil [pen-suhl]"+"<br/>"+"n. a slender tube of wood, metal, plastic, etc., containing a core or strip of graphite, a solid coloring"+"<br/>"+"material, or the like, used for writing or drawing";
definitions[10] = "moon [moon]"+"<br/>"+"n. the earth's natural satellite, orbiting the earth at a mean distance of 238,857 miles (384,393 km) and"+"<br/>"+"having a diameter of 2160 miles (3476 km)";
definitions[11] = "e-ras-er [i-rey-ser]"+"<br/>"+"n. a device, as a piece of rubber or cloth, for erasing  marks made with pen, pencil, chalk, etc.";
definitions[12] = "clock [klok]"+"<br/>"+"n. an instrument for measuring and recording time, especially by mechanical means, usually with hands"+"<br/>"+"or changing numbers to indicate the hour and minute: not designed to be worn or carried about";
definitions[13] = "puz-zle [puhz-uhl]"+"<br/>"+"n. a toy, problem, or other contrivance designed to amuse by presenting difficulties to be solved by"+"<br/>"+"ingenuity or patient effort";
definitions[14] = "but-ton [buht-n]"+"<br/>"+"n. a small disk, knob, or the like for sewing or otherwise attaching to an article, as of clothing, serving"+"<br/>"+"as a fastening when passed through a buttonhole or loop";
definitions[15] = "ta-ble [tey-buhl]"+"<br/>"+"n. an article of furniture consisting of a flat, slablike top supported on one or more legs or other supports";
definitions[16] = "light [lahyt]"+"<br/>"+"n. something that makes things visible or affords illumination";
definitions[17] = "hook [hook]"+"<br/>"+"n. a curved or angular piece of metal or other hard substance for catching, pulling, holding, or"+"<br/>"+"suspending something";
definitions[18] = "charge [chahrj]"+"<br/>"+"to impose or ask as a price or fee";
definitions[19] = "mask [mask]"+"<br/>"+"n. a covering for all or part of the face, worn to conceal one's identity";
definitions[20] = "couch [kouch]"+"<br/>"+"n. a piece of furniture for seating from two to four people, typically in the form of a bench with a back,"+"<br/>"+"sometimes having an armrest at one or each end, and partly or wholly upholstered and often fitted with"+"<br/>"+"springs, tailored cushions, skirts, etc.; sofa";
definitions[21] = "bot-tle [bot-l]"+"<br/>"+"n. a portable container for holding liquids, characteristically having a neck and mouth and made of"+"<br/>"+"glass or plastic";
definitions[22] = "rail [reyl]"+"<br/>"+"n. a bar of wood or metal fixed horizontally for any of various purposes, as for a support, barrier, fence,"+"<br/>"+"or railing";
definitions[23] = "can-dle [kan-dl]"+"<br/>"+"n. a long, usually slender piece of tallow or wax with an embedded wick that is burned to give light";
definitions[24] = "brain [breyn]"+"<br/>"+"n. the part of the central nervous system enclosed in the cranium of humans and other vertebrates,"+"<br/>"+"consisting of a soft, convoluted mass of gray and white matter and serving to control and coordinate the"+"<br/>"+"mental and physical actions";
definitions[25] = "pile [pahyl]"+"<br/>"+"n. an assemblage of things laid or lying one upon the other";
definitions[26] = "lung [luhng]"+"<br/>"+"n. either of the two saclike respiratory organs in the thorax of humans and the higher vertebrates";
definitions[27] = "toast [tohst]"+"<br/>"+"n. sliced bread that has been browned by dry heat";
definitions[28] = "bush [boosh]"+"<br/>"+"n. a low plant with many branches that arise from or near the ground";
definitions[29] = "ten-nis [ten-is]"+"<br/>"+"n. a game played on a rectangular court by two players or two pairs of players equipped with rackets, in"+"<br/>"+"which a ball is driven back and forth over a low net that divides the court in half";
definitions[30] = "shade [sheyd]"+"<br/>"+"n. the comparative darkness caused by the interception or screening of rays of light from an object,"+"<br/>"+"place, or area";
definitions[31] = "shock [shok]"+"<br/>"+"n. a sudden and violent blow or impact; collision";
definitions[32] = "shape [sheyp]"+"<br/>"+"n. the quality of a distinct object or body in having an external surface or outline of specific form or"+"<br/>"+"figure";
definitions[33] = "pool [pool]"+"<br/>"+"n. a small body of standing water; pond";
definitions[34] = "skull [skuhl]"+"<br/>"+"n. the bony framework of the head, enclosing the brain and supporting the face; the skeleton of the head";
definitions[35] = "pants [pants]"+"<br/>"+"n. trousers";
definitions[36] = "shirt [shurt]"+"<br/>"+"n. a long- or short-sleeved garment for the upper part of the body, usually lightweight and having a"+"<br/>"+"collar and a front opening";
definitions[37] = "stove [stohv]"+"<br/>"+"n. a portable or fixed apparatus that furnishes heat for warmth, cooking, etc., commonly using coal, oil,"+"<br/>"+"gas, wood, or electricity as a source of power";
definitions[38] = "han-dle [han-dl]"+"<br/>"+"n. a part of a thing made specifically to be grasped or held by the hand";
definitions[39] = "bul-let [bool-it]"+"<br/>"+"n. a small metal projectile, part of a cartridge, for firing from small arms";
definitions[40] = "rock [rok]"+"<br/>"+"n. a large mass of stone forming a hill, cliff, promontory, or the like";
definitions[41] = "rul-er [roo-ler]"+"<br/>"+"n. a person who rules or governs; sovereign";
definitions[42] = "mir-ror [mir-er]"+"<br/>"+"n. a reflecting surface, originally of polished metal but now usually of glass with a silvery, metallic, or"+"<br/>"+"amalgam backing";
definitions[43] = "pi-an-o [pee-an-oh]"+"<br/>"+"n. a musical instrument in which felt-covered hammers, operated from a keyboard, strike the metal"+"<br/>"+"strings";
definitions[44] = "vi-o-lin [vahy-uh-lin]"+"<br/>"+"n. the treble instrument of the family of modern bowed instruments, held nearly horizontal by the"+"<br/>"+"player's arm with the lower part supported against the collarbone or shoulder";
definitions[45] = "lamp [lamp]"+"<br/>"+"n. any of various devices furnishing artificial light, as by electricity or gas";
definitions[46] = "piece [pees]"+"<br/>"+"n. a separate or limited portion or quantity of something";
definitions[47] = "stick [stik]"+"<br/>"+"n. a branch or shoot of a tree or shrub that has been cut or broken off";
definitions[48] = "crease [krees]"+"<br/>"+"n. a ridge or groove produced in anything by folding, heat, pressure, etc.; fold; furrow";
definitions[49] = "grease [grees]"+"<br/>"+"n. the melted or rendered fat of animals, especially when in a soft state";
definitions[50] = "glass [glas]"+"<br/>"+"n. a hard, brittle, noncrystalline, more or less transparent substance produced by fusion, usually"+"<br/>"+"consisting of mutually dissolved silica and silicates that also contain soda and lime, as in the ordinary variety used for windows and bottles";
definitions[51] = "switch [swich]"+"<br/>"+"n. a slender, flexible shoot, rod, etc., used especially in whipping or disciplining";
definitions[52] = "sock [sok]"+"<br/>"+"n. a short stocking usually reaching to the calf or just above the ankle";
definitions[53] = "cov-er [kuhv-er]"+"<br/>"+"to be or serve as a covering for; extend over; rest on the surface of";
definitions[54] = "phone [fohn]"+"<br/>"+"n. telephone";
definitions[55] = "chest [chest]"+"<br/>"+"n. the trunk of the body from the neck to the abdomen; thorax";
definitions[56] = "rest [rest]"+"<br/>"+"n. the refreshing quiet or repose of sleep";
definitions[57] = "bone [bohn]"+"<br/>"+"n. one of the structures composing the skeleton of a vertebrate";
definitions[58] = "blank [blangk]"+"<br/>"+"adj. having no marks; not written or printed on";
definitions[59] = "system [sis-tuhm]"+"<br/>"+"n. an assemblage or combination of things or parts forming a complex or unitary whole";
*/
function reset() {
    random = Math.floor(Math.random()*x);
    word = words[random];
    document.getElementById("chosenword").innerHTML = "";
    document.getElementById("chosenword2").innerHTML = "";
    document.getElementById("chosenword3").innerHTML = "";
    document.getElementById("chosenword4").innerHTML = "";
    document.getElementById("chosenword5").innerHTML = "";
    document.getElementById("chosenword6").innerHTML = "";
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
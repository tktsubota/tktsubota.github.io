var words = ["jacket","dragon","printer","flower","computer","cabinet","picture","blanket","cushion","cello","magazine","holiday","cafeteria","battery","patella","freezer","dispenser","satellite","explosion","spatula","snowman","science","lightning","trombone","octopus","journal","banquet","economy","zoology","painting","receipt","sandbox","tantrum","wizard","antelope","disaster","predator","donation","catapult","prodigy","stomach","element","jawbone","recliner","dessert","gallery","garbage","earbud","energy","warrior","blizzard","surfboard","sailboat","rainbow","shadow","snowball","subway","windmill","mosaic","mountain"];// 50 at warrior
var definitions = [];
definitions[0] = "jack-et [jak-it]" + "<br/>" + "n. a short coat, in any of various forms, usually opening down the front";
definitions[1] = "drag-on [drag-uhn]" + "<br/>" + "n. a mythical monster generally represented as a huge, winged reptile with crested head and enormous"+"<br/>"+"claws and teeth, and often spouting fire";
definitions[2] = "print-er [prin-ter]" + "<br/>" + "n. a person or thing that prints, especially a person whose occupation is printing";
definitions[3] = "flow-er [flou-er]" + "<br/>" + "n. the blossom of a plant";
definitions[4] = "com-put-er [kuhm-pyoo-ter]" + "<br/>" + "n. an electronic device designed to accept data, perform prescribed mathematical and logical operations"+"<br/>"+"at high speed, and display the results of these operations";
definitions[5] = "cab-i-net [kab-uh-nit]" + "<br/>" + "n. a piece of furniture with shelves, drawers, etc., for holding or displaying items";
definitions[6] = "pic-ture [pik-cher]" + "<br/>" + "n. a visual representation of a person, object, or scene, as a painting, drawing, photograph, etc.";
definitions[7] = "blan-ket [blang-kit]" + "<br/>" + "n. a large, rectangular piece of soft fabric, often with bound edges, used especially for warmth as a bed"+"<br/>"+"covering";
definitions[8] = "cush-ion [koosh-uhn]" + "<br/>" + "n. a soft bag of cloth, leather, or rubber, filled with feathers, air, foam rubber, etc., on which to sit, kneel,"+"<br/>"+"or lie";
definitions[9] = "cel-lo [chel-oh]" + "<br/>" + "n. the second largest member of the violin family, rested vertically on the floor between the performer's"+"<br/>"+"knees when being played";
definitions[10] = "mag-a-zine [mag-uh-zeen]" + "<br/>" + "n. a publication that is issued periodically, usually bound in a paper cover, and typically contains essays,"+"<br/>"+"stories, poems, etc., by many writers, and often photographs and drawings, frequently specializing in a"+"<br/>"+"particular subject or area, as hobbies, news, or sports";
definitions[11] = "hol-i-day [hol-i-dey]" + "<br/>" + "n. a day fixed by law or custom on which ordinary business is suspended in commemoration of some"+"<br/>"+"event or in honor of some person";
definitions[12] = "caf-e-te-ri-a [kaf-i-teer-ee-uh]" + "<br/>" + "n. a restaurant in which patrons wait on themselves, carrying their food to tables from counters where it"+"<br/>"+"is displayed and served";
definitions[13] = "bat-ter-y [bat-uh-ree]" + "<br/>" + "n. a combination of two or more cells electrically connected to work together to produce electric energy";
definitions[14] = "pa-tel-la [puh-tel-uh]" + "<br/>" + "n. the flat, movable bone at the front of the knee";
definitions[15] = "freez-er [free-zer]" + "<br/>" + "n. a refrigerator, refrigerator compartment, cabinet, or room held at or below 32&#176;F (0&#176;C), used"+"<br/>"+"especially for preserving and storing food";
definitions[16] = "di-spens-er [dih-spen-ser]" + "<br/>" + "n. a person or thing that dispenses";
definitions[17] = "sat-el-lite [sat-l-ahyt]" + "<br/>" + "n. a natural body that revolves around a planet; a moon";
definitions[18] = "ex-plo-sion [ik-sploh-zhuhn]" + "<br/>" + "n. an act or instance of exploding; a violent expansion or bursting with noise, as of gunpowder or a"+"<br/>"+"boiler";
definitions[19] = "spat-u-la [spach-uh-luh]" + "<br/>" + "n. an implement with a broad, flat, usually flexible blade, used for blending foods or removing them"+"<br/>"+"from cooking utensils, mixing drugs, spreading plasters and paints, etc.";
definitions[20] = "snow-man [snoh-man]" + "<br/>" + "n. a figure of a person made of packed snow";
definitions[21] = "sci-ence [sahy-uhns]" + "<br/>" + "n. a branch of knowledge or study dealing with a body of facts or truths systematically arranged and"+"<br/>"+"showing the operation of general laws";
definitions[22] = "light-ning [lahyt-ning]" + "<br/>" + "n. a brilliant electric spark discharge in the atmosphere, occurring within a thundercloud, between"+"<br/>"+"clouds, or between a cloud and the ground";
definitions[23] = "trom-bone [trom-bohn]" + "<br/>" + "n. a musical wind instrument consisting of a cylindrical metal tube expanding into a bell and bent twice"+"<br/>"+"in a U shape, usually equipped with a slide";
definitions[24] = "oc-to-pus [ok-tuh-puhs]" + "<br/>" + "n. any octopod of the genus Octopus, having a soft, oval body and eight sucker-bearing arms, living"+"<br/>"+"mostly at the bottom of the sea";
definitions[25] = "jour-nal [jur-nl]" + "<br/>" + "n. a daily record, as of occurrences, experiences, or observations";
definitions[26] = "ban-quet [bang-kwit]" + "<br/>" + "n. a lavish meal; feast";
definitions[27] = "e-con-o-my [ih-kon-uh-mee]" + "<br/>" + "n. thrifty management; frugality in the expenditure or consumption of money, materials, etc.";
definitions[28] = "zo-ol-o-gy [zoh-ol-uh-jee]" + "<br/>" + "n. the science or branch of biology dealing with animals";
definitions[29] = "paint-ing [peyn-ting]" + "<br/>" + "n. a picture or design executed in paints";
definitions[30] = "re-ceipt [ri-seet]" + "<br/>" + "n. a written acknowledgment of having received, or taken into one's possession, a specified amount of"+"<br/>"+"money, goods, etc.";
definitions[31] = "sand-box [sand-boks]" + "<br/>" + "n. a box or receptacle for holding sand, especially one large enough for children to play in";
definitions[32] = "tan-trum [tan-truhm]" + "<br/>" + "n. a violent demonstration of rage or frustration; a sudden burst of ill temper";
definitions[33] = "wiz-ard [wiz-erd]" + "<br/>" + "n. a person who practices magic; magician or sorcerer";
definitions[34] = "an-te-lope [an-tl-ohp]" + "<br/>" + "n. any of several ruminants of the family Bovidae, chiefly of Africa and Asia, having permanent,"+"<br/>"+"hollow, unbranched horns";
definitions[35] = "dis-as-ter [dih-zas-ter]" + "<br/>" + "n. a calamitous event, especially one occurring suddenly and causing great loss of life, damage, or"+"<br/>"+"hardship, as a flood, airplane crash, or business failure";
definitions[36] = "pred-a-tor [pred-uh-ter]" + "<br/>" + "n. any organism that exists by preying upon other organisms";
definitions[37] = "do-na-tion [doh-ney-shuhn]" + "<br/>" + "n. an act or instance of presenting something as a gift, grant, or contribution";
definitions[38] = "cat-a-pult [kat-uh-puhlt]" + "<br/>" + "n. an ancient military engine for hurling stones, arrows, etc.";
definitions[39] = "prod-i-gy [prod-i-jee]" + "<br/>" + "n. a person, especially a child or young person, having extraordinary talent or ability";
definitions[40] = "stom-ach [stuhm-uhk]" + "<br/>" + "n. a saclike enlargement of the alimentary canal, as in humans and certain animals, forming an organ for"+"<br/>"+"storing, diluting, and digesting food";
definitions[41] = "el-e-ment [el-uh-muhnt]" + "<br/>" + "n. a component or constituent of a whole or one of the parts into which a whole may be resolved by"+"<br/>"+"analysis";
definitions[42] = "jaw-bone [jaw-bohn]" + "<br/>" + "n. a bone of either jaw; a maxilla or mandible";
definitions[43] = "re-clin-er [re-klahy-ner]" + "<br/>" + "n. a person or thing that reclines";
definitions[44] = "des-sert [dih-zurt]" + "<br/>" + "n. cake, pie, fruit, pudding, ice cream, etc., served as the final course of a meal";
definitions[45] = "gal-ler-y [gal-uh-ree]" + "<br/>" + "n. a raised area, often having a stepped or sloping floor, in a theater, church, or other public building to"+"<br/>"+"accommodate spectators, exhibits, etc.";
definitions[46] = "gar-bage [gahr-bij]" + "<br/>" + "n. discarded animal and vegetable matter, as from a kitchen; refuse";
definitions[47] = "ear-bud [eer-buhd]" + "<br/>" + "n. a small earphone that fits in the ear";
definitions[48] = "en-er-gy [en-er-jee]" + "<br/>" + "n. the capacity for vigorous activity; available power";
definitions[49] = "war-ri-or [wawr-ee-er]" + "<br/>" + "n. a person engaged or experienced in warfare; soldier";
definitions[50] = "bliz-zard [bliz-erd]" + "<br/>" + "n. a storm with dry, driving snow, strong winds, and intense cold";
definitions[51] = "surf-board [surf-bawrd]" + "<br/>" + "n. a long, narrow board on which a person stands or lies prone in surfboarding";
definitions[52] = "sail-boat [seyl-boht]" + "<br/>" + "n. a boat having sails as its principal means of propulsion";
definitions[53] = "rain-bow [reyn-boh]" + "<br/>" + "n. a bow or arc of prismatic colors appearing in the heavens opposite the sun and caused by the"+"<br/>"+"refraction and reflection of the sun's rays in drops of rain";
definitions[54] = "shad-ow [shad-oh]" + "<br/>" + "n. a dark figure or image cast on the ground or some surface by a body intercepting light";
definitions[55] = "snow-ball [snoh-bawl]" + "<br/>" + "n. a ball of snow pressed or rolled together, as for throwing";
definitions[56] = "subway [suhb-wey]" + "<br/>" + "n. an underground electric railroad, usually in a large city";
definitions[57] = "wind-mill [wind-mil]" + "<br/>" + "n. any of various machines for grinding, pumping, etc., driven by the force of the wind acting upon a"+"<br/>"+"number of vanes or sails";
definitions[58] = "mo-sa-ic [moh-zey-ik]" + "<br/>" + "n. a picture or decoration made of small, usually colored pieces of inlaid stone, glass, etc";
definitions[59] = "moun-tain [moun-tn]" + "<br/>" + "n. a natural elevation of the earth's surface rising more or less abruptly to a summit, and attaining an"+"<br/>"+"altitude greater than that of a hill, usually greater than 2000 feet (610 meters)";
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
    } else if (underscoringWord.length === 7) {
        document.getElementById("chosenword").style.left = "565px";
        document.getElementById("chosenword2").style.left = "595px";
        document.getElementById("chosenword3").style.left = "625px";
        document.getElementById("chosenword4").style.left = "655px";
        document.getElementById("chosenword5").style.left = "685px";
        document.getElementById("chosenword6").style.left = "715px";
        document.getElementById("chosenword7").style.left = "745px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
    } else if (underscoringWord.length === 8) {
        document.getElementById("chosenword").style.left = "550px";
        document.getElementById("chosenword2").style.left = "580px";
        document.getElementById("chosenword3").style.left = "610px";
        document.getElementById("chosenword4").style.left = "640px";
        document.getElementById("chosenword5").style.left = "670px";
        document.getElementById("chosenword6").style.left = "700px";
        document.getElementById("chosenword7").style.left = "730px";
        document.getElementById("chosenword8").style.left = "760px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
        document.getElementById("chosenword8").innerHTML = "_";
    } else if (underscoringWord.length === 9) {
        document.getElementById("chosenword").style.left = "535px";
        document.getElementById("chosenword2").style.left = "565px";
        document.getElementById("chosenword3").style.left = "595px";
        document.getElementById("chosenword4").style.left = "625px";
        document.getElementById("chosenword5").style.left = "655px";
        document.getElementById("chosenword6").style.left = "685px";
        document.getElementById("chosenword7").style.left = "715px";
        document.getElementById("chosenword8").style.left = "745px";
        document.getElementById("chosenword9").style.left = "775px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
        document.getElementById("chosenword8").innerHTML = "_";
        document.getElementById("chosenword9").innerHTML = "_";
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
    chosenwordhtml7 = document.getElementById("chosenword7").innerHTML;
    chosenwordhtml8 = document.getElementById("chosenword8").innerHTML;
    chosenwordhtml9 = document.getElementById("chosenword9").innerHTML;
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
            } else if (word.length === 7) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(6,1)) {
                    if (chosenwordhtml7 === "_") {
                        document.getElementById("chosenword7").innerHTML = word.substr(6,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword7").innerHTML = word.substr(6,1);
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
            } else if (word.length === 8) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(6,1)) {
                    if (chosenwordhtml7 === "_") {
                        document.getElementById("chosenword7").innerHTML = word.substr(6,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(7,1)) {
                    if (chosenwordhtml8 === "_") {
                        document.getElementById("chosenword8").innerHTML = word.substr(7,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(7,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && document.getElementById("chosenword8").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword7").innerHTML = word.substr(6,1);
                    document.getElementById("chosenword8").innerHTML = word.substr(7,1);
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
            } else if (word.length === 9) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(6,1)) {
                    if (chosenwordhtml7 === "_") {
                        document.getElementById("chosenword7").innerHTML = word.substr(6,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(7,1)) {
                    if (chosenwordhtml8 === "_") {
                        document.getElementById("chosenword8").innerHTML = word.substr(7,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(8,1)) {
                    if (chosenwordhtml9 === "_") {
                        document.getElementById("chosenword9").innerHTML = word.substr(8,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(7,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(8,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && document.getElementById("chosenword8").innerHTML !== "_" && document.getElementById("chosenword9").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword7").innerHTML = word.substr(6,1);
                    document.getElementById("chosenword8").innerHTML = word.substr(7,1);
                    document.getElementById("chosenword9").innerHTML = word.substr(8,1);
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
    document.getElementById("chosenword5").innerHTML = "";
    document.getElementById("chosenword6").innerHTML = "";
    document.getElementById("chosenword7").innerHTML = "";
    document.getElementById("chosenword8").innerHTML = "";
    document.getElementById("chosenword9").innerHTML = "";
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
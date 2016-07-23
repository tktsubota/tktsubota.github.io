var words = ["refrigerator","conversion","submarine","chandelier","coordination","fireplace","convergence","flamethrower","icosahedron","skyscraper","centillion","chalkboard","sweatshirt","hurricane","photograph","anaphylaxis","extinction","chlorophyll","archaeology","navigation","distribution","technology","apocalypse","environment","instrument","performance","accessory","government","experience","impression","possibility","interaction","spreadsheet","character","statement","milestone","something","efficiency","consonant","trademark","replacement","appearance","requirement","extension","diaphragm","calculator","television","advantage","arrogance","peninsula","longitude","appointment","perspective","relationship","encyclopedia","privilege","advantage","pseudonym","generation","conspiracy"];//50 at peninsula
var definitions = [];
definitions[0] = "re-frig-er-a-tor [ri-frij-uh-rey-ter]" + "<br/>" + "n. a box, room, or cabinet in which food, drink, etc., are kept cool by means of ice or mechanical"+"<br/>"+"refrigeration";
definitions[1] = "con-ver-sion [kuhn-vur-shuhn]" + "<br/>" + "n. the act or process of converting; state of being converted";
definitions[2] = "sub-ma-rine [suhb-muh-reen]" + "<br/>" + "n. a vessel that can be submerged and navigated under water, usually built for warfare and armed with"+"<br/>"+"torpedoes or guided missiles";
definitions[3] = "chan-de-lier [shan-dl-eer]" + "<br/>" + "n. a decorative, sometimes ornate, light fixture suspended from a ceiling, usually having branched"+"<br/>"+"supports for a number of lights";
definitions[4] = "co-or-di-na-tion [koh-awr-dn-ey-shuhn]" + "<br/>" + "n. the act or state of coordinating or of being coordinated";
definitions[5] = "fire-place [fahyuhr-pleys]" + "<br/>" + "n. the part of a chimney that opens into a room and in which fuel is burned; hearth";
definitions[6] = "con-ver-gence [kuhn-vur-juhns]" + "<br/>" + "n. an act or instance of converging";
definitions[7] = "flame-throw-er [fleym-throh-er]" + "<br/>" + "n. a weapon, either mounted or portable, that sprays ignited incendiary fuel for some distance";
definitions[8] = "i-co-sa-he-dron [ahy-koh-suh-hee-druhn]" + "<br/>" + "n. a solid figure having 20 faces";
definitions[9] = "sky-scrap-er [skahy-screy-per]" + "<br/>" + "n. a relatively tall building of many stories, especially one for office or commercial use";
definitions[10] = "cen-til-lion [sen-til-yuhn]" + "<br/>" + "n. a cardinal number represented in the U.S. by 1 followed by 303 zeros, and in Great Britain by 1"+"<br/>"+"followed by 600 zeros";
definitions[11] = "chalk-board [chawk-bawrd]" + "<br/>" + "n. a blackboard, especially a green or other light-colored one";
definitions[12] = "sweat-shirt [swet-shurt]" + "<br/>" + "n. a loose, long-sleeved, collarless pullover of soft, absorbent fabric, as cotton jersey, with close-fitting"+"<br/>"+"or elastic cuffs and sometimes a drawstring at the waist, commonly worn during athletic activity for"+"<br/>"+"warmth or to induce sweating";
definitions[13] = "hur-ri-cane [hur-i-keyn]" + "<br/>" + "n. a violent, tropical, cyclonic storm of the western North Atlantic, having wind speeds of or in excess"+"<br/>"+"of 72 miles per hour";
definitions[14] = "pho-to-graph [foh-tuh-graf]" + "<br/>" + "n. a picture produced by photography";
definitions[15] = "an-a-phy-lax-is [an-uh-fuh-lak-sis]" + "<br/>" + "n. exaggerated allergic reaction to a foreign protein resulting from previous exposure to it";
definitions[16] = "ex-tinc-tion [ik-stingk-shuhn]" + "<br/>" + "n. the act of extinguishing";
definitions[17] = "chlo-ro-phyll [klawr-uh-fil]" + "<br/>" + "n. the green coloring matter of leaves and plants, essential to the production of carbohydrates by"+"<br/>"+"photosynthesis, and occurring in a bluish-black form, and a dark-green form";
definitions[18] = "ar-chae-ol-o-gy [ahr-kee-ol-uh-jee]" + "<br/>" + "n. the scientific study of historic or prehistoric peoples and their cultures by analysis of their artifacts,"+"<br/>"+"inscriptions, monuments, and other such remains, especially those that have been excavated";
definitions[19] = "nav-i-ga-tion [nav-i-gey-shuhn]" + "<br/>" + "n. the act or process of navigating";
definitions[20] = "dis-tri-bu-tion [dis-truh-byoo-shuhn]" + "<br/>" + "n. an act or instance of distributing";
definitions[21] = "tech-nol-o-gy [tek-nol-uh-jee]" + "<br/>" + "n. the branch of knowledge that deals with the creation and use of technical means and their"+"<br/>"+"interrelation with life, society, and the environment, drawing upon such subjects as industrial arts,"+"<br/>"+"engineering, applied science, and pure science";
definitions[22] = "a-poc-a-lypse [uh-pok-uh-lips]" + "<br/>" + "n. revelation";
definitions[23] = "en-vi-ron-ment [en-vahy-ruhn-muhnt]" + "<br/>" + "n. the aggregate of surrounding things, conditions, or influences; surroundings; milieu";
definitions[24] = "in-stru-ment [in-struh-ment]" + "<br/>" + "n. a mechanical tool or implement, especially one used for delicate or precision work";
definitions[25] = "per-for-mance [per-fawr-muhns]" + "<br/>" + "n. a musical, dramatic, or other entertainment presented before an audience";
definitions[26] = "ac-ces-so-ry [ak-ses-uh-ree]" + "<br/>" + "n. a subordinate or supplementary part, object, or the like, used mainly for convenience, attractiveness,"+"<br/>"+"safety, etc., as a spotlight on an automobile or a lens cover on a camera";
definitions[27] = "gov-ern-ment [guhv-ern-muhnt]" + "<br/>" + "n. the political direction and control exercised over the actions of the members, citizens, or inhabitants"+"<br/>"+"of communities, societies, and states; direction of the affairs of a state, community, etc.; political"+"<br/>"+"administration";
definitions[28] = "ex-pe-ri-ence [ik-speer-ee-uhns]" + "<br/>" + "n. a particular instance of personally encountering or undergoing something";
definitions[29] = "im-pres-sion [im-presh-uhn]" + "<br/>" + "n. a strong effect produced on the intellect, feelings, conscience, etc.";
definitions[30] = "pos-si-bil-i-ty [pos-uh-bil-i-tee]" + "<br/>" + "n. the state or fact of being possible";
definitions[31] = "in-ter-ac-tion [in-ter-ak-shuhn]" + "<br/>" + "n. reciprocal action, effect, or influence";
definitions[32] = "spread-sheet [spred-sheet]" + "<br/>" + "n. a work sheet that is arranged in the manner of a mathematical matrix and contains a multicolumn"+"<br/>"+"analysis of related entries for easy reference on a single sheet";
definitions[33] = "char-ac-ter [kar-ik-ter]" + "<br/>" + "n. the aggregate of features and traits that form the individual nature of some person or thing";
definitions[34] = "state-ment [steyt-muhnt]" + "<br/>" + "n. something stated";
definitions[35] = "mile-stone [mahyl-stohn]" + "<br/>" + "n. a significant event or stage in the life, progress, development, or the like of a person, nation, etc.";
definitions[36] = "some-thing [suhm-thing]" + "<br/>" + "n. some thing; a certain undetermined or unspecified thing";
definitions[37] = "ef-fi-cien-cy [ih-fish-uhn-see]" + "<br/>" + "n. the state or quality of being efficient; competency in performance";
definitions[38] = "con-so-nant [kon-suh-nuhnt]" + "<br/>" + "n. a speech sound produced by occluding with or without releasing, diverting, or obstructing the flow"+"<br/>"+"of air from the lungs";
definitions[39] = "trade-mark [treyd-mahrk]" + "<br/>" + "n. any name, symbol, figure, letter, word, or mark adopted and used by a manufacturer or merchant in"+"<br/>"+"order to designate his or her goods and to distinguish them from those manufactured or sold by others";
definitions[40] = "re-place-ment [ri-pleys-muhnt]" + "<br/>" + "n. the act of replacing";
definitions[41] = "ap-pear-ance [uh-peer-uhns]" + "<br/>" + "n. the act or fact of appearing, as to the eye or mind or before the public";
definitions[42] = "re-quire-ment [re-kwahyuhr-muhnt]" + "<br/>" + "n. that which is required; a thing demanded or obligatory";
definitions[43] = "ex-ten-sion [ik-sten-shuhn]" + "<br/>" + "n. an act or instance of extending";
definitions[44] = "di-a-phragm [dahy-uh-fram]" + "<br/>" + "n. a muscular, membranous or ligamentous wall separating two cavities or limiting a cavity";
definitions[45] = "cal-cu-la-tor [kal-kyuh-ley-ter]" + "<br/>" + "n. a person who calculates or computes";
definitions[46] = "tel-e-vi-sion [tel-uh-vizh-uhn]" + "<br/>" + "n. the broadcasting of a still or moving image via radiowaves to receivers that project a view of the"+"<br/>"+"image on a picture tube";
definitions[47] = "ad-van-tage [ad-van-tij]" + "<br/>" + "n. any state, circumstance, opportunity, or means specially favorable to success, interest, or any desired"+"<br/>"+"end";
definitions[48] = "ar-ro-gance [ar-uh-guhns]" + "<br/>" + "n. offensive display of superiority or self-importance; overbearing pride";
definitions[49] = "pe-nin-su-la [puh-nin-suh-luh]" + "<br/>" + "n. an area of land almost completely surrounded by water except for an isthmus connecting it with the"+"<br/>"+"mainland";
definitions[50] = "lon-gi-tude [lon-ji-tood]" + "<br/>" + "n. angular distance east or west on the earth's surface, measured by the angle contained between the"+"<br/>"+"meridian of a particular place and some prime meridian, as that of Greenwich, England, and expressed"+"<br/>"+"either in degrees or by some corresponding difference in time";
definitions[51] = "ap-point-ment [uh-point-muhnt]" + "<br/>" + "n. a fixed mutual agreement for a meeting; engagement";
definitions[52] = "per-spec-tive [per-spek-tiv]" + "<br/>" + "n. a technique of depicting volumes and spatial relationships on a flat surface";
definitions[53] = "re-la-tion-ship [re-ley-shuhn-ship]" + "<br/>" + "n. a connection, association, or involvement";
definitions[54] = "en-cy-clo-pe-di-a [en-sahy-kluh-pee-dee-uh]" + "<br/>" + "n. a book or set of books containing articles on various topics, usually in alphabetical arrangement,"+"<br/>"+"covering all branches of knowledge or, less commonly, all aspects of one subject";
definitions[55] = "priv-i-lege [priv-uh-lij]" + "<br/>" + "n. a right, immunity, or benefit enjoyed only by a person beyond the advantages of most";
definitions[56] = "at-mos-phere [at-muhs-feer]" + "<br/>" + "n. the gaseous envelope surrounding the earth; the air";
definitions[57] = "pseu-do-nym [sood-n-im]" + "<br/>" + "n. a fictitious name used by an author to conceal his or her identity; pen name";
definitions[58] = "gen-er-a-tion [jen-uh-rey-shuhn]" + "<br/>" + "n. the entire body of individuals born and living at about the same time";
definitions[59] = "con-spir-a-cy [kuhn-spir-uh-see]" + "<br/>" + "n. the act of conspiring";
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
    } else if (underscoringWord.length === 10) {
        document.getElementById("chosenword").style.left = "520px";
        document.getElementById("chosenword2").style.left = "550px";
        document.getElementById("chosenword3").style.left = "580px";
        document.getElementById("chosenword4").style.left = "610px";
        document.getElementById("chosenword5").style.left = "640px";
        document.getElementById("chosenword6").style.left = "670px";
        document.getElementById("chosenword7").style.left = "700px";
        document.getElementById("chosenword8").style.left = "730px";
        document.getElementById("chosenword9").style.left = "760px";
        document.getElementById("chosenword10").style.left = "790px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
        document.getElementById("chosenword8").innerHTML = "_";
        document.getElementById("chosenword9").innerHTML = "_";
        document.getElementById("chosenword10").innerHTML = "_";
    } else if (underscoringWord.length === 11) {
        document.getElementById("chosenword").style.left = "505px";
        document.getElementById("chosenword2").style.left = "535px";
        document.getElementById("chosenword3").style.left = "565px";
        document.getElementById("chosenword4").style.left = "595px";
        document.getElementById("chosenword5").style.left = "625px";
        document.getElementById("chosenword6").style.left = "655px";
        document.getElementById("chosenword7").style.left = "685px";
        document.getElementById("chosenword8").style.left = "715px";
        document.getElementById("chosenword9").style.left = "745px";
        document.getElementById("chosenword10").style.left = "775px";
        document.getElementById("chosenword11").style.left = "805px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
        document.getElementById("chosenword8").innerHTML = "_";
        document.getElementById("chosenword9").innerHTML = "_";
        document.getElementById("chosenword10").innerHTML = "_";
        document.getElementById("chosenword11").innerHTML = "_";
    } else if (underscoringWord.length === 12) {
        document.getElementById("chosenword").style.left = "490px";
        document.getElementById("chosenword2").style.left = "520px";
        document.getElementById("chosenword3").style.left = "550px";
        document.getElementById("chosenword4").style.left = "580px";
        document.getElementById("chosenword5").style.left = "610px";
        document.getElementById("chosenword6").style.left = "640px";
        document.getElementById("chosenword7").style.left = "670px";
        document.getElementById("chosenword8").style.left = "700px";
        document.getElementById("chosenword9").style.left = "730px";
        document.getElementById("chosenword10").style.left = "760px";
        document.getElementById("chosenword11").style.left = "790px";
        document.getElementById("chosenword12").style.left = "820px";
		document.getElementById("chosenword").innerHTML = "_";
        document.getElementById("chosenword2").innerHTML = "_";
        document.getElementById("chosenword3").innerHTML = "_";
        document.getElementById("chosenword4").innerHTML = "_";
        document.getElementById("chosenword5").innerHTML = "_";
        document.getElementById("chosenword6").innerHTML = "_";
        document.getElementById("chosenword7").innerHTML = "_";
        document.getElementById("chosenword8").innerHTML = "_";
        document.getElementById("chosenword9").innerHTML = "_";
        document.getElementById("chosenword10").innerHTML = "_";
        document.getElementById("chosenword11").innerHTML = "_";
        document.getElementById("chosenword12").innerHTML = "_";
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
    chosenwordhtml10 = document.getElementById("chosenword10").innerHTML;
    chosenwordhtml11 = document.getElementById("chosenword11").innerHTML;
    chosenwordhtml12 = document.getElementById("chosenword12").innerHTML;
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
            } else if (word.length === 10) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(9,1)) {
                    if (chosenwordhtml10 === "_") {
                        document.getElementById("chosenword10").innerHTML = word.substr(9,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(7,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(8,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(9,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && document.getElementById("chosenword8").innerHTML !== "_" && document.getElementById("chosenword9").innerHTML !== "_" && document.getElementById("chosenword10").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword10").innerHTML = word.substr(9,1);
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
            } else if (word.length === 11) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(9,1)) {
                    if (chosenwordhtml10 === "_") {
                        document.getElementById("chosenword10").innerHTML = word.substr(9,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(10,1)) {
                    if (chosenwordhtml11 === "_") {
                        document.getElementById("chosenword11").innerHTML = word.substr(10,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(7,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(8,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(9,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(10,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && document.getElementById("chosenword8").innerHTML !== "_" && document.getElementById("chosenword9").innerHTML !== "_" && document.getElementById("chosenword10").innerHTML !== "_" && document.getElementById("chosenword11").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword10").innerHTML = word.substr(9,1);
                    document.getElementById("chosenword11").innerHTML = word.substr(10,1);
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
            } else if (word.length === 12) {
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
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(9,1)) {
                    if (chosenwordhtml10 === "_") {
                        document.getElementById("chosenword10").innerHTML = word.substr(9,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(10,1)) {
                    if (chosenwordhtml11 === "_") {
                        document.getElementById("chosenword11").innerHTML = word.substr(10,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() === word.substr(11,1)) {
                    if (chosenwordhtml12 === "_") {
                        document.getElementById("chosenword12").innerHTML = word.substr(11,1);
                    } else {
                        document.getElementById("incorrectp").innerHTML = "You have already guessed that letter!";
                    }
                }
                if (String.fromCharCode(keycode).toLowerCase() !== word.substr(0,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(1,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(2,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(3,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(4,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(5,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(6,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(7,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(8,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(9,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(10,1) && String.fromCharCode(keycode).toLowerCase() !== word.substr(11,1)) {
                    document.getElementById("wletterp").innerHTML += String.fromCharCode(keycode).toLowerCase();
                    drawBody[hangmanState++]();
                }
                if (document.getElementById("chosenword").innerHTML !== "_" && document.getElementById("chosenword2").innerHTML !== "_" && document.getElementById("chosenword3").innerHTML !== "_" && document.getElementById("chosenword4").innerHTML !== "_" && document.getElementById("chosenword5").innerHTML !== "_" && document.getElementById("chosenword6").innerHTML !== "_" && document.getElementById("chosenword7").innerHTML !== "_" && document.getElementById("chosenword8").innerHTML !== "_" && document.getElementById("chosenword9").innerHTML !== "_" && document.getElementById("chosenword10").innerHTML !== "_" && document.getElementById("chosenword11").innerHTML !== "_" && document.getElementById("chosenword12").innerHTML !== "_" && hangmanState !== 9) {
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
                    document.getElementById("chosenword10").innerHTML = word.substr(9,1);
                    document.getElementById("chosenword11").innerHTML = word.substr(10,1);
                    document.getElementById("chosenword12").innerHTML = word.substr(11,1);
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
    document.getElementById("chosenword10").innerHTML = "";
    document.getElementById("chosenword11").innerHTML = "";
    document.getElementById("chosenword12").innerHTML = "";
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
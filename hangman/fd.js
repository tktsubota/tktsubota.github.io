var words = ["coke","milk","banana","pepper","fruitcake","chicken","hamburger","punch","steak","fanta","water","guava","tuna","sushi","lasagna","kale","potato","apple","shrimp","noodle","lemonade","grape","espresso","sandwich","pasta","pizza","taco","salad","spinach","meatloaf","tomato","lettuce","pineapple","burrito","cheese","pear","cucumber","avocado","cookie","papaya","rice","lollipop","gatorade","skittles","powerade","salmon","peanut","chocolate","butter","sprite","sugar","salt","pretzel","asparagus","gravy","oatmeal","cranberry","turkey","lemon","pumpkin"];// 37 at cumquat
var word;
var hangmanState = 0;
var wletterlength;
var wletterarray;
var element;
var x = 60;
var random;
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
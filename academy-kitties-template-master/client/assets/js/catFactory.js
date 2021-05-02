//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('.cat__mouth-contour, .cat__chest_inner, .cat__tail').css('background', '#' + color)  //This changes the mouth and tail color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the mouth and tail color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.cat__eye').find('span').css('background', '#' + color)  //This changes the eye color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}

function earColor(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right, .cat__paw-left_inner, .cat__paw-right_inner').css('background', '#' + color)  //This changes the ear and paw color of the cat
    $('#earcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function decorationMidColor(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the mid decoration color of the cat
    $('#midcolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}

function decorationSidesColor(color,code) {
    $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the side decoration color of the cat
    $('#sidecolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Looking Up')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('Looking Left')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('Looking Right')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Focused')
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Dreamy')
            eyesType6()
            break
        default:
            console.log("Undefined eyeshape : "+ num)
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            $('#decorationName').html('Long')
            normaldecoration()
            decorationType1()
            break
        case 3:
            $('#decorationName').html('Longer')
            normaldecoration()
            decorationType2()
            break
        case 4:
            $('#decorationName').html('Long to Left')
            normaldecoration()
            decorationType3()
            break
        case 5:
            $('#decorationName').html('Long to Right')
            normaldecoration()
            decorationType4()
            break
        case 6:
            $('#decorationName').html('Long Spread')
            normaldecoration()
            decorationType5()
            break
        case 7:
            $('#decorationName').html('Longer Spread')
            normaldecoration()
            decorationType6()
            break
        default:
            console.log("Undefined pattern : "+ num)
    }
}

function animationVariation(num){
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animationName').html("Move Head")
            animationType1();
            break;
        case 2:
            $('#animationName').html("Wag Tail")
            animationType2();
            break;
        case 3:
            $('#animationName').html("Kitty Eyes")
            animationType3();
            break;
        case 4:
            $('#animationName').html("Wiggle Ears")
            animationType4();
            break;
        case 5:
            $('#animationName').html("Go Crazy")
            animationType5();
            break;
        case 6:
            $('#animationName').html("No Animation")
            animationType5();
            break;
        default:
            $('#animationName').html("Unknown Animation")
            resetAnimation();
            console.log("Undefined animation : "+ num)
            break;
    }
}

async function resetAnimation(){
    $("#head").removeClass("movingHead");
    $("#tail").removeClass("wagTail");
    $(".cat__eye").find('span').removeClass("kittyEyes");
    $(".cat__ear").removeClass("wiggleEar");
}

async function animationType1(){
    resetAnimation();
    $("#head").addClass("movingHead");
}

async function animationType2(){
    resetAnimation();
    $("#tail").addClass("wagTail");
}

async function animationType3(){
    resetAnimation();
    $(".cat__eye").find('span').addClass("kittyEyes");
}

async function animationType4(){
    resetAnimation();
    $(".cat__ear").addClass("wiggleEar");
}

async function animationType5(){
    resetAnimation();
    $("#head").addClass("movingHead");
    $("#tail").addClass("wagTail");
    $(".cat__eye").find('span').addClass("kittyEyes");
    $(".cat__ear").addClass("wiggleEar");
}


async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', 'solid 15px')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', 'solid 15px')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css('border-left', 'solid 10px')
}

async function eyesType4() {
    await $('.cat__eye').find('span').css('border-right', 'solid 10px')
}

async function eyesType5() {
    await $('.cat__eye').find('span').css('border-top', 'solid 7px')
    await $('.cat__eye').find('span').css('border-bottom', 'solid 7px')
    await $('.cat__eye').find('span').css('border-left', 'solid 7px')
    await $('.cat__eye').find('span').css('border-right', 'solid 7px')
}

async function eyesType6() {
    //await $('.cat__eye').find('span').css('border-top', 'solid 7px')
    await $('.cat__eye').find('span').css('border-bottom', 'solid 7px')
    await $('.cat__eye').find('span').css('border-left', 'solid 7px')
    await $('.cat__eye').find('span').css('border-right', 'solid 7px')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType1() {
    // Long
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType2() {
    //Longer
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "63px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType3() {
    // Long Left
    $('.cat__head-dots').css({ "transform": "rotate(20deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType4() {
    // Long Right
    $('.cat__head-dots').css({ "transform": "rotate(-20deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType5() {
    // Long Spread
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(28deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-28deg)", "height": "42px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType6() {
    //Longer Spread
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "63px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(28deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-28deg)", "height": "50px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
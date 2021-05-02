var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    earColor(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationpattern').val(dna.decorationPattern)
    decorationMidColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#decorationmid').val(dna.decorationMidcolor)
    decorationSidesColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#decorationsides').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
  
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthColor(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})

$('#decorationpattern').change(()=>{
  var pattern = parseInt($('#decorationpattern').val())
  decorationVariation(pattern)
})

$('#decorationmid').change(()=>{
  var colorVal = $('#decorationmid').val()
  decorationMidColor(colors[colorVal],colorVal)
})

$('#decorationsides').change(()=>{
  var colorVal = $('#decorationsides').val()
  decorationSidesColor(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})

// Version conflict workarround for the Attributes tab

$('#catAttributesTabButton').click(() =>{
  // remove active and show from other tab and active from nav
  $("#catColorsTab").removeClass("active");
  $("#catColorsTab").removeClass("show");
  $("#catColorsTabButton").removeClass("active");
  // add active to catColorTab
  $("#catAtrributesTab").addClass("active");
  $("#catAtrributesTab").addClass("show");
  $("#catAttributesTabButton").addClass("active");
})

$('#defaultCatButton').click(() =>{
  renderCat(defaultDNA);
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$('#randomCatButton').click(() =>{
  colorVal=getRndInteger(10,98);
  $('#bodycolor').val(colorVal);
  headColor(colors[colorVal],colorVal);

  colorVal=getRndInteger(10,98);
  $('#mouthcolor').val(colorVal);
  mouthColor(colors[colorVal],colorVal);

  colorVal=getRndInteger(10,98);
  $('#eyecolor').val(colorVal);
  eyeColor(colors[colorVal],colorVal);

  colorVal=getRndInteger(10,98);
  $('#earcolor').val(colorVal);
  earColor(colors[colorVal],colorVal);

  // attributes

  shape=getRndInteger(1,7);
  $('#eyeshape').val(shape);
  eyeVariation(shape);

  pattern=getRndInteger(1,7);
  $('#decorationpattern').val(pattern);
  decorationVariation(pattern);

  colorVal=getRndInteger(10,98);
  $('#decorationmid').val(colorVal);
  decorationMidColor(colors[colorVal],colorVal);

  colorVal=getRndInteger(10,98);
  $('#decorationsides').val(colorVal);
  decorationSidesColor(colors[colorVal],colorVal);

  animation=getRndInteger(1,6);
  $('#animation').val(animation);
  animationVariation(animation);
})


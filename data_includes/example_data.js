var shuffleSequence = seq("picture", "sound");

PennController.ResetPrefix(null);
PennController.AddHost("https://www.w3schools.com/tags/");

var items = [

    ["picture", "PennController", PennController(
    
        newText("instructions", "Please look at the image below and click on the button")
            .print()
        ,
        newImage("smiley", "smiley.gif")
            .print()
        ,
        newButton("validation", "Validate")
            .print()
            .wait()
            
    )]
    ,
    ["sound", "PennController", PennController(
    
        newText("instructions", "Please press any key to start playing the soundfile")
            .print()
        ,
        newKey("anyKey", "")
            .wait()
        ,
        getText("instructions")
            .remove()
        ,
        newAudio("horse", "horse.mp3")
            .play()
            .wait()
        ,
        newText("thanks", "Thank you for listening")
            .print()
        ,
        newButton("finish", "Click here to finish")
            .print()
            .wait()
    )]
];
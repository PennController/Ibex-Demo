var shuffleSequence = seq("picture", "sound");

PennController.AddHost("https://www.w3schools.com/tags/");

var p = PennController.instruction;

var items = [

    ["picture", "PennController", PennController(
    
        p("Please click on the image below")
        ,
        p("smiley.gif")
            .click()
            
    )]
    ,
    ["sound", "PennController", PennController(
    
        p("Please press any key to start playing the soundfile")
            .id("msgStart")
        ,
        p.key()
        ,
        p("msgStart").remove()
        ,
        p("horse.mp3")
            .wait()
        ,
        p("Thank you for listening")
        ,
        p("Click here to finish")
            .click()
    
    )]
];
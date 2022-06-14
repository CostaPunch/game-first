var block = document.getElementById("block");
var man = document.getElementById("man");
var wheel = document.getElementById("wheel");
var cactus = document.getElementById("cactus");



function jump() {

    if (man.classList != "animate") {
        man.classList.add("animate");
    }
    setTimeout(function() {
        man.classList.remove("animate");
    }, 700);
}



var checkDead = setInterval(function() {

        var manTop = parseInt(window.getComputedStyle(man).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var wheelLeft = parseInt(window.getComputedStyle(wheel).getPropertyValue("left"));
        var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (wheelLeft < 180 && wheelLeft > 160 && manTop >= 50) {
            wheel.style.animation = "none";
            wheel.style.display = "none";
            alert("It is your first try. To carry on, please refresh the page again, but stay away from the CACTUS");

        }
        if (blockLeft < 180 && blockLeft > 160 && manTop >= 50) {
            block.style.animation = "none";
            block.style.display = "none";
            alert("It is your second try. To carry on, please refresh the page again, but stay away from the CACTUS");

        }
        if (cactusLeft < 220 && cactusLeft > 190 && manTop >= 50) {
            cactus.style.animation = "none";
            cactus.style.display = "none";
            window.location.href = "gameover.html";
        }
    },
    10);


//Clock activation//

var Clock = {
    totalSeconds: 0,
    start: function() {
        if (!this.interval) {
            var self = this;

            function pad(val) { return val > 9 ? val : "0" + val; }
            this.interval = setInterval(function() {
                self.totalSeconds += 1;

                document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
                document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
            }, 1000);
        }
    },
};

document.addEventListener("click", function() { Clock.start(); });



/* Gameover restart */

document.getElementById("startButton").addEventListener("click", function() { window.location.href = "index.html"; });



//play after the user interacts with the page
document.querySelector('button').addEventListener('click', function() {
    context.resume().then(function() {
        play();
    });
});

/*
//set minutes
var mins = 2;

//calculate the seconds
var secs = mins * 60;

//countdown function is evoked when page is loaded
function countdown() {
    setTimeout('Decrement()', 60);
}

//Decrement function decrement the value.
function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        //if less than a minute remaining
        //Display only seconds value.
        if (seconds < 59) {
            seconds.value = secs;
        }

        //Display both minutes and seconds
        //getminutes and getseconds is used to
        //get minutes and seconds
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        //when less than a minute remaining
        //colour of the minutes and seconds
        //changes to red
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        //if seconds becomes zero,
        //then page alert time up
        if (mins < 0) {
            alert('you won');
            minutes.value = 0;
            seconds.value = 0;
        }
        //if seconds > 0 then seconds is decremented
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    //minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away 
    //from total seconds remaining
    return secs - Math.round(mins * 60);
}

*/
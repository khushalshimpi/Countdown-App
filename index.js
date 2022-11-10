let demo = document.getElementById("demo");
// console.log(demo);

let deadline = new Date("Jun, 2023 12:00:00").getTime();
// console.log(deadline);

// let now = new Date().getTime();
// let time = deadline - now;
// let days = Math.floor(time / (1000 * 60 * 60 * 24))
// console.log(days);

let x = setInterval(function(){
    let now = new Date().getTime();
    let time = deadline - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60) );
    var seconds = Math.floor((time % (1000 * 60)) / 1000 );

     // console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

    demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if(time < 0){
        clearInterval(x);
        demo.innerHTML = "Time is Up!";
    }

}, 1000);




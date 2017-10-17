var students = [
//    students go here
];
function newStudent() {
    var twister = new MersenneTwister();
    document.getElementById("icon").classList.remove('hidden');
    setTimeout(function(){
        // do stuff
        document.getElementById("icon").classList.add('hidden');
        document.getElementById("studentSelected").innerHTML = students[Math.floor(twister.random() * students.length)];
    }, 400 ); // end delay
    //wait(3000);
}
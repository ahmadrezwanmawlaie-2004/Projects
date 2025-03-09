var typed = new Typed("#typed-output", {
    strings: ["Hello, welcome to Jeweler Scholars HUB!", "I am Ahmad Rezwan Mawlaie, a Front-End Web Devloper!", "Join Our Community to Touch Humanity!"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// function toggle1() {
//     let element1 = document.getElementById("element1");
//     element1.toggleAttribute("hidden");

// }
function toggle1() {
    let element2 = document.getElementById("element2");
    element2.toggleAttribute("hidden");
    let element1 = document.getElementById("element1");
    element1.toggleAttribute("hidden");
}
function toggle2() {
    let element2 = document.getElementById("element2");
    element2.toggleAttribute("hidden");
    let element1 = document.getElementById("element1");
    element1.toggleAttribute("hidden");
}
function badgeClick() {
    document.getElementById("badge").innerHTML = "Purchase";
    document.getElementById("badge1").innerHTML = "Purchase";
    document.getElementById("badge2").innerHTML = "Purchase";
    document.getElementById("badge3").innerHTML = "Purchase";
    document.getElementById("badge4").innerHTML = "Purchase";
    document.getElementById("badge5").innerHTML = "Purchase";
    document.getElementById("badge6").innerHTML = "Purchase";

    let badgeAppear = document.getElementById("badgeap");
    badgeAppear.toggleAttribute("hidden");

    let badgeAppear1 = document.getElementById("badgeap1");
    badgeAppear1.toggleAttribute("hidden");

    let badgeAppear2 = document.getElementById("badgeap2");
    badgeAppear2.toggleAttribute("hidden");

    let badgeAppear3 = document.getElementById("badgeap3");
    badgeAppear3.toggleAttribute("hidden");

    let badgeAppear4 = document.getElementById("badgeap4");
    badgeAppear4.toggleAttribute("hidden");

    let badgeAppear5 = document.getElementById("badgeap5");
    badgeAppear5.toggleAttribute("hidden");

    let badgeAppear6 = document.getElementById("badgeap6");
    badgeAppear6.toggleAttribute("hidden");
}
function badgeMouseOver() {
    document.getElementById("badge").innerHTML =  "New";
    document.getElementById("badge1").innerHTML = "New";
    document.getElementById("badge2").innerHTML = "New";
    document.getElementById("badge3").innerHTML = "New";
    document.getElementById("badge4").innerHTML = "New";
    document.getElementById("badge5").innerHTML = "New";
    document.getElementById("badge6").innerHTML = "New";

    let badgeAppear = document.getElementById("badgeap");
    badgeAppear.toggleAttribute("hidden");

    let badgeAppear1 = document.getElementById("badgeap1");
    badgeAppear1.toggleAttribute("hidden");

    let badgeAppear2 = document.getElementById("badgeap2");
    badgeAppear2.toggleAttribute("hidden");

    let badgeAppear3 = document.getElementById("badgeap3");
    badgeAppear3.toggleAttribute("hidden");

    let badgeAppear4 = document.getElementById("badgeap4");
    badgeAppear4.toggleAttribute("hidden");

    let badgeAppear5 = document.getElementById("badgeap5");
    badgeAppear5.toggleAttribute("hidden");

    let badgeAppear6 = document.getElementById("badgeap6");
    badgeAppear6.toggleAttribute("hidden");
}
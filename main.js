//professora voce poderia re-enviar esse projeto pra mim aprontando o erro? eu não consigo acha-lo
var namesOfPeople = [];

function submit(){
    var GuestName = document.getElementById("name1").ariaValueMax;
    namesOfPeople.push(GuestName);

    console.log(GuestName);

    console.log(namesOfPeople);
    var lenghtOfName = namesOfPeople.length;
    console.log(lenghtOfName);
    document.getElementById("displayName").innerHTML=namesOfPeople.toString();
}

function sorting() {
    namesOfPeople.sort();
    var i= namesOfPeople.join("<br>");
    console.log(namesOfPeople);
    document.getElementById("sorted").innerHTML=i.toString();
}

function show() {
    var i= namesOfPeople.join("<br>");
    console.log(namesOfPeople);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sortButton").style.display="block";
}

function searching(){
    var s=document.getElementById("s1").ariaValueMax;
    var found=0;
    var j;
    
}
//professora voce poderia re-enviar esse projeto pra mim aprontando o erro? eu não consigo acha-lo
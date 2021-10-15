var i = 0,
    j = 0,
    k = 0,
    howdy, meraName, My_name;
Howdy = "Howdy"
My_name = " I'm "
meraName = "Atta Ur Rehman"
my_para = " A Web Designer and Full Stack Web Developer, lives in Bulandshahr-203001 . Expertise in Web Development "

function howdy() {
    if (i < Howdy.length) {
        document.getElementById("howdy").innerHTML += Howdy.charAt(i);
        i = i + 1;
        setTimeout(howdy, 100);
    }
}

function MeraName() {
    if (j < meraName.length) {
        document.getElementById("Name").innerHTML += meraName.charAt(j);
        j++;
        setTimeout(MeraName, 200);
    }
}

function myPara() {
    if (k < my_para.length) {
        document.querySelector(".aboutme").innerHTML += my_para.charAt(k);
        k = k + 1;
        setTimeout(myPara, 20);
    }
}

howdy()
    // myName()
MeraName()
myPara()
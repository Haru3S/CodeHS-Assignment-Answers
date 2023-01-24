// This code gives a syntax error
// create your own code.

function start(){

    alert(create);

}

function encrypt(){
    var baseString=document.getElementById("en").value;
    encodedString=window.btoa(baseString);
    document.getElementById("de").value=encodedString;
}

function decrypt(){
    var decodedString=window.atob(encodedString);
    document.getElementById("de").value=decodedString;
}

function plainText(){
   ("SSdtIGdvaW5nIHRvIGxvb2sgYXQgcmVkZGl0IHRvIGZpbmlzaCB0aGlzIGxhdGVyLg==");

}

function convert(){
    var convert = encrypt.plainText;
}

function standard(){
    var get_standard = decrypt.convert;
}

function create(){
    var send = ("Getting something from reddit my head is melting");
}
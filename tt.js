var password= document.getElementById("password")
function getPassword(){
    var char =" 0123456789kjhfdaxvk,.$jk*~?><{}|\i%&@";
    var passLength = 10;
    var password="";
    for (var i = 0;i < passLength; i++){
        var randNum = Math.floor(Math.random() * char.length);
        password += char.substring(randNum,randNum + 1);
    }
    document.getElementById("password").value = password;
}
function copyPass(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
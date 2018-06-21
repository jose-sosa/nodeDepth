$(document).ready(function() {

document.getElementById("node-button").addEventListener("click", checkForNode);

function checkForNode() {
    let maybeNode = document.getElementById("user-input").value;
    console.log(maybeNode);
    
    if(maybeNode === "A"|| maybeNode == "B" || maybeNode == "C" || maybeNode == "D" || maybeNode == "E" || maybeNode == "F"){
        let someValue = document.getElementById("node-" + maybeNode).value;
        if(someValue  == ""){
            $("#result").text("");
            document.getElementById("result").append("Node exists but there is nothing there");
        }else{
            $("#result").text("");
            //document.getElementById("result").text("");
            document.getElementById("result").append(someValue);
        }
        
    } else {
        $("#result").text("");
        //document.getElementById("result").text("");
        document.getElementById("result").append("Node does not exist...");
    }
}

});
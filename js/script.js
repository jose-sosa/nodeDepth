$(document).ready(function() {

document.getElementById("node-button").addEventListener("click", checkForNode);
// let A = document.getElementById("node-A");
// let B = document.getElementById("node-B");
// let C = document.getElementById("node-C");
// let D = document.getElementById("node-D");
// let E = document.getElementById("node-E");
// let F = document.getElementById("node-F");

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
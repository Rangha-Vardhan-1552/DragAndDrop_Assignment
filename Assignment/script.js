function ondragStart(event){
    event.dataTransfer.setData('text',event.target.id);

    event.currentTarget.style.backgroundColor='yellow';
}

function ondragOver(event){
    event.preventDefault();
}

function onDrop(event){
    const id =event.dataTransfer.getData('text')
    const drag_element=document.getElementById(id);
    const droped_element=event.target;
    droped_element.appendChild(drag_element);
    ///const message=alert("item sucessfully droped");
    displayMessage("Item dropped successfully!");   


    event.dataTransfer.clearData();

}
function displayMessage(message) {
    var messageElement = document.createElement("p");
    messageElement.innerHTML = message;
    document.body.appendChild(messageElement);
    setTimeout(function() {
        document.body.removeChild(messageElement);
    }, 2000);
}



var container1 = document.getElementById("container_1");
var container2 = document.getElementById("container_2");
var originalItems = Array.from(container1.getElementsByClassName("drag_item"));

// Function to reset the containers
function reset() {
    container2.innerHTML = "";
    originalItems.forEach(function(item) {
        container1.appendChild(item);
    });
}

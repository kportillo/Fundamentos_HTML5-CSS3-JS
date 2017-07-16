var interests = [];

var drawInterests = function(){
    $("#interestsContainer").empty();

    if (interests.length == 0) {
        $("#interestsContainer").append("<li>No seas tímido!, dime que te gusta hacer ;)</li>");
    } else {
        var contentToAdd = '';
        for (var index = 0; index < interests.length; index++) {
            contentToAdd += '<div class="intereses"><button class="deleteInterest" data-interest-id="' + interests[index].id + 
                '">&times;</button><li class="interest-item">' + interests[index].name + '</li></div>';
        }
        $("#interestsContainer").append(contentToAdd);
    }
}

var getInterests = function(){
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "http://localhost:8000/api/interests", true);
    XHR.setRequestHeader("Content-Type", "application/json");
    
    XHR.onreadystatechange = function(){
        
        if (XHR.readyState === 4) {
            interests = JSON.parse(XHR.responseText);            
            drawInterests();
        }else if (XHR.readyState === 4 && XHR.status === 404){
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

var createInterest = function (name) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "http://localhost:8000/api/interests", true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4) {
            interests.push(JSON.parse(XHR.responseText));
            drawInterests();// Interests();
        }else if(XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify({"name":name}));
}

var deleteInterest = function(id){
    var XHR = new XMLHttpRequest();
    XHR.open("DELETE", "http://localhost:8000/api/interests/" + id, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function(){
        if (XHR.readyState === 4) {
            console.log("Interest deleted!");
            getInterests();
        }else if (XHR.readyState === 4 && XHR.status === 404){
            console.log("Página no encontrada");
        }
    }

    XHR.send();
}

document.getElementById("createInterest").addEventListener("click", function(event){
    event.preventDefault();
    var interes = document.getElementById("newInterestName").value;
    if (interes !== "") {
        createInterest(interes);  
        document.getElementById("newInterestName").value = "";
    }
});

getInterests();

$(document).on('click', '.deleteInterest', function(){
    var id = $(this).data("interestId");
    deleteInterest(id);    
});
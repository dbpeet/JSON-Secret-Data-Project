let artworks;

function getArt(button) {
  button.style.display = "none"; // hide button
    document.getElementById("realArt").style.visibility = "visible"; // show button
  //   The line below will pull the data from the API
  fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers"
  )
    //   The line below will pull the data from the stored JSON file
    //   fetch("/ex-json/astros.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log(data);

      // Update the Message
      document.getElementById(
        "headline"
      ).innerHTML = `Secret Data Is Doing Stuff!`;

      // Add each Astronaut to their craft
      artworks = data.objectIDs;
      artworks.forEach(objectID => {
        //console.log(objectID);
        AddArt(objectID);
      });
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}

function AddArt(objectID) {
  let div = document.createElement("div");
  stringID = objectID.toString();
  //div.style.height = `${objectID[0]*100}px`;
  //console.log(div.style.height);
  div.style.width = `${stringID[1]*100}px`;
  div.style.padding = `${stringID[3]*10}px`;
  div.style.backgroundColor = `black`;
  div.innerHTML = "🐋"

  div.style.display = "inline-block";
  div.classList.add("anArt");
  document.getElementById("secrets").appendChild(div);
}

function getRealArt(button) {
  button.style.display = "none"; // hide button

    artworks.forEach(objectID => {
        console.log(objectID);
        //AddArt(objectID);
        addImage(objectID);
     });//
   //The line below will pull the data from the API
  
 function addImage(objectID) { 
   fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  )
    //   The line below will pull the data from the stored JSON file
    //   fetch("/ex-json/astros.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

    //   // Update the Message
    //   document.getElementById(
    //     "headline"
    //   ).innerHTML = `Secret Data Is Doing Stuff!`;

    //   // Add each Astronaut to their craft
    //   var arts = data.objectIDs;
    //   arts.forEach(objectID => {
    //     //console.log(objectID);
    //     AddArt(objectID);
    //   });
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });//
}

}
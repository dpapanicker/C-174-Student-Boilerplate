AFRAME.registerComponent("atoms", {
  init: async function () {

    //Get the compund details of the element
   


    barcodes.map(barcode => {
      
      //Call the function
      
    });

  },
  // functions to fetch details of the elements and colors.
  getCompounds: function () {
    

  },
  getElementColors: function () {
    

  },
  createAtoms: async function (element) {

    //Element data
    


    //Get the color of the element
    var colors = await this.getElementColors();

    //Scene
    var scene = document.querySelector("a-scene");

    //Add marker entity for BARCODE marker
    var marker = document.createElement("a-marker");

    //Set the attributes


    scene.appendChild(marker);

    //add the atom entity

   

    //Create atom card
    var card = document.createElement("a-entity");
    card.setAttribute("id", `card-${elementName}`);
    card.setAttribute("geometry", {
      primitive: "plane",
      width: 1,
      height: 1
    });

    card.setAttribute("material", {
      src: `./assets/atom_cards/card_${elementName}.png`
    });

    card.setAttribute("position", { x: 0, y: 0, z: 0 });
    card.setAttribute("rotation", { x: -90, y: 0, z: 0 });

    atom.appendChild(card);

    //Create nucleus
    var nucleusRadius = 0.2;
    var nucleus = document.createElement("a-entity");
    nucleus.setAttribute("id", `nucleus-${elementName}`);
    nucleus.setAttribute("geometry", {
      primitive: "sphere",
      radius: nucleusRadius
    });

    nucleus.setAttribute("material", "color", colors[elementName]);
    nucleus.setAttribute("position", { x: 0, y: 1, z: 0 });

    nucleus.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  
    //add the nucleus name entity (text to show the element symbol
  // on the sphere)
    var nucleusName = document.createElement("a-entity");
    nucleusName.setAttribute("id", `nucleus-name-${elementName}`);
    nucleusName.setAttribute("position", { x: 0, y: 0.21, z: -0.06 });
    nucleusName.setAttribute("rotation", { x: -90, y: 0, z: 0 });
    nucleusName.setAttribute("text", {
      font: "monoid",
      width: 3,
      color: "black",
      align: "center",
      value: elementName
    });

    nucleus.appendChild(nucleusName);

    atom.appendChild(nucleus);

    // add electron in the orbit
    var orbitAngle = -180;
    var electronAngle = 30;

    for (var num = 1; num <= numOfElectron; num++) {
      //Create orbit
      



      //Create electron revolution animation entity
      var electronGroup = document.createElement("a-entity");
      electronGroup.setAttribute("id", `electron-group-${elementName}`);
      electronGroup.setAttribute("rotation", {
        x: 0,
        y: 0,
        z: electronAngle
      });

      electronAngle += 65;

      //for revolution
      electronGroup.setAttribute("animation", {
        property: "rotation",
        to: `0 0 -360`,
        loop: "true",
        dur: 3500,
        easing: "linear"
      });

      orbit.appendChild(electronGroup);

      //Create electron
      
      


    }
  }
});

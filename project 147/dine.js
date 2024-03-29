

AFRAME.registerComponent("dine", {
   init: function () {
      var dine = document.createElement("a-entity");
      var texture = "https://raw.githubusercontent.com/whitehatjr/VR-PRO-C147/main/assets/dining-table.jpeg"
  
      dine.setAttribute("id",id);
      dine.setAttribute("position",position);
      dine.setAttribute("material","src",texture)
 
      
   } ,
 });
 
 




////    function for images added /////////////
function newImage(src,positionLeft, positionBottom){
    let image = document.createElement('img');
    image.src = src;
    image.style.position = 'fixed';
    image.style.left = positionLeft;
    image.style.bottom = positionBottom;
    document.body.append(image);
    
    }
    
////////   invoking each image to display //////
    newImage('assets/pine-tree.png', '450px', '200px');
    newImage('assets/green-character.gif', '100px', '100px');
    newImage('assets/tree.png', '200px', '300px');
    newImage('assets/pillar.png','350px', '200px');
    newImage('assets/crate.png', '150px','200px');
    newImage('assets/well.png', '500px', '425px');

/////  funstion for items to be added /////////    
    
    function newItem(src, positionLeft, positionBottom) {
        let item = document.createElement('img');
        item.src = src;
        item.style.position = 'fixed';
        item.style.left = positionLeft;
        item.style.bottom = positionBottom;
        document.body.append(item);
        

////   double clicking on itmes to make them disappear ////
        item.addEventListener('dblclick', function() {
          item.remove();
        });
      }
  
   ////// invoking each item to be displayed ////      
    
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png','165px','100px');
newItem('assets/staff.png' ,'600px','100px');



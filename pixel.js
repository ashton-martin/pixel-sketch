
$(document).ready(function() {
  let height, width; 
  let table = $("#pixelCanvas");
  let submit = $("#submitButton");
  let color = $("#colorPicker");
  let mouseDown = false; 

  function makeGrid(height, width) {
      let tbody=$("<tbody></tbody>")
      let row, column; 
      for (var i = 0; i < height; i++) {
        row = $('<tr></tr>');
        for (var j = 0; j < width; j++) {
          column = $('<td></td>');
          row.append(column);
          }
          tbody.append(row);
      }
      table.append(tbody);
    }

    submit.on("click",function(event) {
  //prevents page from refreshing
      event.preventDefault();
  //remove original table
      table.children().remove();
      height = $("#inputHeight").val();
      width = $("#inputWeight").val();
      makeGrid(height, width);
  });
  
  table.on("mousedown", function(){
    mouseDown = true; 
  })
  
  table.on("click", "td", function() {
    $(this).css('background-color', color.val());
    });
  
  table.on("mouseup", function() {
    mouseDown = false; 
    }); 
  
  table.on("mousemove", "td", function(event) {
    event.preventDefault();
    if(mouseDown) {
        $(this).attr('style', `background-color: ${color.val()}`); 
      };
     });
});
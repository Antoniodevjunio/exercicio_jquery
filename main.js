$(document).ready(function() {
    
    $('#taskForm').submit(function(event) {
      event.preventDefault(); 
  
      const taskName = $('#taskInput').val().trim();
  
      if (taskName !== '') {
        const newTask = $('<li></li>').text(taskName);
        $('#taskList').append(newTask);
  
  
        $('#taskInput').val('');
      }
    });
  
   
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  
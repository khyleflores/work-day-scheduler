//Pseudocode
//Variables
//currentday
//currentTime
//businesshours array?
//event

//Display the current day at the top of the calender when a user opens the planner.
//Present timeblocks for standard business hours when the user scrolls down.
//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//Allow a user to enter an event when they click a timeblock
//Save the event in local storage when the save button is clicked in that timeblock.
//Persist events between refreshes of a page


var currentTime = moment().format('k');

$(document).ready(function() {
    var currentDay = moment().format('dddd' + ', ' + 'MMMM Do YYYY');
    $('#currentDay').text(currentDay);
    
    //For each element that has class "hour", get it's id and compare to current time
    $( ".hour" ).each(function( index ) {
        var hourId = parseInt($(this).attr("id"));
        if (hourId == currentTime) {
            $(this).next().addClass("present");
          } else if (hourId < currentTime) {
            $(this).next().addClass("past");
          } else if (hourId > currentTime) {
            $(this).next().addClass("future");
          }
      });


    });
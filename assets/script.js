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

$(document).ready(function() {
    var currentDay = moment().format('dddd' + ', ' + 'MMMM Do YYYY');
    $('#currentDay').text(currentDay);
    
    var businessHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    
    
    
    
    
    
    
    });
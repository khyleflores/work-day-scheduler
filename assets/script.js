//Pseudocode
//Variables
//currentday DONE
//currentTime DONE
//event

//Display the current day at the top of the calender when a user opens the planner - DONE
//Present timeblocks for standard business hours when the user scrolls down. - DONE
//Color-code each timeblock based on past, present, and future when the timeblock is viewed. - DONE
//Allow a user to enter an event when they click a timeblock
//Save the event in local storage when the save button is clicked in that timeblock.
//Persist events between refreshes of a page

//Get current hour using moment
var currentTime = moment().format('k');

// Array where the localstorage events details will be stored
var timeEventLocalstorage = [];

$(document).ready(function() {
    //Get and assign current day using moment and format to ie Thursday, September 5th
    var currentDay = moment().format('dddd' + ', ' + 'MMMM Do YYYY');
    $('#currentDay').text(currentDay);

    //For each element that has class "hour", get it's id and compare to current time
    $( ".hour" ).each(function( index ) {
        //Get and assign hourID equals to id of each timeblock.
        var hourId = parseInt($(this).attr("id"));

        if (hourId == currentTime) {
            //Add class for css on the following sibling of label which is textarea 
            $(this).next().addClass("present");
          } else if (hourId < currentTime) {
            $(this).next().addClass("past");
          } else {
            $(this).next().addClass("future");
          }
      });

      //Event function for Save button with class of .saveBtn
      $(".saveBtn").on("click", function (event) {
        //get the value of the text area using prev() - Get the immediately preceding sibling of each element
        var timeEvent = $(this).prev().val();;
        console.log(timeEvent);
        console.log(event.target.attributes[0].value);
        //save the event to local storage
        localStorage.setItem(event.target.attributes[0].value, timeEvent);
      });

      //console.log(localStorage["5pm"]);

      $.each([ "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm" ], function( index, value ) {
        //console.log(localStorage[value]);
        $( "#" + value + "Event" ).text(localStorage[value]);
      });

    });
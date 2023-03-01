# Work Day Scheduler

## Description 
This application is a simple calendar application that allows a user to save events for each hour of the day. Moment.JS library was used to work with date and time. 

This application shows the current day at the top of the calender when a user opens the planner. It presents timeblocks for standard business hours when the user scrolls down. Each timeblock is color-coded based on the time whether it is past, present and future. It also allows the user to add important events when they click the timeblock and save button. Data will be saved in local storage and can be viewed even when page is refreshed. 

## Technologies Used
HTML | Javascript | JQuery | CSS | Bootstrap | MomentJS | Local Storage

## Installation

N/A

## Usage
To use this application and add important events to the daily planner, click on this [link](https://khyleflores.github.io/work-day-scheduler/ "Word Day Scheduler") or follow the link below:

https://khyleflores.github.io/work-day-scheduler/

When application loads, it will display the daily planner with time blocks from 9am to 5pm. Depending on the current time, the time block will be color-coded. Grey for when the time has passed; Red for the current hour; and Green for the future hours. The photo below has been taken at 10:47am on the 24th January 2023. 

![Work Day scheduler screenshot](/assets/screenshots/screenshot1.png)

To add an event, click on the textarea of the hour you want to select. Click the save button and this will save the event in Local Storage which will let the events persist between refreshes of page. 

![Add event screenshot](/assets/screenshots/screenshot2.png)

Below is how the local storage looks like when events are added. 
Users can alter the event by typing on the textarea again and clicking the save button. This will replace the previous event with the new one. 

![Add event screenshot](/assets/screenshots/screenshot3.png)

## Credits

Display. (n.d.). momentjs.com. Retrieved January 20 2023, from https://momentjs.com/docs/#/displaying/

jQuery.each(). (n.d.). jQuery.com. Retrieved January 24 2023, from https://api.jquery.com/jquery.each/

.prev(). (n.d.). jQuery.com. Retrieved January 24 2023, from https://api.jquery.com/prev/


## License

MIT License

Copyright (c) [2023] [KhyleFlores]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

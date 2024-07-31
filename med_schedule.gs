// This is supposed to clean up the schedules a bit by only displaying the groups you are in 
function syncCalendar() {
  // 1. Copy your the calendar id for your Google calendar linked to oasis
  var sourceCalendarId = '25ku2f4itr0gl155oks7aagjl4q263m4@import.calendar.google.com';
  // 2. Copy the id of the Google calendar you want to copy into 
  var targetCalendarId = 'REPLACE WITH YOUR GOOGLE CAL ID--MAKE SURE IT IS IN THE QUOTES';

  var sourceCalendar = CalendarApp.getCalendarById(sourceCalendarId);
  var targetCalendar = CalendarApp.getCalendarById(targetCalendarId);
  var events = sourceCalendar.getEvents(new Date('2024-07-28T00:00:00Z'), new Date('2024-12-31T23:59:59Z'));

  for (var i = 0; i < events.length; i++) {
    var event = events[i];

    var newEvent = {
        title: event.getTitle(),
        startTime: event.getStartTime(),
        endTime: event.getEndTime(),
        description: event.getDescription()
      };

    newEvent = cleanPopTitle(newEvent); 

    if (isPopGroup(newEvent)) {
      if (shouldCopyPop(newEvent)) {
        targetCalendar.createEvent(newEvent.title, newEvent.startTime, newEvent.endTime, {description: newEvent.description}); 
      }
    }
    else if (isEpiGroup(newEvent)) {
      if (shouldCopyEpi(newEvent)) {
        targetCalendar.createEvent(newEvent.title, newEvent.startTime, newEvent.endTime, {description: newEvent.description}); 
      }
    }
    else {
      targetCalendar.createEvent(newEvent.title, newEvent.startTime, newEvent.endTime, {description: newEvent.description}); 
    }
  }
}


function cleanPopTitle(newEvent) {

  title = newEvent.title; 

  if (title == 'Pop Health - M Chinatown Tour Group Project Groups 12'){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 1,2");
  }
  else if (title == 'Pop Health - M Chinatown Tour Group Project Groups 34'){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 3,4");
  }
  else if (title == 'Pop Health - M Chinatown Tour Group Project Groups 56'){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 5,6");
  }
  else if (title == "Pop Health - M Chinatown Tour Group Project Groups 78") {
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 7,8");
  }
  else if (title == "Pop Health - M Chinatown Tour Group Project Groups 910") {
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 9,10");
  }
  else if (title == "Pop Health - M Chinatown Tour Group Project Groups 1112"){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 11,12");
  }
  else if (title == "Pop Health - M Project Update and Discussion Groups 1-6"){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 1,2,3,4,5,6");
  }
  else if (title == "Pop Health - M Project Update and Discussion Groups 7-12"){
    newEvent.title = ("Pop Health - M Chinatown Tour Group Project Groups 7,8,9,10,11,12");
  }

  return newEvent; 

}

function isEpiGroup(newEvent){
  title = newEvent.title; 
  return title.includes('Team')
}

function shouldCopyEpi(newEvent) {
  title = newEvent.title; 
  // 3. REPLACE WITH YOUR TEAM LETTER
  var teamLetter = 'B'; 

  const regex = new RegExp(`Team\\s+(${teamLetter})\\b`);
  
  return regex.test(title);

}

function containsNumber(title, number) {
    const regex = new RegExp(`(?:^|[^\\d])${number}(?:$|[^\\d])`);
    return regex.test(title);
}

function shouldCopyPop(newEvent) {
  var title = newEvent.title; 
  // 4. REPLACE WITH YOUR GROUP NUMBER
  myPopGroup = 7;
  return containsNumber(title, myPopGroup)

}

function isPopGroup(newEvent) {
  var title = newEvent.title; 
  return title.includes('Pop Health')&& (title.includes('Group') || title.includes('Groups'))
}








# med_cal

Oasis doesn't distinguish based on your individual groups. This leads to overlapping calendars. 

This should solve that issue. Disclaimer: limited testing on my end so please double check that your final schedlue looks correct. It also won't update as Oasis updates (you'd have to rerun code). 

Before: 

<img width="126" alt="Screenshot 2024-08-05 at 5 27 29 PM" src="https://github.com/user-attachments/assets/7d50b782-9c2b-49b9-bcea-2ed7674f8574">

After: 

<img width="126" alt="Screenshot 2024-08-05 at 5 27 46 PM" src="https://github.com/user-attachments/assets/60a7be78-abcb-4912-a9e1-9f86e5d251c9">


Here's how you use the tool. 

1. This only works with Google calendar. Export your Oasis to Google calendar.

2. Click the plus button at the bottom left of the screen to create a new calendar. Click "Create new calendar." We will copy into this one. 
   <img width="254" alt="Screenshot 2024-07-30 at 8 16 18 PM" src="https://github.com/user-attachments/assets/de2fb2d3-77ef-424b-b173-750f8181dd64">

3. open the file in my github reposiory called "med_schedule.gs" This is the code.
   
   3a. Search on the internet for "Google App Scripting".
   
   3b. Login and click "New Project" 
<img width="1225" alt="Screenshot 2024-07-30 at 8 21 37 PM" src="https://github.com/user-attachments/assets/0be856de-0a77-4776-af85-ab2183beb280">

   3c. delete any existing code in that file. They start with some default template.
   
   3d. Paste my code into the file. It should now look like 
<img width="1389" alt="Screenshot 2024-07-30 at 8 23 19 PM" src="https://github.com/user-attachments/assets/e0289f8e-79e3-46fa-b7ae-6ef2f3e99904">

4. Don't hit run right away. We have to make few edits to:

   4a. In Google Calendar, click on your calendar from Oasis. Hit the three icons that take you to settings. Scroll down until you find calendar id. Copy that. 
<img width="625" alt="Screenshot 2024-07-30 at 8 24 27 PM" src="https://github.com/user-attachments/assets/9736d9b2-1c2b-4391-b5d2-1b1887b1a007">

   4b. paste that calendar id into the quotes in the code next to "sourceCalendarId." It should something like 
<img width="709" alt="Screenshot 2024-07-30 at 8 26 39 PM" src="https://github.com/user-attachments/assets/3d2f93e2-1d34-4d42-a7c3-582b8158e502">

   4c. Do the same for your target calendar id. This is the calendar that you created in step 2 of this tutorial. Paste the id into the quotes next to targetCalendarId.

   4d. Now scroll down and change myPopGroup variable. Change this to your group's number. I happen to be group 7. 
<img width="442" alt="Screenshot 2024-07-30 at 8 28 44 PM" src="https://github.com/user-attachments/assets/4f6d124b-54a2-4f32-bfe0-c693178cc665">

   4e. Change your team letter. I happen to be letter B.  
<img width="464" alt="Screenshot 2024-07-30 at 8 29 27 PM" src="https://github.com/user-attachments/assets/a69fe1cb-cb05-4c9c-b613-f12ebe7767f3">

5.

  5a. Click the save icon on the toolbar.

  5b. make sure SyncCalendar is the function selected in the dropdown
  <img width="708" alt="Screenshot 2024-07-30 at 8 31 37 PM" src="https://github.com/user-attachments/assets/f4d36170-39ab-4d5b-8693-b412f9008257">

  5c. Click run. It might say you need permission. I can't recreate this on my computer since I already gave it permission. But you might need to hit "Advanced" and then "continute anways" or something along those lines.

  5d. It takes about 3-4 mins (my code isn't efficient) to run so just leave it until after it stops loading. 

6. Deselect your old calendar on Google Cal and enjoy your new one!

   

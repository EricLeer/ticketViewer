/* global tickets */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tickets, Experts } from '../imports/api/tickets.js';


Meteor.startup(() => {
  // code to run on server at startup
  if (Tickets.find().count() === 0) {
    
        const tickets = [
            {
            title: "Ticket 1",
            region: "Amsterdam",
            techWorking: ""
          },
          {
            title: "Ticket 2",
            region: "Amsterdam",
            techWorking: ""
          },
          {
            title: "Ticket 3",
            region: "Rotterdam",
            techWorking: ""
          },
          {
            title: "Ticket 4",
            region: "Den Hag",
            techWorking: ""
            }
        ];  
        
        tickets.forEach((ticket) => {Tickets.insert(ticket)}); 
    }
    
    if (Experts.find().count() === 0) {
        
        const experts = [
          {
            name: "Expert 1",
            operating_region: "Amsterdam",
            workingOnTicket: ""
          },
          {
            name: "Expert 2",
            operating_region: "Berlin",
            workingOnTicket: ""
          },
          {
            name: "Expert 3",
            operating_region: "Amsterdam",
            workingOnTicket: ""
          },
          {
            name: "Expert 4",
            operating_region: "Den Hag",
            workingOnTicket: ""
          }
        ];
        
        experts.forEach((expert) => {Experts.insert(expert)}); 
    }
});



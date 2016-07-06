import { Tickets, Experts } from '../api/tickets.js';

export var matchTickets = function() {
      var ticketList = Tickets.find({techWorking: {$eq: ""}});
      var expertsList = Experts.find({});
      //console.log(ticketList[0])
      
      ticketList.forEach(function(ticket) {
        //console.log(ticket);
        var expert = Experts.findOne({operating_region: ticket.region, workingOnTicket: {$eq: ""}});
        if (expert) {
          var color = "#"+((1<<24)*(Math.random()*0.5 + 0.5)|0).toString(16);
          ticket.techWorking = expert.name;
          ticket.matchDate = new Date();
          ticket.color = color;
          expert.workingOnTicket = ticket.title;
          expert.color = color;
          Tickets.update(ticket._id, ticket);
          Experts.update(expert._id, expert);
        }
      })
}
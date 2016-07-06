import { Tickets, Experts } from '../api/tickets.js';

export var submitTicket = function(ticket) {
    ticket.techWorking = "";
    ticket.matchDate = "";
    Tickets.insert(ticket);
};

export var submitExpert = function(expert) {
    expert.workingOnTicket = "";
    Experts.insert(expert);
};

export var removeTicket = function(ticket) {
    var expert = Experts.find({workingOnTicket: {$eq: ticket.title}}).fetch()[0];
    if (expert){
        expert.workingOnTicket = "";
        expert.color = "";
        Experts.update(expert._id, expert);
    }
    Tickets.remove(ticket._id);
}

export var removeExpert = function(expert) {
    var ticket = Tickets.find({techWorking: {$eq: expert.name}}).fetch()[0];
    if (ticket) {
        ticket.techWorking = ""
        ticket.color = ""
        ticket.matchDate = ""
        Tickets.update(ticket._id, ticket);
    }
    Experts.remove(expert._id);
}

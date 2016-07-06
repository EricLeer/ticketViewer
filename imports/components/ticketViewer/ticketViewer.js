import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tickets, Experts } from '../../api/tickets.js';
import { matchTickets } from '../../api/matchTickets.js'
import { submitTicket, submitExpert, removeTicket, removeExpert } from '../../api/submit.js'

import template from './ticketViewer.html';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      tickets() {
        return Tickets.find({});
      },
      experts() {
        return Experts.find({});
      },
      assignments() {
        return Tickets.find({techWorking: {$ne: ""}})
      }
    })
    
    $scope.addTicket = {};
    
    $scope.addExpert = {};
    
    $scope.match = function() {
      matchTickets()
    }
    
    function checkObject(object) {
      return !(Object.keys(object).length === 0 && object.constructor === Object)
    }
    $scope.submitTicket = function() {
//      console.log($scope.addTicket);
    if (checkObject($scope.addTicket)) {
        submitTicket($scope.addTicket);
        $scope.addTicket = {};
      }
    }
    
    $scope.submitExpert = function() {
//      console.log($scope.addTicket);
      if (checkObject($scope.addExpert)) {
        submitExpert($scope.addExpert);
        $scope.addExpert = {};
      }
    }
    
    $scope.removeTicket = function(ticket) {
    //  console.log(id);
      removeTicket(ticket);
    }
    
    $scope.removeExpert = function(ticket) {
      removeExpert(ticket);
    }
  }
}


export default angular.module('ticketViewer',[
  angularMeteor
])
  .component('ticketViewer', {
    templateUrl: 'imports/components/ticketViewer/ticketViewer.html',
    controller: ['$scope', TodosListCtrl]
  });
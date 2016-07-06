import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ticketViewer from '../imports/components/ticketViewer/ticketViewer';
 
angular.module('ticket-viewer', [
  angularMeteor,
  ticketViewer.name
]);

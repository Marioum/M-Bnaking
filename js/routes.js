angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home.simulateurDeCrDit', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/simulateurDeCrDit.html',
        controller: 'simulateurDeCrDitCtrl'
      }
    }
  })

  .state('home.agences', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/agences.html',
        controller: 'agencesCtrl'
      }
    }
  })

  .state('home.contacts', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('home', {
    url: '/page2',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('home.espaceCLient', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/espaceCLient.html',
        controller: 'espaceCLientCtrl'
      }
    }
  })

  .state('home.mesComptes', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/mesComptes.html',
        controller: 'mesComptesCtrl'
      }
    }
  })

  .state('home.consultationComptes', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/consultationComptes.html',
        controller: 'consultationComptesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page2/page2')

  

});
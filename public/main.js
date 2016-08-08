(function() {
angular.module('GraceGamble', ['ui.router'])
     .config(GraceRouter)

     GraceRouter.inject = ["$stateProvider", "$urlRouterProvider"]

     function GraceRouter ($stateProvider, $urlRouterProvider) {
          $stateProvider
               .state ('home', {
                    url: '/',
                    templateUrl: 'home.html'
               })
               .state ('projects', {
                    url: '/projects',
                    templateUrl: 'projects.html'
               })
               .state ('experience', {
                    url: '/experience',
                    templateUrl: 'experience.html'
               })
               .state ('contact', {
                    url: '/contact',
                    templateUrl: 'contact.html'
               })
               $urlRouterProvider.otherwise('/')
     }
})()

'use strict';

let registrationController = function(authService, $state) {
    this.doRegister = () => {
        authService.registration(this.email, this.password)
            .then(response => {
                console.log(response);
                $state.go('login');
            });
    }
}

registrationController.$inject = ['authService', '$state'];

export default registrationController;
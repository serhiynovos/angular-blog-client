'use strict';

let loginController = function(authService, $state) {
    this.doLogin = () => {
        authService.login(this.email, this.password)
            .then(response => {
                localStorage.token = response.data.token;
                $state.go('home');
            });
    }
}

loginController.$inject = ['authService', '$state'];

export default loginController;
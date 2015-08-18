Accounts.ui.config({
    extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: 'nome'
    }],
    requestPermissions: {
        facebook: ['email', 'user_about_me']
    }
});
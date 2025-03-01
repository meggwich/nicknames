class Validator {
    constructor(login) {
        this.login = login;
    }

    validateUsername() {
        return this.containCorrectSymbols() &&
        this.checkStart() &&
        this.checkEnd() &&
        this.checkNumberGroups();
    }

    containCorrectSymbols() {
        const re = /^[\w\d\-_]+$/i;
        return re.test(this.login);
    }

    checkStart() {
        const re = /^[^\d\-_]/;
        return re.test(this.login);
    }

    checkEnd() {
        const re = /[^\d\-_]$/;
        return re.test(this.login);
    }

    checkNumberGroups() {
        const re = /\d{4}/;
        return !re.test(this.login);
    }

}

export default Validator;

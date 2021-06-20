// Standard version
class Validator {
    isEmail(str) {
        let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (str.match(mailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(str) {
        let domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (str.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDate(str) {
        let dateFormat = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;
        if (str.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(str) {
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (str.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

var validator = new Validator();

console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

// Static version
class ValidatorStatic {
    static isEmail(str) {
        let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (str.match(mailFormat)) {
            return true;
        } else {
            return false;
        }
    }
    
    static isDomain(str) {
        let domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (str.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }
    
    static isDate(str) {
        let dateFormat = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;
        if (str.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }
    
    static isPhone(str) {
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (str.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));
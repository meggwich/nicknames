import Validator from "../js/Validator";

describe('Validator', () => {
    let validator;

    test('should accept valid username', () => {
        validator = new Validator('username');
        expect(validator.validateUsername()).toBe(true);

        validator = new Validator('user-name');
        expect(validator.validateUsername()).toBe(true);

        validator = new Validator('user_name');
        expect(validator.validateUsername()).toBe(true);

    });

    test('should reject invalid symbols', () => {
        validator = new Validator('user@name');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('user.name');
        expect(validator.validateUsername()).toBe(false);
    });

    test('should reject names starting or ending with invalid characters', () => {
        validator = new Validator('1username');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('username1');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('-username');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('username-');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('_username');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('username_');
        expect(validator.validateUsername()).toBe(false);
    });

    test('should reject names with more than three digits in a row', () => {
        validator = new Validator('user1234name');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('user123a');
        expect(validator.validateUsername()).toBe(true); 

        validator = new Validator('a12us800e90r');
        expect(validator.validateUsername()).toBe(true);

        validator = new Validator('a12us800e9022r');
        expect(validator.validateUsername()).toBe(false);

        validator = new Validator('a12u_s-800e90r');
        expect(validator.validateUsername()).toBe(true);

        validator = new Validator('a12u_s-8000e90r');
        expect(validator.validateUsername()).toBe(false);

    });

    test('should accept single-character names', () => {
        validator = new Validator('a');
        expect(validator.validateUsername()).toBe(true);

        validator = new Validator('1');
        expect(validator.validateUsername()).toBe(false);
    });
});
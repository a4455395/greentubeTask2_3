import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validatePassword][formControlName],[validatePassword][formControl],[validatePassword][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordValidator), multi: true }
    ]
})
export class PasswordValidator implements Validator {
    validate(c: AbstractControl): { [key: string]: any } {
        const pass = c.value;
        if (pass && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass)) {
            return {
                passwordCorrect: false
            };
        }
        return null;
    }
}
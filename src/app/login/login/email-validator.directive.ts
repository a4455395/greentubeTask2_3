import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validateEmail][formControlName],[validateEmail][formControl],[validateEmail][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
    ]
})
export class EmailValidator implements Validator {
    validate(c: AbstractControl): { [key: string]: any } {
        let email = c.value;
        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(email)) {
            return {
                emailCorrect: false
            };
        }
        return null;
    }
}
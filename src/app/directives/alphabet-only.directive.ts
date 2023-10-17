import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAlphabetOnly]',
})
export class AlphabetOnlyDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    const regex = /[^a-zA-Z]/g;
    const value = input.value.replace(regex, '');
    input.value = value;

    // Set a custom error when non-alphabet characters are present
    if (value !== input.value) {
      this.control?.control?.setErrors({ alphabetOnly: true });
    } else {
      this.control?.control?.setErrors(null);
    }
  }
}

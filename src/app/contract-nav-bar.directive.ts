import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appContractNavBar]'
})
export class ContractNavBarDirective {
  // Trigger the navbar menu to close if it is expanded
  @HostListener('click') onClick(navLink) {
    const $toggler = jQuery('.navbar-toggler');

    // Close the navbar if it is expanded by clicking the toggler via jQuery so that the normal animations occur
    if ($toggler.is(':visible')) {
      $toggler.click();
    }
  }
}

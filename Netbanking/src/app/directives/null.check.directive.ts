import { Directive, HostBinding, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[checkNull]'
})

export class NullCheckDirective {

    // @HostBinding('click')
    // @HostListener('click') checkNull (name: string) {
    //     console.log(';;;;;;;;;;;;;;;;;;;;;sss', name);

    // }

    @Input() set checkNull(name: string) {
        console.log(';;;;;;;;;;;;;;;;;;;;;sss', name);
    }

    constructor(elRef: ElementRef) {
        console.log(';;;;;;;;;;;;;;;;;;;;;fff', elRef.nativeElement.value);
    }
}
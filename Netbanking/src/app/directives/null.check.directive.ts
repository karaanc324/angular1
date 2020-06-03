import { Directive, HostBinding, HostListener, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[checkNull]'
})

export class NullCheckDirective implements OnInit{

    // @HostBinding('click')
    // @HostListener('click') checkNull (name: string) {
    //     console.log(';;;;;;;;;;;;;;;;;;;;;sss', name);

    // }
    @Input() userName: string;
    @Input() password: string;
    @Input() confPassword: string;

    @Input() set checkNull(name: string) {
        console.log(';;;;;;;;;;;;;;;;;;;;;sss', name);
    }

    @HostListener('click') signupClick(eventData: Event) {
        console.log("============ "+event)
    }

    constructor(private elRef: ElementRef) {
        console.log("directiv: " + this.password)
    }

    ngOnInit() {
        console.log("ngdirectiv: " + this.password)
        this.elRef.nativeElement.style.backgroundColor="green"
    }
}
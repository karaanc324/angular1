# Angular

## Component

## Data binding

## Event Emitter

## Local Reference / @ViewChild() / ElementReference

## ng-cotent

## Lifecycle 
	
	constructor() 
	ngOnChanges(changes: SimpleChanges) when any change happens
	ngOnInit() start of the comp
	ngDoCheck() gets called whenever angualar checks for any changes - 	promise, buttonclick etc.
	ngAfterContentInit() when a component gets loaded, after   constructor, ngOnInit and ngDoCheck
	ngAfterCntentChanged()
	ngAfterViewInit()
	ngAfterViewChecked

## Directives:

	- Adds custom behaviour to your HTML
	- Basically these are attributes of your HTML tags

	2 types:
		Attribute: only affects the element they are added to
		Structural: *ngIf => it affects whole dom (elements get deleted and added)

		- We cant have more than one structural directve on a single element. Means, we cant have ng if and for together on a single element

## Services:
	- Normal Class calling,
	- Dont create objcts, use dependency injections.
	- Add to properties array and ready to go.
	- Follows hierrachy, from top to bottom.
	- add in app.module.ts to have injection from service to service (	add @Injectable() decorator to the service)
	- Angular 6+, application wide access of service in different way 
		Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in @Injectable() :
		@Injectable({providedIn: 'root'})
		
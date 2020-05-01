import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // in param as a astring name of our local ref
  // @ViewChild(Component class name) serverNameInp
  @ViewChild('serverNameInp') serverNameInp: ElementRef
  // newServerContent = '';
  ngOnInit(): void {
  }

  onAddServer(contentInp: HTMLInputElement) {
    // console.log('addserver', contentInp.value)
    console.log(this.serverNameInp.nativeElement.value)
    this.serverCreated.emit({
      serverName: this.serverNameInp.nativeElement.value,
      serverContent: contentInp.value});
  }

  onAddBlueprint(contentInp: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: this.serverNameInp.nativeElement.value,
      serverContent: contentInp.value
    })
  }
}

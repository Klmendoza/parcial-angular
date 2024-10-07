import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() showAddModulEvent = new EventEmitter<void>();
  @Output() showModulListEvent = new EventEmitter<void>();

  showAddModul() {
    this.showAddModulEvent.emit();
  }

  showModulList() {
    this.showModulListEvent.emit();
  }
}

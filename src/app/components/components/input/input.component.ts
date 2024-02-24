import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public inputLabel?: string;
  @Output() confirmInput: EventEmitter<string> = new EventEmitter()
  public value: string | undefined;

  confirm(event: KeyboardEvent) {
    if (event.key !== "Enter") {
      return;
    }

    this.confirmInput.emit(this.value)
  }
}

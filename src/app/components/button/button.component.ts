import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button', // ovo ću embedati u header komponentu
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // ttl:string='btn'
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }


}
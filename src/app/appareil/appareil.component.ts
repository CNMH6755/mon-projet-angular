import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService) {
  }

  @Input() appareilName: String;
  @Input() appareilStatus: String;
  @Input() indexOfAppareil: number;
  @Input() id: number;


  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allume') {
      return 'green';
    } else if (this.appareilStatus == 'eteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {NavigatorService} from "../../service/navigator.service";

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent implements OnInit {
  @Input() route: string = 'frontpage';
  @Input() iconPath: string = '';
  @Input() text: string = 'some text, change \'text\' property for other text';

  constructor(private navigator: NavigatorService) { }

  ngOnInit(): void {
  }

  async routeTo() {
    await this.navigator.navigateTo(this.route);
  }

}

import { Component, OnInit } from '@angular/core';
import {NavigatorService} from "../../service/navigator.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private navigator: NavigatorService) { }

  ngOnInit(): void {
  }

  async routeToFront() {
    await this.navigator.navigateToFrontpage();
  }

}

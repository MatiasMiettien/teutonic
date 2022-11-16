import { Component, OnInit } from '@angular/core';
import {JavaRestService} from "../../service/java-rest.service";

@Component({
  selector: 'app-web-pages',
  templateUrl: './web-pages.component.html',
  styleUrls: ['./web-pages.component.scss']
})
export class WebPagesComponent implements OnInit {

  constructor(private javaRest: JavaRestService) { }

  serverResult: any = '';

  async ngOnInit() {
    await this.putTextToServerResult();
  }

  async putTextToServerResult() {
    /*const res: any = await this.javaRest.getResult();
    console.log("res")
    console.log("Res", res)
    this.serverResult = res.text;*/
  }

}

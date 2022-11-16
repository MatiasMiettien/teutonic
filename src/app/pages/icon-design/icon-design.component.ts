import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-design',
  templateUrl: './icon-design.component.html',
  styleUrls: ['./icon-design.component.scss']
})
export class IconDesignComponent implements OnInit {

  sending: boolean = false;
  companyName: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

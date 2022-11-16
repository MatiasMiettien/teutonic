import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  async navigateTo(page: string) {
    await  this.router.navigate(['/' + page]);
  }

  async navigateToFrontpage() {
    await this.router.navigate(['/etusivu']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaRestService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080/teuton_ba-1.0-SNAPSHOT/api';

  /*async getResult() {
    const res1 = await this.retsikutsu();
    console.log(res1);
    return;
    const res: any = await this.http.get(this.rootURL + '/hello-world');
    console.log('result');
    console.log(res.text);
    return res;
  }*/

  /*async getResult() {
    // May cause CORS error
    return new Promise(async (resolve, reject) => {
      // Url
      const url = `${this.rootURL}/hello-world`;

      // Body params
      const body = {};

      // Http request
      this.http.get(url)
        .subscribe((data: any) => {
          if (!!data) {      // If there is data in response (return data)
            resolve(data);
          } else {           //  If there is not any data in response (reject response)
            reject(data);
          }
        });
    });
  }*/
}

import { Injectable, Inject, ChangeDetectorRef } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StandardService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

    getLabelerTypes() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/labeler-types`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLabelerStatus() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/labeler-status`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getCountries() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/countries`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getChangwat() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/changwat`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getAmpur(changwatCode: string) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/std/ampur`, { changwatCode: changwatCode })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getTambon(changwatCode: string, ampurCode: string) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/std/tambon`, {
        changwatCode: changwatCode,
        ampurCode: ampurCode
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getGenericSuppliesTypes() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/generic-supplies-types`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getGenericTypes() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/generic-types`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  async getGenericAccount() {
    let rs: any = await this.authHttp.get(`${this.url}/std/generic-accounts`).toPromise();
    return rs.json();
  }
  
  async getProductTypes() {
    let rs: any = await this.authHttp.get(`${this.url}/std/type-product`).toPromise();
    return rs.json();
  }
  

  async getBidTypes() {
    let rs: any = await this.authHttp.get(`${this.url}/std/bid-types`).toPromise();
    return rs.json();
  }
  
  getGenericGroups() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/generic-groups`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getGenericDosages() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/std/generic-dosages`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}

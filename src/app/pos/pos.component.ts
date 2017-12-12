import { Component, OnInit } from '@angular/core';
import { HogService }                from '../hog.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  selectedValue = null;
  dataStaff: any[] = [];
  dataStation: string;
  resp: string;

  constructor(private Service: HogService) { }

  ngOnInit() {
    this.getStaff();
    this.getStation();
  }

  getStaff() {
    console.log('this.dataStaff');
    this.Service.getStaffPos()
        .subscribe(
          res => {
            const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }
            this.dataStaff = myArray[0];
            console.log(this.dataStaff);
          }
        );    
  }

  onSubmit(email: string, password: string, name: string, lastname: string, mobile_no: string, f: string) {
    console.log(email);
    this.Service.postStafftopup({email: email, password: password, name: name, lastname: lastname, mobile_no: mobile_no, type: 'Cashier'})
        .subscribe(
          res => {
            // this.dataStaff.push(res);
            this.resp = res;
            console.log(this.resp['data_name']['id']);
            if (this.resp['status_massage'] == 'OK') {
              const user_id = this.resp['data_name']['id'];
              this.Service.postPos({user_id: user_id, booth_id: f['station'], status: '1'})
                  .subscribe(
                    res => {
                      if (res['status'] == '200') {
                        this.getStaff();
                        console.log('etStafff');
                      }
                    }
                  );
            }
          }
        ); 
  }

  getStation() {
    this.Service.getStationpos()
        .subscribe(
          res => this.dataStation = res,
          error => alert(error),
          () => console.log(this.dataStation)
        );
  }

  onDelete(user_id: string, booth_id: string) {
    console.log(user_id + " " + booth_id);
    this.Service.deleteStaffPos({user_id: user_id, booth_id: booth_id})
        .subscribe(
          res => {
            if (res['status'] == '200') {
              this.getStaff();
              console.log('etStafff');
            }
          }
        )
  }

}

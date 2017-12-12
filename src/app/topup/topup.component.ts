import { Component, OnInit, Input }  from '@angular/core';
import { HogService }                from '../hog.service';
import { Ingredient }                from '../ingredient';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  selectedValue = null;
  @Input() item: Ingredient;
  idget: string;
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
    this.Service.getStaff()
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
              this.Service.postCashier({user_id: user_id, cashier_id: f['station'], status: '1'})
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
    this.Service.getStation()
        .subscribe(
          res => this.dataStation = res,
          error => alert(error),
          () => console.log(this.dataStation)
        );
  }

  onDelete(user_id: string, cashier_id: string) {
    console.log(user_id + " " + cashier_id);
    this.Service.deleteStaffTopup({user_id: user_id, cashier_id: cashier_id})
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

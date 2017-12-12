import { Component, OnInit } from '@angular/core';
import { HogService }                from '../hog.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  dataStationPos: any[] = [];
  dataStationCashier: any[] = [];
  btnRadio = ['POS', 'TopUp'];

  constructor(private Service: HogService) { }

  ngOnInit() {
    this.getStation();
  }

  getStation() {
    this.Service.getStations()
        .subscribe(
          res => {
            this.dataStationPos = res['Booths'],
            this.dataStationCashier = res['Cashiers']

            console.log(this.dataStationCashier)
          }
        )
  }

  onSubmit(name: string, f: string) {
    if (f['stationType'] != null) {
      if (f['stationType'] == 'TopUp') {
        this.Service.postBoothCashier({organizer_Id: '1', cashier_name: name, cashier_la: '0', cashier_long: '0'})
            .subscribe(
              res => {
                if (res['status'] == '200') {
                  this.getStation();
                  console.log('etStafff');
                }
              }
            )
      }
      else if (f['stationType'] == 'POS') {
        this.Service.postBoothPos({organizer_Id: '1', booth_name: name, booth_des: 'Booth Desciption'})
            .subscribe(
              res => {
                if (res['status'] == '200') {
                  this.getStation();
                  console.log('etStafff');
                }
              }
            )
      }
    }
  }

  onDeletePos(id: string) {
    this.Service.deleteBoothPos({id: id})
        .subscribe(
          res => {
            if (res['status'] == '200') {
              this.getStation();
              console.log('etStafff');
            }
          }
        )
  }

  onDeleteTopup(id: string) {
    this.Service.deleteBoothTopup({id: id})
      .subscribe(
        res => {
          if (res['status'] == '200') {
            this.getStation();
            console.log('etStafff');
          }
        }
      )
  }

}

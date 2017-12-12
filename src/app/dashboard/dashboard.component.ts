import { Component, OnInit }  from '@angular/core';
import { HogService }         from '../hog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  getData: string;
  dataUpdate : string;
  dataInfo: string;
  dataEntry: string;
  dataTransac: any[] = [];
  edited = false;
  btnRadio = ['0', '1', '2', '3'];

  dataTest: any[] = [];

  constructor
  (
    private Service: HogService
  ) { }

  ngOnInit() {
    // this.get();
    // this.getUser();
  }
  get() {
    this.Service.gateData().subscribe
    (
      data => this.getData = data,
      error => alert(error),
      () => console.log(this.getData)
    );
  }
  // getUser() {
  //   this.Service.gateUser().subscribe
  //   (
  //     data => this.getData = data,
  //     error => alert(error),
  //     () => console.log(this.getData)
  //   );
  // }

  postInfo(rfid: string) {
    if (rfid.length === 10) {
      this.Service.postInfo({rfid: rfid})
        .subscribe(
          res =>  this.dataInfo = res,
          error =>  alert(error),
          () => console.log(this.dataInfo)
        );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  postInfoTag(behindTag: string){
    var prepare = behindTag;
    var preparearr = prepare.match(/.{1,2}/g);
    var tag = parseInt( preparearr[3]+preparearr[2]+preparearr[1]+preparearr[0], 16);
    var tagpad = this.pad(tag,10);
    if (behindTag.length === 8) {
      this.Service.postInfo({rfid: tagpad})
          .subscribe(
            res => this.dataInfo = res,
            error => alert(error),
            () => console.log("ok")
          );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  updatRFID(rfid: string, formRef: string) {
    // formRef['radio']
    if (rfid.length === 10) {
      console.log(rfid);
      this.Service.putGate({rfid: rfid, gate_status: formRef["radio"]})
        .subscribe(
          res => this.dataUpdate = res,
          error => alert(error),
          () => console.log(this.dataUpdate)
        );
      setTimeout(()=>{
        this.dataUpdate = null;
        console.log(this.dataUpdate);
      },5000);  
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
      console.log(formRef['radio']);
    }
  }

  pad(value, length) {
    return (value.toString().length < length) ? this.pad("0"+value, length):value;
  }

  updateTag(behindTag: string, formRef: string) {
    var prepare = behindTag;
    var preparearr = prepare.match(/.{1,2}/g);
    var tag = parseInt( preparearr[3]+preparearr[2]+preparearr[1]+preparearr[0], 16);
    var tagpad = this.pad(tag,10);
    console.log(tagpad);
    if (behindTag.length === 8) {
      this.Service.putGate({rfid: tagpad, gate_status: formRef["radio"]})
          .subscribe(
            res => this.dataUpdate = res,
            error => alert(error),
            () => console.log(this.dataUpdate)
          );
      setTimeout(()=>{
        this.dataUpdate = null;
        console.log(this.dataUpdate);
      },5000);
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  postEntry(rfid: string) {
    if (rfid.length === 10){
      this.Service.postEntry({rfid: rfid})
          .subscribe(
            res => this.dataEntry = res,
            error => alert(error),
            () => console.log(this.dataEntry)
          );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  postEntryTag(behindTag: string) {
    var prepare = behindTag;
    var preparearr = prepare.match(/.{1,2}/g);
    var tag = parseInt( preparearr[3]+preparearr[2]+preparearr[1]+preparearr[0], 16);
    var tagpad = this.pad(tag,10);
    if (behindTag.length === 8 ) {
      this.Service.postEntry({rfid: tagpad})
          .subscribe(
            res => this.dataEntry = res,
            error => alert(error),
            () => console.log(this.dataEntry)
          );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  postTransac(rfid: string) {
    if (rfid.length === 10) {
      this.Service.postTransaction({rfid: rfid})
          .subscribe(
            res => {
              const myArray = [];
              for (let key in res) {
                myArray.push(res[key]);
              }
              // this.dataTransac = myArray;
              // console.log(this.dataTransac);

              const myArray2 = [];
              for (let i = 0; i < myArray.length; i++) {
                for (let j = 0; j < myArray[i].length; j++) {
                  myArray2.push(myArray[i][j]);
                }
              }
              this.dataTransac = myArray2;
              console.log(this.dataTransac);
            }
          );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

  postTransacTag(behindTag: string) {
    var prepare = behindTag;
    var preparearr = prepare.match(/.{1,2}/g);
    var tag = parseInt( preparearr[3]+preparearr[2]+preparearr[1]+preparearr[0], 16);
    var tagpad = this.pad(tag,10);
    if (behindTag.length === 8) {
      this.Service.postTransaction({rfid: tagpad})
          .subscribe(
            res => this.dataTransac = res,
            error => alert(error),
            () => console.log(this.dataTransac)
          );
    } else {
      alert("Input value and try submitting again");
      console.log("Error");
    }
  }

}

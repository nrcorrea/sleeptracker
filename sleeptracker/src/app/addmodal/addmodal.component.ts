import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss'],
})
export class AddmodalComponent implements OnInit {

  sdate:String
  edate:String

  constructor(private ModalController:ModalController) { }

  ngOnInit() {}


  cancel() {
    this.ModalController.dismiss({
      role:"cancel"
    });
  }

  updateSDate($event) {
  // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
  this.sdate = $event
  
}
  updateEDate($event) {
  // console.log($event); // --> wil contains $event.day.value, $event.month.value and $event.year.value
  this.edate = $event
  
}
  dismiss(){
    this.ModalController.dismiss({
      sdate:this.sdate,
      edate:this.edate,
      role:"confirm"
    })
  }
  confirm() {
    this.dismiss();
  }
}

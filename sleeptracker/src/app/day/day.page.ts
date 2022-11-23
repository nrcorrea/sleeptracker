import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-day',
  templateUrl: 'day.page.html',
  styleUrls: ['day.page.scss'],
})
export class DayPage {
	position:number = 1;
	note:string;

	constructor(public sleepService:SleepService, private logging: ModalController) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	logSleepiness() {
		let date = new Date();
		console.log(date);
		console.log(this.position);
		console.log(this.note);
		let log = new StanfordSleepinessData(this.position, date,this.note);
		this.sleepService.logSleepinessData(log);
		console.log(this.allSleepData);
	}
	
}
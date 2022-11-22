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
	date:Date;
	log:StanfordSleepinessData;

	constructor(public sleepService:SleepService, private logging: ModalController) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	async logSleepiness() {
		this.date = new Date();
		this.log = new StanfordSleepinessData(this.position, this.date);
		await this.logging.dismiss(this.log);
	}
	
}

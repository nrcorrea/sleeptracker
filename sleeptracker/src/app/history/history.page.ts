import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage {

	public sleepiness:boolean = false;
	public overnight:boolean = true;
	constructor(public sleepService:SleepService) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	showNight(){
		this.sleepiness = false;
		this.overnight = true;
	}
	showDay(){
		this.sleepiness = true;
		this.overnight = false;
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
	get allOvernightData(){
		return SleepService.AllOvernightData;
	}
	get allSleepinessData(){
		return SleepService.AllSleepinessData;
	}

}

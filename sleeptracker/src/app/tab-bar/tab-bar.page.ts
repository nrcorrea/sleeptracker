import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.page.html',
  styleUrls: ['./tab-bar.page.scss'],
})
export class TabBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change1(){
    document.getElementById("sunny").setAttribute("name", "sunny");
    document.getElementById("moon").setAttribute("name", "moon-outline");
    document.getElementById("file").setAttribute("name","file-tray-full-outline")
  }

  change2(){
    document.getElementById("sunny").setAttribute("name", "sunny-outline");
    document.getElementById("moon").setAttribute("name", "moon");
    document.getElementById("file").setAttribute("name","file-tray-full-outline")
  }

  change3(){
    document.getElementById("sunny").setAttribute("name", "sunny-outline");
    document.getElementById("moon").setAttribute("name", "moon-outline");
    document.getElementById("file").setAttribute("name","file-tray-full")
  }
}

// Angular
import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { setString, getString } from "application-settings";
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: "temakorok",
  templateUrl: "temakorok.component.html"
})
export class TemakorokComponent implements OnInit {
  temakorok: any = [];
  constructor(
    private location: Location,
    private page: Page
  ) { }

  ngOnInit() {
    const dataJson = getString("dataJson");
    this.temakorok = JSON.parse(dataJson).temakorok;
  }

  ngAfterViewInit() {
  }

  goBack() {
    this.page.actionBarHidden = true;
    this.location.back();
  }
}

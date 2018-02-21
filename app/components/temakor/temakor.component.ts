// Angular
import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { setString, getString } from "application-settings";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: "temakor",
  templateUrl: "temakor.component.html"
})
export class TemakorComponent implements OnInit {
  temakor: any = [];
  public constructor(
    private router: Router,
    private location: Location,
    private page: Page
  ) { }

  public ngOnInit() {
    const dataJson = getString("dataJson");
    const temakorok = JSON.parse(dataJson).temakorok;

    for (const temakor of temakorok) {
      if (temakor.url === this.router.url) {
        this.temakor = temakor;
        break;
      }
    }
  }

  goBack() {
    this.page.actionBarHidden = true;
    this.location.back();
  }
}

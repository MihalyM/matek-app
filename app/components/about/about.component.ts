// Angular
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Location } from "@angular/common";

import { Router } from "@angular/router";

import * as dialogs from "ui/dialogs";
import { Page } from "ui/page";
import { setString, getString } from "application-settings";

import { Config } from "../../shared/config";
import * as appversion from "nativescript-appversion";
import { isIOS, device, screen } from "platform";

let Http = require("http");

@Component({
  moduleId: module.id,
  selector: "about",
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {
  constructor(
    private page: Page,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

  goBack() {
    this.location.back();
  }
}

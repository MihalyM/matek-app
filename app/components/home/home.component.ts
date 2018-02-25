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
  selector: "home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {

  constructor(
    private page: Page,
    private router: Router
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this._getData();
    this._storeDeviceData();
  }

  private _storeDeviceData() {
    let lDeviceJson = {
      device_uuid: device.uuid,
      app_version_code: appversion.getVersionCodeSync(),
      app_version_name: appversion.getVersionNameSync(),
      device_type: device.deviceType,
      device_language: device.language,
      device_manufacturer: device.manufacturer,
      device_model: device.model,
      device_os: device.os,
      device_os_version: device.osVersion,
      device_sdk: device.sdkVersion,
      device_screen_scale: screen.mainScreen.scale,
      device_screen_height_dips: screen.mainScreen.heightDIPs,
      device_screen_height_pixels: screen.mainScreen.heightPixels,
      device_screen_width_dips: screen.mainScreen.widthDIPs,
      device_screen_width_pixels: screen.mainScreen.widthPixels
    };
    setString("deviceJson", JSON.stringify(lDeviceJson));
  }

  private _getData() {
    if (getString("dataJson") === undefined) {
      let defaultData = require("../../data/default.json");
      setString("dataJson", JSON.stringify(defaultData));
    }
  }

  goToPage(url: string) {
    this.page.actionBarHidden = false;
    this.router.navigate([url]);
  }
}

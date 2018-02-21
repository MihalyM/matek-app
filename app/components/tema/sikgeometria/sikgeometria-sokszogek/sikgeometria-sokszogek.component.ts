import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "ui/page";

import { TemaComponent } from '../../tema.component';

@Component({
  moduleId: module.id,
  selector: 'sikgeometria-sokszogek',
  templateUrl: './sikgeometria-sokszogek.component.html'
})
export class SikgeometriaSokszogekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private location: Location,
    private page: Page
  ) {
    super(router, location, page);
  }
}

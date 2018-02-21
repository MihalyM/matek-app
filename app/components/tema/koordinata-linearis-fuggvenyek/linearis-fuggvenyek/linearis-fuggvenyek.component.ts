import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "ui/page";

import { TemaComponent } from '../../tema.component';

@Component({
  moduleId: module.id,
  selector: 'linearis-fuggvenyek',
  templateUrl: './linearis-fuggvenyek.component.html'
})
export class LinearisFuggvenyekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private location: Location,
    private page: Page
  ) {
    super(router, location, page);
  }
}

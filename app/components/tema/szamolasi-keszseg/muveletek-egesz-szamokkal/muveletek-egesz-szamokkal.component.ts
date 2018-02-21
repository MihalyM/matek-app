import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "ui/page";

import { TemaComponent } from '../../tema.component';

@Component({
  moduleId: module.id,
  selector: 'muveletek-egesz-szamokkal',
  templateUrl: './muveletek-egesz-szamokkal.component.html'
})
export class MuveletekEgeszSzamokkalComponent extends TemaComponent {
  constructor(
    private router: Router,
    private location: Location,
    private page: Page
  ) {
    super(router, location, page);
  }
}

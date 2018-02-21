import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "ui/page";

import { TemaComponent } from '../../tema.component';

@Component({
  moduleId: module.id,
  selector: 'muveletek-algebrai-kifejezesekkel',
  templateUrl: './muveletek-algebrai-kifejezesekkel.component.html'
})
export class MuveletekAlgebraiKifejezesekelkComponent extends TemaComponent {
  constructor(
    private router: Router,
    private location: Location,
    private page: Page
  ) {
    super(router, location, page);
  }
}

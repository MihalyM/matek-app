import { Component } from "@angular/core";
import { topmost } from "ui/frame";

// Declare these so the TypeScript compiler doesn’t complain about these references.
declare var UIImage: any;
declare var UIBarMetrics: any;

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor() {
    if (topmost().ios) {
      let navigationBar = topmost().ios.controller.navigationBar;
      navigationBar.translucent = false;
      navigationBar.setBackgroundImageForBarMetrics(
        UIImage.new(),
        UIBarMetrics.Default
      );
      navigationBar.shadowImage = UIImage.new();
      navigationBar.barStyle = 1;
    }
  }
}

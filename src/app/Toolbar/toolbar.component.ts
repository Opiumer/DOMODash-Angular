import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent {
  
  constructor(public datepipe: DatePipe) { 
    this.time = this.datepipe.transform(new Date(),"dd/MM/yyyy HH:mm:ss";)
  }
}

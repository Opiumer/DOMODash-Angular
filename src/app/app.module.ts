import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./Toolbar/toolbar.component";
import { CardComponent } from "./Card/card.component";
import { ProductBarChartsComponent } from "./product-bar-charts/product-bar-charts.component";
import { CardGridComponent } from "./CardGrid/cardgrid.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { NgxEchartsModule } from "ngx-echarts";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    ProductBarChartsComponent,
    CardGridComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    }),
    NgbModule,
    MatGridListModule
  ],
  providers: [MatIconRegistry, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

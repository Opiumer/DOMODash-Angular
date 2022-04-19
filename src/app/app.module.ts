import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./Toolbar/toolbar.component";
import { CardComponent } from "./Card/card.component";
import { ProductBarChartsComponent } from "./product-bar-charts/product-bar-charts.component";
import { CardGridComponent } from "./CardGrid/cardgrid.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { NgxEchartsModule } from "ngx-echarts";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

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
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { NbCardModule, NbButtonModule } from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { HomeComponent } from "./home.component";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { EchartsPieComponent } from "./echarts-pie.component";

const components = [HomeComponent, EchartsPieComponent];

@NgModule({
  imports: [ThemeModule, NbCardModule, NbButtonModule, NgxEchartsModule],
  declarations: [...components],
})
export class HomeModule {}

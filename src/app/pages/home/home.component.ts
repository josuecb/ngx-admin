import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  // options = {
  //   title: {
  //     text: "Referer of a Website",
  //     subtext: "Fake Data",
  //     left: "center",
  //   },
  //   tooltip: {
  //     trigger: "item",
  //   },
  //   legend: {
  //     orient: "vertical",
  //     top: "40%",
  //     left: "right",
  //     align: "left",
  //   },
  //   series: [
  //     {
  //       name: "Access From",
  //       type: "pie",
  //       radius: "50%",
  //       data: [
  //         { value: 1048, name: "Search Engine" },
  //         { value: 735, name: "Direct" },
  //         { value: 580, name: "Email" },
  //         { value: 484, name: "Union Ads" },
  //         { value: 300, name: "Video Ads" },
  //       ],
  //       label: {
  //         show: true,
  //         position: "inside",

  //         formatter: "{d}%",
  //       },
  //       emphasis: {
  //         itemStyle: {
  //           shadowBlur: 10,
  //           shadowOffsetX: 0,
  //           shadowColor: "rgba(0, 0, 0, 0.5)",
  //         },
  //       },
  //     },
  //   ],
  // };
  options: any = {};
  themeSubscription: any;
  constructor(private theme: NbThemeService) {}
  ngAfterViewInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["USA", "Germany", "France", "Canada", "Russia"],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "Countries",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "Germany" },
              { value: 310, name: "France" },
              { value: 234, name: "Canada" },
              { value: 135, name: "Russia" },
              { value: 1548, name: "USA" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

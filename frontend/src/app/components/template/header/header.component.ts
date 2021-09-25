import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerServices: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerServices.headerData.title;
  }
  get icon(): string {
    return this.headerServices.headerData.icon;
  }
  get routerUrl(): string {
    return this.headerServices.headerData.routerUrl;
  }
}

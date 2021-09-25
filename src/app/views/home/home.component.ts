import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private headerServices: HeaderService) {
    headerServices.headerData = {
      title: "Início",
      icon: "home",
      routerUrl: "",
    };
  }

  ngOnInit(): void {}
}

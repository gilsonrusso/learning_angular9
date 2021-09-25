import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerServices: HeaderService) {
    headerServices.headerData = {
      title: "Cadastro de Produtos",
      icon: "store",
      routerUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate() {
    this.router.navigate(["/products/create"]);
  }
}

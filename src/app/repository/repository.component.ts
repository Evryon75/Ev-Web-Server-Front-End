import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Repo} from "../models.module";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
  //@ts-ignore
  brothe: Repo = {};
  constructor(public location: Location, public http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(baller => {
      this.http.get<Repo[]>("http://127.0.0.1:448/query?name=" + baller.get("id")).subscribe(balled => {
        this.brothe = balled[0];
      });
    })
  }
  captainAmerica(ballin: string): string {
    if (ballin == "CPP") return  "C++";
    if (ballin == "CSHARP") return  "C#";
    try {
      if (ballin != "CSS" && ballin != "HTML") {
        return ballin.charAt(0) + ballin.slice(1).toLowerCase();
      } else return ballin; // oh my god bro this function 💀
    } catch (ignored) {
      return "infallible";
    }
  }
}

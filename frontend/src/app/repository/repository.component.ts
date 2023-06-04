import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
  constructor(public location: Location, public http: HttpClient, private router: Router) {
    //todo: do the funny you know whati m talking about
  }
}

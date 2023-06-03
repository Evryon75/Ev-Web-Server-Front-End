import {Component, signal} from '@angular/core';
import {LanguageTags, Repo} from "./models.module";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  brother: Repo[] = [];
  title: string = "Ev Server Front End";
  tags: LanguageTags[] = [];
  constructor(public http: HttpClient, private router: Router) {
    this.http.get<Repo[]>('http://127.0.0.1:448/').subscribe(d => {
      this.brother = d;
    });
  }
}

//todo: ADD THE FUNNY TAGS FOR LANGUAGES ITLL BE SO GOOD ITLL BE SO EASY i think, i hope, god i hope this doesnt take me ages hoyl shit

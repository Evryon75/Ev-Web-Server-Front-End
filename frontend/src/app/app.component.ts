import {Component} from '@angular/core';
import {LanguageTags, Repo} from "./models.module";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brother: Repo[] = [];
  title: string = "Ev Server Front End";
  tags: LanguageTags[] = [];
  constructor(public http: HttpClient, private router: Router) {
    this.http.get<Repo[]>('http://127.0.0.1:448/').subscribe(d => {
      this.brother = d;
    });
  }
  goLang(name: string): void {
    this.http.get<Repo[]>("http://127.0.0.1:448/query?" + (name != "" ? "name=" + name : ""))
      .subscribe(d => {
      this.brother = d;
    });
  }
  toggleTag(tag: LanguageTags): void {
    if (this.tags.includes(tag)) {
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
    } else {
      this.tags.push(tag);
    }
  }
  parseTag(raw: string): LanguageTags {
    console.log(this.tags)
    switch (raw.toUpperCase()) {
      case "RUST":
        return LanguageTags.RUST;
      case "JAVA":
        return LanguageTags.JAVA;
      case "CSHARP":
        return LanguageTags.CSHARP;
      case "C":
        return LanguageTags.C;
      case "CPP":
        return LanguageTags.CPP;
      case "PYTHON":
        return LanguageTags.PYTHON;
      case "CSS":
        return LanguageTags.CSS;
      case "HTML":
        return LanguageTags.HTML;
      case "MARKDOWN":
        return LanguageTags.MARKDOWN;
      case "EV":
        return LanguageTags.EV;
      default:
        return LanguageTags.NULL;
    }
  }
  protected readonly LanguageTags = LanguageTags;
}

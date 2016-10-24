import {Component} from "@angular/core";
import {Article} from "./article/article";

@Component({
	selector: 'reddit-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];

	constructor() { }
}

interface ArticleJSON {
	title: string;
	url: string;
	votes: number;
	publishedDate: string;
	description: string;
	authors: string;
	urlToImage: string;
}

export class Article {
	public publishedDate:Date;
	constructor(
		public title: string,
		public description: string,
		public imageUrl: string,
		public votes?: number
	) {
		this.votes = votes || 0;
		this.publishedDate = new Date();
	}

	public voteUp(): void {
		this.votes += 1;
	}

	public voteDown(): void {
		this.votes -= 1;
	}

	//Article.fromJSON()
	static fromJSON(json: ArticleJSON): Article {
		let article = Object.create(Article.prototype);
		return Object.assign(article, json, {
			votes: json.votes ? json.votes : 0,
			imageUrl: json.urlToImage,
			publishedDate: json.publishedDate ? new Date(json.publishedDate) : new Date()
		})
	}
}
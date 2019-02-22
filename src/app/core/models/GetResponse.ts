export class GetResponse {

  articles: string;
  status: string;

  constructor(articles?, status?) {
    this.articles = articles;
    this.status = status;
  }
}

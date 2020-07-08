export class SearchModel{
    category:string;
    page:number;
    pageSize:number;
    country:string;
    constructor(){}
}

export class HeadLineResponse{
    sourceId:string;
    sourceName:string;
    title:string;
    description:string;
    content:string;
    url:string;
    urlToImage:string;
    animType:string;
    constructor(){}
}
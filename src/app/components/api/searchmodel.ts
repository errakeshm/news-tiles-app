import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

export class NavbarItem{
    icon:IconDefinition;
    text:string;
    searchText:string;
    page:number;
    pageSize:number;
    isSelected:Boolean = false;
    constructor(icon:IconDefinition, text:string, searchText:string, page:number, pageSize:number, isSelected?:Boolean){
        this.icon = icon;
        this.text = text;
        this.searchText = searchText;
        this.page = page;
        this.pageSize = pageSize;
        if(isSelected)
            this.isSelected = isSelected;
    }
}
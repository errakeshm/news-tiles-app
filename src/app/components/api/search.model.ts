import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class SearchModel{
    category:string;
    page:number;
    pageSize:number;
    country:string;
    constructor(category?:string, page?:number, pageSize?:number, country?:string, isSelected:boolean = false){
        this.category = category;
        this.page = page;
        this.pageSize = pageSize;
        this.country = country;
    }
    
}

export class SearchParamModel extends SearchModel{
    constructor(category?:string, page?:number, pageSize?:number, country?:string){
        super(category, page, pageSize, country);
    }
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
    isSelected:Boolean;
    constructor(icon:IconDefinition, text:string, searchText:string, page:number, pageSize:number, isSelected:Boolean = false){
        this.icon = icon;
        this.text = text;
        this.searchText = searchText;
        this.page = page;
        this.pageSize = pageSize;
        this.isSelected = isSelected;
    }
}

export interface FeatureButton {
    name : string;
    icon: IconDefinition;
}

export interface INameValue{
    name: string;
    value: any;
}

export enum NewsPanelShiftDirection{
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    NONE = 'NONE'
}
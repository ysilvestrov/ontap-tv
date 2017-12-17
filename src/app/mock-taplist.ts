import { ITaplistItem, TaplistItem} from './taplist';

export const TAPLISTITEM: TaplistItem[] = [
  {tapNumber:1, breweryName:"Woodstone",  beerName:"Saison French", beerColor:"belgian", abv:5, bitterness:20, gravity:12, prices: {"0.5":60,"1.0":115}},
  {tapNumber:2, breweryName:"Varvar",  beerName:"American Wheat", beerColor:"other", abv:4.6, bitterness:17, gravity:12.6, prices: {"0.5":60,"1.0":115}},
  {tapNumber:3, breweryName:"Varvar",  beerName:"Milk Stout", beerColor:"stout", abv:4.7, bitterness:30, gravity:18, prices: {"0.5":60,"1.0":115}},
  {tapNumber:4, breweryName:"Coronado (USA)",  beerName:"Idiot IPA", beerColor:"imported", abv:8.5, bitterness:72, gravity:null, prices: {"0.2":90,"1.0":450}},
];

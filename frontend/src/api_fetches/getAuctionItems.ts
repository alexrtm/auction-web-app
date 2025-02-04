import { API_ENDPOINTS } from './constants.ts';
import AuctionItemData from "../models/IAuctionItem";

//want to add return type
async function fetchAuctionItems(): Promise<AuctionItemData[]> {
    const url = API_ENDPOINTS.GET_AUCTION_ITEMS;

    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        let auctionItems: AuctionItemData[] = json;
        return auctionItems;

    } catch(error) {
        console.log(error.message);
        return []; //not ok
    }
}

export default fetchAuctionItems;
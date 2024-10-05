import axios from "axios";
import { AuctionItem } from "../type";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/auctionItems",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getAuctionItems(keyword: string, page: number = 1, perPage: number = 10): Promise<AuctionItem[]> {
    const { data }: { data: AuctionItem[] } = await apiClient.get("", {
      params: {
        keyword,
        _page: page,
        _limit: perPage,
      },
    });
    return data;
  },
};

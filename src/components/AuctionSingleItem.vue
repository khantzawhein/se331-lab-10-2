<script setup lang="ts">
import { AuctionItem } from "../type";

const props = defineProps<{ auctionItem: AuctionItem }>();
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString();
};
</script>

<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-2" v-if="auctionItem">
    <div class="px-6 py-4">
      <h2 class="text-xl font-bold mb-2">Auction Item #{{ auctionItem.id }}</h2>
      <p class="text-gray-700 text-base mb-2">{{ auctionItem.description }}</p>
      <p class="text-sm text-gray-600 mb-4">Type: {{ auctionItem.type }}</p>

      <div v-if="auctionItem.successfulBid" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
        <p class="font-bold">Successful Bid</p>
        <p>Amount: ${{ auctionItem.successfulBid.amount }}</p>
        <p>Date: {{ formatDate(auctionItem.successfulBid.datetime) }}</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Bid History</h3>
        <ul v-if="auctionItem.bidHistory.length > 0" class="divide-y divide-gray-200">
          <li v-for="bid in auctionItem.bidHistory" :key="bid.id" class="py-2">
            <p class="text-sm">
              <span class="font-medium">${{ bid.amount }}</span> - {{ formatDate(bid.datetime) }}
            </p>
          </li>
        </ul>
        <p v-else class="text-gray-500 italic">No bids yet</p>
      </div>
    </div>
  </div>
  <div v-else class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
    <p class="text-gray-700 text-base">No auction item data available.</p>
  </div>
</template>

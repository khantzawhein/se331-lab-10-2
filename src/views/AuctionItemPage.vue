<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import AuctionService from "../services/AuctionService";
import { AuctionItem } from "../type";
import AuctionSingleItem from "../components/AuctionSingleItem.vue";

const auctionItems = ref<AuctionItem[]>([]);
const keyword = ref<string>("");

watchEffect(async () => {
  auctionItems.value = await AuctionService.getAuctionItems(keyword.value);
});
</script>

<template>
  <div class="container">
    <div class="flex justify-center items-center gap-2 my-4">
      <label for="search">Search: </label>
      <input type="text" class="border rounded px-4 py-1" placeholder="Search..." id="Search" v-model="keyword" />
    </div>
    <div class="grid grid-cols-3">
      <AuctionSingleItem
        v-for="auctionItem in auctionItems"
        :key="auctionItem.id"
        :auctionItem="auctionItem"
      ></AuctionSingleItem>
    </div>
  </div>
</template>

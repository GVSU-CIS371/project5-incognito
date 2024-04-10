<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" 
        v-for="product in groceryItems"
        :key="product.id">
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import StoreItem from './StoreItem.vue';
import { useProductStore } from '../stores/ProductStore';

const productStore = useProductStore();

const groceryItems = computed(() => {
  return productStore.products.filter(
    product => product.data.category === 'Groceries');
});
</script>

<template>
  <div class="product">
      <ProductHeader />
      <ProductList />
      <ProductPagination />
      <ProductAdd />
      <ProductEditor />
  </div>
</template>

<script>
import ProductAdd from './ProductAdd.vue'
import ProductEditor from './ProductEditor.vue'
import ProductHeader from './ProductHeader.vue'
import ProductList from './ProductList.vue'
import ProductPagination from './ProductPagination.vue'
export default {
  components: { 
    ProductList, 
    ProductPagination, 
    ProductHeader, 
    ProductAdd,
    ProductEditor 
    },

}
</script>

<style scoped>

.product{
  width: 1200px;
  margin: 0 auto;
}

</style>
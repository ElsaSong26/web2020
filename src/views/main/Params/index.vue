<template>
  <div class="params">
      <ParamsHeader :searchHandle="$api.paramsSearch"/>
      <ParamsList />
      <ParamsPagination :total="2"/>
      <ParamsAdd />
  </div>
</template>

<script>
import ParamsHeader from '../../../components/PubHeader.vue'
import ParamsList from './ParamsList.vue'
import ParamsPagination from '../../../components/PubPagination.vue'
import ParamsAdd from './ParamsAdd.vue'

export default {
  components: { 
    ParamsList,
    ParamsPagination,
    ParamsHeader,
    ParamsAdd,

  },


}
</script>

<style scoped>
.params{
    width: 1200px;
    margin: 0 auto;
}
</style>
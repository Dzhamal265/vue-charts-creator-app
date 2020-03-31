<template>
  <modal 
    name="ui-chart-config-modal"  
    @before-close="onBeforeClose">
    <div class="ui-chart-config-container">
      <h2>Chart creator menu</h2>
      <DxSelectBox 
        name="chartType" 
        placeholder="Chart type"
        :data-source="chartTypeOptions"
        v-model="selectedChartType"/>
      <DxSelectBox
        name="dataSource"
        placeholder="Data source" 
        :data-source="dataSourceOptions"
        v-model="selectedDataSource"/>
      <DxButton text="Create chart" @click="onClick"/>
    </div>
  </modal>
</template>

<script>
import {
  DxSelectBox
} from 'devextreme-vue/select-box'
import DxButton from 'devextreme-vue/button'

export default {
  name: 'UIChartConfigModal',
  components: {
    DxSelectBox,
    DxButton,
  },

  data() {
    return {
      selectedDataSource: '',
      selectedChartType: '',
      chartTypeOptions: [
        'pie-chart',
        'line-chart',
      ],
      dataSourceOptions: [
        '5e82f478be6548c0e28cbb49', 
        '5e82f462be6548c0e28cbb47'
      ],
    }
  },

  methods: {
    onClick() {
      this.$modal.hide('ui-chart-config-modal');
    },
    onBeforeClose() {
      this.$emit(
        'ui-chart-config-modal-before-close',
        this.selectedDataSource,
        this.selectedChartType,
      )
    }
  }
}
</script>

<style scoped>
.ui-chart-config-container {
    margin: 25px;
}
</style>
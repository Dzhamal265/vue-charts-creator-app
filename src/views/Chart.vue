<template>
  <div class="chart">
    <DxButton 
      text="Create chart" 
      @click="onClick"/>

    <component :is="renderChart" :dataSourceId="selectedDataSource"></component>

    <UIChartConfigModal @ui-chart-config-modal-before-close="onUiChartConfigModalBeforeClose"/>
  </div>
</template>

<script>
import DxButton from 'devextreme-vue/button'
import UIChartConfigModal from '@/components/UIChartConfigModal'
import UIPieChart from '@/components/UIPieChart'
import UILineChart from '@/components/UILineChart'

export default {
  name: 'Chart',

  components: {
    DxButton,
    UIChartConfigModal,
    UILineChart,
    UIPieChart,
  },
  
  data() {
    return {
      selectedDataSource: '',
      selectedChartType: '',
    }
  },

  methods: {
    onClick() {
      this.$modal.show('ui-chart-config-modal')
    },

    onUiChartConfigModalBeforeClose(...args) {
      const [selectedDataSource, selectedChartType] = args;
      this.selectedDataSource = selectedDataSource;
      this.selectedChartType = selectedChartType;
    }
  },

  computed: {
    renderChart() {
      if (this.selectedChartType === 'pie-chart') return 'UIPieChart'
      if (this.selectedChartType === 'line-chart') return 'UILineChart'
    }
  }
}
</script>

<style scoped>
.chart {
  /* max-width: 500px; */
  margin: 0 auto;
}
</style>
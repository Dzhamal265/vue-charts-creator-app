<template>
  <DxPieChart
    id="pie"
    :data-source="dataset"
    palette="Bright"
    title="Area of Countries">
    <DxSeries
      argument-field="Группа"
      value-field="Доля">
      <DxLabel :visible="true">
        <DxConnector
          :visible="true"
          :width="1"/>
      </DxLabel>
    </DxSeries>
    <DxSize :width="500"/>
    <DxExport :enabled="true"/>
  </DxPieChart>
</template>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport
} from 'devextreme-vue/pie-chart';
import ApiService from '@/services/api.service';

export default {
  name: 'UIPieChart',
  
  props: ['dataSourceId'],

  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  
  data() {
    return {
      dataset: []
    }
  },

  created() {
    this.getPieChartDataset();
  },

  methods: {
    async getPieChartDataset() {
      const response = await ApiService.get(`datasource/${this.dataSourceId}/data`)
      this.dataset = response.data;
    }
  },
}
</script>

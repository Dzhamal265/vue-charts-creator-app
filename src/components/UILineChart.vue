<template>
  <DxChart
    id="chart"
    :data-source="dataset"
    palette="Harmony Light"
    title="Pizza Shop Complaints">

    <DxSeries
      name="Cumulative percentage"
      argument-field="Дата"
      value-field="Процент"
      axis="percentage"
      type="spline"
      color="#6b71c3"
    />

    <!-- <DxArgumentAxis>
      <DxLabel overlapping-behavior="stagger"/>
    </DxArgumentAxis> -->

    <DxValueAxis
      :tick-interval="20"
      :show-zero="true"
      :value-margins-enabled="false"
      name="percentage"
      position="right"
    >
      <!-- <DxConstantLine
        :value="80"
        :width="2"
        color="#fc3535"
        dash-style="dash"
      >
        <DxLabel :visible="false"/>
      </DxConstantLine> -->
    </DxValueAxis>

    <DxTooltip
      :enabled="true"
      :shared="true"
    />

    <DxLegend
      vertical-alignment="top"
      horizontal-alignment="center"
    />
  </DxChart>
</template>

<script>
import DxChart, {
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxLabel,
  DxLegend,
  DxSeries,
  DxTooltip,
  DxValueAxis,
  DxConstantLine
} from 'devextreme-vue/chart';
import ApiService from '@/services/api.service'

export default {
  name: 'UILineChart',
  props: ['dataSourceId'],
  components: {
    DxChart,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxLabel,
    DxLegend,
    DxSeries,
    DxTooltip,
    DxValueAxis,
    DxConstantLine,
  },

  data() {
    return {
      dataset: []
    }
  },

  created() {
    this.getLineChartDataset();
  },

  methods: {
    async getLineChartDataset() {
      const response = await ApiService.get(`datasource/${this.dataSourceId}/data`)
      this.dataset = response.data;
    }
  },
}
</script>
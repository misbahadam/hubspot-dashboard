<template>
    <canvas ref="chartCanvas"></canvas>
</template>
  
<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    type ChartConfiguration,
  } from 'chart.js';
  
  Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  
  const props = defineProps<{
    chartData: {
      labels: string[],
      values: number[],
      title: string,
      subtitle: string
    }
  }>();
  
  const chartCanvas = ref<HTMLCanvasElement | null>(null);
  let chartInstance: Chart | null = null;
  
  const createChart = () => {
    if (chartInstance) chartInstance.destroy();
  
    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: props.chartData.labels,
        datasets: [{
          label: 'Mentions',
          data: props.chartData.values,
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          title: { display: true, text: props.chartData.title },
          subtitle: { display: true, text: props.chartData.subtitle }
        }
      }
    };
  
    if (chartCanvas.value) {
      chartInstance = new Chart(chartCanvas.value, config);
    }
  };
  
  onMounted(createChart);
  watch(() => props.chartData, createChart, { deep: true });
  </script>
  
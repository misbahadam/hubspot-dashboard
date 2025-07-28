<template>
  <div class="relative">
    <!-- About Link in Top-Right Corner -->
    <div class="absolute top-4 right-6">
      <NuxtLink
        to="/about"
        class="text-blue-700 font-medium hover:underline hover:text-blue-800 transition-colors duration-200"
      >
        ℹ️ About
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <main class="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 space-y-6 max-w-[90rem] mx-auto bg-stone-300">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        HubSpot Evaluation Dashboard
      </h1>

      <!-- Filter Panel -->
      <div class="bg-slate-300 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md">
        <FilterPanel
          :uniqueCompanySizes="uniqueValues.companySize"
          v-model:selectedCompanySizes="filterState.companySize"
        />
      </div>

      <!-- Chart Section -->
      <div class="bg-cyan-100 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md">
        <ChartComponent :chartData="chartData" />
      </div>
    </main>
  </div>
</template>



<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useHubSpotData } from '../../composables/useHubSpotData'
import FilterPanel from '../../components/FilterPanel.vue'
import ChartComponent from '../../components/ChartComponent.vue'

interface QuestionDataEntry {
  responseValue: string
  numResponses: number
  companySize: string
}

interface Question {
  question: string
  questionId: string
  data: QuestionDataEntry[]
}

interface FilterState {
  companySize: string[]
}

const { data } = useHubSpotData()

const filterState = reactive<FilterState>({
  companySize: []
})

const processChartData = (question: Question, filters: FilterState) => {
  const filtered = question.data.filter((entry: QuestionDataEntry) =>
    !filters.companySize.length || filters.companySize.includes(entry.companySize)
  )

  const aggregatedMap: Record<string, number> = {}

  for (const entry of filtered) {
    const response = entry.responseValue
    const count = entry.numResponses

    if (!aggregatedMap[response]) {
      aggregatedMap[response] = 0
    }
    aggregatedMap[response] += count
  }

  const sortedEntries = Object.entries(aggregatedMap).sort((a, b) => b[1] - a[1])

  const labels = sortedEntries.map(([key]) => key)
  const values = sortedEntries.map(([, value]) => value)

  const subtitle = filters.companySize.length
    ? `Filtered by: ${filters.companySize.join(', ')}`
    : 'All Data'

  return {
    labels,
    values,
    title: question.question,
    subtitle
  }
}

const question = data.questions.find(q => q.questionId === 'q1') as Question
const uniqueValues = data.uniqueValues

const chartData = computed(() => processChartData(question, filterState))
</script>

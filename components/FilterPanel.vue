<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold text-gray-800">Filter by Company Size</p>

    <div
      v-for="size in uniqueCompanySizes"
      :key="size"
      class="px-2 py-1 rounded-md hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
    >
      <div class="flex items-center">
          <input
            type="checkbox"
            :value="size"
            :checked="selectedCompanySizes.includes(size)"
            @change="toggleSize(size)"
            class="form-checkbox h-4 text-blue-600 focus:ring-blue-500"
          />
          <span class="text-gray-700 font-medium group-hover:text-blue-600 hover:text-blue-600 transition-colors duration-200">
            {{ size }}
          </span>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
const props = defineProps<{
  uniqueCompanySizes: string[],
  selectedCompanySizes: string[]
}>()

const emit = defineEmits(['update:selectedCompanySizes'])

function toggleSize(size: string) {
  const current = [...props.selectedCompanySizes]
  const index = current.indexOf(size)
  if (index > -1) {
    current.splice(index, 1)
  } else {
    current.push(size)
  }
  emit('update:selectedCompanySizes', current)
}
</script>

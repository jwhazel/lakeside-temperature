<template>
  <div class="border-2 border-slate-700 rounded">
    <div class="bg-slate-700 text-white font-bold text-center p-1">
      {{ $dayjs(timestamp).format("M/DD") }}
    </div>
    <div class="flex flex-col py-2 px-10">
      <div><i class="wi wi-day-cloudy text-3xl"></i></div>
      <div>H: {{ high }}</div>
      <div>L: {{ low }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  high: { type: Number },
  low: { type: Number },
  timestamp: { type: String },
  icon: { type: String },
});
</script>

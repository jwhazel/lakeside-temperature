<template>
  <header class="p-5 text-xl">
    <h1>Lakeside Swim Club Louisville Temperatures</h1>
  </header>

  <main>
    <section class="container mx-auto py-3">
      <div class="py-5 bg-rose-200 text-center rounded">
        Lightning spotted. Lake closed until 2:00pm
      </div>
    </section>

    <section class="container mx-auto py-3 columns-3">
      <GaugeChart title="Pool" :amount="data.current.pool" />
      <GaugeChart title="Lake" :amount="data.current.lake" />
      <GaugeChart title="Ambient" :amount="data.current.ambient.temperature"><i class="wi wi-day-cloudy text-3xl"></i>
      </GaugeChart>
    </section>

    <section class="container mx-auto py-3">
      <div>
        <h2 class="font-bold">Forecast</h2>
        <div class="flex justify-evenly py-3">
          <WeatherForecast v-for="(forecast, index) in data.forecast" :key="index" :high="forecast.high"
            :low="forecast.low" :timestamp="forecast.date" />
        </div>
      </div>
    </section>

    <section class="container mx-auto py-3">
      <div>
        <h2 class="font-bold">Historical</h2>
        <div class="py-20 bg-slate-400 text-white text-center">
          chart goes here
        </div>
      </div>
    </section>
  </main>

  <footer class="container mx-auto italic text-sm">
    This page is not affiliated with or endorsed by
    <a href="https://www.lakesideswim.com/">Lakeside Swim Club</a> in any way. Weather data provided by <a
      href="https://open-meteo.com/">Open Meteo</a>. Water temperature updated <time
      :datetime="$dayjs(data.current.timestamp).toString()">
      8 hours ago
    </time>. Weather updated every 30 minutes.
  </footer>
</template>

<script setup>
const { data, error } = await useFetch("/api/temperature/v1/data");
</script>

<style>
header {
  background: #333;
  color: #eee;
  text-align: center;
}

a {
  color: blue;
}

a:hover {
  color: grey;
}
</style>

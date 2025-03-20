export default defineEventHandler(async (event) => {
  return {
    current: {
      timestamp: "2024-05-28T13:25:43.511Z",
      lake: 76,
      pool: 80,
      ambient: {
        temperature: 86,
        icon: "sunny",
      },
    },
    historical: [
      {
        timestamp: "2024-05-26T18:25:43.511Z",
        lake: 72,
        pool: 75,
        ambient: 79,
      },
    ],
    forecast: [
      {
        date: "2024-05-26T18:25:43.511Z",
        high: 80,
        low: 58,
        icon: "clear",
      },
      {
        date: "2024-05-27T18:25:43.511Z",
        high: 74,
        low: 54,
        icon: "cloudy",
      },
      {
        date: "2024-05-28T18:25:43.511Z",
        high: 78,
        low: 52,
        icon: "cloudy",
      },
      {
        date: "2024-05-29T18:25:43.511Z",
        high: 80,
        low: 56,
        icon: "cloudy",
      },
      {
        date: "2024-05-30T18:25:43.511Z",
        high: 83,
        low: 64,
        icon: "cloudy",
      },
    ],
  };
});

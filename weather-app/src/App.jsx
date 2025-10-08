import React from "react";

const weatherData = [
  { day: "Sunday", date: "1 October", icon: "🌦️", desc: "Drizzling" },
  { day: "Mon", date: "2 October", icon: "🌤️", desc: "Sunny/cloudy" },
  { day: "Tuesday", date: "3 October", icon: "🌥️", desc: "Cloudy" },
  { day: "Wednesday", date: "4 October", icon: "🌫️", desc: "Foggy day" },
  { day: "Thursday", date: "5 October", icon: "🌧️", desc: "Light Rainy day" },
  { day: "Friday", date: "6 October", icon: "🌧️", desc: "Heavy Rain" },
  { day: "Saturday", date: "7 October", icon: "⛈️", desc: "Thunderstorm" },
];

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start text-center p-4 font-sans"
      style={{
        backgroundImage: "url('/src/assets/images/sunrise.jpg')",
      }}
    >
      {/* Header */}
      <h1 className=" absolute top-0 left-30 text-sm text-gray-700 font-semibold mt-6 drop-shadow-md ">
        Umbrella App
      </h1>
      <br />
      <br />
      <br />
      <h2 className="left-0 text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow-md mt-2">
        Accra, Ghana
      </h2>
      <br />
      <br />
      <br />
      <p className="text-7xl sm:text-8xl font-extrabold text-gray-800 mt-4 drop-shadow-lg">
        37°C
      </p>

      {/* Weekly Forecast */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {weatherData.map((day, index) => (
          <div
            key={index}
            className="bg-white/25 backdrop-blur-lg shadow-lg rounded-2xl px-4 py-3 w-32 flex flex-col items-center text-gray-900"
          >
            <h3 className="font-bold text-sm">{day.day}</h3>
            <p className="text-xs mb-2 text-gray-700">{day.date}</p>
            <div className="text-4xl">{day.icon}</div>
            <p className="text-sm mt-1 font-medium">{day.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

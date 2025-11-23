🏋️‍♂️ Full-Stack-Exercise-App

A powerful and interactive Full Stack Exercise Application built with React Native for the frontend and integrated with an external Exercise API as the backend.
This app allows users to browse exercises, view muscle-targeting details, search for workouts, and save their favorite exercises — all inside a clean and responsive UI.

📱 APK

To install the release APK:

android > app > build > outputs > apk > release > app-release.apk

🚀 Features

🔍 Search Exercises: Find exercises by name, muscle, body part, or equipment.

💪 Browse by Body Parts: Explore workouts categorized by chest, back, arms, abs, etc.

📘 Exercise Details: View GIFs/images, instructions, target muscles, and equipment.

⭐ Favorite Exercises: Save your favorite exercises for easy access.

🎯 Target Muscle View: Discover exercises based on the muscle you want to train.

📱 Responsive UI: Smooth experience across all screen sizes.

⚡ API Integration: Real-time data fetched from an external fitness API.

🛠️ Tech Stack
Frontend

React Native

JavaScript (ES6+)

Axios

React Navigation

StyleSheet / Tailwind

Backend

External API (ExerciseDB API or any chosen fitness API)

Optional: Node.js / Express for extended backend features

⚙️ Installation & Setup

Follow these steps to run the app locally:

1️⃣ Clone the repository
git clone https://github.com/Akshat0403/Full-Stack-Exercise-App.git

2️⃣ Navigate to the project folder
cd Full-Stack-Exercise-App

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm start

🔑 Environment Variables

Create a .env file in the project root:

EXPO_PUBLIC_EXERCISE_API_URL=https://exercisedb.p.rapidapi.com
EXPO_PUBLIC_RAPIDAPI_KEY=YOUR_API_KEY

Replace YOUR_API_KEY with your actual RapidAPI key or your custom API key.

📂 Folder Structure
Full-Stack-Exercise-App/
│
├── src/
│ ├── components/ # Reusable UI components
│ ├── screens/ # Home, Details, Search, Favorites, etc.
│ ├── navigation/ # App navigation setup
│ ├── api/ # API service integration
│ ├── assets/ # Images, GIFs, icons
│ └── App.js
│
├── package.json
├── .env
└── README.md

🧩 API Reference

Base URL

https://exercisedb.p.rapidapi.com

Popular Endpoints

Endpoint Description
/exercises Get all exercises
/exercises/bodyPart/{bodyPart} Exercises by body part
/exercises/target/{target} Exercises by target muscle
/exercises/equipment/{equipment} Exercises by equipment
/exercises/name/{name} Search exercises by name
🧑‍💻 Author

Akshat Saxena
📧 saxena.akshat0405@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/akshat-saxena-5b769230a

💻 GitHub: https://github.com/Akshat0403

⭐ Acknowledgments

ExerciseDB API / RapidAPI

React Native Community

Expo Ecosystem

💪 Like this project?

If you enjoyed this app, consider giving it a ⭐ on GitHub!

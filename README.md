🍽️ Full-Stack Exercise App
A powerful and interactive Full Stack Exercise Application built with React Native for the frontend and integrated with an external Exercise API as the backend (e.g., ExerciseDB or any Fitness API you choose).

This app helps users explore exercises, view muscle-targeting workout details, search for specific moves, and maintain a personalized workout list — all within a smooth and modern UI.

APK: Go to the folder android > app > build > outputs > apk > release > apk-release.apk

🚀 Features
🔍 Search Recipes: Find exercises by name, muscle group, body part, or equipment.
🥗 Browse Body Parts: Explore exercises categorized by body part such as chest, back, arms, legs, abs, and more.
📖 Exercise Details: View GIFs/images, step-by-step instructions, target muscles, and required equipment.
❤️ Favorite Exercises: Save exercises to your favorites list for easy access during workouts.
🎯 Target Muscle View: See exercises grouped by target muscle for more focused training.
📱 Responsive UI: Works seamlessly on all screen sizes and platforms.
⚡ Live API Integration: Real-time data pulled from an external fitness API such as:

ExerciseDB API
Any custom backend you create
RapidAPI fitness endpoint

🛠️ Tech Stack
Frontend:
React Native
JavaScript (ES6+)
Axios (API requests)
React Navigation
StyleSheet / Tailwind CSS

Backend:
External API (ExerciseDB or chosen fitness API)
Optional: Node.js / Express (if you extend your backend)


⚙️ Installation and Setup
Follow these steps to run the app locally:

# 1️⃣ Clone the repository
git clone https://github.com/Akshat0403/Full-Stack-Exercise-App.git

# 2️⃣ Navigate to the project folder
cd Full-Stack-Exercise-App

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start


📂 Folder Structure
Full-Stack-Exercise-App/
│
├── android/
|   ├──app/
|   |  ├──build/
|   |  |  ├──outputs/
|   |  |  |  ├──apk/
|   |  |  |  |  ├──app-release.apk
├── Source/
│   ├── Images/       
│   ├── Screens/
│
├── package.json
└── README.md
🧩 API Reference
Base URL:

https://exercisedb.p.rapidapi.com
Common Endpoints Used:

/exercises:	Get all exercises
/exercises/bodyPart/{bodyPart}:	Exercises by body part
/exercises/target/{target}:	Exercises by target muscle
/exercises/equipment/{equipment}:	Exercises by equipment
/exercises/name/{name}:	Search exercises
🧑‍💻 Author
Akshat Saxena 📧 saxena.akshat0405@gmail.com 🔗 https://www.linkedin.com/in/akshat-saxena-5b769230a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 💻 https://github.com/Akshat0403

⭐ Acknowledgments
ExerciseDB / RapidAPI Fitness API
React Native Community
🍴 If you enjoyed this project, consider giving it a ⭐ on GitHub!

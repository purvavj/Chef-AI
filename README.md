Recipe Assistant 🍳

Recipe Assistant is a React-based application that suggests recipes based on the ingredients you have. Powered by Hugging Face’s inference API, it helps you turn your ingredients into delicious recipes.

🚀 Features

	• Input your ingredients and get recipe suggestions.
	• Leverages the Hugging Face mistralai/Mixtral-8x7B-Instruct-v0.1 model.
	• User-friendly recipe output in Markdown format.

🛠️ Setup Instructions

Prerequisites

Before you begin, ensure you have the following installed:

	• Node.js (v14+ recommended)
	• A Hugging Face API key.

Steps to Set Up

	1. Clone the Repository
		git clone https://github.com/your-username/recipe-assistant.git
		cd recipe-assistant
	2. Install Dependencies
		npm install
	
 	3. Create a .env File
		• In the root of the project, create a .env file.
		• Add the following line: REACT_APP_HF_API_KEY=your-huggingface-api-key

	4. Run the Application
		npm start

The app will be accessible at http://localhost:3000.


📁 Project Structure

/recipe-assistant
├── /public            # Static assets
├── /src               # Application source code
│   ├── /components    # React components
│   ├── App.js         # Main app component
│   ├── api.js         # API integration
├── .env.example       # Environment variable template
├── .gitignore         # Ignored files for Git
├── package.json       # Project dependencies and metadata
└── README.md          # Project documentation


 <img width="1158" alt="Screenshot 2024-11-25 at 10 51 19 PM" src="https://github.com/user-attachments/assets/c13a6a1d-111a-4df0-9d15-c3c315a6d137">
 <img width="1470" alt="Screenshot 2024-11-25 at 10 19 02 PM" src="https://github.com/user-attachments/assets/85c97b3b-f68a-4113-9ec0-212a11cb3850">
 <img width="1157" alt="Screenshot 2024-11-25 at 10 49 27 PM" src="https://github.com/user-attachments/assets/bf1a65c6-dd88-4f7c-98a2-875f77baec04">




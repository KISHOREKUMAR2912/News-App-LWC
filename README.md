# News App Lightning Web Component (LWC) 📰🚀

Welcome to the News App, a Lightning Web Component (LWC) that puts global news at your fingertips! Explore the latest happenings around the world with an intuitive interface and personalized news feeds.

## Features
### 🌎 Global News Selection
Select your desired country and category to curate a personalized news feed that aligns with your interests.

### 🔍 Dynamic News Fetching
Hit the 'Fetch News' button to dynamically fetch and display up to 10 news articles at a time. Each news card includes a title, image, link to the full article, a brief description, and the source.

### 🏠 Seamless Navigation
Easily navigate the app with the 'Return to Home' button, ensuring a user-friendly experience. Switch between news categories or explore different countries effortlessly.

## Concepts at Play
### 1️⃣ Parent to Child Communication
Efficient communication between the parent and child components ensures a seamless flow of selected country and category data, providing a customized news experience.

### 2️⃣ Fetch API for Data Retrieval
The Fetch API seamlessly connects the app to external data sources, utilizing a provided URL and API key for real-time news updates.

### 3️⃣ Conditional Rendering
Adapt the user interface dynamically based on variable values, tailoring the app to display distinct sections and create an intuitive design.

### 4️⃣ User Input Handling
Lightning Comboboxes capture user input through event handlers, providing a responsive and personalized experience tailored to user preferences.

### 5️⃣ Child to Parent Communication
Experience a full-circle interaction as the child component communicates back to the parent component. A simple click on the "Return to Home" button dispatches an event, guiding you seamlessly back to the home page.

## Getting Started
1. Clone the repository.
2. Install Salesforce CLI.
3. Deploy the Lightning Web Component to your Salesforce org.
4. Access the app through your Salesforce Lightning Experience.

## Dependencies
- Salesforce Lightning Platform
- API Key for News Data (Insert API Key in the configuration file)

## Contributions
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

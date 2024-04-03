English:
Running the Application:

To run the application, ensure you have Node.js installed. Then, execute the following commands:

npm ci - Install dependencies.
npm start - Start the application.
npm run storybook - Launch Storybook for component development.
The application fetches the first 25 pages from GitHub with tags and the number of associated threads.

Data retrieval can be sorted either in ascending or descending order. Sorting is based on three indicators: popularity, name, and recent activity.

The number of rows to display can be adjusted using an input field, with a maximum limit of 100.

Data fetching is triggered by a button press to prevent IP blocking due to excessive requests.

Polish:
Uruchomienie Aplikacji:

Aby uruchomić aplikację, upewnij się, że masz zainstalowany Node.js, a następnie wykonaj następujące polecenia:

npm ci - Zainstaluj zależności.
npm start - Uruchom aplikację.
npm run storybook - Uruchom Storybook do rozwoju komponentów.
Aplikacja pobiera pierwsze 25 stron z GitHuba z tagami oraz liczbą powiązanych wątków.

Pobrane dane można sortować rosnąco lub malejąco. Sortowanie odbywa się na podstawie trzech wskaźników: popularności, nazwy i ostatniej aktywności.

Liczba wierszy do wyświetlenia można dostosować za pomocą pola wprowadzania danych, przy czym maksymalny limit wynosi 100.

Pobieranie danych jest wyzwalane poprzez naciśnięcie przycisku, aby zapobiec blokowaniu adresu IP z powodu nadmiernych żądań.

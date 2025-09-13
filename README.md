Todo List Application
Overview
This is a simple Todo List web application built with HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, filter tasks by status (All, To Do, Done), and delete individual tasks using a trash button. The application is styled with Bootstrap and Font Awesome for a modern and responsive design.
Note: This application requires an active internet connection to load external dependencies (Bootstrap and Font Awesome) via CDN.
Features

Add Tasks: Enter a task in the input field and click "Add" to append it to the list.
Mark Tasks as Completed: Check the checkbox next to a task to mark it as done.
Filter Tasks:
All: Display all tasks (default and dynamically added).
To Do: Show only tasks that are not checked.
Done: Show only tasks that are checked.


Delete Tasks: Click the trash icon next to a task to remove it from the list.
Responsive Design: The application is styled to work well on both desktop and mobile devices.

Dependencies
The application relies on the following external libraries, loaded via CDN (hence requiring an internet connection):

Bootstrap 5.3.3: For styling and responsive layout.
Font Awesome 6.4.0: For the trash icon used in delete buttons.

Installation

Clone the Repository:git clone https://github.com/your-username/your-repo-name.git


Navigate to the Project Directory:cd your-repo-name


Open the Application:
Open todo.html in a web browser. You can do this by:
Double-clicking the todo.html file, or
Serving it locally using a simple HTTP server (e.g., with Python):python -m http.server 8000

Then, navigate to http://localhost:8000/todo.html in your browser.


Important: Ensure you have an active internet connection to load Bootstrap and Font Awesome from their CDNs.



Project Structure

todo.html: The main HTML file containing the structure of the Todo List.
style.css: Custom CSS styles for the application (e.g., .titre, .Revision, .add, .btn-trash).
app.js: JavaScript file handling task addition, filtering, and deletion.

Usage

Adding a Task:
Enter a task in the input field with the placeholder "Revision avant le controle...".
Click the "+ Add" button or press Enter to add the task to the list.


Marking Tasks:
Check the checkbox next to a task to mark it as completed.


Filtering Tasks:
Click "All" (#btnT) to show all tasks.
Click "To Do" (#btnA) to show only unchecked tasks.
Click "Done" (#btnF) to show only checked tasks.


Deleting Tasks:
Click the trash icon (.btn-trash) next to a task to remove it.



Notes

Internet Connection: The application requires an internet connection to load Bootstrap and Font Awesome via CDN. Without internet access, the styling and icons may not display correctly.
HTML ID Conflicts: The initial tasks in todo.html use duplicate for="task1" attributes for labels. It is recommended to update these to unique IDs (task1, task2, task3, task4) for better accessibility and functionality.
Dynamic Tasks: New tasks are assigned unique IDs using Date.now() to avoid conflicts.

Known Issues

The initial tasks in todo.html have duplicate id and for attributes for checkboxes and labels. This can be fixed by updating the HTML to use unique IDs.
The application does not persist tasks (e.g., in local storage). Tasks are reset when the page is refreshed.

Contributing
Feel free to submit issues or pull requests to improve the application. Suggestions for adding features like task persistence (e.g., using localStorage) or offline support are welcome.
License
This project is licensed under the MIT License.



Mario MAMPIONONTSOA

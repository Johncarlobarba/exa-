document.getElementById("crud-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
        firstname: document.getElementsByName("firstname")[0].value,
        middlename: document.getElementsByName("middlename")[0].value,
        lastname: document.getElementsByName("lastname")[0].value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        birthday: document.getElementsByName("birthday")[0].value,
        course: document.getElementsByName("course")[0].value,
        schoolyear: document.getElementsByName("schoolyear")[0].value
    };

    // Create a new list item to display form data
    var listItem = document.createElement("li");
    listItem.textContent = `Name: ${formData.firstname} ${formData.middlename} ${formData.lastname}, Gender: ${formData.gender}, Birthday: ${formData.birthday}, Course: ${formData.course}, School Year: ${formData.schoolyear}`;

    // Create an update button
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function() {
        // Fill the form with the data when the update button is clicked
        document.getElementsByName("firstname")[0].value = formData.firstname;
        document.getElementsByName("middlename")[0].value = formData.middlename;
        document.getElementsByName("lastname")[0].value = formData.lastname;
        // Set gender (example assumes radio buttons have IDs "male" and "female")
        document.querySelector(`input[name="gender"][value="${formData.gender}"]`).checked = true;
        document.getElementsByName("birthday")[0].value = formData.birthday;
        document.getElementsByName("course")[0].value = formData.course;
        document.getElementsByName("schoolyear")[0].value = formData.schoolyear;
    });

    // Append the update button to the list item
    listItem.appendChild(updateButton);

    // Add the new list item to the update list
    document.getElementById("update-list").appendChild(listItem);

    // Clear the form fields
    document.getElementById("crud-form").reset();
});
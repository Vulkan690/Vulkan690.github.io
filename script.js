const link = document.getElementById("confirmableLink");
const confirmationBox = document.getElementById("confirmationBox");

// Show the confirmation box when the link is clicked
link.addEventListener("click", (event) => {
    event.preventDefault(); // Stop default navigation

    // Get the link's position and show the confirmation box
    const rect = link.getBoundingClientRect();
    confirmationBox.style.top = `${rect.bottom + window.scrollY}px`;
    confirmationBox.style.left = `${rect.left + window.scrollX}px`;
    confirmationBox.style.display = "flex";
    confirmationBox.style.flexDirection = "column";
});

// Handle Confirm button click
document.getElementById("confirmButton").addEventListener("click", () => {
    window.open(link.href, "_blank"); // Navigate to the link
});

// Handle Cancel button click
document.getElementById("cancelButton").addEventListener("click", () => {
    confirmationBox.style.display = "none"; // Hide the box
});

// Hide the confirmation box when clicking outside of it
document.addEventListener("click", (event) => {
    if (!confirmationBox.contains(event.target) && event.target !== link) {
        confirmationBox.style.display = "none";
    }
});
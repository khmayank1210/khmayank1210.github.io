// Function to open a specific tab
function openTab(event, tabName) {
    // Logging the tabName to the console for debugging
    console.log("Tab opened:", tabName);

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Hide the content
        tabcontent[i].style.opacity = 0;  // Set opacity to 0
        tabcontent[i].classList.remove("active");  // Remove the active class
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Attempt to find the element with the specified ID
    var tabContentElement = document.getElementById(tabName);
    if (tabContentElement) {
        // Show the current tab if found
        tabContentElement.style.display = "block";
        setTimeout(function() {  // Use setTimeout to allow the display change to take effect
            tabContentElement.style.opacity = 1;  // Set opacity to 1 for fade-in effect
        }, 0);
        // Add an "active" class to the button that opened the tab
        event.currentTarget.className += " active";
    } else {
        // Log an error if the element is not found
        console.error("Tab content not found for:", tabName);
    }
}

// Function to open the default tab
function openDefaultTab() {
    var defaultTab = document.getElementById("professional summary");
    if (defaultTab) {
        openTab({currentTarget: defaultTab}, 'professional summary');
    }
}

// Function to update active tab based on scroll position
function updateActiveTab() {
    var sections = document.querySelectorAll(".tabcontent");
    var navLinks = document.querySelectorAll(".tablinks");

    sections.forEach(section => {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) { // Adjust 150 to your preference
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (section.id === link.textContent.trim().toLowerCase()) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Add event listeners
document.addEventListener("DOMContentLoaded", function() {
    openDefaultTab();

    // Add click event to tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(event) {
            openTab(event, this.textContent.trim().toLowerCase());
        });
    }
});

// Event listener for scrolling
window.addEventListener("scroll", updateActiveTab);

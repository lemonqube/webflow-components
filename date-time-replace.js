document.addEventListener("DOMContentLoaded", function () {
  // Function to get the user's local date and time
  function getUserDateTime() {
    return new Date();
  }

  // Function to format the date as "Month DayWithSuffix, Year"
  function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    return formattedDate.replace(/\d+/, day + suffix);
  }

  // Function to get the suffix for the day
  function getDaySuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Covers 4th-20th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  // Function to determine the time of day
  function getTimeOfDay(date) {
    const hour = date.getHours();
    if (hour < 12) {
      return 'Morning';
    } else if (hour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }

  // Replace elements based on the custom attribute
  document.querySelectorAll('[data-replace]').forEach(function (element) {
    const date = getUserDateTime();
    const replaceType = element.getAttribute('data-replace');

    if (replaceType === 'current-date') {
      element.textContent = formatDate(date);
    } else if (replaceType === 'time-greeting') {
      element.textContent = getTimeOfDay(date);
    }
  });
});

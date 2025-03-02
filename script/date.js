const currentDate = new Date();
        
        // Get short day name (e.g., "Sun")
        const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });

        // Get formatted date (e.g., "Mar 2 2025")
        const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
document.getElementById('day').innerText=`${day}`
document.getElementById('date').innerText=`${formattedDate}`

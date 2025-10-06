document.addEventListener('DOMContentLoaded', () => {
    const homeContent = document.getElementById('home-content');
    const projectsContent = document.getElementById('projects-content');
    const otherContent = document.getElementById('other-content');
    const navItems = document.querySelectorAll('.sidebar ul li');
    const statNumbers = document.querySelectorAll('.stat-number');

    // Show Home content by default
    homeContent.classList.add('active');

    // Simulate course completion affecting stats
    function updateStats(completedCourses) {
        const baseStats = { concepts: 967, lessons: 58, quizzes: 59, projects: 0, programs: 5 };
        statNumbers.forEach(stat => {
            const key = stat.getAttribute('data-key');
            if (key === 'projects') {
                stat.textContent = Math.min(baseStats[key] + completedCourses, 100); // Cap at 100
            } else if (key) {
                stat.textContent = baseStats[key] + completedCourses;
            }
        });
    }

    // Initial stats (e.g., 0 completed courses)
    updateStats(0);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items and content
            navItems.forEach(nav => nav.classList.remove('active'));
            homeContent.classList.remove('active');
            projectsContent.classList.remove('active');
            otherContent.classList.remove('active');

            // Add active class to clicked item and corresponding content
            item.classList.add('active');

            if (item.textContent.trim() === 'Home') {
                homeContent.classList.add('active');
            } else if (item.textContent.trim() === 'Projects') {
                projectsContent.classList.add('active');
                updateStats(1); // Update stats when Projects is clicked
            } else {
                otherContent.classList.add('active');
            }
        });
    });
});
// Get the projects menu button and content div
const projectsMenu = document.querySelector('[data-menu="projects"]'); // or use appropriate selector
const projectsContent = document.getElementById('projects-content');

// Add click event listener
projectsMenu.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Hide all other page contents
    document.querySelectorAll('.page-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show projects content
    projectsContent.classList.add('active');
    
    // Optional: Update active menu state
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    projectsMenu.classList.add('active');
});
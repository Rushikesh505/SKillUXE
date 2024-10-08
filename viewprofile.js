document.addEventListener("DOMContentLoaded", () => {
    // Profile details
    const profileDetails = {
        name: "John Doe",
        email: "john.doe@example.com",
    };

    const displayUserDetails = () => {
        document.querySelector(".profile-name").textContent = profileDetails.name;
        document.querySelector(".profile-email").textContent = profileDetails.email;
    };

    // Sidebar Toggle for Small Screens
    const toggleSidebar = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Smooth Scroll for Sidebar Links
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetID = e.target.getAttribute('href').substring(1);
            document.getElementById(targetID).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight Active Section in Sidebar
    const sections = document.querySelectorAll('h2, h3');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    displayUserDetails();
});

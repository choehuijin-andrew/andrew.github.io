// Tab Switching Logic
function openTab(evt, jobName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tab buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(jobName).style.display = "block";
    document.getElementById(jobName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Intersection Observer for Fade-in Animation
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Navbar Scroll Effect
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    const delta = 5;
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll Up
            if(st + window.innerHeight < document.body.scrollHeight) {
                navbar.style.transform = 'translateY(0)';
                if (st > 0) {
                    navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
            }
        }
        lastScrollTop = st;
    });
});

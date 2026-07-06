
 fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
                
                // Mobile Menu Auto-Close Logic (Agar koi open menu me click kare)
                var links = document.querySelectorAll('.nav-link, .btn-gradient');
                var navbarCollapse = document.getElementById('navbarNav');
                links.forEach(function(link) {
                    link.addEventListener('click', function() {
                        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                            navbarCollapse.classList.remove('show');
                        }
                    });
                });
            })
            .catch(error => console.error("Header issue:", error));

        // 2. Footer load karne ka logic
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data;
            })
            .catch(error => console.error("Footer issue:", error));
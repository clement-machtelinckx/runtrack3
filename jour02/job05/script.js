        // Fonction pour obtenir le pourcentage de scrolling
        function getScrollPercentage() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const bodyHeight = document.documentElement.scrollHeight - windowHeight;
            const percentage = (scrollPosition / bodyHeight) * 100;
            return Math.round(percentage);
        }

        // Fonction pour mettre à jour la couleur du footer en fonction du pourcentage de scrolling
        function updateFooterColor() {
            const footer = document.querySelector('footer');
            const percentage = getScrollPercentage();

            // Définir les différentes couleurs en fonction des pourcentages
            if (percentage <= 25) {
                footer.style.backgroundColor = 'red';
            } else if (percentage <= 50) {
                footer.style.backgroundColor = 'blue';
            } else if (percentage <= 75) {
                footer.style.backgroundColor = 'green';
            } else {
                footer.style.backgroundColor = 'yellow';
            }
        }

        // Écouter l'événement de scrolling et mettre à jour la couleur du footer
        window.addEventListener('scroll', updateFooterColor);
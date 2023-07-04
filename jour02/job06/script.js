        // Code Konami
        const konamiCode = [
            'ArrowUp', 'ArrowUp',
            'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight',
            'ArrowLeft', 'ArrowRight',
            'b', 'a', 'Enter'
        ];
        let konamiIndex = 0;

        function checkKonamiCode(event) {
            if (event.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    applyKonamiStyle();
                }
            } else {
                konamiIndex = 0;
            }
        }

        function applyKonamiStyle() {
            document.body.classList.add('konami-style');
        }

        document.addEventListener('keydown', checkKonamiCode);
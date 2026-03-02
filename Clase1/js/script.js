// Initialize Icons
        lucide.createIcons();

        // Simple Quiz Logic
        function checkAnswer(isCorrect) {
            const feedback = document.getElementById('quiz-feedback');
            feedback.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');
            
            if (isCorrect) {
                feedback.innerText = "¡Excelente! El almacenamiento permanente guarda tus fotos y programas.";
                feedback.classList.add('bg-green-100', 'text-green-700');
            } else {
                feedback.innerText = "¡Casi! Recuerda que la RAM es temporal y el Procesador es el cerebro.";
                feedback.classList.add('bg-red-100', 'text-red-700');
            }
            feedback.classList.remove('hidden');
        }
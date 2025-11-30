export const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fil-PH'; // Defaulting to Filipino accent if available
        window.speechSynthesis.speak(utterance);
    }
};

export const playSound = (type: 'correct' | 'incorrect') => {
    const correctAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
    const incorrectAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
    
    if (type === 'correct') correctAudio.play().catch(() => {});
    else incorrectAudio.play().catch(() => {});
};

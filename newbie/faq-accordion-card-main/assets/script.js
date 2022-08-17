const questions = document.querySelectorAll('.question-js')
const questionsArray = [...questions]

questionsArray.forEach((question, i) => {
    const questionNumber = i + 1;
    question.addEventListener('click', () => {
      let answer = document.getElementById('accordion-answer' + questionNumber);
      let arrow = document.getElementById('arrow' + questionNumber);
      let tittle = document.getElementById('tittle' + questionNumber);
      answer.classList.toggle('active');
      arrow.classList.toggle('rotate');
      tittle.classList.toggle('tittleBold');
    })
  })

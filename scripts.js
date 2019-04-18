const timerSectionLink =
  document.getElementById('timer-section-link')
const statsSectionLink =
  document.getElementById('stats-section-link')

const timerSection =
  document.getElementById('timer-section')
const statsSection =
  document.getElementById('stats-section')

timerSectionLink.onclick = function () {
  // Переключаем класс у кнопки
  statsSectionLink.classList.remove('is-active')
  timerSectionLink.classList.add('is-active')
  // Переключаем видимость секций
  statsSection.style.display = 'none'
  timerSection.style.display = 'block'
}

statsSectionLink.onclick = function () {
  timerSectionLink.classList.remove('is-active')
  statsSectionLink.classList.add('is-active')
  timerSection.style.display = 'none'
  statsSection.style.display = 'block'
}

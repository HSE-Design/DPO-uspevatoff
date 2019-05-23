const timerSectionLink = document.getElementById('timer-section-link')
const statsSectionLink = document.getElementById('stats-section-link')
const button = document.getElementById('button')

const timerSection = document.getElementById('timer-section')
const statsSection = document.getElementById('stats-section')
const progressSection = document.getElementById('progress-section')

timerSectionLink.onclick = function () {
  timerSectionLink.classList.add('is-active')
  statsSectionLink.classList.remove('is-active')
  statsSection.style.display = 'none'
  progressSection.style.display = 'none'
  timerSection.style.display = 'block'
}

statsSectionLink.onclick = function () {
  statsSectionLink.classList.add('is-active')
  timerSectionLink.classList.remove('is-active')
  timerSection.style.display = 'none'
  progressSection.style.display = 'none'
  statsSection.style.display = 'block'
}

// Запускаем прогресс бар по клику на кнопку
// button.onclick = function () {
//   timerSection.style.display = 'none'
//   statsSection.style.display = 'none'
//   progressSection.style.display = 'block'
// }

const MIN_25 = 5000
const MIN_5 = 1000
const min25selector = document.querySelector('.form-time-select__item--25')
const min5selector = document.querySelector('.form-time-select__item--5')
let selectedTime = MIN_25

min25selector.onclick = function on25MinClick() {
  min25selector.classList.add('is-active')
  min5selector.classList.remove('is-active')
  selectedTime = MIN_25
}

min5selector.onclick = function on5MinClick() {
  min5selector.classList.add('is-active')
  min25selector.classList.remove('is-active')
  selectedTime = MIN_5
}

const form = document.querySelector('form')
let input = document.querySelector('input')

form.onsubmit = function handleFormSubmit(e) {
  e.preventDefault()
  // Заблокируем инпут от изменений
  // Чтобы ничего случайно не написать
  input.disabled = true

  // Берем данные из инпута
  // и сохраняем в память браузера
  // localStorage
  const task = {
    name: input.value,
    time: selectedTime
  }
  const stringTask = JSON.stringify(task)
  const key = Date.now()
  localStorage.setItem(key, stringTask)

  // Затем через 2 секунды после запуска
  // очистим и разблокируем инпут
  setTimeout(function () {
    input.value = ""
    input.disabled = false
  }, 2000)
}







// EOF

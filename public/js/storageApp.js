const cellNumber = document.querySelectorAll('.delete-cell')
const addStorage = document.querySelector('#add-storage')
const closeModal = document.querySelector('#closeModal')
const btnAdd = document.querySelector('#addNew')
const blockItemFirst = document.querySelector('#block_item-1')
const blockItemTwo = document.querySelector('#block_2')
const input = document.querySelector("#quantity")
const noteItem = document.querySelector('#note')
const noteItemTwo = document.querySelector('#note_2')

const storageSchemeNumber = document.querySelector('#storageScheme span')

const modal = document.querySelector('#crud-modal')
const modalWindow = document.querySelector('#modal-window')

// modal.style.display = 'none'

const statusText = document.querySelector('#status')
const toggleElement = document.querySelector('#toggle-bg')
const toggleCircle = document.querySelector('#toggle-circle')

toggleElement.addEventListener('click', changeStatus)

btnAdd.addEventListener('click', function(event) {
  // Предотвращаем всплытие события на кнопке
  event.stopPropagation();

  if(blockItemFirst.classList.contains('active')){
		modal.classList.remove('hidden');
  	modal.classList.add('flex');
	} else {
		noteItemTwo.classList.remove('right-[-400px]')
    noteItemTwo.classList.add('right-5')

		setTimeout(function() {
			noteItemTwo.classList.remove('right-5')
      noteItemTwo.classList.add('right-[-400px]')
    }, 2000)
	}

  document.addEventListener('click', clickOutsideModal);
});

closeModal.addEventListener('click', function(){
	modal.classList.add('hidden')
  modal.classList.remove('flex')
})

const newCell = document.createElement('div')
newCell.id = 'cell-number'
newCell.classList.add('flex', 'items-center', 'justify-between', 'px-3', 'py-2', 'border', 'border-gray-400', 'rounded-3xl', 'shadow-md')

// Создаем содержимое новой ячейки
newCell.innerHTML = `
  <h2 class="pl-1">Unit 1</h2>
  <button id='delete-cell' class="text-red-600 cursor-pointer hover:bg-red-100 p-1 rounded-md delete-cell">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  </button>
`

// Добавляем обработчик события для кнопки удаления
newCell.querySelector('#delete-cell').addEventListener('click', handleDeleteCell)

// Добавляем новую ячейку в blockItemTwo
blockItemTwo.appendChild(newCell)

// Перезаписываем обработчики событий для оставшихся ячеек
cellNumber.forEach(function (deleteCell) {
  deleteCell.addEventListener('click', handleDeleteCell)
})

addStorage.addEventListener('click', addStorageItem)

function changeStatus () {
  // Включено
  if (toggleCircle.classList.contains('right-1')) {
    toggleCircle.classList.remove('right-1');
    toggleCircle.classList.add('left-1');

    toggleElement.classList.remove('bg-teal-700');
    toggleElement.classList.add('bg-gray-700');

    statusText.classList.remove('bg-green-500', 'text-white');
    statusText.classList.add('bg-yellow-500', 'text-gray-500');

    statusText.textContent = 'Disabled';

		blockItemFirst.classList.remove('active')
  } else {
    // Выключено - сброс стилей
		toggleCircle.classList.remove('left-1');
    toggleCircle.classList.add('right-1');
    toggleElement.classList.remove('bg-gray-700');
    toggleElement.classList.add('bg-teal-700');
    statusText.classList.remove('bg-yellow-500', 'text-gray-500');
    statusText.classList.add('bg-green-500', 'text-white');
    statusText.textContent = 'Enabled';

		blockItemFirst.classList.add('active')
  }

} // ПОМЕНЯТЬ СТАТУС АДРЕНСОГО ХРАНЕНИЯ

// Обработчик события клика для всего документа
function clickOutsideModal(event) {
  // Проверяем, является ли целевой элемент клика дочерним элементом modal-window
  const isClickInsideModal = modalWindow.contains(event.target);

  // Если клик был снаружи modal-window, закрываем модальное окно
  if (!isClickInsideModal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');

    // Удаляем обработчик события клика для всего документа после закрытия модального окна
    document.removeEventListener('click', clickOutsideModal);
  }
} // ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА

function findCurrentMaxNumber() {
  const existingNumbers = Array.from(blockItemTwo.querySelectorAll('#cell-number h2')).map(element => {
    const match = element.textContent.match(/\d+/)
    return match ? Number(match[0]) : 0
  })

  const maxNumber = Math.max(...existingNumbers)
  return maxNumber || 0
} // ФУНКЦИЯ ДЛЯ НАХОЖДЖЕНИЯ МАКСИМАЛЬНОГО НОМЕРА ЯЧЕЙКИ

function handleDeleteCell() {
  const blockCount = blockItemTwo.querySelectorAll('#cell-number').length

  // Проверяем, что остается хотя бы один блок
  if (blockCount > 1) {
    this.closest('#cell-number').remove()
  } else {
    // Если только один блок, добавляем noteItems в качестве предупреждения
		noteItem.classList.remove('right-[-400px]')
    noteItem.classList.add('right-5')

		setTimeout(function() {
			noteItem.classList.remove('right-5')
      noteItem.classList.add('right-[-400px]')
    }, 2000)
  }

	storageSchemeNumber.textContent = blockItemTwo.querySelectorAll('#cell-number').length;
} // ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ЯЧЕЙКИ ПРИ НЕОБХОДИМОСТИ

function addStorageItem(){
	const count = Number(input.value);
  const currentMaxNumber = findCurrentMaxNumber();

  for (let i = 0; i < count; i++) {
    const newNumber = currentMaxNumber + i + 1
    const clonedNode = blockItemTwo.firstElementChild.cloneNode(true)

    clonedNode.querySelector('h2').textContent = `Unit ${newNumber}`
    blockItemTwo.appendChild(clonedNode);

    const deleteCellNew = clonedNode.querySelector('#delete-cell')
    deleteCellNew.addEventListener('click', handleDeleteCell)
  }

	modal.classList.remove('flex')
	modal.classList.add('hidden')


	storageSchemeNumber.textContent = blockItemTwo.querySelectorAll('#cell-number').length;
} // ДОБАВЛЯЕМ ВЫБРАННОЕ КОЛИЧЕСТВО ЯЧЕЕК
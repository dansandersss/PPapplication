const item2 = document.querySelector("#item_2")
const item3 = document.querySelector("#item_3")
const toggleBtn = document.querySelector("#toggle")
const btnBg = toggleBtn.querySelector('#toggle-bg')
const btnCircle = btnBg.querySelector('#toggle-circle')
const itemTitle = item3.querySelector('#circle-title')

const button = document.querySelector('#dropdownDividerButton')
const dropdownDivider = document.querySelector('#dropdownDivider')
const inputSearch = document.querySelector('#input-group-search')

const postingBtn = document.querySelector('#postingBtn')
const receiveBtn = document.querySelector('#receiveBtn')
const receiveUserButtons = document.querySelector('#receive-user-buttons')
const receive = document.querySelector('#receive')
const posting = document.querySelector('#posting')

let isToggleClicked = false

toggleBtn.addEventListener('click', function(){

	if(!isToggleClicked){
		btnCircle.classList.remove('right-1')
		btnCircle.style.right="25px"
		btnBg.classList.remove('bg-teal-700')
		btnBg.classList.add('bg-gray-400')
	
		item2.classList.remove('hidden')
		item2.classList.add('block')
	
		
		itemTitle.textContent = '3'

		isToggleClicked = true
	} else {

		btnCircle.style.right="4px"
		btnBg.classList.add('bg-teal-700')
		btnBg.classList.remove('bg-gray-400')
	
		item2.classList.add('hidden')
		item2.classList.remove('block')
	
		
		itemTitle.textContent = '2'

		isToggleClicked = false
	}
})

inputSearch.addEventListener('input', function() {
	const inputValue = inputSearch.value
	const isNumeric = /^\d+$/.test(inputValue)

	if (!isNumeric) {
			inputSearch.value = ''
			return
	}

	const listItems = dropdownDivider.querySelectorAll('li')

	listItems.forEach(item => {
			const itemText = item.textContent

			if (itemText.includes(inputValue)) {
					item.style.display = 'block'
			} else {
					item.style.display = 'none'
			}
	})
})

dropdownDivider.addEventListener('click', function(event) {
	const target = event.target

	if (target.tagName === 'LI') {
			button.querySelector('.w-8').textContent = target.textContent
			dropdownDivider.style.display = 'none'
	}
})

button.addEventListener('click', function() {
	dropdownDivider.style.display = dropdownDivider.style.display === 'none' ? 'block' : 'none'
})

document.addEventListener('click', function(event) {
	const target = event.target

	if (!dropdownDivider.contains(target) && target !== button) {
			dropdownDivider.style.display = 'none'
	}
})

receiveBtn.addEventListener('click', function(){

	receiveBtn.classList.remove('after:w-full')
	receiveBtn.classList.add('after:w-0')
	receiveBtn.classList.add('opacity-70')

	postingBtn.classList.add('after:w-full')
	postingBtn.classList.remove('opacity-70')

	receiveUserButtons.classList.add('hidden')

	receive.classList.add('hidden')




	receiveBtn.classList.add('after:w-full')
	receiveBtn.classList.remove('after:w-0')
	receiveBtn.classList.remove('opacity-70')

	postingBtn.classList.remove('after:w-full')
	postingBtn.classList.add('opacity-70')

	receiveUserButtons.classList.remove('hidden')

	receive.classList.remove('hidden')

	posting.classList.add('hidden')


}) // receive opened

postingBtn.addEventListener('click' , function(){
	receiveBtn.classList.add('after:w-full')
	receiveBtn.classList.remove('after:w-0')
	receiveBtn.classList.remove('opacity-70')

	postingBtn.classList.remove('after:w-full')
	postingBtn.classList.add('opacity-70')

	receiveUserButtons.classList.remove('hidden')

	receive.classList.remove('hidden')




	receiveBtn.classList.remove('after:w-full')
	receiveBtn.classList.add('after:w-0')
	receiveBtn.classList.add('opacity-70')

	postingBtn.classList.add('after:w-full')
	postingBtn.classList.remove('opacity-70')

	receiveUserButtons.classList.add('hidden')

	receive.classList.add('hidden')

	posting.classList.remove('hidden')
}) // posting opened
const tableBtn = document.querySelector('#tableBtn')
const changesBtn = document.querySelector('#changesBtn')
const tableFirst = document.querySelector('#tableFirst')
const tableSecond = document.querySelector('#tableScnd')

changesBtn.addEventListener('click', function(){
	tableFirst.classList.add('hidden')
	tableSecond.classList.remove('hidden')

	tableBtn.classList.remove('after:w-full')
	changesBtn.classList.add('after:w-full')

	tableBtn.classList.add('opacity-70')
	changesBtn.classList.remove('opacity-70')

})

tableBtn.addEventListener('click', function(){
	tableFirst.classList.remove('hidden')
	tableSecond.classList.add('hidden')

	tableBtn.classList.add('after:w-full')
	changesBtn.classList.remove('after:w-full')

	tableBtn.classList.remove('opacity-70')
	changesBtn.classList.add('opacity-70')

})




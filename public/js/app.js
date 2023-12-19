const listBtn = document.querySelector('#listBtn')
const sideBar = document.querySelector('#default-sidebar')
const listItem = document.querySelectorAll('#listItem')
const order = document.querySelector('#order')
const popoverBtn = document.querySelectorAll('#popover-title')
const contentBlock = document.querySelector('#content')
const chevron = document.querySelectorAll('#chevron-popover')

let isSidebarExpanded = false

const toggleTheme = document.querySelector('#toggle-theme')
const toggleBgTheme = document.querySelector('#toggle-bg-theme')
const toggleCircleTheme = document.querySelector('#toggle-circle-theme')
const moon = document.querySelector('#moon')
const htmlDocument = document.querySelector('html')

const openSupport = document.querySelector('#openSupport')
const supportModal = document.querySelector('#supportModal')
const chatIcon = document.querySelector('#chat')


let supportModalVisible = false

openSupport.addEventListener('click', function () {
    supportModal.classList.toggle('hidden')
    supportModal.classList.toggle('block')

    chatIcon.classList.toggle('hidden')

    const existingSvg = openSupport.querySelector('#closeSupportModal')
    if (existingSvg) {
        existingSvg.remove()
    } else {
        openSupport.insertAdjacentHTML('afterbegin', `
        <svg id="closeSupportModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        `)
    }
    supportModalVisible = !supportModalVisible;
    
    if (!supportModalVisible) {
        const svgIcon = openSupport.querySelector('#closeSupportModal')
        if (svgIcon) {
            svgIcon.remove()
        }
    }
});

toggleTheme.addEventListener('click', function(){
	htmlDocument.classList.toggle('dark')
	toggleCircleTheme.classList.toggle('-translate-x-2.5')
	toggleCircleTheme.classList.toggle('translate-x-2.5')
})

listBtn.addEventListener('click', function(){
	if(!isSidebarExpanded){
		sideBar.classList.remove('w-64')
		sideBar.classList.add('w-32')
		order.classList.remove('flex')
		order.classList.add('hidden')
		contentBlock.classList.remove('ml-64')
		contentBlock.style.marginLeft = '128px'

		chevron.forEach(function(item){
			item.classList.add('hidden')
		})
	
		popoverBtn.forEach(function(btn){
			const btnTitle = btn.querySelector('div span');
			if(btnTitle){
					btnTitle.classList.add('hidden');
			}

			if(btn.classList.contains('justify-between')){
				btn.classList.remove('justify-between')
				btn.classList.add('justify-center')
			}
		});
	
		 // Проходим по каждому элементу в NodeList
		 listItem.forEach(function (item) {
			// Находим span внутри каждого элемента
			const spanElement = item.querySelector('a span')
			const link = item.querySelector('a')
			
			// Проверяем, что spanElement не равен null (что элемент был найден)
			if (spanElement) {
					// Добавляем класс к span
					spanElement.classList.add('hidden')
			}
	
			link.classList.add('justify-center')
		});

		isSidebarExpanded = true
	} else {
		// Сбрасываем добавленные классы при повторном нажатии
		sideBar.classList.remove('w-32')
		sideBar.classList.add('w-64')
		order.classList.remove('hidden')
		order.classList.add('flex')

		contentBlock.classList.add('ml-64')
		contentBlock.style.marginLeft = ''

		chevron.forEach(function(item){
			item.classList.remove('hidden')
		})

		popoverBtn.forEach(function(btn){
			const btnTitle = btn.querySelector('div span')
			if(btnTitle){
					btnTitle.classList.remove('hidden')
			}

			if(btn.classList.contains('justify-center')){
				btn.classList.add('justify-between')
				btn.classList.remove('justify-center')
			}
		});

		// Проходим по каждому элементу в NodeList
		listItem.forEach(function (item) {
				// Находим span внутри каждого элемента
				const spanElement = item.querySelector('a span')
				const link = item.querySelector('a')

				// Проверяем, что spanElement не равен null (что элемент был найден)
				if (spanElement) {
						// Удаляем добавленный класс у span
						spanElement.classList.remove('hidden')
				}

				// Удаляем добавленный класс у link
				link.classList.remove('justify-center')
		});

		isSidebarExpanded = false
}
	
})



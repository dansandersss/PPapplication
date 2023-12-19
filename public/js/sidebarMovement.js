const listBtn = document.querySelector('#listBtn')
const sideBar = document.querySelector('#default-sidebar')
const listItem = document.querySelectorAll('#listItem')
const order = document.querySelector('#order')
const popoverBtn = document.querySelectorAll('#popover-title')
const contentBlock = document.querySelector('#content')
const chevron = document.querySelectorAll('#chevron-popover')
const item2 = document.querySelector("#item_2")
const item3 = document.querySelector("#item_3")

let isSidebarExpanded = false

listBtn.addEventListener('click', function(){
	if(!isSidebarExpanded){
		sideBar.classList.add('w-32')
		order.classList.remove('flex')
		order.classList.add('hidden')
		contentBlock.style.marginLeft = '-100px'

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
			const spanElement = item.querySelector('a span');
			const link = item.querySelector('a')
			
			// Проверяем, что spanElement не равен null (что элемент был найден)
			if (spanElement) {
					// Добавляем класс к span
					spanElement.classList.add('hidden');
			}
	
			link.classList.add('justify-center')
		});

		isSidebarExpanded = true;
	} else {
		// Сбрасываем добавленные классы при повторном нажатии
		sideBar.classList.remove('w-32');
		order.classList.remove('hidden');
		order.classList.add('flex');
		contentBlock.style.marginLeft = '';

		chevron.forEach(function(item){
			item.classList.remove('hidden')
		})

		popoverBtn.forEach(function(btn){
			const btnTitle = btn.querySelector('div span');
			if(btnTitle){
					btnTitle.classList.remove('hidden');
			}

			if(btn.classList.contains('justify-center')){
				btn.classList.add('justify-between')
				btn.classList.remove('justify-center')
			}
		});

		// Проходим по каждому элементу в NodeList
		listItem.forEach(function (item) {
				// Находим span внутри каждого элемента
				const spanElement = item.querySelector('a span');
				const link = item.querySelector('a');

				// Проверяем, что spanElement не равен null (что элемент был найден)
				if (spanElement) {
						// Удаляем добавленный класс у span
						spanElement.classList.remove('hidden');
				}

				// Удаляем добавленный класс у link
				link.classList.remove('justify-center');
		});

		isSidebarExpanded = false;
}
})
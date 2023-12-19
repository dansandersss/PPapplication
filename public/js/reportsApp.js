const orderNum = document.querySelectorAll('#order-number')
const table = document.querySelector('#myTable')
const table2 = document.querySelector('#myTable2')

const input = document.querySelector('#searchInput')
const input2 = document.querySelector('#searchInput2')

const count = document.querySelector('#orderCount')
const count2 = document.querySelector('#orderCount2')

const receiveBtn = document.querySelector('#receiveBtn')
const postingBtn = document.querySelector('#postingBtn')

const remains = document.querySelector('#remains')
const giveout = document.querySelector('#giveout')

const datePicker = document.querySelector('#datepicker')

postingBtn.addEventListener('click', function(){
	receiveBtn.classList.remove('after:w-full')
	receiveBtn.classList.add('after:w-0')
	postingBtn.classList.remove('after:w-0')
	postingBtn.classList.add('after:w-full')
	postingBtn.classList.remove('opacity-70')
	receiveBtn.classList.add('opacity-70')


	remains.classList.remove('block')
	remains.classList.add('hidden')

	giveout.classList.remove('hidden')
	giveout.classList.add('block')
})

receiveBtn.addEventListener('click',function(){
	receiveBtn.classList.add('after:w-full')
	receiveBtn.classList.remove('after:w-0')
	postingBtn.classList.add('after:w-0')
	postingBtn.classList.remove('after:w-full')
	postingBtn.classList.add('opacity-70')
	receiveBtn.classList.remove('opacity-70')

	remains.classList.add('block')
	remains.classList.remove('hidden')

	giveout.classList.add('hidden')
	giveout.classList.remove('block')
})


orderNum.forEach(function(order){
	order.addEventListener('mouseenter', function(){
		const copyBtn = order.querySelectorAll('svg')

		copyBtn.forEach(function(button){
			button.classList.remove('opacity-0')
			button.classList.add ('opacity-100')
		})
	})

	order.addEventListener('mouseleave', function(){
		const copyBtn = order.querySelectorAll('svg')

		copyBtn.forEach(function(button){
			button.classList.remove('opacity-100')
			button.classList.add ('opacity-0')
		})
	})

	order.addEventListener('click', function () {
		// Создаем временный элемент textarea для копирования текста
		const textarea = document.createElement('textarea');
		textarea.value = order.textContent.trim();
		document.body.appendChild(textarea);
	
		// Выделяем текст в textarea
		textarea.select();
		textarea.setSelectionRange(0, textarea.value.length);
	
		// Копируем текст в буфер обмена
		const success = document.execCommand('copy');
	
		// Удаляем временный элемент textarea
		document.body.removeChild(textarea);
	
		// Визуальное подтверждение (например, изменение цвета фона элемента)
		if (success) {
			order.classList.add('bg-teal-200');
	
			// Ждем некоторое время и возвращаем исходный цвет
			setTimeout(function () {
				order.classList.remove('bg-teal-200');
			}, 1000);
		} else {
			console.error('Копирование не удалось');
		}
	});
}) // КОПИРОВАНИЕ ЭЛЕМЕНТА


input.addEventListener('input', function() {
  let inputValue = input.value.trim();

  // Проверка на пустое значение
  if (inputValue === '') {
    let allRows = Array.from(table.rows).slice(1);

    allRows.forEach(function(row) {
      row.style.display = ''; // Показать все строки
    });

    count.textContent = `${allRows.length}`;
    return;
  }

  // Фильтрация по введенному значению
  let sortedRows = Array.from(table.rows).slice(1);

  const filteredRows = sortedRows.filter(function(row) {
    const cellValue = row.cells[2].textContent.trim();
    return cellValue.includes(inputValue) || inputValue.toLowerCase() === 'i';
  });

  sortedRows.forEach(function(row) {
    row.style.display = 'none';
  });

  filteredRows.forEach(function(row) {
    row.style.display = '';
  });

  count.textContent = `${filteredRows.length}`;
}); // СОРТИРОВКА ТАБЛИЦЫ

input2.addEventListener('input', function (event) {
  let inputValue2 = event.target.value.trim();

  event.target.value = inputValue2;

  // Проверка на пустое значение
  if (inputValue2 === '') {
    let allRows = Array.from(table2.rows).slice(1);

    allRows.forEach(function (row) {
      row.style.display = ''; // Показать все строки
    });

    count2.textContent = `${allRows.length}`;
    return;
  }

  // Проверка на число и отрицательное значение
  const inputValueAsNumber = inputValue2;
  if (inputValueAsNumber < 0) {
    event.target.value = '';
    return;
  }

  let sortedRows2 = Array.from(table2.rows).slice(1);

  const filteredRows2 = sortedRows2.filter(function (row) {
    const cellValue2 = row.cells[2].textContent.trim();
    return cellValue2.includes(inputValue2);
  });

  sortedRows2.forEach(function (row) {
    row.style.display = 'none';
  });

  filteredRows2.forEach(function (row) {
    row.style.display = '';
  });

  count2.textContent = `${filteredRows2.length}`;
});

datePicker.addEventListener('input', function () {
  // Получаем значение выбранной даты
  let datePickerValue = datePicker.value;

  // Если значение пустое, вы можете добавить соответствующую обработку
  if (datePickerValue === '') {
    let allRows = Array.from(table2.rows).slice(1);

    allRows.forEach(function (row) {
      row.style.display = ''; // Показать все строки
    });

    count2.textContent = `${allRows.length}`;
    return;
  }

  // Создаем объект Date из строки
  const dateObject = new Date(datePickerValue);

  // Извлекаем компоненты даты (день, месяц, год)
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
  const year = dateObject.getFullYear().toString()

  // Форматируем дату в нужный вид
  const formattedDate = `${day}.${month}.${year}`;

  console.log(formattedDate);

	let sortedRows3 = Array.from(table2.rows).slice(1);

  const filteredRows3 = sortedRows3.filter(function (row) {
    const cellValue3 = row.cells[3].querySelectorAll('#date');
    
    let found = false;

    cellValue3.forEach(function (target) {
        const dateText = target.textContent;

        console.log(dateText);

        if (dateText.includes(formattedDate)) {
            found = true;
        }
    });

    return found;
	});

	sortedRows3.forEach(function (row) {
		row.style.display = 'none';
	});

	filteredRows3.forEach(function (row) {
		row.style.display = '';
	});

	count2.textContent = `${filteredRows3.length}`;


});


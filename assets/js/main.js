const output = document.querySelector('.output')
const buttonNumbers = document.querySelectorAll('.button-number')
const buttonOperations = document.querySelectorAll('.button-operation')
const buttonSum = document.querySelector('.button-sum')
const buttonDelete = document.querySelector('.button-delete')
let firstNumber = 0
let operation = ''
let isAfterSum = false

for (const button of buttonNumbers) {
	button.addEventListener('click', function (e) {
		output.value = output.value + this.innerText
	})
}

for (const button of buttonOperations) {
	button.addEventListener('click', function (e) {
		firstNumber = output.value
		operation = this.innerText

		output.value = ''
	})
}

buttonDelete.addEventListener('click', function (e) {
	if (isAfterSum) {
		output.value = ''
		isAfterSum = false
	} else {
		output.value = output.value.slice(0, -1)
	}
})

buttonSum.addEventListener('click', function (e) {
	switch (operation) {
		case '+':
			output.value = parseFloat(firstNumber) + parseFloat(output.value)
			break
		case '-':
			output.value = parseFloat(firstNumber) - parseFloat(output.value)
			break
		case '/':
			output.value = parseFloat(firstNumber) / parseFloat(output.value)
			break
		case 'x':
			output.value = parseFloat(firstNumber) * parseFloat(output.value)
			break
	}

	operation = ''
	firstNumber = 0
	isAfterSum = true
})

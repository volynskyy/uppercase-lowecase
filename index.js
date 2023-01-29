const buttons = document.createElement('div')
const wrapper = document.createElement('div')
const inputIn = document.createElement('textarea')
const inputOut = document.createElement('textarea')
const buttonCapital = document.createElement('button')
const buttonLower = document.createElement('button')
const buttonCopy = document.createElement('button')
const buttonRemove = document.createElement('button')
const successMessage = document.createElement('div')
const describeMessage = document.createElement('div')
const info = document.createElement('button')
const infoClose = document.createElement('button')

buttonCapital.textContent = 'toCapital'
buttonLower.textContent = 'toLower'
buttonRemove.textContent = 'Remove'
buttonCopy.textContent = 'Copy'
info.textContent = 'What is that?'
infoClose.textContent = 'Close'

document.body.append(inputIn)
document.body.append(inputOut)
document.body.append(wrapper)
wrapper.append(inputIn, inputOut)
document.body.append(buttons)
buttons.append(buttonCapital, buttonLower, buttonRemove)
wrapper.append(buttons)
document.body.append(successMessage)
document.body.append(info)
document.body.append(describeMessage)
// describeMessage.append(infoClose)

inputIn.classList.add('areaIn')
inputOut.classList.add('areaOut')
wrapper.classList.add('wrapper')
buttons.classList.add('buttons')
buttonCapital.classList.add('capital')
buttonLower.classList.add('lower')
buttonCopy.classList.add('copy')
buttonRemove.classList.add('remove')
info.classList.add('info')
infoClose.classList.add('infoClose')

buttonCapital.onclick = () => {
	inputOut.value = inputIn.value.toUpperCase()
	inputIn.value = '';
	buttons.append(buttonCopy);

}

buttonLower.onclick = () => {
	inputOut.value = inputIn.value.toLowerCase()
	inputIn.value = '';
	buttons.append(buttonCopy);
}

buttonRemove.onclick = () => {
	inputIn.value = '';
	inputOut.value = '';
	buttonCopy.remove();
}

buttonCopy.onclick = () => {
	navigator.clipboard.writeText(inputOut.value);
	successMessage.textContent = 'Text Copied!';
	successMessage.classList.add('active');
	setTimeout(() => successMessage.classList.remove('active'), 2000);
}

info.onclick = () => {
	describeMessage.textContent = 'тренувальна прога, яка змінює регістр тексту. Чи корисно це мені, хз, но це перше завдання, яке прийшло мені у голову, тому як практика це окей =)';
	describeMessage.classList.add('describe');
	describeMessage.append(infoClose)
	// setTimeout(() => describeMessage.classList.remove('describe'), 3000);
	setTimeout(() => describeMessage.style.display = 'none', 3000);
}


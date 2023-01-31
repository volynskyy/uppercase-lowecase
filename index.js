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
const italics = document.createElement('button')
const bold = document.createElement('button')
const underline = document.createElement('button')

buttonCapital.textContent = 'toCapital'
buttonLower.textContent = 'toLower'
buttonRemove.textContent = 'Remove'
buttonCopy.textContent = 'Copy'
info.textContent = 'What is that?'
infoClose.textContent = 'Close'
italics.textContent = 'Italic'
bold.textContent = 'Bold'
underline.textContent = 'Underline'


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
italics.classList.add('italic')
bold.classList.add('bold')
underline.classList.add('underline')

buttonCapital.onclick = () => {
	inputOut.value = inputIn.value.toUpperCase()
	inputIn.value = '';
	buttons.append(buttonCopy);
	buttons.append(italics);
	buttons.append(bold);
	buttons.append(underline);
}

buttonLower.onclick = () => {
	inputOut.value = inputIn.value.toLowerCase()
	inputIn.value = '';
	buttons.append(buttonCopy);
	buttons.append(italics);
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

italics.onclick = () => {
	inputOut.classList.toggle('italic-text')
	italics.classList.toggle('active-btn')
}
bold.onclick = () => {
	inputOut.classList.toggle('bold-text')
	bold.classList.toggle('active-btn')
}
underline.onclick = () => {
	inputOut.classList.toggle('underline-text')
	underline.classList.toggle('active-btn')
}

info.onclick = () => {
	describeMessage.textContent = 'тренувальна прога, яка змінює регістр тексту. Чи корисно це мені, хз, но це перше завдання, яке прийшло мені у голову, тому як практика це окей =)';

	describeMessage.classList.add('describe');
	describeMessage.append(infoClose)	
}

infoClose.onclick = () => {
	describeMessage.classList.remove('describe')
}

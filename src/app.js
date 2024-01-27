import { YesNo } from './api/yes-no'
import './styles/index.scss'

const resultButton = document.querySelector('.yes-no__check')
const askInput = document.querySelector('.yes-no__input')
const resultModal = document.querySelector('.yes-no__result-modal')
const resultSpan = resultModal.querySelector('#result')
const resultImg = resultModal.querySelector('#result-img')

resultButton.addEventListener('click', resultHandler)

async function resultHandler() {
	if (!askInput.value) {
		return
	}

	YesNo.getYesOrNo()
		.then(renderResult)
		.then(() => (askInput.value = ''))
}

async function renderResult(result) {
	const { answer, image } = result

	resultModal.classList.add('active')
	resultSpan.innerHTML = answer
	resultImg.src = image

	const timeout = setTimeout(() => {
		resultModal.classList.remove('active')
		resultSpan.innerHTML = ''
		resultImg.src = '#'

		clearTimeout(timeout)
	}, 3000)
}

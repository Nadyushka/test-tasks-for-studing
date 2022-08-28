
/*

/ при использовании 1 кнопки для скрытия и отображения/

const collapsibleContent = document.querySelector('.collapsible__content p')
const collapsibleButton = document.querySelector('.collapsible__button')

collapsibleButton.addEventListener('click', function () {
	if (!collapsibleContent.style.visibility || collapsibleContent.style.visibility == 'visible') {
		collapsibleContent.style.visibility = 'hidden';
	} else {
		collapsibleContent.style.visibility = 'visible';
	}
}
)
*/

/ при использовании 2 кнопок: одна для скрытия, вторая для отображения /

const collapsibleContent = document.querySelector('.collapsible__content p')
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible')
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden')

collapsibleActionVisible.addEventListener('click', () => {
	collapsibleContent.style.visibility = 'hidden';
}
)

collapsibleActionHidden.addEventListener('click', function () {
	collapsibleContent.style.visibility = 'visible';
}
)

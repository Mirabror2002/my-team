let elHamburgerBtn = document.querySelector('.header__hamburger-btn')
let elOuterModal = document.querySelector('.modal-outer')
let elInnerModal = document.querySelector('.modal-inner')
let elCloseModal = document.querySelector('.modal__close-btn')

elHamburgerBtn.addEventListener("click", function(){
	elOuterModal.classList.add('show-outer')
	elInnerModal.classList.add('show-inner')
	document.body.classList.add("hidden-scroll")
})

elCloseModal.addEventListener("click", function(){
	elOuterModal.classList.remove('show-outer')
	elInnerModal.classList.remove('show-inner')
	document.body.classList.remove('hidden-scroll')
})

elOuterModal.addEventListener("click", function(evt){
	if(evt.target.id == "modal-outer"){
		elOuterModal.classList.remove('show-outer')
		elInnerModal.classList.remove('show-inner')
		document.body.classList.remove('hidden-scroll')
	}
	})
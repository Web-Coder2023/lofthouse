const burger = () => {

    const body = document.querySelector('body'),
        headerTopRow = body.querySelector('.header__top-row'),
        burger = headerTopRow.querySelector('.header__burger'),
        burgerIcon = headerTopRow.querySelector('.header__burger-line');

    burger.addEventListener('click', () => {
        burgerIcon.classList.toggle('_active');
        headerTopRow.classList.toggle('header__top-row--mobile');
        body.classList.toggle('_lock');
    })

}
burger();
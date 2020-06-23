'use strict';

    const menuItems = document.querySelector('.menuItems'),
          mainMenu = document.querySelector('.mainMenu'),
          menuItem = document.querySelectorAll('.menuItem'),
          cont = document.querySelector('.aboutMenu'),
          close = document.querySelector('.closeAbout'),
          donate = document.querySelector('.donateMenu'),
          infoMenu = document.querySelector('.infoMenu'),
          closeInfo = document.querySelector('.closeInfo');
  
    // ГЛАВНАЯ СТРАНИЦА


    // Показываем главное меню
    function modalShow() {
        mainMenu.classList.remove('hide');
        mainMenu.classList.remove('fade');
        mainMenu.classList.add('show');
    }

    // Скрываем главное меню
    function modalHide() {
        mainMenu.classList.remove('show');
        mainMenu.classList.remove('showAnim');
        mainMenu.classList.add('hide');
    }

    // Анимация скрытия главного меню
    function hideAnim() {
        mainMenu.classList.add('fade');
        mainMenu.classList.remove('showAnim');
        const modalHideInTanget = setTimeout(modalHide, 1300);
    }

    // Анимация показа главного меню
    function showAnim() {
        mainMenu.classList.add('showAnim');
        mainMenu.classList.remove('fade');
        const modalShowInTarget = setTimeout(modalShow, 1300);
    }

    // Добавляем обработчик событий, т.е исчезание меню при нажатии на кнопку
    menuItems.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('menuItem')) {
        hideAnim();
        } 
    });


    // СТРАНИЦА О НАС


    // Открытие/закрытие о нас

    function showContainer() {
        cont.classList.remove('hide');
        cont.classList.add('show');
        cont.classList.add('showAnim');
    }

    function hideContainer() {
        cont.classList.remove('show');
        cont.classList.add('hide');
    }


    // Открываем страницу о нас после нажатия 4 кнопки
    menuItem[3].addEventListener('click', () => {
        if (mainMenu.classList.contains('showAnim', 'show')) {
            hideAnim();
        }
       const showCont = setTimeout(showContainer, 1300);
    });

    // Анимация скрытия о нас
    function hideContainerAnim() {
        cont.classList.add('fade');
        cont.classList.remove('showAnim');
        const containerHide = setTimeout(hideContainer, 1300);
    }

    // Закрываем контейнер по нажатию крестика на странице о нас и открываем главное меню
    cont.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('closeAbout')) {
            hideContainerAnim();
        const hideCont = setTimeout(hideContainer, 1300);
            showAnim();
        const showModalMenu = setTimeout(modalShow, 1000);
        } 
    });


    // ДОНАТ СТРАНИЦА

    // Открытие/закрытие доната

    function showDonate() {
        donate.classList.remove('hide');
        donate.classList.add('show');
        donate.classList.add('showAnim');
    }

    function hideDonate() {
        donate.classList.remove('show');
        donate.classList.add('hide');
    }

    // Анимация скрытия доната
    function hideDonateAnim() {
        donate.classList.add('fade');
        donate.classList.remove('showAnim');
        const donateHide = setTimeout(hideDonate, 1300);
    }

    // Открываем страницу доната после нажатия 3 кнопки
    menuItem[2].addEventListener('click', () => {
        if (mainMenu.classList.contains('showAnim', 'show')) {
            hideAnim();
        }
       const showDonateEl = setTimeout(showDonate, 1300);
    });

    // Закрываем донат по нажатию крестика, и открываем главное меню
    donate.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('closeDonate')) {
            hideDonateAnim();
            showAnim();
        const showModalMenu = setTimeout(modalShow, 1000);
        } 
    });

    // СТРАНИЦА ИНФОРМАЦИИ

    function showInfo() {
        infoMenu.classList.remove('hide');
        infoMenu.classList.add('show');
        infoMenu.classList.add('showAnim');
    }

    function hideInfo() {
        infoMenu.classList.remove('show');
        infoMenu.classList.add('hide');
    }

    // Анимация скрытия доната
    function hideInfoAnim() {
        infoMenu.classList.add('fade');
        infoMenu.classList.remove('showAnim');
        const donateHide = setTimeout(hideInfo, 1300);
    }

    // Открываем страницу доната после нажатия 3 кнопки
    menuItem[1].addEventListener('click', () => {
        if (mainMenu.classList.contains('showAnim', 'show')) {
            hideAnim();
        }
       const showInfoEl = setTimeout(showInfo, 1300);
    });

    // Закрываем донат по нажатию крестика, и открываем главное меню
    infoMenu.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('closeInfo')) {
            hideInfoAnim();
            showAnim();
        const showModalMenu = setTimeout(modalShow, 1000);
        } 
    });
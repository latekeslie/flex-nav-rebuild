
var primaryNav = document.querySelectorAll('[data-primary-nav]');
var burgers = document.querySelectorAll('[data-burger]');
var container = document.getElementById('toggleMe');
//
// console.log(typeof(burgers));
// console.log([...burgers]);
//
// var array = [...burgers];
// console.log(array);
//
// function addClass(el, str)
// {
//   el.className = el.className + ' ' + str;
// }
//
// function removeClass(el, str)
// {
//   el.className = el.className.replace(' ' + str,'');
// }
//
// if (window.pageYOffset) {
//   [...primaryNav].forEach((el) => {
//     el.classList.add("-stuck");
//   });
// };
//
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset) {
//    [...primaryNav].forEach((el) => {
//      el.classList.add("-stuck");
//    });
//
//    // primaryNav.forEach((el) => {
//    //   if(el.className.indexOf('-transparent') !== -1) {
//    //     el.classList.add("-white");
//    //     logo.forEach((el) => {
//    //       el.src = '/assets/src/svg/logo.svg';
//    //     })
//    //   }
//    // });
//  } else {
//    [...primaryNav].forEach((el) => {
//      el.classList.remove("-stuck");
//    });
//
//    // primaryNav.forEach((el) => {
//    //   if(el.className.indexOf('-transparent') !== -1) {
//    //     el.classList.remove("-white");
//    //     logo.forEach((el) => {
//    //       el.src = '/assets/src/svg/logo-white.svg';
//    //     })
//    //   }
//    // });
//  }
// });


// function toggleBurger(el) {
//   [...burgers].forEach(function(el) {
//     if (el.className.indexOf('-active') === -1) {
//       addClass(el, '-active');
//     } else {
//       removeClass(el, '-active');
//       blur();
//     }
//   });
// };
//
// [...burgers].forEach(function(el) {
//   el.addEventListener('click', toggleBurger);
// })


// --practice toggle


// window.addEventListener('resize', function() {
//     if(window.innerWidth >= 950 ) {
//       container.classList.add('active')
//     }
//     else if (window.innerWidth < 950 ) {
//       container.classList.remove('active');
//     }
//   });


if(window.innerWidth >= 950 ) {
  container.classList.add('active')
}
else {
  document.getElementById('toggle').addEventListener('click', function (event) {
      event.preventDefault();

      if (!container.classList.contains('active')) {
          container.classList.add('active');
          container.style.height = 'auto';

          var height = container.clientHeight + "px";

          container.style.height = '0px';

          setTimeout(function () {
              container.style.height = height;
          }, 0);
      } else {
          container.style.height = '0px';

          container.addEventListener('transitionend', function () {
              container.classList.remove('active');
          }, {
              once: true
          });
      }
  });
}








// window.addEventListener("click", toggleBurger);

const drawerSlide = () => {
	const burger = document.querySelector('.burger');
	const drawer = document.querySelector('.drawer-links');
	const drawerLinks = document.querySelectorAll('.drawer-links li');

	burger.addEventListener('click', () => {
		drawer.classList.toggle('drawer-active');
		// drawer.style.display = 'visible';

		drawerLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
					0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
		// toggle.classList.remove('drawer-active');
	});

	window.addEventListener('mouseup', function(event) {
		if (
			event.target != drawer &&
			event.target != burger &&
			event.target.parentNode != drawer &&
			event.target.parentNode != burger
		) {
			if (drawer.classList.contains('drawer-active')) {
				drawer.classList.remove('drawer-active');
				burger.classList.toggle('toggle');

				drawerLinks.forEach((link, index) => {
					if (link.style.animation) {
						link.style.animation = '';
					} else {
						link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
							0.5}s`;
					}
				});
			}
		}
	});

	window.addEventListener('touchstart', function(event) {
		if (
			event.target != drawer &&
			event.target != burger &&
			event.target.parentNode != drawer &&
			event.target.parentNode != burger
		) {
			if (drawer.classList.contains('drawer-active')) {
				drawer.classList.remove('drawer-active');
				burger.classList.toggle('toggle');

				drawerLinks.forEach((link, index) => {
					if (link.style.animation) {
						link.style.animation = '';
					} else {
						link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
							0.5}s`;
					}
				});
			}
		}
	});
};

drawerSlide();

// const app = () => {
// 	navSlide();
// };

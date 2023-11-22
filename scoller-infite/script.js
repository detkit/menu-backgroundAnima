const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		scroller.setAttribute('data-animated', true);

		const scrollerInner = scroller.querySelector('.scroller__inner');
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach((item) => {
			const duplicated = item.cloneNode(true);
			duplicated.setAttribute('aria-hidden', true);
			scrollerInner.appendChild(duplicated);
		});
	});
}

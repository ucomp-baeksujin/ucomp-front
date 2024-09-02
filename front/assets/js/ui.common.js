var uiCommon = (function() {
	const _ = {
		onLoad: function() {
			_.defaultTab();
			_.popup.init();
		},
		onResize: function() {
		},
		onScroll: function() {
		},
		// popup
		popup: {
			init: function() {
				_.popup.open();
				_.popup.close();
				_.popup.key();
			},
			open: function() {
				const popupOpenBtns = document.querySelectorAll('.btn-popup-open');
				popupOpenBtns.forEach(function(_a) {
					// const popup = document.querySelector('.popup');
					// const targetId = this.getAttribute('data-popup-target');
					// const targetPopup = document.getElementById(targetId);
					// popup.querySelector('.popup-contents').focus();
					// if (targetPopup) {
					// 	targetPopup.classList.toggle('active');
					// }
					_a.addEventListener('click', function(e) {
						const target = this.getAttribute('data-popup-target');
						_a.setAttribute('tabindex', '-1');
						_.popup.popupOpen(target);
						
						e.preventDefault();
					});
                });

				_.popup.toast();
			},
			popupOpen: function(dataName) {
				const dataTarget = document.querySelector(`[data-ui-popup="${dataName}"]`);
				if (!dataTarget) return;
				const target = document.querySelector('[data-ui-popup]');
				const popupContent = document.querySelector('.popup-wrap');
				
				document.querySelector('body').classList.add('scroll-hidden');
				dataTarget.setAttribute('aria-hidden', 'false');
				dataTarget.classList.toggle('active');
				// popupContent.setAttribute('tabindex', '0');
				setTimeout(() => {
					dataTarget.classList.add('active');
				},150);

				_.popup.toast();
			},
			close: function() {
				const popupCloseBtns = document.querySelectorAll('.btn-popup-close');
				popupCloseBtns.forEach(function(_b) {
					_b.addEventListener('click', function(e) {
						const elem = _b.closest('[data-ui-popup]');
						if (elem) {
                            elem.classList.remove('active');
							elem.setAttribute('aria-hidden', 'true');
                        }
						e.preventDefault();
                    });
				});
			},	
			popupClose: function(dataTarget) {
				const target = document.querySelector(`[data-ui-popup="${dataTarget}"]`);
				if (!target) return;
				// const targetOpened = target.contains('.active');
				// const targetLength = targetOpened.length;

				const popupContent = document.querySelector('.popup-wrap');

				document.querySelector('body').classList.remove('scroll-hidden');
				target.setAttribute('aria-hidden', 'true');
				target.classList.toggle('active');
				popupContent.setAttribute('tabindex', '-1');
				setTimeout(() => {
					target.classList.remove('active');
				},150);
			},
			toast: () => {
				const toastTargets = document.querySelectorAll('[data-ui-popup="toastPopup"]');
				toastTargets.forEach(function(toast) {
					if (toast.classList.contains('active')) {
						setTimeout(function () {
							const dataTarget = toast.getAttribute('data-ui-popup')
							uiCommon.popup.popupClose(dataTarget);
						}, 2000);
					}
				});
			},
			key: function() {
				document.addEventListener('keydown', function(e) {
					if (e.key === 'Escape') {
						const activePopups = document.querySelectorAll('[data-ui-popup].active');
						activePopups.forEach(function(activePopup) {
							activePopup.classList.remove('active');
						});
					}
				});
			},
		},
		// tab
		defaultTab: function() {
			const tabs = document.querySelectorAll('.tab-display[data-tab="defaultTab"] .tab-text');
			const tabContents = document.querySelectorAll('.tab-content');

			tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.parentElement.classList.remove('current'));
                    this.parentElement.classList.add('current');

					tabContents.forEach(tc => tc.classList.remove('on'));
                    const targetTab = this.getAttribute('data-type');
                    document.getElementById(targetTab).classList.add('on');
                });
            });
		},
	};

	return _;
})();

window.addEventListener('load', function() {
	uiCommon.onLoad();
});

window.addEventListener('resize', function() {
	uiCommon.onResize();
});

window.addEventListener('scroll', function() {
	uiCommon.onScroll();
});


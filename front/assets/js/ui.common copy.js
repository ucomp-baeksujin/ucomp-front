var breakpointMd = 1024;

var uiCommon = {
	init : function() {
		return {
			onLoad : function(){
				// uiCommon.winSizeSet();
				// uiCommon.pcGnb();
				// uiCommon.moGnb();
				// uiCommon.scrollEvent();
				// uiCommon.scrollToTop();
				// uiCommon.slider();
				// uiCommon.accordion();
				// uiCommon.modal.init();
				// uiCommon.passwordForm();
				// uiCommon.emailForm();
				uiCommon.tabDisplay();
				// uiCommon.checkedWithin();
				// // uiCommon.scrollActive();
				// uiCommon.scrollMotion.init();
				// uiCommon.motionUp();
				// uiCommon.setViewportHeight();
			},
			onResize : function(){
				// uiCommon.winSizeSet();				
				// uiCommon.slider();
				// uiCommon.modal.init();

				// if (window.innerWidth > 767) { 
				// 	uiCommon.setViewportHeight();
				// }
			},
			onScroll: function () {
				// uiCommon.scrollToTop();
				// uiCommon.scrollEvent();
			},
		}
	},
	// winSizeSet: function() {
	// 	if ($(window).width() >= breakpointMd) {
	// 		winSize = 'laptop';
	// 		$('html').removeClass('mobile').addClass('laptop');
	// 	} else {
	// 		winSize = 'mobile';
	// 		$('html').removeClass('laptop').addClass('mobile');
	// 	}
	// },
	// pcGnb : function() {
	// 	var header = $('#header'),
	// 		gnb = $('.gnb'),
	// 		naviItem = $('.gnb .navi-item'),
	// 		trigger = $('.gnb .navi-item .navi-text'),
	// 		lnbItem = $('.gnb .lnb .lnb-item'),
	// 		utilNavi = $('.util-menu');
	// 		utilNaviItem = $('.util-menu .navi-item');
	// 		utilSubItem = $('.util-list .util-item .util-text');

	// 	header.on('mouseenter', function(){
	// 		$(this).addClass('active');
	// 	});
		
	// 	header.on('mouseleave', function () {
	// 		$(this).removeClass("active");
	// 	});
		
	// 	naviItem.on('mouseenter', function(){
	// 		$(this).closest(gnb).addClass('active');
	// 	});

	// 	utilNaviItem.on('mouseenter', function(){
	// 		$(this).closest(header).find(gnb).addClass('active');
	// 	});
	
	// 	naviItem.add(utilNaviItem).on('focusin', function () {
	// 		gnb.addClass("focus");
	// 	}).mouseleave(function () {	
	// 		gnb.removeClass("focus");
	// 	});
	
	// 	gnb.on('mouseleave focusout', function () {
	// 		gnb.removeClass("active");
	// 	});

	// 	utilNavi.on('mouseleave focusout', function () {
	// 		gnb.removeClass("active");
	// 	});
	
	// 	utilNavi.find("a:last").focusout(function () {
	// 		$(this).parents().find(".gnb").removeClass("focus");
	// 	});
	// },
	// moGnb: function () {
	// 	var fullMenuBtn = $('#header .util-control .btn-full-menu'),
	// 		fullMenu = $('#header .m-gnb');

	// 	fullMenuBtn.click(function () {
	// 		if (!$(this).hasClass('active')) {
	// 			$(this).addClass('active');
	// 			fullMenu.addClass('active');
	// 			$('body').addClass('hidden');
	// 		} else { 
	// 			$(this).removeClass('active');
	// 			fullMenu.removeClass('active');
	// 			$('body').removeClass('hidden');
	// 		}
	// 	});
	// },
	// scrollEvent: function () {
	// 	var lastScrollTop = 0;
	// 	var winscrlT = $(window).scrollTop(),
	// 		winscrlL = $(window).scrollLeft(),
	// 		windowHeight = $(window).height(),
	// 		documentHeight = $(document).height();
		
	// 	$(window).scroll(function () {
	// 		var scrollTop = $(this).scrollTop();
	// 		if (scrollTop > 0) {
	// 			$('html').addClass('scroll-start');
	// 			// console.log('started');
	// 		} else {
	// 			$('html').removeClass('scroll-start');
	// 		}

	// 		if (scrollTop > lastScrollTop) {
	// 			$('html').addClass('scroll-down');
	// 			// console.log('down');
	// 		} else {
	// 			$('html').removeClass('scroll-down');
	// 		}

	// 		if (scrollTop < lastScrollTop || scrollTop === 0) {
	// 			$('html').addClass('scroll-up');
	// 			// console.log('a')

	// 			if (scrollTop === 0) {
	// 				$('html').removeClass('scroll-up');
	// 				// console.log('b')
	// 			}
	// 		} else {
	// 			$('html').removeClass('scroll-up');
	// 			// console.log('c')
	// 		}

	// 		if (scrollTop + windowHeight >= documentHeight) {
	// 			$('html').addClass('scroll-bottom');
	// 			// console.log('최하단');
	// 		} else {
	// 			$('html').removeClass('scroll-bottom');
	// 		}

	// 		lastScrollTop = scrollTop;
	// 	});

	// 	// if (winscrlT > 0) {
	// 	// 	$('html').addClass('active-scroll-start');
	// 	// } else {
	// 	// 	$('html').removeClass('active-scroll-start');
	// 	// }
	// },
	// scrollToTop: function () {
	// 	let $quickMenu = $('.quick-menu');
	// 	let $btnTop = $('.btn-to-top');
	// 	let $footer = $('#footer');

	// 	if ($quickMenu.length > 0) { 
	// 		function handleScroll() {
	// 			let scrollTop = $(window).scrollTop();
	// 			let windowHeight = $(window).height();
	// 			let footerOffsetTop = $footer.offset().top;
	// 			let windowWidth = $(window).width();
			
	// 			if($btnTop.length){
	// 				$(window).scrollTop() > 100 ? $btnTop.addClass('show') : $btnTop.removeClass('show');
	// 			} 

	// 			if (windowWidth < 1024) {
	// 				$quickMenu.css({
	// 					bottom: '50px',
	// 				});
	// 			} else {
	// 				$quickMenu.css({
	// 					bottom: '80px',
	// 				});
					
	// 				if (scrollTop + windowHeight > footerOffsetTop) { 
	// 					let overlap = (scrollTop + windowHeight) - footerOffsetTop;
	// 					let bottomValue = overlap - 32; 

	// 					$quickMenu.css({
	// 						bottom: bottomValue + 'px',
	// 					});
	// 				}
	// 			}
	// 		}
	
	// 		handleScroll();
	
	// 		$btnTop.on('click', function () {
	// 			$('html, body').stop().animate({ scrollTop: 0 }, 300)
	// 		});
	// 	}
	// },
	// modal: {
    //     init: function() {
	// 		uiCommon.modal.open();
	// 		uiCommon.modal.close();
    //     },
	// 	open: function () {
	// 		const modal = $('.modal');
	// 		var modalOpenBtn = $('.btn-modal');
	// 		modalOpenBtn.on('click', function(e) {
	// 			const id = $(this).data('target');
	// 			$(this).addClass('active').attr('tabindex', '-1');
	// 			uiCommon.modal.modalOpen(id);
	// 			e.preventDefault();
	// 		});

	// 		if ($(window).width() < 767 && $('.modal.active').length > 0) {
	// 			$('html').addClass('active-modal');
	// 		}

	// 		uiCommon.modal.toast();
    //     },
	// 	modalOpen: function(id) {
	// 		const idValue = $('#' + id);
	// 		const modalCont = idValue.find('.modal-content');
	// 		const modalOpened = $(".modal.active");
	// 		const modalOpenedLen = modalOpened.length + 1;
	// 		// const modalOpened = $('.modal.active');
	// 		// const modalOpenedLen = $(".modal.active").length + 1;

	// 		$('html').addClass('active-modal');			
	// 		setTimeout(function() {
	// 			idValue.addClass('active');
	// 		}, 150);

	// 		modalCont.attr('tabindex', '0');
	// 		if (modalOpenedLen > 1) {
	// 			const openedLen = modalOpenedLen;
	// 			const zIndexNew = 1010 + openedLen;
	// 			idValue.css('z-index', zIndexNew);
	// 		}

	// 		setTimeout(function() {
	// 			modalCont.focus();
	// 		}, 350);

	// 		if (idValue.hasClass('toast-message')) {
	// 			setTimeout(function () {
	// 				uiCommon.modal.modalClose(id);
	// 			}, 2000);
	// 		}
	// 	},
    //     close: function() {
	// 		var modalCloseBtn = $('.modal .btn-close');
			
    //         modalCloseBtn.on('click', function() {
	// 			const id = $(this).closest('.modal').attr('id');
	// 			uiCommon.modal.modalClose(id);
	// 		});

	// 		modalCloseBtn.on('keydown', function(e) {
	// 			if ($(this).hasClass('btn-close')) {
	// 				const keyCode = e.keyCode || e.which;
	// 				if (!e.shiftKey && keyCode === 9) {
	// 					$(this).closest('.modal-content').focus();
	// 					e.preventDefault();
	// 				}
	// 			}
	// 		});
    //     },
	// 	modalClose: function(id) {
	// 		const idValue = $('#' + id);
	// 		const modalCont = idValue.find('.modal-content');
	// 		const modalOpened = $('.modal.active');
	// 		const modalOpenedLen = modalOpened.length;

	// 		idValue.attr('aria-hidden', 'true').removeClass('active');
	// 		modalCont.removeAttr('tabindex');

	// 		idValue.css("z-index", "");
			
	// 		if (modalOpenedLen === 1) {
	// 			$("html").removeClass("active-modal");
	// 		}

	// 		const triggerBtn = $('.btn-modal.active');
	// 		if (triggerBtn.length) {
	// 			triggerBtn.removeClass("active").attr("tabindex", "0").focus();
	// 		}
	// 	},
	// 	toast: function() {
	// 		const toastMessages = $(".modal.toast-message");
	// 		toastMessages.each(function () {
	// 			const toastMessage = $(this);
	// 			if (toastMessage.hasClass("active")) {
	// 				setTimeout(function () {
	// 					const id = toastMessage.attr("id");
	// 					uiCommon.modal.modalClose(id);
	// 				}, 2000);
	// 			}
	// 		});
	// 	},
    // },
	// slider: function () {
	// 	const initSwiper = function (selector, option) { 
	// 		if ($(selector).length) { 
	// 			return new Swiper(selector, option);
	// 		}
	// 		return null;
	// 	}
	// 	// 지난 활동 보기 상세
	// 	var galleryBoardView = initSwiper('.board-view-slides', {
	// 		watchOverflow: true,
	// 		slidesPerView: 'auto',
	// 		spaceBetween: 12,
	// 		navigation: false,
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 		breakpoints: {
	// 			1024: {
	// 				spaceBetween: 30,
	// 			}
	// 		}
	// 	});
	
	// 	// 지난 활동 보기 상세 팝업
	// 	var galleryModalView = initSwiper('.history-view-slides', {
	// 		watchOverflow: true,
	// 		slidesPerView: 1,
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 		pagination: {
	// 			el: ".swiper-pagination",
	// 			type: "fraction",
	// 		}
	// 	});

	// 	// tab style-a
	// 	var tabSwiper = undefined;
	// 	if ($(window).width() < breakpointMd) {
	// 		tabSwiper = initSwiper(".tab-display.scroll", {
	// 			watchOverflow: true,
	// 			slidesPerView: "auto",
	// 			freeMode: true,
	// 			spaceBetween: 30,  
	// 			wrapperClass: 'tab-list',
	// 			slideClass: 'tab-item',
	// 			breakpoints: {
	// 				1024: {
	// 					spaceBetween: 0,
	// 				}
	// 			}
	// 		});
	// 	} else if ($(window).width() > breakpointMd && tabSwiper != undefined){
	// 		tabSwiper = undefined;
	// 		tabSwiper.destroy();
	// 	}
	// },
	// accordion: function() {
	// 	$('.accordion-list .btn-accordion').each(function() {
	// 		$(this).click(function(){
	// 			if(!$(this).closest('.accordion-item').hasClass('active')) {
	// 				$(this).closest('.accordion-item').removeClass('active');
	// 				$(this).closest('.accordion-item').siblings().removeClass('active');
	// 				$(this).closest('.accordion-item').addClass('active');
	// 			} else {
	// 				$(this).closest('.accordion-item').removeClass('active');
	// 			}
	// 		})
	// 	})
	// },
	// passwordForm: function () { 
	// 	var passwordBtn = $('.btn-password'),
	// 		passwordElem = passwordBtn.closest('.password').children('.form-elem');
		
	// 	passwordBtn.click(function () {
	// 		$(this).toggleClass('show')
	// 		if (!$(this).hasClass('show')) {
	// 			passwordElem.prop('type', "password");
	// 		} else { 
	// 			passwordElem.prop('type', "text");
	// 		}
	// 	});
	// },
	// emailForm: function () {
	// 	const emailInput = $('input[type="email"]');

	// 	if (emailInput.length) { 
	// 		new Awesomplete('input[type="email"]', {
	// 			list: ["naver.com", "gmail.com", "daum.net", "kakao.kr"],
	// 			data: function (text, input) {
	// 				return input.slice(0, input.indexOf("@")) + "@" + text;
	// 			},
	// 			filter: Awesomplete.FILTER_STARTSWITH
	// 		});
	// 	}
	// },
	tabDisplay: function () { 
		$('.tab-display[data-tab="defaultTab"] .tab-text').each(function () {
			$(this).click(function () {
				$(this).parent().addClass("current").siblings("li").removeClass("current"); 
				$(this).closest('.tab-display').next('.tab-contents').find(".tab-content").removeClass('on');
				var currenteTab =$(this).attr("data-type");
				$("#" + currenteTab).addClass('on');
			});
		});
	},
	// checkedWithin: function () { 
	// 	$('.option-elem').on('change', function() {
	// 		var $this = $(this);
	// 		var closestSelector = '.option-item';

	// 		if ($this.attr('type') == 'radio') {
	// 			$this.closest(closestSelector).siblings(closestSelector).removeClass('is-checked');
	// 			$this.closest(closestSelector).addClass('is-checked');
	// 		}

	// 		if ($this.attr('type') == 'checkbox') {
	// 			if ($this.is(':checked')) {
	// 				$this.closest(closestSelector).addClass('is-checked');
	// 			} else {
	// 				$this.closest(closestSelector).removeClass('is-checked');
	// 			}
	// 		}
	// 	});
	// 	$('.option-elem').each(function() {
	// 		var $this = $(this);
	// 		var closestSelector = '.option-item';

	// 		if ($this.attr('type') == 'radio' && $this.is(':checked')) {
	// 			$this.closest(closestSelector).addClass('is-checked');
	// 		}

	// 		if ($this.attr('type') == 'checkbox' && $this.is(':checked')) {
	// 			$this.closest(closestSelector).addClass('is-checked');
	// 		}
	// 	});
	// },
	// scrollActive: function () {
	// 	// Detect request animation frame
	// 	var scroll = window.requestAnimationFrame ||
	// 	// IE Fallback
	// 	function(callback){ window.setTimeout(callback, 1000/60)};
	// 	var elementsToShow = document.querySelectorAll('.is-motion');

	// 	function loop() {
	// 		elementsToShow.forEach(function (element) {
	// 			if (isElementInViewport(element)) {
	// 				element.classList.add('is-active');
	// 				} else {
	// 				//element.classList.remove('is-visible');
	// 				}
	// 		});
	// 		scroll(loop);
	// 	}

	// 	// Call the loop for the first time
	// 	loop();

	// 	// Helper function from: http://stackoverflow.com/a/7557433/274826
	// 	function isElementInViewport(el) {
	// 		// special bonus for those using jQuery
	// 		if (typeof jQuery === "function" && el instanceof jQuery) {
	// 			el = el[0];
	// 		}
	// 		var rect = el.getBoundingClientRect();
	// 		return (
	// 			(rect.top <= 0
	// 			&& rect.bottom >= 0)
	// 			||
	// 			(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
	// 			rect.top <= (window.innerHeight || document.documentElement.clientHeight))
	// 			||
	// 			(rect.top >= 0 &&
	// 			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	// 		);
	// 	}
	// },
	// scrollMotion: {
	// 	init: function() {
	// 		const observeItems= document.querySelectorAll(".u-motion");
	// 		const callback = (entries, observer) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.intersectionRatio > 0) {
	// 			entry.target.classList.add("u-active");
	// 			observer.unobserve(entry.target)
	// 			}
	// 		})
	// 		}
	// 		const options = {
	// 			root: null,
	// 			rootMargin: '0px',
	// 			threshold: 0.1
	// 		}
	// 		const myObserver = new IntersectionObserver(callback, options);
	// 		observeItems.forEach(animate=>{
	// 			myObserver.observe(animate)
	// 		})	
	// 	}
	// },
	// motionUp: function () {
	// 	if (!!!document.querySelector('.motion-up')) { return; }
	// 	var motionFunc = function(item, riseYOffset) {
	// 		gsap.set(item, { y: riseYOffset, rotation: 0.1 });
	
	// 		// trigger
	// 		gsap.to(item, {
	// 			duration: 1,
	// 			y: 0,
	// 			rotation: 0,
	// 			force3D: true,
	// 			ease: 'power1.out',
	// 			scrollTrigger: {
	// 				trigger: item,
	// 				start: 'top 90%',
	// 			},
	// 			onComplete: function(){
	// 				item.removeAttribute('style')
	// 			}
	// 		});
	// 	}

	// 	document.querySelectorAll('.motion-up').forEach((item) => {
	// 		let riseYOffset = 50;
	// 		if( window.innerWidth <= 1023 ) { riseYOffset = 30; }
	// 		if ( item.classList.contains('motion-up-large')){
	// 			ScrollTrigger.matchMedia({
	// 				"(min-width: 769px)": function() {
	// 					motionFunc(item, riseYOffset);
	// 				},"(max-width: 768px)" : function() {
	// 					item.removeAttribute('style');
	// 				}
	// 			});
	// 		}else if ( item.classList.contains('motion-up-small')){
	// 			ScrollTrigger.matchMedia({
	// 				"(min-width: 769px)": function() {
	// 					item.removeAttribute('style');
	// 				},"(max-width: 768px)": function() {
	// 					motionFunc(item, riseYOffset);
	// 				}
	// 			});
	// 		}else {
	// 			motionFunc(item, riseYOffset);
	// 		}
	// 	});
	// },
	setViewportHeight: function () {
		// let vh = window.innerHeight * 0.01;
		// document.documentElement.style.setProperty('--vh', `${vh}px`);

		$(document.documentElement).css("--vh", $(window).innerHeight() + "px");

		$('.full-h').each(function() {
            var winHeight;
            if (window.screen.height === window.innerHeight) {
                winHeight = window.screen.height;
            } else {
                winHeight = window.innerHeight;
            }
            $(this).css('height', winHeight + 'px');
        });
    },
};

(function ($) {
	$(window).on({
		load: function () {
			uiCommon.init().onLoad();
		},
		resize: function () {
			uiCommon.init().onResize();
		},
		scroll: function () {
			uiCommon.init().onScroll();
		},
	});
})(jQuery);

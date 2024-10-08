window.onload = function () {
	const naviElement = document.querySelector('#g-navi');
	if (naviElement) {
		naviElement.insertAdjacentHTML('afterbegin', headerTemplate());
	}

	const skipElement = document.querySelector('#skip');
	if (skipElement) {
		skipElement.insertAdjacentHTML('afterbegin', skipTemplate());
	}

	// const footerElement = document.querySelector('#g-footer');
	// if (footerElement) {
	// 	footerElement.insertAdjacentHTML('afterbegin', headerTemplate());
	// }

	toggleEvent();
	naviEvent();

	document.querySelectorAll('.g-navi-list .page .g-sub-link').forEach(link => {
		link.addEventListener('click', function(e) {
			const page = this.getAttribute('href');
			const iframe = document.getElementById('gFrame');

			// iframe.src = page;

			if (iframe) {
				iframe.src = page; // iFrame의 src를 변경
			} else {
				console.warn('Error: content-frame iFrame is not found on this page.');
			}
		});
	});
}

const headerTemplate = function () {
	let headerContent =
		`<div class="g-navi-logo">
			<h1 class="navi-logo">
				<a href="#" class="logo">
					<svg width="20" height="20" viewBox=" 0 0 28 28" focusable="false" xmlns="http://www.w3.org/2000/svg"
						style="display: inline-block;">
						<title>유컴패니온</title>
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M12.3274 18.6828C12.3274 20.5984 11.3883 21.5543 9.51139 21.5543H9.51014C7.63323 21.5543 6.69415 20.5971 6.69415 18.6828V2H2V18.6828C2 20.9398 2.68388 22.7226 4.0529 24.0351C5.42067 25.3463 7.26866 26.0013 9.51014 26.0013C11.7516 26.0013 13.5644 25.3463 14.9473 24.0351C16.3288 22.7239 17.0215 20.9398 17.0215 18.6828V2H12.3274V18.6828ZM25.3689 6.35847C24.9478 5.91972 24.4311 5.69971 23.8226 5.69971V5.70097H23.7799C23.184 5.70097 22.6724 5.92098 22.2449 6.35974C21.8162 6.79849 21.6025 7.30552 21.6025 7.92383C21.6025 8.54213 21.8162 9.06307 22.2449 9.48792C22.6724 9.9115 23.1991 10.1239 23.8226 10.1239C24.4462 10.1239 24.9654 9.91908 25.379 9.50941C25.7926 9.09974 26 8.59776 26 7.96555C26 7.33334 25.7901 6.79723 25.3689 6.35847ZM25.3739 16.4916C24.9553 16.0591 24.4462 15.8442 23.8453 15.8442H23.8013C23.1991 15.8442 22.6824 16.0692 22.25 16.5143C21.8162 16.9594 21.6013 17.5183 21.6013 18.11C21.6013 18.7018 21.8175 19.2075 22.25 19.6324C22.6824 20.056 23.2154 20.2684 23.8453 20.2684C24.4462 20.2684 24.9553 20.0496 25.3739 19.6109C25.7913 19.1721 26.0013 18.6423 26.0013 18.024C26.0013 17.4335 25.7913 16.9227 25.3739 16.4916Z">
						</path>
					</svg>
					<span class="logo-text">Guide</span>
				</a>
			</h1>
		</div>
		<div class="g-navi-func">
			<button class="btn btn-menu" type="button" onclick="checkedWithin(this, '.g-navi-func')">메뉴</button>
		</div>
		<ul class="g-navi-list">
			<li class="g-navi-item">
				<button type="button" class="g-navi-subject">Guide</button>
				<ul class="g-sub-list">
					<li class="g-sub-item">
						<dl class="g-sub-wrap">
							<dt class="g-sub-title">Style</dt>
							<dd class="g-sub-name"><a href="style.html#container" class="g-sub-link">Layout</a></dd>
							<dd class="g-sub-name"><a href="style.html#typography" class="g-sub-link">Typography</a></dd>
							<dd class="g-sub-name"><a href="style.html#color" class="g-sub-link">Color</a></dd>
							<dd class="g-sub-name"><a href="style.html#icon" class="g-sub-link">Icon</a></dd>
						</dl>
						<dl class="g-sub-wrap">
							<dt class="g-sub-title">Component</dt>
							<dd class="g-sub-name"><a href="structure.html" class="g-sub-link">Structure</a></dd>
							<dd class="g-sub-name"><a href="button.html" class="g-sub-link">Button</a></dd>
							<dd class="g-sub-name"><a href="form.html" class="g-sub-link">Form</a></dd>
							<dd class="g-sub-name"><a href="tab.html" class="g-sub-link">Tab</a></dd>
							<dd class="g-sub-name"><a href="table.html" class="g-sub-link">Table</a></dd>
							<dd class="g-sub-name"><a href="pagination.html" class="g-sub-link">Pagination</a></dd>
							<dd class="g-sub-name"><a href="popup.html" class="g-sub-link">Popup</a></dd>
						</dl>
					</li>
				</ul>
			</li>
			<li class="g-navi-item">
				<button type="button" class="g-navi-subject">Style</button>
				<ul class="g-sub-list">
					<li class="g-sub-item"><a href="style.html#container" class="g-sub-link">Layout</a></li>
					<li class="g-sub-item"><a href="style.html#typography" class="g-sub-link">Typography</a></li>
					<li class="g-sub-item"><a href="style.html#color" class="g-sub-link">Color</a></li>
					<li class="g-sub-item"><a href="style.html#icon" class="g-sub-link">Icon</a></li>
				</ul>
			</li>
			<li class="g-navi-item">
				<button type="button" class="g-navi-subject">Component</button>
				<ul class="g-sub-list">
					<li class="g-sub-item"><a href="structure.html" class="g-sub-link">Structure</a></li>
					<li class="g-sub-item"><a href="button.html" class="g-sub-link">Button</a></li>
					<li class="g-sub-item"><a href="form.html" class="g-sub-link">Form</a></li>
					<li class="g-sub-item"><a href="tab.html" class="g-sub-link">Tab</a></li>
					<li class="g-sub-item"><a href="table.html" class="g-sub-link">Table</a></li>
					<li class="g-sub-item"><a href="pagination.html" class="g-sub-link">Pagination</a></li>
					<li class="g-sub-item"><a href="popup.html" class="g-sub-link">Popup</a></li>
				</ul>
			</li>
			<li class="g-navi-item page">
				<button type="button" class="g-navi-subject">Pages</button>
				<ul class="g-sub-list">
					<li class="g-sub-item"><a href="pages.html?page=main/index.html" class="g-sub-link">pages</a></li>
					<li class="g-sub-item"><a href="pages.html?page=login/index.html" class="g-sub-link">pages</a></li>
				</ul>
			</li>
		</ul>`;

	return `
        <div class="g-navi-wrap">${headerContent}</div>
    `;
}

const skipTemplate = function () {
	let skipContent =
		`<a href="#g-nav">메뉴 바로가기</a>
		<a href="#g-container">본문 바로가기</a>`;

	return `
        <div class="skip-wrap">${skipContent}</div>
    `;
}

// function activateGnb() {
// 	// 현재 페이지의 body 클래스 확인
// 	// var bodyClass = document.body.className;
// 	var contentDiv = document.querySelector('.g-content');
// 	var contentClassList = contentDiv ? contentDiv.classList : [];

// 	// GNB 항목들 가져오기
// 	var gnbLinks = document.querySelectorAll('.g-sub-link');

// 	// 각 GNB 링크의 href 확인 및 활성화
// 	gnbLinks.forEach(function (link) {
// 		var href = link.getAttribute('href');
// 		var pageName = href.substring(0, href.lastIndexOf('.')); 
// 		if (contentClassList.contains(pageName)) {
// 			link.classList.add('active');
// 		}
// 	});
// }

function hashtag (link) {
	var href = link.getAttribute('href');
	var hashIndex = href.indexOf('#');

	// 해시가 없는 경우, 기본 동작을 수행 (return true 를 반환)
	if (hashIndex === -1) {
		return true;
	}

	var hash = href.substring(hashIndex);
	var targetId = hash.substring(1);
	var targetElement = document.getElementById(targetId);

	if (window.location.pathname === link.pathname && targetElement) {
		var targetPosition = targetElement.offsetTop;
		window.scrollTo({ top: targetPosition, behavior: 'smooth' });

		// var gnbLinks = document.querySelectorAll('.g-sub-link');
		// gnbLinks.forEach(function (gnbLink) {
		// 	gnbLink.classList.remove('active');
		// });

		// link.classList.add('active');

		return false;
	}

	return true;
}

// function activelink() {
// 	var gnbLinks = document.querySelectorAll('.g-sub-link');
//     gnbLinks.forEach(function (link) {
//         link.addEventListener('click', function () {
//             gnbLinks.forEach(function (activeLink) {
//                 activeLink.classList.remove('active');
//             });

//             this.classList.add('active');
//         });
//     });
// }

// function hashtag(link) {
// 	var href = link.getAttribute('href');
// 	var hashIndex = href.indexOf('#');

// 	// 해시가 없는 경우, 기본 동작을 수행 (return true 를 반환)
// 	if (hashIndex === -1) {
// 		return true;
// 	}

// 	var hash = href.substring(hashIndex);
// 	var targetId = hash.substring(1);
// 	var targetElement = document.getElementById(targetId);

// 	if (window.location.pathname === link.pathname && targetElement) {
// 		var targetPosition = targetElement.offsetTop;
// 		window.scrollTo({ top: targetPosition, behavior: 'smooth' });

// 		var gnbLinks = document.querySelectorAll('.g-sub-link');
// 		gnbLinks.forEach(function (gnbLink) {
// 			gnbLink.classList.remove('active');
// 		});

// 		link.classList.add('active');

// 		return false;
// 	}

// 	return true;
// }

function naviEvent() {
	var toggleBtns = document.querySelectorAll('.g-navi-subject');
	
	toggleBtns.forEach(function (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			var toggleTarget = toggleBtn.closest('.g-navi-item');
			var siblingElems = toggleTarget.parentElement.children;

			Array.from(siblingElems).forEach(function (sibling) {
				if (sibling !== toggleTarget) {
					sibling.classList.remove('active');
				}
			});
			
			toggleTarget.classList.toggle('active');
		});
	});
}

function toggleEvent() {
	var toggleBtns = document.querySelectorAll('.g-toggle .btn-toggle');
	
	toggleBtns.forEach(function (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			var toggleTarget = toggleBtn.closest('.g-toggle');
			toggleTarget.classList.toggle('active');
		});
	});
}

function checkedWithin(selector, closestSelector) {
	if (selector.type == 'button') {
		selector.closest(closestSelector).classList.toggle("checked-within");
	}
}



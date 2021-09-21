let tabs = Array.from(document.getElementsByClassName("tab"));
let tabContent = document.getElementsByClassName("tab__content");

function changeActiveElements() {
	for (const tab of tabs) {
		tab.className = "tab";
	}

	for (const content of tabContent) {
		content.className = "tab__content";
	}

	let index = tabs.indexOf(this);

	tabs[index].className = "tab tab_active";
	tabContent[index].className = "tab__content tab__content_active";
}

for (const checkedTabs of tabs) {
	checkedTabs.onclick = changeActiveElements;
}
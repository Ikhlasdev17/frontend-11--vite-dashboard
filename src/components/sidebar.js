import 'boxicons'
import { sidebarMenu } from '../utils/sidebar-menu'

let selectedItem = 'Сегодняшние заказы'

export const setSidebar = element => {
	const sidebarEl = `
		<aside class="sidebar">

			<button class="sidebar-toggler">
				<i class='bx bx-chevrons-right'></i>
			</button>

			<img class="logo" width="180"  src="/logo.png" />
      <span class="sidebar-menu-title">ГЛАВНОЕ</span>
			<ul id="sidebar-main-menu"></ul>
      <span class="sidebar-menu-title">МЕНЮ</span>
			<ul id="sidebar-menu"></ul>
		</aside>
	`
	if (element) {
		element.innerHTML = sidebarEl
	} else {
		document.querySelector('#sidebar-parent').innerHTML = sidebarEl
	}
}

export const setSidebarMenus = (mainMenuParent, menuParent) => {
	mainMenuParent.innerHTML = ''
	menuParent.innerHTML = ''

	sidebarMenu.main.map(item => {
		mainMenuParent.innerHTML += `
      <a href="${item.path}">
			<li data-label="${item.label}" class="menu-item ${
			item.label === selectedItem ? 'active' : ''
		}">
        <i class="bx ${item.icon}"></i>
        <span>${item.label}</span>
      </li></a>
    `
	})

	sidebarMenu.menu.map(item => {
		menuParent.innerHTML += `
      <a href="${item.path}">
				<li data-label="${item.label}" class="menu-item ${
			item.label === selectedItem ? 'active' : ''
		}">
					<i class="bx ${item.icon}"></i>
					<span>${item.label}</span>
				</li>
			</a>
    `
	})
}

export const toggleSidebar = () => {
	document.querySelector('#sidebar-parent').classList.toggle('open')
}

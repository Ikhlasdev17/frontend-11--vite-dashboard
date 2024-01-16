import {
	setSidebar,
	setSidebarMenus,
	toggleSidebar,
} from './components/sidebar'
import './styles/style.scss'
document.querySelector('#app').innerHTML = `
	<div class="wrapper">
		<div id="sidebar-parent"></div>
		<div id="main-parent" class="open"></div>
	</div>
`

setSidebar(document.querySelector('#sidebar-parent'))
setSidebarMenus(
	document.querySelector('#sidebar-main-menu'),
	document.querySelector('#sidebar-menu')
)

document
	.querySelector('.sidebar-toggler')
	.addEventListener('click', toggleSidebar)

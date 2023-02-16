<script>
	// import { page } from '$app/stores';
	// import github from '$lib/images/github.svg';
	
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DropdownDivider } from 'flowbite-svelte'

</script>

<div class="bg-slate-100">
<Navbar let:hidden let:toggle class="fixed z-20 ">
	<NavBrand >
		<a href="/"><img src="/Aleph-Point-logo-og.svg" class="" alt="Aleph Logo" /></a>
		
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<!-- <NavLi href="/" class=" font-light " active={true}>Home</NavLi> -->
		<!-- <NavLi id="nav-menu1" class=" font-light cursor-pointer"><Chevron aligned>Clients</Chevron></NavLi> -->
		
		<!-- <NavLi href="/" class="font-light">Blog</NavLi> -->
		<!-- <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem href="/01">01</DropdownItem>
			<DropdownItem>Kodiak</DropdownItem>
			<DropdownItem>Nium</DropdownItem>
			<DropdownItem>Karius</DropdownItem>
		</Dropdown> -->
	</NavUl>
	<NavUl {hidden}>
		<NavLi href="/work" class="text-black text-2xl hover:bg-gray-200 font-light">Work</NavLi>
		
		<NavLi href="/studio" class=" text-2xl font-light">Studio</NavLi>
		<NavLi href="/contact" class="text-2xl font-light">Contact</NavLi>
	</NavUl>
</Navbar>
</div>




<style>

	/* header {
		max-width: 1400px;
		width: 100%;
		margin: 0 auto;
	} */
	
</style>

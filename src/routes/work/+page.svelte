
<script>

	let m = { x: 0, y: 0, relx: 0, rely: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;

		var caller = event.target || event.srcElement;
		relx = event.pageX - caller.offset().left;
		rely = event.clientY - caller.offset().top;


		// //document.querySelector('.hidden').remove('hidden');
		// var caller = event.target || event.srcElement;
		// caller.style.color = 'red';

		// var cDiv = caller.children;
		// for (var i = 0; i < cDiv.length; i++) {
		// 		if (cDiv[i].tagName == "DIV") {   //or use toUpperCase()
		// 				cDiv[i].style.color = 'red';  //do styling here
		// 				cDiv[i].style.visibility = 'visible';  //do styling here
		// 		}
		// }


	}
	function handleMouseleave(event) {
		// m.x = event.clientX;
		// m.y = event.clientY;
		// console.log('leave')
		//document.querySelector('.hidden').classList.add('hidden');

	}

</script>

<svelte:head>

	<title>Aleph - Work</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container m-auto grid grid-cols-1 mt-4">
	<div class="tile border-t-2 border-b-2 ">
		<h1 class="tile-marker ">KODIAK</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">KARIUS</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">NIUM</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">KQED</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">Ripple</h1>
	</div>
	<div  on:mousemove={handleMousemove} on:mouseleave={handleMouseleave} class="tile border-b-2">
		<h1 class="tile-marker" ><a href="/trust-the-vote">Trust the vote</a></h1>
		<div class="flare relative">
				<img src="/assets/flare/trustthevote-bird.png" alt="contact" class="absolute left-4  w-1/12 m-auto" style="top: {m.y}px"/>
		</div>
	</div>
	<div>
		The mouse position is {m.x} x {m.rely}
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">Redpoint</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">nike </h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">recyclist</h1>
	</div>
	
	<div class="tile border-b-2">
		<h1 class="tile-marker">The kelsey</h1>
	</div>
		<div class="tile border-b-2">
		<h1 class="tile-marker">Landscape</h1>
	</div>
		<div class="tile border-b-2">
		<h1 class="tile-marker">Airbnb</h1>
	</div>
		<div class="tile border-b-2">
		<h1 class="tile-marker">Good and Common</h1>
	</div>
		<div class="tile border-b-2">
		<h1 class="tile-marker">Trust the vote</h1>
	</div>
	<div class="tile border-b-2">
		<h1 class="tile-marker">EXPLORATORIUM</h1>
	</div>


</div>


<style>
	h1.tile-marker {
		color: #000;
		font-size: 3.5rem;
		font-weight: 100;
		text-transform: uppercase;
		
	}

	div.tile .flare {
		 visibility: hidden;
		 background-color: red;
	}
	div.tile:hover .flare {
		 visibility: visible;
		 /* color: red; */
	}


</style>
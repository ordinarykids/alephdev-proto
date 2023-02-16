<script>
	let scroll;

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;

		//document.querySelector('.hidden').remove('hidden');
		// var caller = event.target || event.srcElement;
		// caller.querySelector('.test').style.display = 'block';


	}
	function handleMouseleave(event) {
		m.x = event.clientX;
		m.y = event.clientY;
		// console.log('leave')
		//document.querySelector('.hidden').classList.add('hidden');

	}

	
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>



<section >
	<!-- on:mousemove={handleMousemove} on:mouseleave={handleMouseleave} -->
	<div  class="relative; bg-repeat " style="height: 70vh;background-image: url(/assets/bg-pattern.png);" >
		<div class="absolute" style="background-image: url(/assets/studio-collage02.png); background-size: cover; height: 70vh; width: 100%;"></div>
		<!-- <div class="absolute bottom-0 mb-48" >
			<img src="/assets/face1.png" />
		
		</div>
		<div class="absolute bottom-0 right-4 mb-48" >
			<img src="/assets/face2.png" />
		
		</div> -->
		
	</div>


	<div class="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4 max-w-7xl">
		<div class=" col-span-full">
			<h1 class=" text-6xl font-black">What did Borge say about us at the Last Supper?</h1>
		</div>

		<div class=" col-span-full">
			<h1 class=" text-6xl font-black">What did Borge say about us at the Last Supper?</h1>
		</div>
		
		<div class="tile bg-amber-500 row-start-2 row-end-5 col-span-full md:col-span-full lg:col-span-full">
			<h1 class="tile-marker">TWO</h1>
		</div>
		<div class="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
			<h1 class="tile-marker">THREE</h1>
		</div>
	
	</div>

</section>


<!-- <div class="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4 max-w-7xl">
	<div class="tile bg-teal-500 col-span-full">
		<h1 class="tile-marker">ONE</h1>
	</div>
	<div class="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
		<h1 class="tile-marker">TWO</h1>
	</div>
	<div class="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
		<h1 class="tile-marker">THREE</h1>
	</div>
	<div class="tile bg-lime-600 lg:col-start-4 lg:col-span-2">
		<h1 class="tile-marker">FOUR</h1>
	</div>
	<div class="tile bg-green-600">
		<h1 class="tile-marker">FIVE</h1>
	</div>
	<div class="tile bg-emerald-500">
		<h1 class="tile-marker">SIX</h1>
	</div>
	<div class="tile bg-teal-500">
		<h1 class="tile-marker">SEVEN</h1>
	</div>
	<div class="tile bg-purple-500">
		<h1 class="tile-marker">EIGHT</h1>
	</div>
	<div class="tile bg-pink-500 row-start-5 md:col-span-full">
		<h1 class="tile-marker">NINE</h1>
	</div>
</div> -->

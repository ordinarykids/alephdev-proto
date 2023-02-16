<script>

	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	
	import { Footer } from 'flowbite-svelte'

	let scroll;
</script>

<svelte:head>
	<title>Aleph - Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window bind:scrollY={scroll} />


<div>
	<div class="bg-[url('/assets/home-04.png')] bg-cover h-4/6  w-full" ></div>

</div>
<div>
	<div style="background-image: url(/assets/home-04.png); background-size: cover; height: 70vh; width: 100%;"></div>

</div>


<section class="container grid  m-auto">

	<!-- SECTION WE SEE YOUR POINT -->
	<div class="p-8  xl:p-96 bg-[#F5F5F5] align-left max-w-full ">
		<h1 style="font-family: 'Maison Neue'" class="text-8xl md:text-6xl lg:text-7xl text-left font-sans text-[#0D0707]  font-bold md:mb-8 md:pt-16">We see the point.</h1>
		 <div class=" md:w-3/4 float-right text-[#0D0707] font-serif text-1xl md:text-7xl font-thin md:m-16">
			Aleph designs and builds on-screen interactive experiences that reflect the best parts of ourselves and strive to impact positive change in the world.
		</div>

	</div>


	<section class="bg-[#F5F5F5] ">
			<div class="gap-8 items-center py-64 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
					<img class="w-[24rem] dark:hidden  " src="/assets/flare01-bg.png" alt="dashboard image">
			
					<div class="mt-4 md:mt-0">
							<h2  style="font-family: 'Maison Neue'" class="mb-4 text-4xl tracking-tight font-bold font-sans text-gray-900 dark:text-white">Bravely shaping infinite spaces.</h2>
							<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">The web is an incubator of convergent evolution. Data-driven design + key performance indicators === minimum viable products until everything looks and works the same way. We listen to what the data says about our work, but to us it often whispers stuff like “take more chances” and “make it weirder.”</p>
							
					</div>
			</div>

		<div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
			
			
				<div class="mt-4 md:mt-0">
						<h2  style="font-family: 'Maison Neue'" class="mb-4 text-4xl tracking-tight font-bold font-sans text-gray-900 dark:text-white">We zag as the world waits for someone to zig.</h2>
						<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">There’s only doubt about it; the interactive space has no practical limit, and you’re in it. Vast distances and dizzying heights abound. Aleph will intelligently embrace your goals and translate them into choice real estate on the beaches of infinity.</p>
						
				</div>
				<img class="w-[24rem] dark:hidden  " src="/assets/flare02-bg.png" alt="dashboard image">
		</div>

		<div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 mb-32">
				<img class="w-[24rem] dark:hidden  " src="/assets/flare03-bg.png" alt="dashboard image">
			
				<div class="mt-4  md:mt-0">
						<h2  style="font-family: 'Maison Neue'" class="mb-4 text-4xl tracking-tight font-bold font-sans text-gray-900 dark:text-white">Professional and kind? What a catch!</h2>
						<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">If you like, you can ignore all this grandiloquent grandstanding. Instead, behold who we’ve worked with, and the adjectives they’d most likely use to describe Aleph: “welcoming”,  “quirky”, “professional”,  “far out“, “talented”, “super nice”. Reach out to us and you’ll see!  We keep things positive, and we keep things moving.</p>
						
				</div>
				
		</div>
	</section>


	
	<img src="/assets/logo-lock.png" alt="contact" class="m-auto bg-cover bg-no-repeat bg-center w-full max-w-[1700px]">
	<img src="/assets/cta1.png" alt="contact" class="m-auto bg-cover bg-no-repeat bg-center w-full max-w-[1700px]">

	<section class="bg-white dark:bg-gray-900">
			<div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
					<img class="w-full dark:hidden" src="/assets/randoms-horse.png" alt="dashboard image">
					<img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image">
					<div class="mt-4 md:mt-0">
							<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fill in the gap. Work with us. </h2>
							<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Aleph is always looking for more cool stuff to build. If you think you've got something along those lines in the works, <u>we'd be thrilled to hear from you</u>.</p>
							
					</div>
			</div>
	</section>


	<img src="/assets/cta2.png" alt="contact" class="m-auto bg-cover bg-no-repeat bg-center w-full max-w-[1700px]">
	<!-- <img src="/assets/Footer.png" alt="contact" class="m-auto bg-cover bg-no-repeat bg-center w-full max-w-[1700px]"> -->

	
</section>

<style>
	.featureWell {
		height: 70vh;
		width: 100%;

	}

	section {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6; */
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

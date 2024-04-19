<script lang="ts">
	import SelectModel from '$lib/components/common/SelectModel.svelte';
</script>

<div class="bg-morphic relative flex w-full items-center justify-between">
	<div class="relative mb-4 w-1/3 overflow-hidden rounded-2xl bg-cover bg-no-repeat">
		<img src={'/assets/child-background.svg'} alt="child" class="h-full w-full" />
		<div
			class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-700 ease-in-out hover:opacity-50"
		></div>
	</div>
	<div class="flex w-1/3 items-center justify-center">
		<img src={'/assets/radar.gif'} alt="radar" class="h-40 w-40" />
	</div>
	<div class="mr-5 flex flex-col space-y-10 self-end">
		<SelectModel />
		<img
			src={'/assets/purple-button.svg'}
			alt="button"
			class="right-0 ml-32 h-20 hover:animate-pulse"
		/>
	</div>
</div>

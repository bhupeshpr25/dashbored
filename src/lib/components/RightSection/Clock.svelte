<script lang="ts">
	import { onMount } from 'svelte';

	// get current time
	let time: Date = new Date();

	// get hours, minutes and seconds
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	// update time
	onMount(() => {
		const interval: number = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svg viewBox="-50 -50 100 100" class="mt-4 h-full w-full">
	<circle class="clock-face fill-white stroke-current text-gray-900" r="30" />

	<!-- hour hand -->
	<line
		class="hour stroke-current text-gray-900"
		y1="2"
		y2="-20"
		transform={`rotate(${30 * hours + minutes / 2})`}
	/>

	<!-- minute hand -->
	<line
		class="minute stroke-current text-gray-600"
		y1="4"
		y2="-30"
		transform={`rotate(${6 * minutes + seconds / 10})`}
	/>

	<!-- second hand -->
	<g transform={`rotate(${6 * seconds})`}>
		<line class="second stroke-current text-red-600" y1="10" y2="-30" />
		<line class="second-counterweight stroke-current text-red-600" y1="10" y2="2" />
	</g>
</svg>

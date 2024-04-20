<script lang="ts">
	import BottomSection from '$lib/components/BottomSection/BottomSection.svelte';
	import TaskList from '$lib/components/LeftSection/TaskList.svelte';
	import ModelsTable from '$lib/components/MiddleSection/ModelsTable.svelte';
	import ClockContainer from '$lib/components/RightSection/ClockContainer.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	import { onMount } from 'svelte';

	let rgb: any;
	let hsv: any;
	let hex: string;

	let containerElement: HTMLDivElement; // container element

	onMount(() => {
		// set initial background color
		containerElement.style.backgroundColor = '#6366f1';
	});

	function handleColorChange(event: any) {
		const newColor = event.detail.hex;
		// update background color of container element
		containerElement.style.backgroundColor = newColor;
	}
</script>

<title>frontend exercise</title>

<body class="h-screen max-w-full text-white">
	<div bind:this={containerElement} class="h-full w-full p-10">
		<div class="b">
			<ColorPicker
				bind:rgb
				bind:hsv
				bind:hex
				components={ChromeVariant}
				on:input={handleColorChange}
				sliderDirection="horizontal"
				--slider-width="25px"
				--picker-indicator-size="25px"
				--picker-z-index="10"
				--focus-color="green"
			/>
		</div>
		<Resizable.PaneGroup direction="vertical" class="rounded-2xl">
			<Resizable.Pane defaultSize={70}>
				<Resizable.PaneGroup direction="horizontal" class="rounded-lg border">
					<Resizable.Pane defaultSize={25} class="bg-gray-900">
						<TaskList />
					</Resizable.Pane>
					<Resizable.Handle class="bg-gray-900" />
					<Resizable.Pane defaultSize={50} class="bg-gray-900">
						<ModelsTable />
					</Resizable.Pane>
					<Resizable.Handle class="bg-gray-900" />
					<Resizable.Pane defaultSize={25} class="bg-gray-900">
						<div class="clock-background m-4 flex h-full items-center justify-center rounded-2xl">
							<ClockContainer />
						</div>
					</Resizable.Pane>
					<Resizable.Handle class="bg-gray-900" />
				</Resizable.PaneGroup>
			</Resizable.Pane>
			<Resizable.Handle class="bg-gray-900" />
			<Resizable.Pane defaultSize={30} class="bg-gray-900">
				<div class="m-4 flex h-full items-center justify-center rounded-2xl bg-morphic">
					<BottomSection />
				</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</div>
</body>

<style>
	.clock-background {
		background-image: url('/assets/clock-background.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

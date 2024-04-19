<script lang="ts">
	import TaskList from '$lib/components/LeftSection/TaskList.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
</script>

<title>frontend exercise</title>

<body class="h-screen max-w-full text-white">
	<Resizable.PaneGroup direction="vertical" class="rounded-2xl">
		<Resizable.Pane defaultSize={70}>
			<Resizable.PaneGroup direction="horizontal" class="rounded-lg border">
				<Resizable.Pane defaultSize={25} class="bg-gray-900">
					<TaskList />
				</Resizable.Pane>
				<Resizable.Handle class="bg-gray-900" />
				<Resizable.Pane defaultSize={50} class="bg-gray-900">middle section</Resizable.Pane>
				<Resizable.Handle class="bg-gray-900" />
				<Resizable.Pane defaultSize={25} class="bg-gray-900">
					<div class="clock-background m-4 flex h-full items-center justify-center rounded-2xl">
						right section
					</div>
				</Resizable.Pane>
				<Resizable.Handle class="bg-gray-900" />
			</Resizable.PaneGroup>
		</Resizable.Pane>
		<Resizable.Handle class="bg-gray-900" />
		<Resizable.Pane defaultSize={30} class="bg-gray-900">
			<div class="bg-morphic m-4 flex h-full items-center justify-center rounded-2xl">
				bottom section
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>
</body>

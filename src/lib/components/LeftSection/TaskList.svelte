<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	interface Task {
		id: string;
		label: string;
	}

	let tasks: Task[] = [
		{ id: '1', label: 'Frontend' },
		{ id: '2', label: 'Review the Design' },
		{ id: '3', label: 'Wireframe' },
		{ id: '4', label: 'Wireframe' },
		{ id: '5', label: 'Wireframe' },
		{ id: '6', label: 'Wireframe' }
	];
	let checked = tasks.map(() => false); // initially all tasks are unchecked
</script>

<div class="bg-morphic m-4 h-full rounded-2xl pl-4">
	<div class="m-4 pt-4 text-2xl font-bold">Today's Task</div>

	<!-- Tasks -->
	<div class="m-4 flex flex-col">
		{#each tasks as task, index (task.id)}
			<div class="my-2 flex items-center space-x-2" class:text-indigo-500={checked[index]}>
				<Checkbox
					id={task.id}
					bind:checked={checked[index]}
					class={`bg-morphic border-2 border-gray-200 ${checked[index] ? 'bg-indigo-500' : ''}`}
					aria-labelledby={`${task.id}-label`}
				/>

				<div class:text-purple-400={checked[index]} class:line-through={checked[index]}>
					<Label
						id={`${task.id}-label`}
						for={task.id}
						class="text-sm font-medium leading-none transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						{task.label}
					</Label>
				</div>
			</div>
		{/each}
	</div>
</div>

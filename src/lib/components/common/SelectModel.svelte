<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	export let width = 'w-56'; // default width
	export let placeholder = 'Select item'; // default placeholder

	interface Model {
		id: string;
		label: string;
	}

	let models: Model[] = [
		{ id: '1', label: 'All' },
		{ id: '2', label: 'UX/UI Design' },
		{ id: '3', label: 'Frontend' },
		{ id: '4', label: 'Backend' },
		{ id: '5', label: 'Full Stack' },
		{ id: '6', label: 'Graphic Designer' },
		{ id: '7', label: 'Web Designer' },
		{ id: '8', label: 'QA' }
	];
	let checked = models.map(() => false); // initially all models are unchecked

	// toggle models
	function toggleAll() {
		const allChecked = checked[0];
		checked = checked.map(() => !allChecked);
	}
</script>

<Select.Root portal={null}>
	<Select.Trigger class={`${width} border-none bg-gray-900`}>
		<Select.Value {placeholder} />
	</Select.Trigger>
	<Select.Content class="bg-morphic" sameWidth={false}>
		<Select.Group>
			<div class="m-4 flex flex-col">
				{#each models as model, index (model.id)}
					<div class="my-2 flex items-center space-x-2 text-white">
						<Checkbox
							id={model.id}
							bind:checked={checked[index]}
							aria-labelledby={`${model.id}-label`}
							class="border-2 border-gray-200"
							on:click={index === 0 ? toggleAll : undefined}
						/>
						<Label id={`${model.id}-label`} for={model.id} class="text-sm font-medium leading-none">
							{model.label}
						</Label>
					</div>
				{/each}
			</div>
		</Select.Group>
	</Select.Content>
</Select.Root>

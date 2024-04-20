<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import SelectModel from '$lib/components/common/SelectModel.svelte';
	import { models } from '$lib/data/models';
	import { Accordion, AccordionItem } from 'svelte-collapsible';
</script>

<div class="my-4 flex h-full items-center justify-center rounded-2xl bg-morphic">
	<div class="m-4 h-full rounded-2xl bg-morphic pl-4">
		<div class="m-4 pt-1 text-2xl font-bold">AI Models</div>
		<div class="flex items-center space-x-2">
			<SelectModel width="w-24" placeholder="model" />
			<SelectModel width="w-24" placeholder="model" />
			<SelectModel width="w-24" placeholder="model" />
		</div>
		<div class="w-full font-semibold">
			<!-- Table -->
			<Table.Root>
				<Table.Caption>no more models</Table.Caption>
				<Table.Header class="bg-morphic">
					<Table.Row>
						<Table.Head class="text-gray-300">Model</Table.Head>
						<Table.Head class="text-gray-300">Versions</Table.Head>
						<Table.Head class="text-gray-300">License</Table.Head>
						<Table.Head class="text-gray-300">Contributors</Table.Head>
						<Table.Head class="text-gray-300">Rating</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body class="bg-morphic">
					{#each models as model, i (i)}
						<Table.Row class="border-none hover:bg-gray-900">
							<Table.Cell class="flex w-full items-center space-x-2 font-medium">
								<img src={model.logo} alt={model.modelName} class="logo" />
								<div>
									<Accordion>
										<AccordionItem>
											<h2 slot="header">
												{model.modelName}
											</h2>
											<p slot="body" class="m-4 w-full text-gray-400">{model.content}</p>
										</AccordionItem>
									</Accordion>
								</div>
							</Table.Cell>
							<Table.Cell class="font-normal text-gray-400">{model.versions}</Table.Cell>
							<Table.Cell class="font-normal text-gray-400">{model.license}</Table.Cell>
							<Table.Cell>
								<img src={model.contributors} alt="" class="logo" />
							</Table.Cell>
							<Table.Cell class="flex justify-end">
								<div class="flex space-x-1">
									<!-- Rating -->
									{#each Array(5) as _, i}
										<img
											src={i < model.rating ? '/assets/star-filled.svg' : '/assets/star-empty.svg'}
											alt=""
											class="logo"
										/>
									{/each}
								</div>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</div>

<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import Clock from '$lib/components/RightSection/Clock.svelte';
</script>

<div class="h-[420px] w-48">
	<div use:draggable={{ axis: 'y', bounds: 'parent' }}>
		<Clock />
	</div>
	<p class="mt-5 text-center text-4xl font-bold">
		{new Date().getHours()}:{new Date().getMinutes()}
	</p>
</div>

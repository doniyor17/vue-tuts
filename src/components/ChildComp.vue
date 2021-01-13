<template>
	<div class="hello">
		<h2>Child1</h2>
		<slot name="title"></slot>
		<slot name="text"></slot>
	</div>
</template>

<script>
export default {
	name: 'ChildComp',
}
</script>

<style scoped>
	h3 {
		color: blue;
	}
</style>

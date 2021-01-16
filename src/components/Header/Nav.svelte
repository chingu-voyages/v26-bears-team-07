<script>
	import { createEventDispatcher } from "svelte";

	let hamburgers = "images/align-justify.svg",plus = "images/plus.svg";
	let dispatch = createEventDispatcher();

	const sider = () => dispatch("sider");
	

</script>

<nav class="global-nav flex-r">
	<div class="class-burger" tabindex="0">
		<img alt="class-menu" src={hamburgers} on:click={() => sider()} />
	</div>
	<ul class="flex-r">
		<li class="plus"><img alt="add-class" src={plus} /></li>
		<li class="user"><span class="avatar" /></li>
	</ul>
</nav>

<style>
	.global-nav {
		justify-content: space-between;
		align-items: center;
		border-bottom: rgba(128, 128, 128, 0.432) 1px solid;
		padding: unset;
	}

	.global-nav ul {
		align-items: center;
		margin-right: 4px;
		margin: unset;
	}

	.global-nav li {
		list-style: none;
		margin-left: 15px;
	}

	.class-burger {
		width: 100%;
		height: 100%;
		padding: 0;
		text-decoration: none;
		margin: unset;
	}

	.class-burger img {
		margin-left: 10px;
		width: 2vw;
	}

	.plus img {
		margin-right: 30px;
	}

	.avatar {
		background-color: silver;
		height: 45px;
		width: 45px;
		border-radius: 50%;
		display: inline-block;
		margin: 2px 2px;
	}
</style>

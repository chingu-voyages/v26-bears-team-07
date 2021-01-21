<main class="flex-c roboto">
	<h4 class="open-sans">Upcoming</h4>
	<div>
		<slot>
			<span>No Work due soon</span>
		</slot>
	</div>
	<!-- change link to "To review" -->
	<a href="/streams">View All</a> 
</main>


<style>
	main{
		border: unset;
		min-height: 150px;
		border-radius: 10px;
		border: 1pt solid rgba(128, 128, 128, 0.288);
		padding: 25px;
		/* box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212); */
	}

	

  h4, a{
		font-weight: bold;
		font-size: 13px;
	}

	a{
		color: rgba(0, 0, 255, 0.767);
		align-self: flex-end;
	}

	div{
		flex: 2;
	}
	span{
		font-size: 8pt;
	}

	::slotted{
		font-size: 9pt;
		margin: 2px;
	}
</style>
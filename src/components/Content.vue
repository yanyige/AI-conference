<template>
	<div class="wrapper">
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<style rel="stylesheet/stylus" lang="stylus">
	.wrapper
		width 100%
	.wrapper>.content
		padding 20px 200px
		margin 0 auto
		background-color white
		min-height 530px
</style>

<template>
	<div class="nav-wrapper">
		<div class="nav">
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/home' }">
					会议首页
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/professor' }">
					邀请专家
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/schedule' }">
					会议日程
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/report' }">
					墙展报告
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/organization' }">
					组织机构
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/place' }">
					会议地点
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/photos' }">
					会议相关
				</router-link>
			</div>
			<div class="nav-item">
				<router-link v-bind:to="{ path:'/foods' }">
					合影留念
				</router-link>
			</div>
		</div>
	</div>
</template>

<style rel="stylesheet/stylus" lang="stylus">
	.nav-wrapper
		width 100%
		background-color #00A9E6
		.nav
			height 40px
			line-height 40px
			width 980px
			margin 0 auto
			color white
			display flex
			.nav-item
				flex 1
				width 100%
				text-align center
				a
					text-decoration none
					color white
					&:hover
						cursor pointer
						text-decoration underline
</style>

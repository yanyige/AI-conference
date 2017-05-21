<template>
	<div class="professor">
		<div class="title">
			(按姓名拼音首字母排序)
		</div>
		<div class="content">
			<div class="profile">殷明浩</div>
			<div class="excerpt"><p>
				2008年于吉林大学计算机科学与技术学院获工学博士学位，2004年硕士毕业留校工作，2011年6月获博士生导师资格，2013年入选教育部新世纪优秀人才计划，2014年6月聘任为教授。主要从事人工智能、组合优化、理论计算机科学、大数据分析等方面研究。
				<ul class="project">
				<li>项目:</li>
				<li>1. 教育部新世纪优秀人才支持计划NCET-13－0724，教育部，2013年</li>
				<li>2. 计数约束满足问题的相变现象研究，国家自然科学基金委员会，2013年</li>
				<li>3. 智能规划问题相变规律和问题结构研究，吉林省教育厅，2013年</li>
				<li>4. 自动规划问题相变现象和算法研究，北京航空航天大学，2013年</li>
				<li>5. Computational Complexity of Contingent Planning，维克多利亚大学（加拿大），2013年</li>
				<li>6. 智能规划问题相变现象和问题结构研究，吉林省教育厅，2013年</li>
				<li>7. 智能规划问题中相变规律和Landmark结构研究，吉林省科技厅，2012年</li>
				<li>8. 一致性规划研究，校内自然科学青年基金，2009年</li>
				<li>9. 基于模糊知识的智能规划研究，校内自然科学青年基金，2009年</li>
				<li>10. 开放式规划研究，国家自然科学基金委员会，2009年</li>
				</ul>
			</p></div>
		</div>
		<div class="content">
			<div class="profile">李向涛</div>
			<div class="excerpt"><p>
				个人主页：http://xiangtaoli.weebly.com/<br>
				Dr. Li received the M.Eng, and P.HD. degrees in computer science from Northeast Normal University (NENU), Jilin, China, in 2012, and 2015, respectively. Currently, he is an associate professor in School of Computer Science, Northeast Normal University, Jilin, China. His research interests include  evolutionary data mining, bioinformatics, multi-objective optimization and their applications.
				<ul class="project">
				<li>论文:</li>
				<li>1. A particle swarm inspired cuckoo search algorithm for real parameter optimization，SOFT COMPUT，2016年</li>
				<li>2. Modified differential evolution with self-adaptive parameters method，J COMB OPTIM，2016年</li>
				<li>3. Multiobjective Local Search Algorithm-Based Decomposition for Multiobjective Permutation Flow Shop Scheduling Problem（SSCI），IEEE TRANSACTIONS ON ENGINEERING MANAGEMENT，2015年</li>
				<li>4. Modified cuckoo search algorithm with self adaptive parameter method，INFORM SCIENCES，2015年</li>
				</ul>
			</p></div>
		</div>
		<div class="content">
			<div class="profile">周俊萍</div>
			<div class="excerpt"><p>
				职　　称：讲师<br>
				电子邮件：zhoujp877@nenu.edu.cn
				<ul class="project">
				<li>项目:</li>
				<li>1. 模型计数问题精确求解方法的研究，2014年</li>
				<li>2. 偶然性规划问题的相变规律和问题结构研究，吉林省教育厅，2013年</li>
				<li>3. 最坏情况下自动推理问题的最小上界研究，教育部，2013年</li>
				<li>4. 智能规划问题相变规律研究，国家自然科学基金委员会，2012年</li>
				</ul>
			</p></div>
		</div>
	</div>
</template>

<style rel="stylesheet/stylus" lang="stylus">
	.professor
		line-height 2
		font-size 18px
		&>.content
			min-height 20px
			display flex
			&:nth-child(n+1)
				margin-top 20px
			.profile
				flex 0 0 25%
			.excerpt
				flex 0 0 75%
				.project
					li
						&:first-child
							color blue
							font-weight bold
</style>

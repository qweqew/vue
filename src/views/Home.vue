<template>
	<div>
		<div id="searchDiv">
			<div class="morRight">
				<Search id="searchTxt"/>
	      <Button icon="search" v-on:click="search()" />
	       <Button type="primary" style="margin-left: 20px;">新增</Button>
      </div>
		</div>
		 
		<a-table bordered :dataSource="dataSource" :columns="columns"> 
			<template slot="operation" slot-scope="text, record">
				<a-popconfirm v-if="dataSource.length" title="确定删除吗?" @confirm="() => onDelete(record.key)" >
					<a href="javascript:;">删除</a>
				</a-popconfirm> 
			</template>
		</a-table>
	</div>
</template>
<script>
	export default {
		name:"Home",
		data() {
				return {
					queryParam: {},
					dataSource: [{
						key: '0',
						time: '2019-09-09 00:00:00',
						level: '严重',
						name:'测试机',
						address: '127.0.0.1',
						desc:'CPU使用率过高',
					}, {
						key: '1',
						time: '2019-09-09 00:00:01',
						level: '主要',
						name:'测试机2',
						address: '127.0.0.2',
						desc:'CPU使用率过高',
					}],
					count: 2,
					columns: [{
						title: '发送时间',
						dataIndex: 'time',
						width: '30%',
					}, {
						title: '级别',
						dataIndex: 'level',
					}, {
						title: '设备名称',
						dataIndex: 'name',
					}, {
						title: '设备地址',
						dataIndex: 'address',
					}, {
						title: '描述',
						dataIndex: 'desc',
					}, {
						title: '操作',
						dataIndex: '', //这里要加上条件，其实对比一下就看出来了
						scopedSlots: {
							customRender: 'operation'
						},
					}],
				}
			},
			methods: {
				onCellChange(key, dataIndex, value) {
					const dataSource = [...this.dataSource]
					const target = dataSource.find(item => item.key === key) 
					if(target) {
						target[dataIndex] = value 
						this.dataSource = dataSource
					}
				},
				onDelete(key) {
					console.info(key);
					const dataSource = [...this.dataSource] 
					this.dataSource = dataSource.filter(item => item.key !== key)
				},
				handleAdd() {
					const {
						dataSource
					} = this
					const newData = {
						key: count,
						name: 'Edward King ${count}',
						age: 32,
						address: 'London, Park Lane no. ${count}',
					}
					this.dataSource = [...dataSource, newData] 
				},
				search(){
					let search = document.getElementById("searchTxt").value;
					const dataSource = [...this.dataSource] ;
					this.dataSource = dataSource.filter(item => item.address.indexOf(search)>-1 )
				},
			},
	}
</script>
<style lang="less">
#searchDiv {
	 padding-right: 40px;
	 padding-bottom: 10px;
	 display: block;
	 height: 40px;
}
.morRight{
	float: right;
}
#searchTxt{
	width: 200px;	
}
</style>
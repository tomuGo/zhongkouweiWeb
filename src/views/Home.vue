<template>
  <div>
    <div class="col-md-9 topics-index main-col">
      <div class="panel panel-default">
        <div class="panel-heading">
          <ul class="list-inline topic-filter">
            <li v-for="item in filters">
              <router-link v-title="item.title" :class="{ active: type === item.type }" style="font-size: large" :to='`/topics?blogType=${item.blogType}`'>{{ item.name }}</router-link>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>

        <div class="panel-body remove-padding-horizontal">
            <el-table :data="articles" :stripe='true' style="width: 100%" :show-header="false" :highlight-current-row="true">
              <el-table-column  label="内容" >
                <template slot-scope="scope">
                  <router-link :to="`/${scope.row.author}`" tag="div" class="avatar pull-left">
                    <img :src="require('@/assets/face/'+getUserPicUrl(scope.row.author)+'.png')" class="media-object img-thumbnail avatar avatar-small">
                  </router-link>
                  <router-link :to="`/blogs/${scope.row.blogId}`" tag="div" >
                      <el-badge v-if="scope.row.boutique===1" value="精" class="item">
                        {{ scope.row.blogName }}
                      </el-badge>
                    <el-badge v-else class="item">
                      <span  style="font-size: larger">{{ scope.row.blogName }}</span>
                    </el-badge>

                  </router-link>
                </template>
              </el-table-column>

              <el-table-column  label="时间" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <abbr class="timeago">{{ scope.row.createTime | time('yyyy-MM-DD') }}</abbr>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="panel-footer text-right remove-padding-horizontal pager-footer">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            @current-change="getBlogs"
            :page-size="pageSize"
            :page-count="pageNumber"
            :total="total">
          </el-pagination>
        </div>
      </div>
   </div>
   <TheSidebar/>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import TheSidebar from '@/components/layouts/TheSidebar'

export default {
  name: 'Home',
  components: {
    // 局部注册 TheSidebar
    TheSidebar
  },
  data() {
    return {
      articles: [],
      filter: 'default',
      filters: [
        { type: 'default', name: '电影', title: '电影',blogType:1},
        { type: 'recent', name: '漫画', title: '漫画',blogType:2},
        { type: 'vote', name: '随便聊聊', title: '%￥#@！（*',blogType:3},
        { type: 'excellent', name: '加精', title: '只看极品',blogType:4}

      ],
      total: 0, // 文章总数
      pageSize: 20, // 每页条数
      pageNumber:1,
      pic:'',
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getBlogs(to.query.blogType)
    })
  },
  watch: {
    '$route'(to) {
      this.getBlogs(to.query.blogType)
    }
  },
  methods: {

    getBlogs(blogType) {
      if (blogType == null || blogType == undefined || blogType == '') {
        blogType = 1;
      }
      axios.get("/api/blogs", {
        params: {
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          blogType: blogType
        }
      }).then((res) => {
        this.articles = res.data.list;
        this.total = res.data.count;
      });
    },
    getUserPicUrl(userId){
      console.log("qwe"+userId);
      axios.get('/api/users/'+userId).then((res)=>{
        return res.data.picUrl;
      });
      console.log("cdd")
      return "1";

    },
  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>

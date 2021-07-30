<template>
  <section class="page">
    <hgroup>
      <h1 class="title"><a href="#" title="我的个人资料">我的个人资料</a></h1>
      <h2 class="heading">十年专业锅炉工程师（请勿当真，just for fun！）</h2>
    </hgroup>
    <section class="panel">
      <h2 class="heading">基本资料</h2>
      <div class="content">
        <ul class="two-column">
          <li>姓名：汪磊</li>
          <li>工作经验：十年</li>
          <li>联系邮箱：<a href="mailto:w@zce.me">w@zce.me</a></li>
          <li>联系电话：138-8888-8888</li>
        </ul>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">专业技能</h2>
      <div class="content">
        <ol>
          <li>精通 Firework、Dreamweaver、Illustrator 、Photoshop、Flash 等设计相关软件；</li>
          <li>精通 W3C 标准及规范，熟练使用 XHTML / CSS 独立完成整站开发；</li>
        </ol>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">项目经验</h2>
      <div class="content">
        <ol>
          <li>
            <h3>XXX项目（<time>2014/03--2014/04</time>）</h3>
            <ul>
              <li>
                <h5>项目介绍</h5>
                <p>很牛叉的项目，翔天商贸是国际物流行业一家专门从事进出口服饰贸易的公司。公司总部位香港，业务遍及欧美。随着公司不断发展壮大，旧的信息系统已无法满足公司的快速发展需求，妨碍公司成长，在此背景下，公司领导决定研发《翔天商贸综合管理平台》。 《翔天商贸综合管理平台》分三期完成。一期完成仓储管理（包括：采购单、仓库、货物、条形码、入库、出库、退货、盘点、库存、库存上限报警、统计查询）和展会管理（包括：展会管理、出单管理），形成货物统一数字化管理。二期完成货运全流程管理，包括购销合同、出货表统计、出口报运单、装箱单、委托书、发票、财务统计等。三期完成决策分析（包括：成本分析图、销售情况统计、重点客户、经营情况同期比对统计、工作绩效），为公司经营决策提供数据支持。 </p>
              </li>
              <li>
                <h5>开发环境</h5>
                <p>Windows 7、Visual Studio 2010、MySQL、SVN、NuGet</p>
              </li>
              <li>
                <h5>技术选型</h5>
                <p>ASP.NET MVC、Unity、Entity Framework、NLog、Memcache、WCF、WebAPI、SignalR、Dapper、HTML5、ZeptoJS、jQuery、AngularJS</p>
              </li>
              <li>
                <h5>职责领域</h5>
                <ul>
                  <li>锅炉1</li>
                  <li>锅炉2</li>
                  <li>锅炉3</li>
                  <li>锅炉4</li>
                  <li>锅炉5</li>
                </ul>
              </li>
              <li>
                <h5>相关链接</h5>
                <p>项目线上地址：http://www.wedn.net</p>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">工作经历</h2>
      <div class="content">
        <ol>
          <li><span>2012/05 -- 至今</span><span>阿里巴巴</span><span>烧锅炉</span></li>
          <li><span>2011/07 -- 2012/04</span><span>腾讯</span><span>保安</span></li>
          <li><span>2000/01 -- 2005/01</span><span>百度</span><span>保洁</span></li>
        </ol>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">Follow me</h2>
      <div class="content">
        <ul>
          <li><strong>GitHub</strong>：https://github.com/zce</li>
          <li><strong>Blog</strong>：https://blog.zce.me</li>
          <li><strong>etc...</strong></li>
        </ul>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">我的态度</h2>
      <div class="content">
        <p>致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列...</p>
      </div>
    </section>
    <section class="panel">
      <h2 class="heading">最想做的事儿</h2>
      <div class="content">
        <ol>
          <li>个人知识体系建设及分享；</li>
          <li>放开视野，提高层面，为未来投资；</li>
        </ol>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style lang="scss">
.page {
  margin: 50px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);

  > hgroup {
    > .title {
      margin: .3125rem 0;

      > a {
        display: inline-block;
        text-decoration: none;
        font-size: 2rem;
        color: #515151;
      }
    }

    > .heading {
      margin: 0;
      font-weight: normal;
      font-size: 13px;
      color: #757575;
    }
  }
}

.panel {
  margin-top: 1.25rem;

  > .heading {
    margin: 0;
    padding-left: .3125rem;
    font-size: 1.5rem;
    border-bottom: .0625rem solid #e0e0e0;
  }

  > .content {
    padding: .5rem;

    h3, h4, h5 {
      margin: 0;
    }

    ul, ol {
      margin: 0;
      padding: 0;
      padding-left: 1.25rem;
      line-height: 36px;
    }

    .two-column {
      column-count: 2;
    }

    span {
      display: inline-block;
      width: 33%;
    }

    p {
      margin: .5rem 0;
      text-indent: 2em;
    }
  }
}
</style>

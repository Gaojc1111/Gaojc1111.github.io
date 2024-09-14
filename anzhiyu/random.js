var posts=["2023/10/15/HTTP队头阻塞/","2023/09/24/Linux命令总结/","2024/09/14/Mysql中order-by是怎么工作的/","2024/05/31/极客时间redis核心技术与实战笔记/","2024/03/03/sync-Map源码解析/","2024/09/12/算法笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
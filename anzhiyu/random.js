var posts=["2023/09/24/Linux命令总结/","2023/10/15/HTTP队头阻塞/","2024/03/03/sync-Map源码解析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
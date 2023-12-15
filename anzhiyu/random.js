var posts=["2023/10/13/HTTP学习笔记/","2023/09/25/Go题库/","2023/09/24/Linux命令总结/","2023/10/15/HTTP-队头阻塞/","2023/10/11/mysql笔记/","2023/12/15/《MySQL是怎样运行的》笔记/","2023/09/24/保持专注/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
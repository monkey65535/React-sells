# react-simple-o2o-demo
运行代码
```
使用 npm start 启动webpack本地服务 使用npm run mock来运行koa mock服务器
```

## 小知识
### 1.判断null
在我们日常进行判断的时候，一般要使用`===`进行判断，但是只有null除外
这个需要使用`==`来进行判断
```
null === undefined
false

null == undefined
true
```

### 2.在使用scroll方法的时候，由于触发次数过于频繁，一般会使用一个节流的方法来实现方法的调用  

```
//首先定义一个全局函数
let timeOutId = null;
//定义一个延时定制器的回掉函数
function callBack(){
    const top = warpper.getBoundingClientRect().top;
    if(top && top < winHeight){
        loadMoreFn();
    }
}
//scroll方法
window.addEventListener('scroll',()=>{
    // 如果isLoadingMore = true 那么不做处理

    //如果timeOutId被赋值了，那么就清理掉延迟定时器
    if(timeOutId){
        clearTimeout(timeOutId);
    }

    //回调函数延迟50毫秒触发
    timeOutId = setTimeout(callBack,50);
},false);


```  
使用这种方法可以减少scroll事件不必要的触发函数，是一个很好的节省页面性能的方法
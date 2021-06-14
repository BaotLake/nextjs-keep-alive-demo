这是一个Next.js实现`keep-alive`的Demo

# 用法
1. 将需要保留的页面添加到`pages/_app.js`中`keepAlive`数组中
```Javascript
    // 例如
    [
        {
            // 页面路由
            route: '/alive',     
            // 用于保存页面组件       
            PageComponent: undefined,   
            // 页面显示/隐藏状态
            active: false               
        }
    ]
```
2. 在需要保留的页面组件中接收`props.active`，并实现显示/隐藏
```Javascript
export default function Page(props) {

    return (
        <div hidden={!props.active}>
            { /** ... */}
        </div>
    )
}
```
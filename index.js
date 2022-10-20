const buttons = document.querySelectorAll("button")//获取所有的button
buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        //e.client是鼠标点击时相对于浏览器边缘的垂直和水平坐标
        //e.target.offsetLeft是被点击元素左边相对于浏览器左边的距离坐标
        //e.target.offsetTop是被点击元素上边相对于浏览器上边的距离坐标
        let ripples = document.createElement('span')//创建span元素
        ripples.style.left = x + 'px'//设置位置
        ripples.style.top = y + 'px'
        button.appendChild(ripples)
    })
})
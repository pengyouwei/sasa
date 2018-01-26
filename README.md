![Alt text](./README.md)
# sasa  <br />
项目名称:莎莎网 http://www.sasa.com/ 香港莎莎官方购物网站Sasa.com，快速搜罗上市新品，囊括数以百计的全球畅销奢品美妆品牌，上万个爆款，每日限时秒杀，每周专题促销，香港/保税仓直送。 <br />
<hr>
####项目描述:**莎莎网 **http://www.sasa.com/ ：
- **首页** ：实现了二级菜单,轮播图,楼梯,购物车等特效
- **登录注册页** ：使用正则匹配输入框中的字符串
- **列表页** ：实现瀑布流效果和购物车效果
- **购物车** ：记录改变购物车中的商品,计算总价格
- **购物结算** ：操作购物车中的商品,实现增删改查功能,计算需要支付的总价格
- **详情页** ：放大镜和购物车特效
<hr/>
####用到的技术栈:require.js,sass,jQuery.js  <br />
####项目完成度:完成了六个页面,包括页面中特效<br />

<hr>
###详细介绍:
		1.首页   sass/dist/index.html
		首页实现了下拉菜单,二级菜单,模糊搜索,轮播图,楼梯,倒计时,购物车,回到顶部特效:
		     下拉菜单,二级菜单:实现原理基本一致,通过判断鼠标的移入移出,实现隐藏和显示
		     模糊搜索:原网站没有模糊搜索功能,使用了百度的接口实现的jsonp跨域请求
			轮播图:通过定时器实现图片的轮流播放,动态改变图片的z-index和opacity值
			楼梯特效:鼠标滚动的时候获得当前的scrolltop值,当scrolltop值大于或者小于某个值的时候实现显示隐藏,点击楼梯的楼层改变scrolltop值
			倒计时特效:获得当前时间和终止时间,两者相减,获得中间的毫秒数,进行运算得到比较熟悉的时间格式
			购物车特效:使用cookie记录页面中的商品,实现增删改查等功能
			回到顶部:点击右下方按钮,改变scrolltop值
		2.登录注册页  sass/dist/enroll.html  sass/dist/enroll.html 
		进入方式:点击右上方登录注册按钮进入
		实现功能:登录注册页实现了正则表达式验证功能:
			正则表达式验证:当用户在输入框中输入值的时候,获得输入框中的值,并且进行验证
		3.列表页   sass/dist/list.html
		进入方式:点击左上方闪电保税专区的logo进入
		实现功能:列表页实现了瀑布流懒加载功能,和购物车特效:
			当用户滚动到底部的时候,使用ajax请求json数据,并把数据进行拼接添加到页面中
			购物车特效:和主页基本一致,可以多个页面操作cookie
		4.购物车  
		进入方式:点击右侧的购物车进入
		实现功能:在除了登录注册页之外的页面,点击右侧的购物车,弹出购物车列表,实现的功能有cookie的增删改查,购物车的显示与隐藏等:
		5.购物结算   sass/dist/checkout.html
		进入方式:点击右侧的购物车中的去结算按钮进入
		实现功能:展示选中的商品,实现增删改查功能,计算需要支付的总价格
			展示选中的商品:获取cookie,将商品信息拼接到页面中
			增删改查:改变商品数量,显示不同的商品价格
			计算总价格:根据操作改变选中商品的总价格
		6.详情页    sass/dist/seckill.html
		进入方式:点击轮播图进入
		实现功能:放大镜功能,倒计时特效
			放大镜功能:获得鼠标位置,让放大镜跟随鼠标移动,进行边界检测
			倒计时特效:获得当前时间和终止时间,两者相减,获得中间的毫秒数,进行运算得到比较熟悉的时间格式

<hr/>

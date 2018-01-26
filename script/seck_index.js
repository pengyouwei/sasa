require(["script/seck_config.js"],function(){
	require(["jquery","cookie","shopcar","shoplist","effect","seckill","motion"],function(jquery,cookie,shopcar,shoplist,effect,seckill,motion){
		shopcar.init($(".se_add"),$(".shopnum"));
		shoplist.init($(".se_add"));
		effect.init();
		seckill.init(); 
		motion.init();
		setTimeout(function(){
			$("button",".se_add").on("click",function(){
				effect.init()
			})
		},1000)
	})
})
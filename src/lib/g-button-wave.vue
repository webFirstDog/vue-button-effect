<style scoped>

		button {
			position: relative;
			overflow: hidden;
			border: 0;
			border-radius: 2px;
			cursor: pointer;
			user-select: none;
			outline: none;
			-webkit-appearance: none;
			padding: 8px 15px;
			color: #fff;
			box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
		}
		button:hover {
			opacity: .8;
		}
		button:active {
			outline: none;
			box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
		}
		.primary {
			background: #2d8cf0;
		}
		.dark-primary {
			background: #2b85e4;
		}
		.light-primary {
			background: #5cadff;
		}
		.secondary {
			
		}
		.success {
			background: #19be6b;
		}
		.warning {
			background: #ff9900;
		}
		.error {
			background: #ed3f14;
		}
		.info {
			background: #2d8cf0;
		}
		.wave {
			position: absolute;
			background: rgba(255, 255, 255, 0.43);
			z-index: -1;
		}
		.waves {
			opacity: 0;
			z-index: 1;
			width: 10px;
			height: 10px;
			transform: scale(1);
			border-radius: 100rem;
			animation: waves .5s linear;
			/* Firefox: */
			-moz-animation:waves .5s linear;
			/* Safari and Chrome: */
			-webkit-animation:waves .5s linear;
			/* Opera: */
			-o-animation:waves .5s linear;
		}
		@keyframes waves
		{
			from {transform: scale(1);opacity: 1;}
			to {transform: scale(30);opacity: 0;}
			
		}
		@-moz-keyframes waves
		{
			from {transform: scale(1);}
			to {transform: scale(30);}
			
		}
		@-webkit-keyframes waves
		{
			from {transform: scale(1);opacity: 1;}
			to {transform: scale(30);opacity: 0;}
			
		}
		@-o-keyframes waves
		{
			from {transform: scale(1);}
			to {transform: scale(30);}
			
		}
</style>
<template>
	<span style="display: inline-block;">
		<button :class="[color,size]" @click="mousemove">
			<div class="wave" :class="{'waves': active == true}" style=""></div>
			<slot></slot>
		</button>
	</span>
</template>
<script>
        export default {
                name: 'g-button-wave',
                props: {
                    color: {
						type: String
					},
					size: {
						type: String,
						default: "button--size-ss"
					}
                },
                data() {
                        return {
							active: false
                        }
                },
                beforeCreate() {

                },
                methods: {
                    mousemove(e) {
						var _this = this;
						console.log(e.target.nodeName)
						if(e.target.nodeName == "BUTTON") {
							var clientWidth = e.target.getElementsByClassName("wave")[0].clientWidth / 2;
							var clientHeight = e.target.getElementsByClassName("wave")[0].clientHeight / 2;
							var div = e.target.getElementsByClassName("wave")[0];
							div.style.left = e.offsetX-clientWidth+"px";
							div.style.top = e.offsetY-clientHeight+"px";
							// div.className += " waves";
							_this.active = true;
							setTimeout(function(){
								_this.active = false;
							},500)
						}
					}  
                },
                mounted() {
                }

        }
</script>

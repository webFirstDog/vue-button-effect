<style scoped>

		button {
			color: #fff;
			box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
		}
		button::after {
			color: #fff;
		}
		button:active {
			outline: none;
			box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
		}
		
		.primary {
			background: #2d8cf0;
			border-color: #2d8cf0;
		}
		.dark-primary {
			background: #2b85e4;
			border-color: #2b85e4;
		}
		.light-primary {
			background: #5cadff;
			border-color: #5cadff;
		}
		.secondary {
			
		}
		.success {
			background: #19be6b;
			border-color: #19be6b;
		}
		.warning {
			background: #ff9900;
			border-color: #ff9900;
		}
		.error {
			background: #ed3f14;
			border-color: #ed3f14;
		}
		.info {
			background: #2d8cf0;
			border-color: #2d8cf0;
		}
		/* Ujarak */
		.button--ujarak {
			-webkit-transition: border-color 0.4s, color 0.4s;
			transition: border-color 0.4s, color 0.4s;
		}
		.button--ujarak span {
			padding: .8em 1.2em;
			display: inline-block;
		}
		.button--ujarak::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.5);
			z-index: -1;
			opacity: 0;
			-webkit-transform: scale3d(0.7, 1, 1);
			transform: scale3d(0.7, 1, 1);
			-webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
			transition: transform 0.4s, opacity 0.4s;
			-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
			transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		}
		.button--ujarak.button--round-s::before {
			border-radius: 2px;
		}
		.button--ujarak.button--inverted::before {
			background: #7986CB;
		}
		.button--ujarak,
		.button--ujarak::before {
			-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
			transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		}
		.button--ujarak:hover {
			color: #fff;
			border-color: rgba(255, 255, 255, 0.5);
		}
		.button--ujarak.button--inverted:hover {
			color: #37474F;
			border-color: #fff;
		}
		.button--ujarak:hover::before {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
</style>
<template>
		
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--ujarak button--round-s">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-ujarak',
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
						
					}  
                },
                mounted() {

                }

        }
</script>

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
	
	/* Moema */
	.button--moema {

		color: #fff;
		-webkit-transition: background-color 0.3s, color 0.3s;
		transition: background-color 0.3s, color 0.3s;
	}
	.button--moema span {
		padding: .8em 1.2em;
		display: inline-block;
	}
	.button--moema.button--inverted {
		background: #ECEFF1;
		color: #37474f;
	}
	.button--moema::before {
		content: '';
		position: absolute;
		top: -10px;
		left: -20px;
		bottom: -10px;
		right: -20px;
		background: inherit;

		z-index: -1;
		opacity: 0.4;
		-webkit-transform: scale3d(.65, .65, .8);
		transform: scale3d(.65, .65, .8);
	}
	.button--moema:hover {
		-webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
		transition: background-color 0.1s 0.3s, color 0.1s 0.3s;

		-webkit-animation: anim-moema-1 0.3s forwards;
		animation: anim-moema-1 0.3s forwards;
	}

	.button--moema:hover::before {
		-webkit-animation: anim-moema-2 0.3s 0.3s forwards;
		animation: anim-moema-2 0.3s 0.3s forwards;
	}
	@-webkit-keyframes anim-moema-1 {
		60% {
			-webkit-transform: scale3d(0.8, 0.8, 1);
			transform: scale3d(0.8, 0.8, 1);
		}
		85% {
			-webkit-transform: scale3d(1.1, 1.1, 1);
			transform: scale3d(1.1, 1.1, 1);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@keyframes anim-moema-1 {
		60% {
			-webkit-transform: scale3d(0.8, 0.8, 1);
			transform: scale3d(0.8, 0.8, 1);
		}
		85% {
			-webkit-transform: scale3d(1.1, 1.1, 1);
			transform: scale3d(1.1, 1.1, 1);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@-webkit-keyframes anim-moema-2 {
		to {
			opacity: 0;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@keyframes anim-moema-2 {
		to {
			opacity: 0;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--moema button--round-s">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-moema',
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

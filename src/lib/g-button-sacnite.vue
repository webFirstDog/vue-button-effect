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
	
	/* Sacnite */
	.button.button--sacnite {
		width: 70px;
		height: 70px;
		min-width: 0;
		padding: 0;
		color: #fff;
		-webkit-transition: color 0.3s;
		transition: color 0.3s;
	}
	.button--scanite.button--round-l {
		border-radius: 50%;
	}
	.button--sacnite.button--inverted {
		color: #37474f;
	}
	.button--sacnite::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		z-index: -1;
		box-shadow: inset 0 0 0 35px rgba(255, 255, 255, 0.35);
		-webkit-transform: scale3d(0.9, 0.9, 1);
		transform: scale3d(0.9, 0.9, 1);
		-webkit-transition: box-shadow 0.3s, -webkit-transform 0.3;
		transition: box-shadow 0.3s, transform 0.3s;
	}
	.button--sacnite.button--inverted::before {
		box-shadow: inset 0 0 0 35px #fff;
	}
	.button--sacnite .button__icon {
		/*font-size: 22px;*/
		width: 22px;
	}
	.button--sacnite > span {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	.button--sacnite:hover {
		color: #fff;
	}
	.button--sacnite.button--inverted:hover {
		color: #fff;
	}
	.button--sacnite:hover::before {
		box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.35);
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
	.button--sacnite.button--inverted:hover::before {
		box-shadow: inset 0 0 0 2px #fff;
	}
	

</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--sacnite  button--round-s">
				<i class="button__icon icon icon-bookmark"></i>
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-sacnite',
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

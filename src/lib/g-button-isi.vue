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
	
	/* Isi */
	.button--isi {
		color: #fff;
		overflow: hidden;
	}
	.button--isi span {
		vertical-align: middle;
		padding: .8em 1.2em;
		display: inline-block;
		
	}
	.button--isi::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 100%;
		margin: -15px 0 0 1px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.5);
		-webkit-transform-origin: 100% 50%;
		transform-origin: 100% 50%;
		-webkit-transform: scale3d(1, 2, 1);
		transform: scale3d(1, 2, 1);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.7,0,0.9,1);
		transition-timing-function: cubic-bezier(0.7,0,0.9,1);
	}
	.button--isi .button__icon {
		vertical-align: middle;
	}
	.button--isi:hover::before {
		-webkit-transform: scale3d(9, 9, 1);
		transform: scale3d(9, 9, 1);
	}

</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--isi button--round-s">
				<span><i class="button__icon icon icon-forward"></i> <slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-isi',
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

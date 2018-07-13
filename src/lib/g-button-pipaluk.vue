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
	
	/* Pipaluk */
	.button--pipaluk {
		color: #fff;
	}
	.button--pipaluk span {
		display: inline-block;
		padding: .8em 1.2em;
	}
	.button--pipaluk.button--inverted {
		color: #7986cb;
	}
	.button--pipaluk::before,
	.button--pipaluk::after {
		content: '';
		border-radius: inherit;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		-webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
		transition: transform 0.3s, background-color 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
		transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
	}

	.button--pipaluk.button--inverted::before {
		border-color: #fff;
	}
	.button--pipaluk::after {
		background: rgba(255, 255, 255, 0.5);
	}
	.button--pipaluk.button--inverted::after {
		background: #fff;
	}
	.button--pipaluk:hover::before {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
	.button--pipaluk::before,
	.button--pipaluk:hover::after {
		-webkit-transform: scale3d(0.7, 0.7, 1);
		transform: scale3d(0.7, 0.7, 1);
	}
	.button--pipaluk:hover::after {
		background-color: rgba(255, 255, 255, 0.5);
	}
	.button--pipaluk.button--inverted:hover::after {
		background-color: #fff;
	}


</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--pipaluk  button--round-s" data-text="Publish">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-pipaluk',
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

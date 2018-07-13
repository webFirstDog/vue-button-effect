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
	
	/* Rayen */
	.button--rayen {
		overflow: hidden;
		padding: 0;
	}
	.button--rayen.button--inverted {
		color: #fff;
	}
	.button--rayen::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.5);
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}
	.button--rayen.button--inverted::before {
		background: #fff;
		color: #37474f;
	}
	.button--rayen > span {
		display: block;
	}
	.button--rayen::before,
	.button--rayen > span {
		padding: .8em 1.2em;
		-webkit-transition: -webkit-transform 0.3s;
		transition: transform 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
		transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	}
	.button--rayen:hover::before {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.button--rayen:hover > span {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}

</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--rayen  button--round-s" data-text="Publish">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-rayen',
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

<style scoped>
	button {
		margin: 0;
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
	.button--wayra span {
		padding: .8em 1.2em;
		display: inline-block;
	}
	/* Wayra */
	.button--wayra {
		overflow: hidden;
		-webkit-transition: border-color 0.3s, color 0.3s;
		transition: border-color 0.3s, color 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--wayra::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 150%;
		height: 112%;
		background: rgba(255, 255, 255, 0.5);
		z-index: -1;
		-webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		-webkit-transform-origin: 0% 100%;
		transform-origin: 0% 100%;
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
		transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
	}


	.button--wayra:hover::before {
		opacity: 1;
		background-color: rgba(255, 255, 255, 0.5);
		-webkit-transform: rotate3d(0, 0, 1, 0deg);
		transform: rotate3d(0, 0, 1, 0deg);
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--wayra.button--inverted:hover::before {
		background-color: #fff;
	}
</style>
<template>
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--wayra button--round-s" data-text="Publish">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-wayra',
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

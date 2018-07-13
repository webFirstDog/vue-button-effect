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
	
	
	.primary::after {
		background: #2d8cf0;
	}
	.dark-primary::after {
		background: #2b85e4;
	}
	.light-primary::after {
		background: #5cadff;
	}
	.secondary::after {
		
	}
	.success::after {
		background: #19be6b;
	}
	.warning::after {
		background: #ff9900;
	}
	.error::after {
		background: #ed3f14;
	}
	.info::after {
		background: #2d8cf0;
	}
	.primary::before {
		background: #2d8cf0;
	}
	.dark-primary::before {
		background: #2b85e4;
	}
	.light-primary::before {
		background: #5cadff;
	}
	.secondary::before {
		
	}
	.success::before {
		background: #19be6b;
	}
	.warning::before {
		background: #ff9900;
	}
	.error::before {
		background: #ed3f14;
	}
	.info::before {
		background: #2d8cf0;
	}

	/* Nuka */
	.button--nuka {

		-webkit-transition: color 0.3s;
		transition: color 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--nuka span {
		padding: .8em 1.2em;
		display: inline-block;
	}
	.button--nuka.button--inverted {
		color: #37474f;
	}
	.button--nuka::before,
	.button--nuka::after {
		content: '';
		position: absolute;
		border-radius: inherit;
		
		z-index: -1;
	}
	.button--nuka::before {
		top: -4px;
		bottom: -4px;
		left: -4px;
		right: -4px;
		opacity: 0.2;
		-webkit-transform: scale3d(0.7, 1, 1);
		transform: scale3d(0.7, 1, 1);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
	}
	.button--nuka::after {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-transform: scale3d(1.1, 1, 1);
		transform: scale3d(1.1, 1, 1);
		-webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
		transition: transform 0.3s, background-color 0.3s;
	}
	.button--nuka::before,
	.button--nuka::after {
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--nuka.button--inverted::before,
	.button--nuka.button--inverted::after {
		background: #fff;
	}
	.button--nuka:hover {
		color: #fff;
	}
	.button--nuka:hover::before {
		opacity: 1;
	}
	.button--nuka:hover::after {
		background-color: rgba(255, 255, 255, 0.5);
	}
	.button--nuka.button--inverted:hover::after {
		background-color: #7986cb;
	}
	.button--nuka:hover::after,
	.button--nuka:hover::before {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}


</style>
<template>
		<span style="display: inline-block;">
			
			<button :class="[color,size]" class="button button--nuka button--round-s">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-nuka',
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

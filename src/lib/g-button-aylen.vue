<style scoped lang="scss">
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
	.primary::before {
		background: rgba(#fff,.5);
	}
	.primary::after {
		background: rgba(#2d8cf0,.5);
	}
	
	.dark-primary {
		background: #2b85e4;
	}
	.dark-primary::before {
		background: rgba(#fff,.5);
	}
	.dark-primary::after {
		background: rgba(#2b85e4,.5);
	}
	
	.light-primary {
		background: #5cadff;
	}
	.light-primary::before {
		background: rgba(#fff,.5);
	}
	.light-primary::after {
		background: rgba(#5cadff,.5);
	}
	
	.success {
		background: #19be6b;
	}
	.success::before {
		background: rgba(#fff,.5);
	}
	.success::after {
		background: rgba(#19be6b,.5);
	}
	
	.warning {
		background: #ff9900;
	}
	.warning::before {
		background: rgba(#fff,.5);
	}
	.warning::after {
		background: rgba(#ff9900,.5);
	}
	
	.error {
		background: #ed3f14;
	}
	.error::before {
		background: rgba(#fff,.5);
	}
	.error::after {
		background: rgba(#ed3f14,.5);
	}
	.info {
		background: #2d8cf0;
	}
	.info::before {
		background: rgba(#fff,.5);
	}
	.info::after {
		background: rgba(#2d8cf0,.5);
	}
	
	.button--aylen span {
		padding: .8em 1.2em;
		display: inline-block;
		
	}
	/* Aylen */
	.button.button--aylen {

		overflow: hidden;
		-webkit-transition: color 0.3s;
		transition: color 0.3s;
	}
	.button--aylen.button--inverted {
		background: none;
		color: #fff;
	}
	.button--aylen::before,
	.button--aylen::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		bottom: 100%;
		left: 0;
		z-index: -1;
		-webkit-transition: -webkit-transform 0.3s;
		transition: transform 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
		transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	}
	/*.button--aylen::before {
		background: #7986cb;
	}*/
	/*.button--aylen::after {
		background: #3f51b5;
	}*/
	.button--aylen:hover {
		color: #fff;
	}
	.button--aylen:hover::before,
	.button--aylen:hover::after {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}
	.button--aylen:hover::after {
		-webkit-transition-delay: 0.175s;
		transition-delay: 0.175s;
	}

</style>
<template>
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--aylen button--round-s">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-aylen',
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

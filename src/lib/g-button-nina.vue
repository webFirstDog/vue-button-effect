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

	.primary::before {
		background: rgba(#fff,.5);
	}
	.primary::after {
		background: rgba(#2d8cf0,.5);
	}
	.dark-primary::before {
		background: rgba(#fff,.5);
	}
	.dark-primary::after {
		background: rgba(#2b85e4,.5);
	}
	.light-primary::before {
		background: rgba(#fff,.5);
	}
	.light-primary::after {
		background: rgba(#5cadff,.5);
	}
	.success::before {
		background: rgba(#fff,.5);
	}
	.success::after {
		background: rgba(#19be6b,.5);
	}
	.warning::before {
		background: rgba(#fff,.5);
	}
	.warning::after {
		background: rgba(#ff9900,.5);
	}
	.error::before {
		background: rgba(#fff,.5);
	}
	.error::after {
		background: rgba(#ed3f14,.5);
	}
	.info::before {
		background: rgba(#fff,.5);
	}
	.info::after {
		background: rgba(#2d8cf0,.5);
	}
	
	
	/* Nina */
	.button--nina {
		padding: 0 1.2em;
		
		color: #fff;
		overflow: hidden;
		-webkit-transition: background-color 0.3s;
		transition: background-color 0.3s;
	}
	.button--nina.button--inverted {
		background: #fff;
		color: #7986cb;
	}
	.button--nina > span {
		display: inline-block;
		padding: .8em 0;
		opacity: 0;
		color: #fff;
		-webkit-transform: translate3d(0, -10px, 0);
		transform: translate3d(0, -10px, 0);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
		transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	}
	.button--nina::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: .8em 0;
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
		transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
	}

	.button--nina:hover::before {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}
	.button--nina:hover > span {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.button--nina:hover > span:nth-child(1) {
		-webkit-transition-delay: 0.045s;
		transition-delay: 0.045s;
	}
	.button--nina:hover > span:nth-child(2) {
		-webkit-transition-delay: 0.09s;
		transition-delay: 0.09s;
	}
	.button--nina:hover > span:nth-child(3) {
		-webkit-transition-delay: 0.135s;
		transition-delay: 0.135s;
	}
	.button--nina:hover > span:nth-child(4) {
		-webkit-transition-delay: 0.18s;
		transition-delay: 0.18s;
	}
	.button--nina:hover > span:nth-child(5) {
		-webkit-transition-delay: 0.225s;
		transition-delay: 0.225s;
	}
	.button--nina:hover > span:nth-child(6) {
		-webkit-transition-delay: 0.27s;
		transition-delay: 0.27s;
	}
	.button--nina:hover > span:nth-child(7) {
		-webkit-transition-delay: 0.315s;
		transition-delay: 0.315s;
	}
	.button--nina:hover > span:nth-child(8) {
		-webkit-transition-delay: 0.36s;
		transition-delay: 0.36s;
	}
	.button--nina:hover > span:nth-child(9) {
		-webkit-transition-delay: 0.405s;
		transition-delay: 0.405s;
	}
	.button--nina:hover > span:nth-child(10) {
		-webkit-transition-delay: 0.45s;
		transition-delay: 0.45s;
	}
	
</style>
<template>
		<span style="display: inline-block;">

			<button :class="[color,size]" class="button button--nina button--round-s" :data-text="text"> 
				
				<span v-for="(item, index) in text_array">{{ item }}</span>
				
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-nina',
                props: {
                    color: {
						type: String
					},
					gText: {
						type: String
					},
					size: {
						type: String,
						default: "button--size-ss"
					} 
                },
                data() {
                        return {
							text: this.gText,
							text_array: this.gText.split("")
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

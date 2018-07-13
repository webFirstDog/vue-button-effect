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
	/* Winona */
	.button--winona {
		overflow: hidden;
		padding: 0;
		-webkit-transition: border-color 0.3s, background-color 0.3s;
		transition: border-color 0.3s, background-color 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--winona::after {
		content: attr(data-text);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		-webkit-transform: translate3d(0, 25%, 0);
		transform: translate3d(0, 25%, 0);
	}
	.button--winona > span {
		display: block;
	}
	.button--winona.button--inverted {
		color: #7986cb;
	}
	.button--winona.button--inverted:after {
		color: #fff;
	}
	.button--winona::after,
	.button--winona > span {
		padding: .8em 1.2em;
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	/*.button--winona:hover {
		border-color: #3f51b5;
		background-color: rgba(63, 81, 181, 0.1);
	}*/
	.button--winona.button--inverted:hover {
		border-color: #21333C;
		background-color: #21333C;
	}
	.button--winona:hover::after {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.button--winona:hover > span {
		opacity: 0;
		-webkit-transform: translate3d(0, -25%, 0);
		transform: translate3d(0, -25%, 0);
	}
</style>
<template>
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--winona button--round-s" data-text="Publish">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-winona',
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

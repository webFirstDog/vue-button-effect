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
	/* Tamaya */
	.button--tamaya {
		overflow: hidden;
	}
	.button--tamaya span {
		padding: .8em 1.2em;
		display: inline-block;
	}
	.button--tamaya.button--inverted {
		color: #37474f;
		border-color: #37474f;
	}
	.button--tamaya::before,
	.button--tamaya::after {
		content: attr(data-text);
		position: absolute;
		width: 100%;
		height: 50%;
		left: 0;
		background: rgba(255, 255, 255, 0.5);
		color: #fff;
		overflow: hidden;
		-webkit-transition: -webkit-transform 0.3s;
		transition: transform 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--tamaya.button--inverted::before,
	.button--tamaya.button--inverted::after {
		background: #fff;
		color: #37474f;
	}
	.button--tamaya::before {
		top: 0;
		padding-top: .8em;
	}
	.button--tamaya::after {
		bottom: 0;
		line-height: 0;
	}
	.button--tamaya > span {
		display: block;
		-webkit-transform: scale3d(0.2, 0.2, 1);
		transform: scale3d(0.2, 0.2, 1);
		opacity: 0;
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--tamaya:hover::before {
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	.button--tamaya:hover::after {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}
	.button--tamaya:hover > span {
		opacity: 1;
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
</style>
<template>
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--tamaya  button--round-s" data-text="Publish">
				<span><slot></slot></span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-tamaya',
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

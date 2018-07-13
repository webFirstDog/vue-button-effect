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
	
	/* Nanuk */
	.button--nanuk {
		padding: 0 1.2em;
		overflow: hidden;

		-webkit-transition: background-color 0.3s;
		transition: background-color 0.3s;
	}
	.button--nanuk.button--inverted {
		background: #fff;
		color: #7986cb;
	}
	.button--nanuk > span {
		display: inline-block;
		padding: .8em 0;
	}
	.button--nanuk:hover {
		opacity: .8;
	}
	.button--nanuk:hover > span:nth-child(odd) {
		-webkit-animation: anim-nanuk-1 0.5s forwards;
		animation: anim-nanuk-1 0.5s forwards;
	}
	.button--nanuk:hover > span:nth-child(even) {
		-webkit-animation: anim-nanuk-2 0.5s forwards;
		animation: anim-nanuk-2 0.5s forwards;
	}
	.button--nanuk:hover > span:nth-child(odd),
	.button--nanuk:hover > span:nth-child(even) {
		-webkit-animation-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
		transition-animation-function: cubic-bezier(0.75, 0, 0.125, 1);
	}
	@-webkit-keyframes anim-nanuk-1 {
		0%,
		100% {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		49% {
			opacity: 1;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
		}
		50% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			color: inherit;
		}
		51% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			color: #fff;
		}
		100% {
			color: #fff;
		}
	}
	@keyframes anim-nanuk-1 {
		0%,
		100% {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		49% {
			opacity: 1;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
		}
		50% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			color: inherit;
		}
		51% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			color: #fff;
		}
		100% {
			color: #fff;
		}
	}
	@-webkit-keyframes anim-nanuk-2 {
		0%,
		100% {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		49% {
			opacity: 1;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
		}
		50% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			color: inherit;
		}
		51% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			color: #fff;
		}
		100% {
			color: #fff;
		}
	}
	@keyframes anim-nanuk-2 {
		0%,
		100% {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		49% {
			opacity: 1;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
		}
		50% {
			opacity: 0;
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
			color: inherit;
		}
		51% {
			opacity: 0;
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			color: #fff;
		}
		100% {
			color: #fff;
		}
	}
	.button--nanuk:hover > span:nth-child(1) {
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	.button--nanuk:hover > span:nth-child(2) {
		-webkit-animation-delay: 0.05s;
		animation-delay: 0.05s;
	}
	.button--nanuk:hover > span:nth-child(3) {
		-webkit-animation-delay: 0.1s;
		animation-delay: 0.1s;
	}
	.button--nanuk:hover > span:nth-child(4) {
		-webkit-animation-delay: 0.15s;
		animation-delay: 0.15s;
	}
	.button--nanuk:hover > span:nth-child(5) {
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}
	.button--nanuk:hover > span:nth-child(6) {
		-webkit-animation-delay: 0.25s;
		animation-delay: 0.25s;
	}
	.button--nanuk:hover > span:nth-child(7) {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.button--nanuk:hover > span:nth-child(8) {
		-webkit-animation-delay: 0.35s;
		animation-delay: 0.35s;
	}
	.button--nanuk:hover > span:nth-child(9) {
		-webkit-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	.button--nanuk:hover > span:nth-child(10) {
		-webkit-animation-delay: 0.45s;
		animation-delay: 0.45s;
	}
	.button--nanuk:hover > span:nth-child(11) {
		-webkit-animation-delay: 0.5s;
		animation-delay: 0.5s;
	}
	
</style>
<template>
		<span style="display: inline-block;">
			<button :class="[color,size]" class="button button--nanuk button--round-s">
				<span v-for="(item, index) in text_array">{{ item }}</span>
			</button>
		</span>
</template>
<script>
	
        export default {
                name: 'g-button-nanuk',
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

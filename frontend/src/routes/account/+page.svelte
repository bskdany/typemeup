<script lang="ts">
	import { goto } from '$app/navigation';
	import LoginToAccount from '../../components/account/loginToAccount.svelte';
	import RegisterAccount from '../../components/account/registerAccount.svelte';

	let loginOrRegister: string = 'login';

	function navigateToAHomePage() {
		goto('/');
	}
</script>

<button id="homepage" on:click={navigateToAHomePage}> Home </button>

{#if loginOrRegister === 'login'}
	<LoginToAccount />
	<button class="switchLoginMode" on:click={() => (loginOrRegister = 'register')}> Register account instead </button>
{:else}
	<RegisterAccount
		on:accountRegistered={() => {
			loginOrRegister = 'login';
		}}
	/>
	<button class="switchLoginMode" on:click={() => (loginOrRegister = 'login')}> Login instead </button>
{/if}

<style>
	#homepage {
		position: absolute;
		left: 30px;
		top: 30px;
	}

	.switchLoginMode {
		margin-top: 30px;
	}
</style>

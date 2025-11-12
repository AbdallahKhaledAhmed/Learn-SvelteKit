<script>
  import { token } from '$lib/stores/auth';
  import { browser } from '$app/environment';

  function logout() {
    if (browser) {
      token.set(null);
    }
  }
</script>

<ul class="flex gap-5">
	<li><a href="/">Home</a></li>
	<li><a href="/posts">Posts</a></li>
  {#if $token}
    <li><a href="/protected">Protected</a></li>
    <li><button on:click={logout}>Logout</button></li>
  {:else}
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
  {/if}
</ul>

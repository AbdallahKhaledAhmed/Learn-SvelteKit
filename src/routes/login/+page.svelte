<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let message = '';

  async function handleSubmit() {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      goto('/');
    } else {
      message = data.message;
    }
  }
</script>

<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="username">Username</label>
    <input id="username" type="text" bind:value={username} />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" bind:value={password} />
  </div>
  <button type="submit">Login</button>
</form>

{#if message}
  <p>{message}</p>
{/if}

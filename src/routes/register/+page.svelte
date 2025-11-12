<script>
  let username = '';
  let password = '';
  let message = '';

  async function handleSubmit() {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      message = 'Registration successful! You can now log in.';
    } else {
      message = data.message;
    }
  }
</script>

<h1>Register</h1>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="username">Username</label>
    <input id="username" type="text" bind:value={username} />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" bind:value={password} />
  </div>
  <button type="submit">Register</button>
</form>

{#if message}
  <p>{message}</p>
{/if}

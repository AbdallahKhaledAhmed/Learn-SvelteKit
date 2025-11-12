<script>
  import { token } from '$lib/stores/auth';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    if (!$token) {
      goto('/login');
    }
  });
</script>

<h1>Protected Page</h1>

<p>This page is only accessible to authenticated users.</p>

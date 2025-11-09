<script>
	import { page } from '$app/state';

    /** @type {import('./$types').PageProps} */
    
    let postId = $derived(page.params.id)
</script>

<h2>Welcome this is Post {postId}</h2>

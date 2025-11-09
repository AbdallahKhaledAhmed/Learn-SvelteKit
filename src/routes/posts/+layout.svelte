<script>
    /** @type {import('./$types').LayoutProps} */
    let { data, children } = $props();
</script>

<div>
    {@render children()}
    <a href="/posts/123">go to post 123</a>
</div>
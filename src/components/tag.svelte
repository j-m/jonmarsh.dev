<script>
  export let id
  export let title
</script>

<style>
.tag {
	display: inline-block;
	padding: .1rem .2rem;
	margin: 0 .2rem 0 0;
	color:black;
  border-radius: 3px;
  border: 1px solid grey;
  font-size: small
}

.tag:hover {
  background: rgb(230, 230, 230);
}
</style>

<a rel='prefetch' title="View everything tagged '{title}'" href="tag/{id}">
  <div class='tag'>{title}</div>
</a>

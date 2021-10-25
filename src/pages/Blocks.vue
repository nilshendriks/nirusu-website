<template>
  <Layout>
    <h1>Blocks</h1>
    <p>paragraph</p>
    <p>Bringhurst said line measure should be ca. 66 characters per line.</p>
    <p>Image</p>
    <g-image src="~/assets/me_001.jpg" />
    <a href="#">A Link</a>
    <p>A unordered list</p>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
    <p>A ordered list</p>
    <ol>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ol>
    <h1>A heading level 1</h1>
    <h2>A heading level 2</h2>
    <h3>A heading level 3</h3>
    <h4>A heading level 4</h4>
    <h5>A heading level 5</h5>
    <h6>A heading level 6</h6>
    <blockquote>
      <p>There is only one main reason to disable subpixel rendering, and that is to display light text on dark backgrounds on OS X. Mac font rendering tends to butcher light fonts on dark backgrounds, making them spill out to the point of being illegible.</p>
    </blockquote>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blocks'
  }
}
</script>

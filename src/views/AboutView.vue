<template>
  <div class="about">
    <Card>
      <template #title>The standard card</template>
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </Card>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

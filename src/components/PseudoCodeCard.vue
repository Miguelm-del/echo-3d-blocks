<script setup></script>

<template>
  <q-card>
    <q-card-section>
      <h4>Pseudocódigo</h4>
    </q-card-section>

    <q-card-section>
      <pre>
    <code class="language-cpp">
      <slot name="code"></slot>
    </code>
  </pre>
    </q-card-section>
  </q-card>
</template>

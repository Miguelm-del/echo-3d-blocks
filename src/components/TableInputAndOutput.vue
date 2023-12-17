<script setup>
const props = defineProps({
  hasThreeExamples: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div>
    <h2>Entrada</h2>

    <p><slot name="input"></slot></p>

    <h2>Saída</h2>

    <p><slot name="output"></slot></p>

    <q-markup-table separator="cell" bordered>
      <thead class="bg-grey">
        <tr>
          <th class="text-left text-bold">Exemplo de entrada</th>
          <th class="text-right text-bold">Exemplo de saída</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left text-h6"><slot name="exampleInput"></slot></td>
          <td class="text-right text-h6"><slot name="exampleOutput"></slot></td>
        </tr>

        <tr v-if="hasThreeExamples">
          <td class="text-left text-h6"><slot name="exampleInput2"></slot></td>
          <td class="text-right text-h6">
            <slot name="exampleOutput2"></slot>
          </td>
        </tr>

        <tr v-if="hasThreeExamples">
          <td class="text-left text-h6"><slot name="exampleInput3"></slot></td>
          <td class="text-right text-h6">
            <slot name="exampleOutput3"></slot>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

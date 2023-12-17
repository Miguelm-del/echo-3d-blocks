<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 10: Número par</h1>
    </header>

    <PaneBody>
      <p>
        Crie um programa que verifica se um número inteiro é par. Utilize
        valores booleanos para representar essa condição.
      </p>

      <TableInputAndOutput>
        <template #input> Um número inteiro será inserido. </template>

        <template #output> Exiba o valor "True" se o número for par. </template>

        <template #exampleInput> 2 </template>
        <template #exampleOutput> True </template>

        <template #exampleInput2> 5 </template>
        <template #exampleOutput2> </template>

        <template #exampleInput3> 16 </template>
        <template #exampleOutput3> True </template>
      </TableInputAndOutput>
    </PaneBody>

    <PaneFooter>
      <q-btn
        dense
        push
        color="positive"
        icon-right="qr_code_scanner"
        label="Responder"
        text-color="white"
        size="lg"
      />
    </PaneFooter>
  </q-page>
</template>

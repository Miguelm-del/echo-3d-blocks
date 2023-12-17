<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 5: Divisão de dois números</h1>
    </header>

    <PaneBody>
      <p>
        Faça um programa que leia dois valores, você deverar dividir esses dois
        valores e exibir a divisão entre eles.
      </p>

      <TableInputAndOutput>
        <template #input> Dois valores serão inseridos. </template>

        <template #output>
          Divida os dois valores e exiba o resultado da divisão entre eles.
        </template>

        <template #exampleInput>
          12 <br />
          3
        </template>
        <template #exampleOutput> 4 </template>

        <template #exampleInput2>
          100 <br />
          5
        </template>
        <template #exampleOutput2> 20 </template>

        <template #exampleInput3>
          77 <br />
          11
        </template>
        <template #exampleOutput3> 7 </template>
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

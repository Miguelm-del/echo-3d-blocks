<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 2: Soma de dois números</h1>
    </header>

    <PaneBody>
      <p>
        No programa dois números serão inseridos, você deverar somar esses dois
        valores e exibir a soma entre eles.
      </p>

      <TableInputAndOutput>
        <template #input> Dois valores serão inseridos. </template>

        <template #output>
          Some os dois valores e exiba o resultado da soma entre eles.
        </template>

        <template #exampleInput>
          3 <br />
          5
        </template>
        <template #exampleOutput> 8 </template>

        <template #exampleInput2>
          10 <br />
          23
        </template>
        <template #exampleOutput2> 33 </template>

        <template #exampleInput3>
          55 <br />
          -15
        </template>
        <template #exampleOutput3> 40 </template>
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

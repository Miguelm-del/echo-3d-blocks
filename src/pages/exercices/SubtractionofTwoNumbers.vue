<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 3: Subtração de dois números</h1>
    </header>

    <PaneBody>
      <p>
        No programa dois números serão inseridos, você deverar subtrair esses
        dois valores e exibir a subtração entre eles.
      </p>

      <TableInputAndOutput>
        <template #input> Dois valores serão inseridos. </template>

        <template #output>
          Subtraia os dois valores e exiba o resultado da subtração entre eles.
        </template>

        <template #exampleInput>
          5 <br />
          2
        </template>
        <template #exampleOutput> 3 </template>

        <template #exampleInput2>
          23 <br />
          23
        </template>
        <template #exampleOutput2> 0 </template>

        <template #exampleInput3>
          36 <br />
          16
        </template>
        <template #exampleOutput3> 20 </template>
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

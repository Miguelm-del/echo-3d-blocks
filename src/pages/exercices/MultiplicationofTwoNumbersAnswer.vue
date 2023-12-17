<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 4: Multiplicação de dois números</h1>
    </header>

    <PaneBody>
      <p>
        Faça um programa que leia dois valores, você deverar multiplicar esses dois valores e exibir a multiplicação entre eles.
      </p>

      <TableInputAndOutput>
        <template #input> Dois valores serão inseridos. </template>

        <template #output>
          Multiplique os dois valores e exiba o resultado da multiplicação entre eles.
        </template>

        <template #exampleInput> 7 <br/> 5 </template>
        <template #exampleOutput> 35 </template>
    
        <template #exampleInput2> 10 <br /> 10 </template>
        <template #exampleOutput2> 100 </template>

        <template #exampleInput3> 9 <br /> 8 </template>
        <template #exampleOutput3> 72 </template>


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

      <q-btn
        dense
        push
        color="primary"
        label="Resposta"
        text-color="black"
        size="lg"
        icon-right="description"
        :to="'/exercicios/4/resposta'"
      />
    </PaneFooter>
  </q-page>
</template>

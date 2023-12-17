<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 11: Número ímpar</h1>
    </header>

    <PaneBody>
      <p>
        Crie um programa que verifica se um número inteiro é ímpar. Utilize valores booleanos para representar essa condição.
      </p>

      <TableInputAndOutput>
        <template #input> Um número inteiro será inserido. </template>

        <template #output>
          Exiba o valor "False" se o número não for ímpar.
        </template>

        <template #exampleInput> 2 </template>
        <template #exampleOutput> False </template>
    
        <template #exampleInput2> 7 </template>
        <template #exampleOutput2>  </template>

        <template #exampleInput3> 68 </template>
        <template #exampleOutput3> False </template>


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
        :to="'/exercicios/11/resposta'"
      />
    </PaneFooter>
  </q-page>
</template>

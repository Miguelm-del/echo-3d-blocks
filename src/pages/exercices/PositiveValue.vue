<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 6: Valor positivo</h1>
    </header>

    <PaneBody>
      <p>
        Faça um programa que leia um número inteiro. Este valor será positivo ou
        negativo. Você deverá exibir na tela a seguinte mensagem se o valor for
        positivo: "Valor positivo".
      </p>

      <TableInputAndOutput>
        <template #input> Um valor inteiro será inserido. </template>

        <template #output>
          Imprima na tela uma mensagem dizendo que o valor lido é positivo.
        </template>

        <template #exampleInput> 1 </template>
        <template #exampleOutput> Valor positivo </template>

        <template #exampleInput2> -2 </template>
        <template #exampleOutput2> </template>

        <template #exampleInput3> 5 </template>
        <template #exampleOutput3> Valor positivo </template>
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

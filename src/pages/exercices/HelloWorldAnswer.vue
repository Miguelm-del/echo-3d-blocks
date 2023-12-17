<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Questão 1: Olá Mundo</h1>
    </header>

    <PaneBody>
      <p>
        O seu primeiro programa em qualquer linguagem de programação normalmente
        é o "Olá, mundo". Neste primeiro problema tudo o que você precisa fazer
        é imprimir esta mensagem na tela.
      </p>

      <TableInputAndOutput>
        <template #input> Não há entrada neste problema. </template>

        <template #output>
          Você deve imprimir a mensagem "Olá, mundo".
        </template>

        <template #exampleInput> </template>

        <template #exampleOutput> Olá, mundo </template>
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

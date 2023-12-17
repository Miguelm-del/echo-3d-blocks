<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 9: Voto obrigatório ou opcional</h1>
    </header>

    <PaneBody>
      <p>
        No Brasil pessoas com 16 e 17 anos o voto é opcional, já pessoas entre 18 e 70 anos o voto é obrigatório. Faça um programa que leia a idade de uma pessoa e verifica se o voto dela é obrigatório ou não. Se a idade for 16 ou 17 anos, o program deve exibir a mensagem "Voto opcional", mas se a idade da pessoa for entre 18 e 70 anos o programa deve exibir a mensagem "Voto obrigatório".
      </p>

      <TableInputAndOutput>
        <template #input> Um valor inteiro e positivo será inserido. </template>

        <template #output>
          Imprema na tela uma mensagem dizendo se a idade lida torna o voto da pessoa opcional ou obrigatório.
        </template>

        <template #exampleInput> 25 </template>
        <template #exampleOutput> Voto obrigatório </template>
    
        <template #exampleInput2> 16 </template>
        <template #exampleOutput2> Voto opcional </template>

        <template #exampleInput3> 57 </template>
        <template #exampleOutput3> Voto obrigatório </template>


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

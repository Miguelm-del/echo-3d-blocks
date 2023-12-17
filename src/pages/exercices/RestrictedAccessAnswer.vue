<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 12: Acesso restrito</h1>
    </header>

    <PaneBody>
      <p>
        Desenvolva um programa que simula o acesso a uma área restrita. Utilize valores booleanos para verificar se um usuário tem permissão ou não. Se o usuário não tiver acesso a área o programa deverá exibir a mensagem "Acesso negado".
      </p>

      <TableInputAndOutput>
        <template #input> Um valor booleano será inserido. </template>

        <template #output>
          Imprima a mensagem "Acesso negado" se o usuário não tiver acesso a área.
        </template>

        <template #exampleInput> true </template>
        <template #exampleOutput>  </template>
    
        <template #exampleInput2> false </template>
        <template #exampleOutput2> Acesso negado </template>

        <template #exampleInput3> false </template>
        <template #exampleOutput3> Acesso negado </template>


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
        :to="'/exercicios/12/resposta'"
      />
    </PaneFooter>
  </q-page>
</template>

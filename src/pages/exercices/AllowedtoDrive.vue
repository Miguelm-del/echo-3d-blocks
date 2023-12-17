<script setup>
import TableInputAndOutput from "src/components/TableInputAndOutput.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Questão 8: Permitido dirigir</h1>
    </header>

    <PaneBody>
      <p>
        Para dirigir no Brasil é necessário ter 18 anos ou mais. Faça um program que leia um número inteiro e verifique se o valor é maior ou igual ao 18. Você deverá exibir a seguinte mensagem se for permitido dirigir "Permitido dirigir".
      </p>

      <TableInputAndOutput>
        <template #input> Um valor inteiro e positivo será inserido. </template>

        <template #output>
          Imprima na tela uma mensagem dizendo se a idade lida permite a pessoa dirigir ou não.
        </template>

        <template #exampleInput> 35 </template>
        <template #exampleOutput> Permitido dirigir </template>
    
        <template #exampleInput2> 13 </template>
        <template #exampleOutput2> </template>

        <template #exampleInput3> 18 </template>
        <template #exampleOutput3> Permitido dirigir </template>


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

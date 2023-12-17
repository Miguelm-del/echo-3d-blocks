<script setup>
import { ref } from "vue";

import ReadQRCode from "src/components/ReadQRCode.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
import BlockImage from "src/components/BlockImage.vue";

const showReadQRCode = ref(false);
const validBlock = ref(5);
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Bloco de Processo</h1>
      <p class="text-center">Número em braille do bloco: <strong>5</strong></p>
    </header>

    <PaneBody>
      <p class="text-justify">
        O bloco de processo em um fluxograma representa a etapa na qual uma ação
        específica é realizada, dados são manipulados ou algum tipo de resultado
        é gerado. Esse bloco é fundamental para indicar as atividades ou
        operações que ocorrem dentro de um algoritmo ou processo.
      </p>

      <BlockImage
        :src="'https://firebasestorage.googleapis.com/v0/b/echo-3d-blocks.appspot.com/o/Processo.png?alt=media&token=b2f74fd7-40a4-4bcf-8e42-ffff178410c3'"
        :alt="'Exemplo de bloco processo'"
      />

      <p class="text-justify">
        Ele descreve as tarefas, operações ou ações que ocorrem em uma sequência
        específica, fornecendo clareza sobre as etapas executadas durante o
        fluxo do processo.
      </p>

      <p class="text-justify">
        Por exemplo, dentro de um algoritmo de um sistema de cadastro, o bloco
        de processo pode conter as instruções para coletar informações do
        usuário, processar esses dados (validar, armazenar em banco de dados,
        etc.) e, por fim, fornecer uma mensagem de confirmação ao usuário sobre
        o sucesso ou falha da operação.
      </p>

      <ReadQRCode
        :show="showReadQRCode"
        :valid-block="validBlock"
        @close="showReadQRCode = false"
      ></ReadQRCode>
    </PaneBody>

    <PaneFooter>
      <q-btn
        dense
        push
        color="positive"
        icon-right="qr_code_2"
        label="Validar peça"
        text-color="white"
        size="lg"
        @click="showReadQRCode = true"
      />

      <q-btn
        dense
        push
        color="primary"
        label="Ir para exercícios"
        text-color="black"
        size="lg"
        :to="'/exercicios'"
      />
    </PaneFooter>
  </q-page>
</template>

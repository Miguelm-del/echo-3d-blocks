<script setup>
import PseudoCodeCard from "src/components/PseudoCodeCard.vue";
import PaneBody from "src/components/panes/PaneBody.vue";
</script>

<template>
  <q-page padding
    ><header class="text-center">
      <h1>Resposta - Questão 8: Permitido dirigir</h1>
    </header>

    <PaneBody>
      <PseudoCodeCard>
        <template #code>
          <pre>
          Inicio 
          Ler idade
          Se idade >= 18 
          então Escrever "Permitido dirigir" 
          Fim Se
          Fim
          </pre>
        </template>
      </PseudoCodeCard>
    </PaneBody>
  </q-page>
</template>

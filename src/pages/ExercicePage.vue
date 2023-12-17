<script setup>
import PaneBody from "src/components/panes/PaneBody.vue";
import PaneFooter from "src/components/panes/PaneFooter.vue";
</script>

<template>
  <q-page padding>
    <header class="text-center">
      <h1>Exercícios</h1>
    </header>

    <PaneBody>
      <p>
        Bem-vindo à nossa página de exercícios de lógica de programação! Aqui,
        você terá a oportunidade de aprimorar suas habilidades de resolução de
        problemas e pensamento lógico.
      </p>

      <q-list bordered separator class="shadow-5">
        <q-item clickable v-ripple :to="'exercicios/1'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 1</q-item-label
            >
            <q-item-label class="text-h6">Olá, mundo!</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/2'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 2</q-item-label
            >
            <q-item-label class="text-h6">Soma de dois números</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/3'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 3</q-item-label
            >
            <q-item-label class="text-h6"
              >Subtração de dois números</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/4'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 4</q-item-label
            >
            <q-item-label class="text-h6"
              >Multiplicação de dois números</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/5'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 5</q-item-label
            >
            <q-item-label class="text-h6">Divisão de dois números</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/6'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 6</q-item-label
            >
            <q-item-label class="text-h6">Valor positivo</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/7'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 7</q-item-label
            >
            <q-item-label class="text-h6">Valor negativo</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/8'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 8</q-item-label
            >
            <q-item-label class="text-h6">Permitido dirigir</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/9'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 9</q-item-label
            >
            <q-item-label class="text-h6"
              >Voto obrigatório ou opcional</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/10'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 10</q-item-label
            >
            <q-item-label class="text-h6">Número par</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/11'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 11</q-item-label
            >
            <q-item-label class="text-h6">Número ímpar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="'exercicios/12'">
          <q-item-section>
            <q-item-label header class="text-bold text-dark text-h5"
              >Questão 12</q-item-label
            >
            <q-item-label class="text-h6">Acesso restrito</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </PaneBody>

    <PaneFooter>
      <q-btn
        dense
        push
        color="primary"
        icon-right="home"
        label="Ir para tela inicial"
        text-color="dark"
        size="lg"
        :to="'/'"
      />
    </PaneFooter>
  </q-page>
</template>

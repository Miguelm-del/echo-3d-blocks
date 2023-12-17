const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/tutorial",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TutorialPage.vue") },
      {
        path: "terminador",
        component: () => import("pages/teach-blocks/TerminatorBlock.vue"),
      },
      {
        path: "processo",
        component: () => import("pages/teach-blocks/ProcessBlock.vue"),
      },
      {
        path: "variavel",
        component: () => import("pages/teach-blocks/VariableToFitBlock.vue"),
      },
      {
        path: "operador",
        component: () => import("pages/teach-blocks/OperatorToFitBlock.vue"),
      },
      {
        path: "condicional",
        component: () => import("pages/teach-blocks/ConditionalBlock.vue"),
      },
      {
        path: "se-nao",
        component: () => import("pages/teach-blocks/ConditionalBlockElse.vue"),
      },
      {
        path: "comparador",
        component: () => import("pages/teach-blocks/ComparatorBlock.vue"),
      },
    ],
  },
  {
    path: "/exercicios",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ExercicePage.vue") },
      { path: "1", component: () => import("pages/exercices/HelloWorld.vue") },
      {
        path: "2",
        component: () => import("pages/exercices/SumofTwoNumbers.vue"),
      },
      {
        path: "3",
        component: () => import("pages/exercices/SubtractionofTwoNumbers.vue"),
      },
      {
        path: "4",
        component: () =>
          import("pages/exercices/MultiplicationofTwoNumbers.vue"),
      },
      {
        path: "5",
        component: () => import("pages/exercices/DivisionofTwoNumbers.vue"),
      },
      {
        path: "6",
        component: () => import("pages/exercices/PositiveValue.vue"),
      },
      {
        path: "7",
        component: () => import("pages/exercices/NegativeValue.vue"),
      },
      {
        path: "8",
        component: () => import("pages/exercices/AllowedtoDrive.vue"),
      },
      {
        path: "9",
        component: () => import("pages/exercices/MandatoryorOptionalVote.vue"),
      },
      { path: "10", component: () => import("pages/exercices/EvenNumber.vue") },
      { path: "11", component: () => import("pages/exercices/OddNumber.vue") },
      {
        path: "12",
        component: () => import("pages/exercices/RestrictedAccess.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

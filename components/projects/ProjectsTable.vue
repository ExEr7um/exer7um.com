<template>
  <div class="flex flex-col w-full">
    <div class="space-y-4">
      <ProjectCell
        v-for="project in projects"
        :key="project._id"
        :project="project"
        :actions="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
}
</script>

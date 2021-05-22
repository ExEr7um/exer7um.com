<template>
  <div>
    <h2>{{ $t('headings.myProjects') }}</h2>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project._id"
        :project="project"
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

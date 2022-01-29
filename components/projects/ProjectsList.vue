<template>
  <div>
    <h2>{{ $t('headings.myProjects') }}</h2>
    <div
      v-if="Object.keys(projects).length === 0"
      class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      <ProjectLoading v-for="item in 4" :key="item" class="w-full" />
    </div>
    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

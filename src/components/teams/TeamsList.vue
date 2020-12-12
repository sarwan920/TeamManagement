<template>
<router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
      :id="team.id"
    ></teams-item>
  </ul>
 
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  //  watch: {
  //       $route: {
  //           immediate: true,
  //           handler(to) {
  //               document.title = to.meta.title || 'Some Default Title';
  //           }
  //       },
  //   }
 
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
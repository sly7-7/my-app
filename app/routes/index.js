import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let family = await this.store.find('family', 1);
    for (let i = 0; i < 10; i++) {
      console.time('loading people');
      await family.persons.reload();
      console.timeEnd('loading people');
    }
    return family;
  }
});

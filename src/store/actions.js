export default {
  fetchTodos: context => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Buy bread', completed: false },
          { id: 2, name: 'Go to meet with the friends', completed: true },
          { id: 3, name: 'Make some trainings', completed: true },
          { id: 4, name: 'Create new pet project', completed: false },
          { id: 5, name: 'Go to bed', completed: false }
          ]);
      }, 4000);
    })
    .then(data => {
      context.commit('FETCH_TODOS', data);
    });
  }
}

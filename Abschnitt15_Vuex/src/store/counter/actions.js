export default {
  increment(context) {
    setInterval(function () {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
};

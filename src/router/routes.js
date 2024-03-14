const Routes = [];
const metaRoutes = import.meta.glob('./modules/*.js', { eager: true });
for (let item in metaRoutes) {
  for (let key in metaRoutes[item]) {
    let res = metaRoutes[item][key]
    if (res.length !== 0) {
      res.forEach((r) => {
        let bool = Routes.every((o) => {
          return o.path !== r.path
        })
        if (bool) {
          Routes.push(...res)
        }
      })
    }
  }
}
export default Routes
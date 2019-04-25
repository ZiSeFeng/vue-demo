import navConfig from './nav.config.json'

const Index = () => import('../views/index');

const LOAD_MAP = {
  'manage': path => {
    // console.log(`../views/${path}.vue`, 44)
    return r => require.ensure([], () =>
      r(require(`../views/${path}.vue`)),
    'manage');
  },
  'data': path => {
    return r => require.ensure([], () =>
      r(require(`../views/${path}.vue`)),
    'data');
  },
};

const load = (lang, path) => {
    return LOAD_MAP[lang](path);
}

const registerRoute = (navConfig) => {
  let route = [];
  // console.log(navConfig, '11111');
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang].groups;
    let navFir = navConfig[lang];
    route.push({
      path: `/${ lang }`,
      // redirect: `/${ lang }`,
      children: [],
      meta: {
        keepAlive: true,
        lang: `${lang}`,
        title: `${navFir.meta.title}`
        // title: `${navs.meta.title}`
      },
      name: `${lang}`,
      component: Index
      // component: () => import(`../views/${lang}/index`)
      // component: () => import(`../views/manage/passport/setting/index`)
    });
    navs.forEach(nav => {
      let pagePath = lang + nav.path;
      if (nav.href) return;
      if (nav.list) {
        nav.list.forEach(list => {
          let path = pagePath + list.path;
          if (list.column) {
            list.column.forEach(column => {
              let columnPath = path + column.path
              addRoute(column, lang, columnPath, index);
            })
          }
           // else {
          //   path = path + '/index',
          //   addRoute(list, lang, path, index);
          // }
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, pagePath, index);
        });
      } else {
        addRoute(nav, lang, pagePath, index);
      }
    });
  });
  function addRoute(page, lang, path, index) {
    const component = load(lang, path)
    let child = {
      path: '/'+path,
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name)+ path,
      component: component.default || component
    };
    
    // console.log(`/${path}`, 'path 123456')

    route[index].children.push(child);
  }

  // console.log('route   1', route)
  return route;
};

let route = registerRoute(navConfig);

// const generateMiscRoutes = function(lang) {
//   let guideRoute = {
//     path: `/${ lang }/guide`, // 指南
//     redirect: `/${ lang }/guide/design`,
//     component: load(lang, 'guide'),
//     children: [{
//       path: 'design', // 设计原则
//       name: 'guide-design' + lang,
//       meta: { lang },
//       component: load(lang, 'design')
//     }, {
//       path: 'nav', // 导航
//       name: 'guide-nav' + lang,
//       meta: { lang },
//       component: load(lang, 'nav')
//     }]
//   };

//   let resourceRoute = {
//     path: `/${ lang }/resource`, // 资源
//     meta: { lang },
//     name: 'resource' + lang,
//     component: load(lang, 'resource')
//   };

//   let indexRoute = {
//     path: `/${ lang }`, // 首页
//     meta: { lang },
//     name: 'home' + lang,
//     component: load(lang, 'index')
//   };

//   return [guideRoute, resourceRoute, indexRoute];
// };

// langs.forEach(lang => {
//   route = route.concat(generateMiscRoutes(lang.lang));
// });

route.push({
  path: '/',
  name: 'index',
  meta: {
      title: '主页面',
      icon: 'el-icon-success',
      roles: ['admin', 'user'],
      keepAlive: true
  },
  component: Index
});

export default route;

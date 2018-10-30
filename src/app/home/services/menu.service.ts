import { Injectable } from '@angular/core';

export interface MenuItem {
  id: string;
  name: string;
  icon?: string;
  routerLink?: string;
  //packageName?: string;
  //examples?: string[];
}

export interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
  icon?: string;
  //summary?: string;
}

/* const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS = {
  [COMPONENTS]: 'Components',
  [CDK]: 'CDK',
}; */

const SIDENAV_MENU = 'sidenav_menu';

const MENUS: { [key: string]: Menu[] } = {

  [SIDENAV_MENU]: [
    {
      id: 'menu1',
      name: 'Analysis 数据分析',
      icon: 'core:baseline-dashboard',
      items: [
        { id: 'menu1-item1', name: 'Home', icon: 'core:baseline-apps', routerLink: 'mtk/home' }
      ]
    },
    {
      id: 'menu2',
      name: 'Scrap 生产报废',
      icon: 'core:baseline-dashboard',
      items: [
        { id: 'menu2-item1', name: 'Scrap Form 报废单', icon: 'core:baseline-apps', routerLink: 'mtk/scrap' }
      ]
    },

  
    {
      id: 'menu3',
      name: 'Management 系统管理',
      icon: 'core:baseline-dashboard',
      items: [
        { id: 'menu3-item1', name: 'User 用户管理', icon: 'core:baseline-apps', routerLink: 'admin/users' },
        { id: 'menu3-item2', name: 'Group 组管理', icon: 'core:baseline-apps', routerLink: 'admin/group' },
        { id: 'menu3-item3', name: 'Role 角色管理', icon: 'core:baseline-apps', routerLink: 'admin/users' },
        { id: 'menu3-item4', name: 'Permission 授权管理', icon: 'core:baseline-apps', routerLink: 'admin/users' }
      ]
    },
    {
      id: 'menu100',
      name: 'Demo',
      icon: 'core:baseline-dashboard',
      items: [
        { id: 'menu100-item1', name: 'Style', icon: 'core:baseline-apps', routerLink: 'demo/style' },
        { id: 'menu100-item2', name: 'Icon', icon: 'core:baseline-apps', routerLink: 'demo/icon' },
        { id: 'menu100-item3', name: 'Component', icon: 'core:baseline-apps', routerLink: 'demo/component' },
        { id: 'menu100-item4', name: 'theme', icon: 'core:baseline-apps', routerLink: 'demo/theme' },
        { id: 'menu100-item5', name: 'Auth', icon: 'core:baseline-apps', routerLink: 'demo/auth' },
        { id: 'menu100-item6', name: 'Dashboard', icon: 'core:baseline-apps', routerLink: 'default' },
        { id: 'menu100-item7', name: 'Regular Table', icon: 'core:baseline-apps', routerLink: 'demo-feature/regularTable' },
        { id: 'menu100-item8', name: '客户管理', icon: 'core:baseline-apps', routerLink: 'customer' },
        { id: 'menu100-item9', name: '数据表', icon: 'core:baseline-apps', routerLink: 'product' },
        { id: 'menu100-item10', name: '大数据分页', icon: 'core:baseline-apps', routerLink: 'largedatatable' },
        { id: 'menu100-item11', name: 'Item 4', icon: 'core:baseline-apps', routerLink: 'test' }

      ]
    },
  ]
};

/* 
 for (let category of MENUS[COMPONENTS]) {
  for (let doc of category.items) {
    doc.packageName = 'material';
  }
} 
*/

/* const ALL_COMPONENTS = MENUS[COMPONENTS].reduce((result, menu) => result.concat(menu.items), []);
const ALL_CDK = MENUS[CDK].reduce((result, cdk) => result.concat(cdk.items), []);
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);
const ALL_CATEGORIES = MENUS[COMPONENTS].concat(MENUS[CDK]); */

@Injectable()
export class MenuService {
  getMenu(menuName: string): Menu[] {
    return MENUS[menuName];
  }

  getItems(menuName: string): MenuItem[] {
    /*  if (section === COMPONENTS) {
       return ALL_COMPONENTS;
     }
     if (section === CDK) {
       return ALL_CDK;
     }
     return []; */

    return MENUS[menuName].reduce((result, menu) => result.concat(menu.items), []);
  }

  getItemById(id: string, menuName: string): MenuItem {
    //const sectionLookup = section == 'cdk' ? 'cdk' : 'material';
    //return ALL_DOCS.find(doc => doc.id === id && doc.packageName == sectionLookup);
    const items = MENUS[menuName].reduce((result, menu) => result.concat(menu.items), []);
    return items.find(item => item.id === id);
  }

  /* getCategoryById(id: string): Menu {
    return ALL_CATEGORIES.find(c => c.id == id);
  } */
}

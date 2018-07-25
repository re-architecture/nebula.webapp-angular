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
      name: 'Demo-Feature',
      icon: 'dashboard',
      items: [
        { id: 'menu1-item1', name: 'Dashboard', icon: 'widgets', routerLink: 'default' },
        { id: 'menu1-item2', name: 'Regular Table', icon: 'widgets', routerLink: 'demo-feature/regularTable' },
        { id: 'menu1-item3', name: '客户管理', icon: 'view_list', routerLink: 'customer' },
        { id: 'menu1-item4', name: '数据表', icon: 'view_list', routerLink: 'product' },
        { id: 'menu1-item5', name: '大数据分页', icon: 'reorder', routerLink: 'largedatatable' },
        { id: 'menu1-item6', name: 'Item 4', icon: 'drafts', routerLink: 'test' }

      ]
    },

    {
      id: 'menu2',
      name: 'Analysis 生产数据分析',
      icon: 'lock',
      items: [
        { id: 'menu2-item1', name: 'Home', icon: 'account_box', routerLink: 'analysis/home' }
      ]
    },
    {
      id: 'menu3',
      name: 'Management 系统管理',
      icon: 'lock',
      items: [
        { id: 'menu3-item1', name: 'User 用户管理', icon: 'account_box', routerLink: 'admin/users' },
        { id: 'menu3-item2', name: 'Group 组管理', icon: 'account_box', routerLink: 'admin/users' },
        { id: 'menu3-item3', name: 'Role 角色管理', icon: 'account_box', routerLink: 'admin/users' },
        { id: 'menu3-item4', name: 'Permission 授权管理', icon: 'account_box', routerLink: 'admin/users' }
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

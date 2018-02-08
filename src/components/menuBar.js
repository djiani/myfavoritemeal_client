import React from 'react';
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu';
import 'rc-menu/assets/index.css';
//import animate from 'css-animation';
import './menuBar.css';


function handleSelect(info) {
  console.log(info);
  console.log(`selected ${info.key}`);
}

/*const animation = {
  enter(node, done) {
    let height;
    return animate(node, 'rc-menu-collapse', {
      start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active() {
        node.style.height = `${height}px`;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },

appear() {
    return this.enter.apply(this, arguments);
  },

  leave(node, done) {
    return animate(node, 'rc-menu-collapse', {
      start() {
        node.style.height = `${node.offsetHeight}px`;
      },
      active() {
        node.style.height = 0;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },
};
*/

function onOpenChange(value) {
  console.log('onOpenChange', value);
}

const commonMenu = (
  <Menu onSelect={handleSelect} onOpenChange={onOpenChange}>    
    <MenuItem key="1">login</MenuItem>
    <MenuItem key="2">register</MenuItem>
    <MenuItem key="3"></MenuItem>
    <SubMenu title={<span>Account</span>} key="5">
      <MenuItem key="1-1">profile</MenuItem>
      <MenuItem key="1-2">log Out</MenuItem>
    </SubMenu>
  </Menu>
);

const horizontalMenu2 = React.cloneElement(commonMenu, {
    mode: 'horizontal',
    openAnimation: 'slide-up',
    triggerSubMenuAction: 'click',
  });

export function MenuBar(props) {
  return (
    <div className="horizontal_menu">{horizontalMenu2}</div>
  );
}

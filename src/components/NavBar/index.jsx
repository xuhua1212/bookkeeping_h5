/*
 * @Author: xuhua
 * @Date: 2023-02-21 15:39:40
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-21 17:12:14
 * @FilePath: /bookkeeping_h5/src/components/NavBar/index.jsx
 * @Description: 底部导航栏
 */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TabBar } from "zarm";
import { useNavigate } from "react-router-dom";
import s from "./style.module.less";
import CustomIcon from "../CustomIcon";
const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState("/");
  const navigateTo = useNavigate();

  const changeTab = (path) => {
    setActiveKey(path);
    navigateTo(path);
  };

  return (
    <TabBar className={s.tab} visible={showNav} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item itemKey="/" title="账单" icon={<CustomIcon type="icon-notebook2" />} activeIcon={<CustomIcon type="icon-xiaoxiong" />} />
      <TabBar.Item itemKey="/data" title="统计" icon={<CustomIcon type="icon-checklist" />} activeIcon={<CustomIcon type="icon-liwu" />} />
      <TabBar.Item itemKey="/user" title="我的" icon={<CustomIcon type="icon-talk" />} activeIcon={<CustomIcon type="icon-xiaolian" />} />
    </TabBar>
  );
};

NavBar.propTypes = {
  showNav: PropTypes.bool,
};

export default NavBar;

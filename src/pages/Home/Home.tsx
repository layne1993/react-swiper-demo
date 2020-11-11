import React, { FC, memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Menu } from 'antd';

interface HomeProps {
  route?: RouteConfig;
  location?: any 
}

const Rank: FC<HomeProps> = props => {
  const { route, location } = props;
  const routes = route as RouteConfig;
  const [current, setCurrent] = useState('basic');

  useEffect(() => {
    let { pathname } = location;
    if (pathname === '/') pathname = '/basic';
    setCurrent(pathname.replace('/', ''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e:any) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="basic">
          <NavLink to="/basic">
            基本用法
          </NavLink>
        </Menu.Item>
        <Menu.Item key="autoplay">
          <NavLink to="/autoplay">
            自动轮播
          </NavLink>
        </Menu.Item>
        <Menu.Item key="withTool">
          <NavLink to="/withTool">
            带工具轮播
          </NavLink>
        </Menu.Item>
        <Menu.Item key="withRender">
          <NavLink to="/withRender">
            slider配render函数
          </NavLink>
        </Menu.Item>
        <Menu.Item key="slots">
          <NavLink to="/slots">
            slots占位符
          </NavLink>
        </Menu.Item>
        <Menu.Item key="virtual">
          <NavLink to="/virtual">
            虚拟slide
          </NavLink>
        </Menu.Item>
        <Menu.Item key="controll">
          <NavLink to="/controll">
            双向绑定
          </NavLink>
        </Menu.Item>
        <Menu.Item key="thumb">
          <NavLink to="/thumb">
            缩略图
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="basic-container">
        {renderRoutes(routes.routes)}
      </div>
    </>
  )
}

export default memo(Rank);

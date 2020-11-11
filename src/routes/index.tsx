import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Basic from '../pages/Basic';
import Autoplay from '../pages/Autoplay';
import WithTool from '../pages/WithTool';
import WithRender from '../pages/WithRender';
import Slots from '../pages/Slots';
import Virtual from '../pages/Virtual';
import ControllSwiper from '../pages/ControllSwiper';
import ThumbSwiper from '../pages/ThumbSwiper';

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={"/basic"}/>
        )
      },
      {
        path: "/basic",
        component: Basic
      },
      {
        path: "/autoplay",
        component: Autoplay
      },
      {
        path: "/withTool",
        component: WithTool
      },
      {
        path: "/withRender",
        component: WithRender
      },
      {
        path: "/slots",
        component: Slots
      },
      {
        path: "/virtual",
        component: Virtual
      },
      {
        path: "/controll",
        component: ControllSwiper
      },
      {
        path: "/thumb",
        component: ThumbSwiper
      }
    ]
  }
];

export default routes;

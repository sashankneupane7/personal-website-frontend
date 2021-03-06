import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const generatePage = page => {
  const component = (page) => require(`../pages/${page}`).default
  try {
    if (page === "register") {
      return React.createElement(component("home"))
    } else {
      return React.createElement(component(page))
    }
  } catch (err) {
    console.warn(err)
    return React.createElement(()=> <></>)
  }
}

export default function PageRenderer () {
  const {
    params: { page }
  } = useRouteMatch()
  return generatePage(page)
}
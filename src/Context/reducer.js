import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).data.user
  : '';
let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).token
  : '';
let school = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).data.rol != 'superadmin'
  ? JSON.parse(localStorage.getItem('currentUser')).data.school_id._id
  : '';
let rol = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).data.rol
  : '';
let l_name = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).info.l_name
  : '';
let f_name = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).info.f_name
  : '';

let rol_id = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).info._id
  : '';

let user_id = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).data._id
  : '';

  let profile_picture = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).data.profile_picture
  : '';

let url = localStorage.getItem('currentUser')&& JSON.parse(localStorage.getItem('currentUser')).data.rol != 'superadmin'
  ? JSON.parse(localStorage.getItem('currentUser')).data.school_id.url
  : '';
let school_name = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).data.rol != 'superadmin'
  ? JSON.parse(localStorage.getItem('currentUser')).data.school_id.name
  : '';
let t_doc = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).info.t_doc
  : '';

let cord = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).info.coord
  : false;

let year = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).year
  : '';



export const initialState = {
  t_doc: '' || t_doc,
  user: '' || user,
  rol: '' || rol,
  l_name: '' || l_name,
  f_name: '' || f_name,
  token: '' || token,
  school: '' || school,
  rol_id: '' || rol_id,
  user_id: '' || user_id,
  school_name: '' || school_name,
  profile_picture: '' || profile_picture,
  loading: false,
  url: '' || url,
  year: '' || year,
  cord: '' || cord,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.data,
        user,
        token: action.payload.token,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        token: ''
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

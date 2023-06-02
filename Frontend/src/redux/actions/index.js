import axios from 'axios';

import { ADDNEW_Task, GETALL_Task, TOGGLE_Task, UPDATE_Task, DELETE_Task, TOGGLE_TAB } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTask = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/tasks`, { data });

        dispatch({ type: ADDNEW_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTask API ', error.message);
    }
}

export const getAllTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/tasks`);

        dispatch({ type: GETALL_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTasks API ', error.message);
    }
}

export const toggleTask = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/tasks/${id}`);

        dispatch({ type: TOGGLE_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTasks API ', error.message);
    }
}

export const updateTask = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/tasks/${id}`, { data });

        dispatch({ type: UPDATE_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTask API ', error.message);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/tasks/${id}`);

        dispatch({ type: DELETE_Task , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTask API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}

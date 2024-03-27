import { createSlice, nanoid } from '@reduxjs/toolkit'

const TabSlice = createSlice({
    name: 'tabmenu',
    initialState:
    {
        title: [],
        component: {},
    },
    reducers: {

        ViewTab: (state, action) => {
            const findTitle = state.title.findIndex((title, index) => title.name === action.payload.name);
            state.component = state.title[findTitle].name;
        },
        AddTab: (state, action) => {
            const existingIndex = state.title.findIndex((title, index) => title.name === action.payload.name);

            //findIndex ley index vetayena vaney -1 dinxa
            if (existingIndex === -1) {
                state.title = [...state.title, { name: action.payload.name, id: action.payload.id }];
                const currentTitle = state.title.filter((title, index) => title.name === action.payload.name);
                let firstObject = currentTitle.find(obj => obj.name === action.payload.name);
                state.component = firstObject.name
            }
        },
        RemoveTab: (state, action) => {
            const removedIndex = action.payload;
            if (state.title.length > 1) {
                let newActiveTab;
                if (removedIndex === 0) {
                    //first tab removed hunda
                    newActiveTab = 1;
                } else {
                    //bichaa ko tab removed hunda
                    newActiveTab = removedIndex > 0 ? removedIndex - 1 : 0;
                    //last tab removed hunda
                    if (removedIndex === state.title.length - 1) {
                        newActiveTab = removedIndex - 1;
                    }
                }
                state.component = state.title[newActiveTab].name;
            } else {
                state.component = ''; // euta matra tab baki huda
            }
            // Remove the tab from the tabs array
            state.title.splice(removedIndex, 1);
        }
    }
})
export const { AddTab, RemoveTab, ViewTab } = TabSlice.actions
export default TabSlice
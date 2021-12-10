import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFeed } from '../../models/IFeed';
import deleteFeed from '../async-actions/deleteFeed';
import getDataFromApi from '../async-actions/getAllContentFromApi';
import getContentFromRssSource from '../async-actions/getContentFromRssSource';
import { ApiContentData, ApiFeedData, FeedsState } from '../types';

import { logoutUser } from './userSlice';

const initialState: FeedsState = {
	entities: {},
	ids: [],
	activeFeedId: '',
};

const feedsSlice = createSlice({
	name: 'feeds',
	initialState,
	reducers: {
		updateActiveFeed: (state, action: PayloadAction<string>) => {
			state.activeFeedId = action.payload;
		},
		updateFeedsOrder: (state, action: PayloadAction<string[]>) => {
			state.ids = [...action.payload];
		},
	},
	extraReducers: {
		[getDataFromApi.fulfilled.type]: (
			state,
			action: PayloadAction<ApiContentData>
		) => {
			const { feeds } = action.payload;

			feeds.forEach((feed: IFeed) => {
				state.entities[feed._id] = feed;
				state.ids = [feed._id, ...state.ids];
				state.activeFeedId = feed._id;
			});
		},
		[getContentFromRssSource.fulfilled.type]: (
			state,
			action: PayloadAction<ApiFeedData>
		) => {
			const { feed } = action.payload;

			state.entities[feed._id] = feed;
			state.ids = [feed._id, ...state.ids];
			state.activeFeedId = feed._id;
		},
		[deleteFeed.fulfilled.type]: (state, action: PayloadAction<string>) => {
			const newFeedIDs = state.ids.filter((id) => id !== action.payload);

			if (state.activeFeedId === action.payload) {
				state.activeFeedId = newFeedIDs[0] ?? '';
			}

			delete state.entities[action.payload];
			state.ids = newFeedIDs;
		},
		[logoutUser.type]: (state) => {
			state.entities = {};
			state.ids = [];
			state.activeFeedId = '';
		},
	},
});

export const { updateActiveFeed, updateFeedsOrder } = feedsSlice.actions;

export default feedsSlice.reducer;

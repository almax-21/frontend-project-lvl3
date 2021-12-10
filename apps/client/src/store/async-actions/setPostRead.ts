import { createAsyncThunk } from '@reduxjs/toolkit';

import PostService from '../../services/PostService';
import { PostIdData } from '../../types';

const setPostRead = createAsyncThunk(
	'posts/setPostRead',
	async (postIDs: PostIdData, thunkAPI) => {
		try {
			const { _id, feedId } = postIDs;

			await PostService.setPostRead(_id);

			return { _id, feedId };
		} catch (err) {
			const message = (err as Error).message;

			console.error(message);
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export default setPostRead;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

import { IPost } from '../../models/IPost';
import ProxyService from '../../services/ProxyService';
import { FeedUrlData } from '../../types';
import { getDiffBy } from '../../utils/collection';
import parseRSS from '../../utils/parser';
import { POST_STATES, RootState } from '../types';

const updatePostsData = createAsyncThunk(
	'content/updatePostsData',
	async (urlData: FeedUrlData, thunkAPI) => {
		try {
			const { posts } = thunkAPI.getState() as unknown as RootState;
			const { url, feedId } = urlData;

			const response = await ProxyService.getXML(url);
			const serializedContent = response.data.contents;

			const { parsedPosts } = parseRSS(serializedContent);

			const differencedPosts = getDiffBy(
				parsedPosts,
				posts.byFeedId[feedId],
				'title'
			);

			const newPosts: IPost[] = differencedPosts.map((post) => ({
				...post,
				feedId,
				id: uuid4(),
				state: POST_STATES.UNREAD,
			}));

			return {
				feedId,
				newPosts,
			};
		} catch (err) {
			const message = (err as Error).message;

			console.error(message);
			return thunkAPI.rejectWithValue(message);
		}
	},
	{
		condition: (urlData, { getState }) => {
			const { rssMeta } = getState() as any;
			const dispatchedFeedId = urlData.feedId;

			const isStillExist = rssMeta.urlDataset.some(
				({ feedId }: FeedUrlData) => feedId === dispatchedFeedId
			);

			return isStillExist;
		},
	}
);

export default updatePostsData;

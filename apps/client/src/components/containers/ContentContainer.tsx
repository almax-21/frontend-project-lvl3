import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import useTypedSelector from '../../hooks/redux/useTypedSelector';
import useAutoUpdate from '../../hooks/useAutoUpdate';
import { MESSAGES } from '../../i18n/types';
import { selectFeedsWithCounter } from '../../store/selectors/contentSelectors';
import { selectRssMeta } from '../../store/selectors/rssMetaSelectors';
import FeedContent from '../feeds';
import PostContent from '../posts';
import ContentSkeleton from '../UI/ContentSkeleton';

const UPDATE_PERIOD_MS = 60000;

const ContentContainer: FC = () => {
	const feeds = useTypedSelector(selectFeedsWithCounter);
	const { isLoadingFromApi, urlDataset } = useTypedSelector(selectRssMeta);

	useAutoUpdate(urlDataset, UPDATE_PERIOD_MS);

	if (isLoadingFromApi) {
		return (
			<Container fluid className="container-xxl p-5">
				<Row>
					<ContentSkeleton />
				</Row>
			</Container>
		);
	}

	return (
		<Container fluid className="container-xxl p-5">
			{feeds.length === 0 ? (
				<Row>
					<h2 className="display-5 text-center">
						<FormattedMessage id={MESSAGES.NO_FEEDS} />
					</h2>
				</Row>
			) : (
				<Row className="flex-wrap-reverse">
					<Col as="section" className="mb-5">
						<PostContent />
					</Col>
					<Col as="section" className="mb-5">
						<FeedContent />
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default ContentContainer;

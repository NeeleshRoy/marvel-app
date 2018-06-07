import React from 'react';

const getCarouselData = (items) => (
	<div>
		{items.map((item) => (
			<div key={item.resourceURI}>
				<a href={item.resourceURI}> {item.name}</a>
			</div>
		))}
	</div>
);

export default function Single(props) {
	return (
		<div>
			<img src={`${props[0].thumbnail.path}.${props[0].thumbnail.extension}`} alt="" />
			<div>Name: {props[0].name}</div>
			<div>
				Detailed Insights:
				<ul>
					{props[0].urls.map((item) => (
						<li key={item.url}>
							<a href={item.url} target="_blank">
								{item.type}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div>Description: {props[0].description !== '' ? props[0].description : 'N/A'}</div>
			<div>Series: {props[0].series.available > 0 ? getCarouselData(props[0].series.items) : 'N/A'}</div>
			<div>Stories: {props[0].stories.available > 0 ? getCarouselData(props[0].stories.items) : 'N/A'}</div>
		</div>
	);
}

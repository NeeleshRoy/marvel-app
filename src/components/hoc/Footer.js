import React from 'react';
import { MarvelFooter, Attribution } from '../../styles/footer.styles';

export default function Footer() {
	return (
		<MarvelFooter>
			<Attribution target="_blank" to="http://marvel.com">
				Data provided by Marvel. © 2018 MARVEL
			</Attribution>
		</MarvelFooter>
	);
}

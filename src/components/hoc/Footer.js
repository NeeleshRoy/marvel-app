import React from 'react';
import { Link } from 'react-router-dom';
import { MarvelFooter, Developer, Attribution } from '../../styles/footer.styles';

export default function Footer() {
	return (
		<MarvelFooter>
			<Developer>
				<Link target="_blank" to="https://github.com/NeeleshRoy/">
					Dev: Neelesh Roy
				</Link>
			</Developer>
			<Attribution target="_blank" to="http://marvel.com">
				Data provided by Marvel. © 2018 MARVEL
			</Attribution>
		</MarvelFooter>
	);
}

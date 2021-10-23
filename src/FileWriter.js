/*
Copyright - 2017 2021 - wwwouaiebe - Contact: https://www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
/*
Changes:
	- v1.0.0:
		- created
Doc reviewed 20211021
*/

import fs from 'fs';
import theConfig from './Config.js';

/**
Write a file, creating before all the needed directories.
*/

class FileWriter {

	#currentDir = '';

	constructor ( ) {
		Object.freeze ( this );
	}

	#createDirs ( dirs ) {
		this.#currentDir = theConfig.docDir;

		dirs.forEach (
			dir => {
				this.#currentDir += dir + '/';
				try {
					if ( ! fs.existsSync ( this.#currentDir ) ) {
						fs.mkdirSync ( this.#currentDir );
					}
				}
				catch ( err ) {
					console.error ( err );
				}
			}
		);

	}

	write ( dirs, fileName, fileContent ) {
		this.#createDirs ( dirs );
		fs.writeFileSync ( this.#currentDir + fileName, fileContent );
	}
}

export default FileWriter;

/*
@------------------------------------------------------------------------------------------------------------------------------

end of file

@------------------------------------------------------------------------------------------------------------------------------
*/
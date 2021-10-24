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

import CommentDocBuilder from './CommentDocBuilder.js';
import { VariableDoc } from './Docs.js';

/**
Build the doc object for a variable
*/

class VariableDocBuilder {

	constructor ( ) {
		Object.freeze ( this );
	}

	build ( variableDeclarationNode, fileName ) {

		const variableDoc = new VariableDoc ( );
		variableDoc.name = variableDeclarationNode.declarations [ 0 ].id.name;
		variableDoc.kind = variableDeclarationNode?.kind;
		variableDoc.file = fileName;
		variableDoc.rootPath = '';
		variableDoc.line = variableDeclarationNode.loc.start.line;

		if ( variableDeclarationNode.leadingComments ) {
			const comments = [];
			variableDeclarationNode.leadingComments.forEach (
				comment => { comments.push ( comment?.value ); }
			);
			variableDoc.commentsDoc = new CommentDocBuilder ( ).build ( comments );
		}

		return Object.freeze ( variableDoc );
	}
}

export default VariableDocBuilder;

/*
@------------------------------------------------------------------------------------------------------------------------------

end of file

@------------------------------------------------------------------------------------------------------------------------------
*/
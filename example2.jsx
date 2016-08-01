import React from 'react';
import ReactDOM from 'react-dom';

export default class Example2 extends React.Component {
	
	render(){
		const propHeadings = this.props.headings;
		console.log('aaaaa:' + propHeadings);
		return (
			<div>
				<table>
				
					{this.props.headings.map(function(heading){
						return <th>{heading}</th>;
					})}

					{this.props.data.map(function(row){
						return(<tr>
						            <td>{row.When}</td>
						            <td>{row.Who}</td>
						            <td>{row.Description}</td>
						          </tr>)
					})}
				
				 </table>

			</div>
		);
	}
}
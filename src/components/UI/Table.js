import React from "react";
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classesd from './Table.css';
const tableUi = (props) => {
    let classNames = [classes['table'], classes['table-hover']];
    const data = props.results.map((student) => {
        let td = [];
        for (let i in props.headers) {
            td.push({'value':student[i], 'key': i});
            
        }
        const tdAll = td.map((item, i) => {
            // debugger;
            let specialClass = [];
            if (typeof (item['value']) !== "object") {
                if(props.specialTableType === "student") {
                    debugger;
                        if(item.key === 'name' && student['maxMarks']) {
                            specialClass.push(classesd['best-result'])   
                        }
                        if(item.key === 'name' && student['passed'] === "Fail") {
                            specialClass.push(classesd['failed'])   
                        }
                }
                return (<td className={specialClass.join(' ')} key={i}>{item['value']}</td>);
            }
            
        })
        return (
            <tr key={student[Object.keys(props.headers)[0]]}>
                {tdAll}
            </tr>
        )
    });
    let tdHeaders = [];
        for (let i in props.headers) {
            tdHeaders.push(props.headers[i]);
        }
    const headers = tdHeaders.map((item, i)=>{
        // debugger;
        if(typeof(item) !== "object") {
        return  (<th  key={i+item}>{item}</th>);
    }
    })
    return (<table className={classNames.join(" ")}>
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
        <tbody>
            {data}
        </tbody>
    </table>
    )
};
export default tableUi;
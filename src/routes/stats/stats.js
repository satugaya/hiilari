import styles from './stats.module.scss';
import { Cell, Line, LineChart, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer, LabelList, CartesianGrid, Label, Pie, PieChart } from 'recharts';
import randomColor from 'randomcolor';

function Stats(props) {

    const linedata = props.data.map(item => ({date: new Date(item.date).getTime(), bloodsugar: item.bloodsugar}));   

    //pienennetään taulukkoa
    const reducer = (groupedData, item) => {
        const index = groupedData.findIndex( arrayItem => arrayItem.type === item.type );
        if (index >=0) {
            groupedData[index].bloodsugar = groupedData[index].bloodsugar = item.bloodsugar;}
            else {
                groupedData.push({type: item.type, amount: item.bloodsugar});
            }
            return groupedData;
    }

    const piedata = props.data.reduce(reducer, []); //koostaa taulukon jossa on tyypeittäin kokonaissummat
    
    const piecolor = randomColor({count: piedata.length, seed: "hiilari"});
    
    return (
        <div className={styles.stats}>
            <h2>Tilastot</h2>
            <h3>Hiilarit aikajanalla</h3>

            <ResponsiveContainer width={"100%"} height={360} >
            <LineChart data={linedata} margin={{top: 20, left: 20, right: 20, bottom: 10}}  >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" 
                        dataKey="date" 
                        domain={["dataMin", "dataMax"]} 
                        scale="time" 
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-fi")} />
                <YAxis>
                    <Label value="Hiilihydraatit"
                        position="left"
                        angle={-90}
                        style={{ textAnchor:"middle"}} />
                </YAxis>
                <Line dataKey="bloodsugar" name="verensokeri" unit="" />
                <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-fi")} />
            </LineChart>
            </ResponsiveContainer>

            <h3>Hiilarit ruoittain</h3>

            <ResponsiveContainer width={"100%"} height={360} >
                <PieChart>
                    <Pie data={piedata} dataKey="carbs"  nameKey="type" >
                        <LabelList dataKey="carbs" position="inside" />
                    </Pie>
                    <Legend />
                    <Tooltip formatter={value => value + " €"} />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
}


export default Stats;
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineChart({ semesterData }) {

    var semester = []
    var gpa = []

    semesterData.forEach((v) => {
        semester.push(v[0])
        gpa.push(v[1])
    })

    const graphData = {
        labels: semester,
        datasets: [
            {
                label: 'GPA' ,
                data: gpa,
            },
        ],
    };

    return(
        <Container>
            <h3>GPA Progress</h3>
            <Line 
                data={graphData}
                options={
                    {mainAspectRatio: false, 
                    scales:{y:{beginAtZero: false}}}
                }
            />
        </Container>
    )

}

export default LineChart;
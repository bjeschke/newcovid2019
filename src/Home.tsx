import React from 'react';
import DataTable from 'react-data-table-component';

interface states {
    error:any,items: any,isLoaded:any
}

function formatNr(x:any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let row:any;

const columnsXL = [
    { name: 'Countries', selector: 'name', sortable: true },
    { name: 'Infected', sortable: true, style:{color:'#c6c75b'}, cell: (row:any) => <div>{formatNr(row.totalCases)}</div> },
    { name: 'Changes Today', sortable: true,style:{color:'#c6c75b'}, cell: (row:any) => <div>↑ {formatNr(row.totalCases - row.totalCases24h)}<br /> ({(100-row.totalCases24h/row.totalCases*100).toFixed(2)}%)</div> },
    { name: 'Deaths', sortable: true, style:{color:'#F65164'}, cell: (row:any) => <div>{formatNr(row.totalDeaths)}</div> },
    { name: 'Changes Today', sortable: true,style:{color:'#F65164'}, cell: (row:any) => <div>↑ {formatNr(row.totalDeaths - row.totalDeaths24h)}<br /> ({(100-row.totalDeaths24h/row.totalDeaths*100).toFixed(2)}%)</div>, },
    { name: 'Serious Cases', sortable: true, style:{color: 'rgb(248, 245, 64)'}, cell: (row:any) => <div>{formatNr(row.seriousCases)}</div>},
    { name: 'Recovered', sortable: true, style:{color:'rgb(68, 155, 226)'}, cell: (row:any) => <div>{formatNr(row.totalRecovered)}</div>}
];

const columnsSM = [
    { name: 'Countries', selector: 'name', sortable: true },
    { name: 'Infected', sortable: false, style:{color:'#c6c75b'}, cell: (row:any) => <div>{formatNr(row.totalCases)}</div> },
    { name: 'Deaths', sortable: false, style:{color:'#F65164'}, cell: (row:any) => <div>{formatNr(row.totalDeaths)}</div> },
    { name: 'Recovered', sortable: false, style:{color:'rgb(68, 155, 226)'}, cell: (row:any) => <div>{formatNr(row.totalRecovered)}</div> }
];



class Home extends React.Component<{}, states > {

    constructor(props:any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        document.title = "NewCOIVID2019 Statistics";
        fetch("https://exchange.vcoud.com/coronavirus/latest")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded,items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className='center'>Loading Data....</div>;
        } else {
            return (
                <div id="content mb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-lg-3 text-center">
                                <div className="container pt-3 mb-3">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h2>nCovid19 Overview</h2>
                                            <strong>Total Confirmed Cases:</strong>
                                        </div>

                                        <div className="col-12 text-center">
                                            <span className="total_cases">{ formatNr(items[0].totalCases) }</span>
                                        </div>
                                        <div className="col-12 text-center">
                                            <strong>Total Deceased:</strong>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="total_deceased">{ formatNr(items[0].totalDeaths) }</span>
                                        </div>
                                        <div className="col-12 text-center">
                                            <strong>Total Serious:</strong>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="total_serious">{ formatNr(items[0].seriousCases) }</span>
                                        </div>
                                        <div className="col-12 text-center">
                                            <strong>Total Recovered:</strong>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="total_recovered">{ formatNr(items[0].totalRecovered) }</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg-9">
                                <div className="container pt-3 mb-3">
                                    <div className="row">
                                        <div className="col-12 cont_table">
                                            <h1>nCov2019 - Statistics</h1>
                                            <p>Countries and Regions where Covid19 Coronavirus has spread. Last
                                                updated: <strong
                                                    id="updatedtime"></strong></p>
                                            <div className="table d-none d-lg-block">
                                                <DataTable columns={columnsXL} data={items} />
                                            </div>
                                            <div className="table d-block d-lg-none">
                                                <DataTable columns={columnsSM} data={items} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}



export default Home;

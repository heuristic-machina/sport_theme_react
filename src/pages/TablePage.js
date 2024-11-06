import Table from '../components/Table';

function TablePage() {
    const data = [
        { id: 1, name: 'Florida', mascot: 'Seminoles', score: 21 },
        { id: 2, name: 'Texas', mascot: 'LongHorn', score: 24 },
        { id: 3, name: 'Murray', mascot: 'Racers', score: 0 },
        { id: 4, name: 'Missouri', mascot: 'Boomer', score: 51 },
    ];

    const config = [
        {
            label: 'Team',
            render: (team) => team.name},
        { 
            label: 'Mascot', 
            render: (team) => team.mascot},
        {
            label: 'Score',
            render: (team) => team.score},
    ];

const keyFn = (team) => {
    return team.name;
};

    return (<div>
        <Table data={data} config={config} keyFn={keyFn} />
    </div>)
};

export default TablePage;


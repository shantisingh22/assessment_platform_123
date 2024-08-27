import "./Filter-box.css";
const Filter_box = () => {
    return (

        <div className="Filter_box12">
            <div className="filters">
                <div className="headingBox">FILTERS</div>
                <div className="filter-box1">
                    <div className="filter-label">Question Score</div>
                    <div className="filterBoxmidd">
                        <div className="filterbox1">All</div>
                        <div className="filterbox2">10</div>
                        <div className="filterbox3">15</div>
                        <div className="filterbox4">20</div>
                    </div>
                </div>
                <div className="filter-box1">
                    <div className="filter-label1">Questions Attempted</div>
                    <div className="filterBoxmidd">
                        <div className="filter-boxes1">All (40)</div>
                        <div className="filter-boxes2">Attempted (3)</div>
                        <div className="filter-boxes3">Unattempted (37)</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Filter_box;
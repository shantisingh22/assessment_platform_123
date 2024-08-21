const Filter_box = () => {
    return (
        <>
            <div className="Filter-box">Filters</div>
            <div className="filters">
                <div className="filter-box1">
                    <div className="filter-label">Question Score</div>
                    <div className="filter-buttons">
                        <div className="filter-boxes">All</div>
                        <div className="filter-boxes">10</div>
                        <div className="filter-boxes">15</div>
                        <div className="filter-boxes">20</div>
                    </div>
                </div>
                <div className="filter-box1">
                    <div className="filter-label1">Questions Attempted</div>
                    <div className="filter-buttons">
                        <div className="filter-boxes">All (40)</div>
                        <div className="filter-boxes">Attempted (3)</div>
                        <div className="filter-boxes">Unattempted (37)</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter_box;
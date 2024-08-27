import './Pagination.css';
const Pagination = () => {
  return (
    <div className='paginationBox'>
      <div className="pagination">
      <div className="pagination_button">&lt;</div>
        <div className="pageDiv1">1</div>
        <div className="pageDiv2">2</div>
        <div className="pageDiv">...</div>
        <div className="pageDiv3">3</div>
        <div className="pageDiv4">4</div>
        <div className="pageDiv5">5</div>
        <div className="pageDiv">...</div>
        <div className="pageDiv6">6</div>
        <div className="pageDiv7">7</div>
        <div className="pageDiv8">8</div>
        <div className="pagination_button">&gt;</div>
      </div>
    </div>
  );
};
export default Pagination;


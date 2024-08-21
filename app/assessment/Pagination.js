import './style.css';
const Pagination = () => {
  return (
    <div className="pagination">
      <span className="pagination__button" disabled>&lt;</span>
      <span className="page-btn">1</span>
      <span className="page-btn">2</span>
      <span className="page-btn">3</span>
      <span className="page-btn">4</span>
      <span className="page-btn">5</span>
      <span className="page-btn">6</span>
      <span className="page-btn">7</span>
      <span className="page-btn">8</span>
      <span className="pagination__button">&gt;</span>
    </div>
  );
};
export default Pagination;


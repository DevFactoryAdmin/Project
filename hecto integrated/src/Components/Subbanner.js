import "./Subbanner.css";

function Subbanner({ title }) {
  return (
    <>
      <div className="subbanner">
        <div className="subbanner_title">
          <label> {title}</label>
        </div>
        
      </div>
    </>
  );
}
export default Subbanner;

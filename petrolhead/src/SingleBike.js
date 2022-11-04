const App = ({ img, text }) => {
  return (
    <div className="singlebike">
      <div className="singlebike_image">
        {" "}
        <img src={img} />{" "}
      </div>
      <label>{text}</label>
    </div>
  );
};
export default App;

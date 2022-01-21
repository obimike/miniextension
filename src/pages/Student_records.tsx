import Card from "../components/Card";

const Student_records = () => {
  return (
    <>
      <div className="logout">
        <input type="submit" value="Logout" />
      </div>
      <div className="App">
        <Card class="CSC 901" students="Love, Joy, Peace" />
      </div>
    </>
  );
};

export default Student_records;

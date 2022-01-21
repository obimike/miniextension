interface Props {
  class: string;
  students: string;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="boldText">Name</div>
      <div>{props.class}</div>
      <div className="boldText">Students</div>
      <div>{props.students}</div>
    </div>
  );
};

export default Card;

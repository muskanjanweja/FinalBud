import Progressbar from "./Progress_Bar";

function InternHome() {
  return (
    <div className="Progress">
      <h2>Progress Bar</h2>
      <Progressbar bgcolor="orange" progress="30" height={30} />
    </div>
  );
}

export default InternHome;

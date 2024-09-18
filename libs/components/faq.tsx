const FAQ = ({ Q, A, T }: { Q: string; A: string; T: string }) => {
  return (
    <div>
      <h2 style={{ fontSize: "20px" }}>{Q}</h2>
      <p>A: {A}</p>
      <p>T: {T}</p>
    </div>
  );
};

export default FAQ;

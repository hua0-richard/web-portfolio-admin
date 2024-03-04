export function EditArea({ obj }: { obj: object }) {
  return (
    <div
      style={{
        minHeight: "300px",
        minWidth: "60px",
        backgroundColor: "red",
      }}
    >
      {Object.entries(obj).map(([key, value]) => {
        key !== "_id" ? (
          <div>
            <div>{key}</div>
            <textarea>{value}</textarea>
          </div>
        ) : (
          <>null</>
        );
      })}
    </div>
  );
}

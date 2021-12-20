import Editor from "../components/Editor";

export default function addBlog() {
  return (
    <>
      <div
        className="backDrop"
        style={{
          overflow: "auto",
          backgroundColor: "#EDEDED",
          borderRadius: "28px",
          width: "70%",
          height: "80vh",
          margin: "auto",
          display: "flex",
          // flexDirection: "column",
          transform: 'translateY(13%)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <style jsx global>{`
          body {
            background-color: #1f77a9;
          }
        `}</style>
        <div style={{
          width:'80%',
          height:'80%',
          margin:'auto',
        }}>
          <Editor placeholder="Add blog content!" />
        </div>
      </div>
      <svg
        width="40vh"
        height="40vh"
        viewBox="0 0 588 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-1"
        }}
      >
        <path
          transform="translate(0,10)"
          d="M405.688 70C509.188 19 458.5 45.5 588.188 0V569.5H0C0 530.833 4.8961 478.274 66.6878 442.5C104.688 420.5 276.167 422.167 319 394.5C388.833 372.333 309.188 149.5 405.688 70Z"
          fill="#51CA26"
        />
      </svg>
    </>
  );
}

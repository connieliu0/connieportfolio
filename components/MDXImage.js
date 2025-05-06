export default function MDXImage(props) {
    return (
      <img
        {...props}
        style={{
          display: "block",
          margin: "2em auto",
          maxWidth: "600px",
          borderRadius: "12px", // example
        }}
      />
    );
  }
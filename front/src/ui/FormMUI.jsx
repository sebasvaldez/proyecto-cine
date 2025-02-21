
export const FormMUI = ({children, ...props}) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        height: "80%",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        backgroundColor: "rgba(34, 29, 29, 0.8)",
      }}
        {...props}
    >
        {children}

    </form>
  );
};

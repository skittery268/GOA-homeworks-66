const Loader = ({ label = "Loading..." }) => (
    <div className="loader">
        <span className="spinner" />
        <p>{label}</p>
    </div>
)

export default Loader;

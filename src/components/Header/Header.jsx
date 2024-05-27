const Header = () => {
  return (
    <div className="container-fluid py-2 px-3 shadow-sm">
      <div className="row align-items-center">
        <div className="col">
          <h6 className="m-0">Rudra Transporter - Transporter</h6>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              🇦🇪
            </span>
            <select
              className="form-select text-capitalize"
              aria-label="Default select example"
            >
              <option value="united_arab_emirates" selected>
                united arab emirates
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-globe"></i>
            </span>
            <select
              className="form-select text-uppercase"
              aria-label="Default select example"
            >
              <option value="united_arab_emirates" selected>
                united arab emirates
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
